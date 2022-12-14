<template>
  <header>
    <!-- <Logo :isVisible="false" class="logo" /> -->
    <!-- <MenuSandwich :isHome="false" :isAbout="false" :isLogin="true" /> -->
    <router-link to="/" class="btn-back"><i class="fa-solid fa-arrow-left"></i> Voltar</router-link>
  </header>
  <ContentLogin>
    <LogoSX :is-visible="true" />
    <FormLogin />
  </ContentLogin>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LogoSX from "@/components/Titles/LogoSX.vue";
import ContentLogin from "@/components/ContentsAiners/ContentLogin.vue";
import FormLogin from "@/components/Form/FormLogin.vue";

export default defineComponent({
  name: "LoginView",
  components: { ContentLogin, LogoSX, FormLogin },
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