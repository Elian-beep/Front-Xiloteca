<template>
  <header>
    <Logo :isVisible="false" class="logo" />
    <MenuSandwich :isHome="false" :isAbout="false" :isLogin="true" />
  </header>
  <Content>
    <LogoSX :is-visible="true" />
    <MainTitle text="Sobre a Xiloteca" />
  </Content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuSandwich from "@/components/Navbar/MenuSandwich.vue";
import LogoSX from "@/components/Titles/LogoSX.vue";
import Content from "@/components/ContentsAiners/Container.vue";
import MainTitle from "@/components/Titles/MainTitle.vue";

export default defineComponent({
  name: "LoginView",
  components: { MenuSandwich, Content, LogoSX, MainTitle },
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
  header{
    justify-content: space-around;
  }
}
</style>