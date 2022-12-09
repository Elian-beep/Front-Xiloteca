<template>
  <header>
    <Logo :isVisible="false" class="logo" />
    <MenuSandwich :isHome="false" :isAbout="false" :isLogin="true" />
  </header>
    <ContentLogin>
      <LogoSX :is-visible="true" />
      <div>aaaaaaaaaa</div>
    </ContentLogin>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuSandwich from "@/components/Navbar/MenuSandwich.vue";
import Logo from "@/components/Titles/Logo.vue";
import LogoSX from "@/components/Titles/LogoSX.vue";
import Container from "@/components/ContentsAiners/Container.vue";
import ContentLogin from "@/components/ContentsAiners/ContentLogin.vue";

export default defineComponent({
  name: "LoginView",
  components: { MenuSandwich, ContentLogin, Logo, LogoSX },
});
</script>

<style scoped>
@media screen and (min-width: 769px) {
  /* LAPTOP */
  header {
    display: flex;
    justify-content: space-between;
    background: #fafafa;
    border-bottom: 0.5px solid #213140;
  }
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */
  header {
    justify-content: space-around;
  }
}
</style>