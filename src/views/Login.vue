<template>
  <header>
    <!-- <Logo :isVisible="false" class="logo" /> -->
    <!-- <MenuSandwich :isHome="false" :isAbout="false" :isLogin="true" /> -->
    <router-link to="/" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Voltar</router-link>
  </header>
  <ContentLogin>
    <LogoSX :is-visible="true" />
    <FormLogin @open-modals="whyModal" />
    <ModalContainer @closed-modal="closeModal" :showModal="showMInsert" mainTitle="Cadastrar">
      <FormNewUser @closeModal="closeModal" />
    </ModalContainer>
    <ModalContainer @closed-modal="closeModal" :showModal="showMPass" mainTitle="Esqueceu sua senha de acesso?">
      formulario de nova senha
    </ModalContainer>
  </ContentLogin>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoSX from "@/components/Titles/LogoSX.vue";
import ContentLogin from "@/components/ContentsAiners/ContentLogin.vue";
import FormLogin from "@/components/Form/FormLogin.vue";
import ModalContainer from "@/components/Modals/Modal.vue";
import FormNewUser from "@/components/Form/FormNewUser.vue";

export default defineComponent({
  name: "LoginView",
  components: { ContentLogin, LogoSX, FormLogin, ModalContainer, FormNewUser },
  data(){
    return{
      showMInsert: false,
      showMPass: false
    }
  },
  methods: {
    whyModal(modal: string){
      if (modal == 'mInsert') {
        this.showMInsert = true;
      }else if(modal == 'mPass'){
        this.showMPass = true;
      }
    },
    closeModal(closeModal: boolean){
      if (!closeModal) {
        this.showMInsert = false;
        this.showMPass = false
      }
    }
  }
});
</script>

<style scoped>

header {
  height: 60px;
  background: #f3f3f3;
  padding: 12px;
  display: flex;
  justify-content: left;
}

.btn-back{
  border: 1px solid #213140;
  color: #213140;
  background: none;
  padding: 8px;
  text-decoration: none;
}

</style>