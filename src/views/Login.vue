<template>
  <header>
    <!-- <Logo :isVisible="false" class="logo" /> -->
    <!-- <MenuSandwich :isHome="false" :isAbout="false" :isLogin="true" /> -->
    <router-link to="/" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Voltar</router-link>
    <AlertTemp :showAlert="receivedOpenAlertTemp" />
  </header>
  <ContentLogin>
    <LogoSX :is-visible="true" />
    <FormLogin @open-modals="whyModal" />
    <ModalContainer @closed-modal="closeModal" :showModal="showMInsert" mainTitle="Cadastrar">
      <FormNewUser @closeModal="closeModal" @openAlertTemp="openAlertTemp" />
    </ModalContainer>
    <ModalContainer @closed-modal="closeModal" :showModal="showMPass" mainTitle="Esqueceu sua senha de acesso?">
      <FormNewPass @closeModal="closeModal" />
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
import FormNewPass from "@/components/Form/FormNewPass.vue";
import AlertTemp from "../components/Alerts/alertTemp.vue";

export default defineComponent({
  name: "LoginView",
  components: { ContentLogin, LogoSX, FormLogin, ModalContainer, FormNewUser, FormNewPass, AlertTemp },
  data(){
    return{
      showMInsert: false,
      showMPass: false,
      receivedOpenAlertTemp: false,
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
        this.showMPass = false;
      }
    },
    openAlertTemp(openAlertTemp: boolean){
      this.receivedOpenAlertTemp = openAlertTemp;
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