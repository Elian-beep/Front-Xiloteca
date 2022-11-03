<template>
  <header>
    <Logo :isVisible="false" />
    <MenuSandwich :isHome="false" :isAbout="true" :isLogin="false" />
  </header>
  <Content>
    <MainTitle text="Sobre a Xiloteca" />
  </Content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuSandwich from "@/components/Navbar/MenuSandwich.vue";
import Logo from "@/components/Titles/Logo.vue";
import Content from "@/components/Content.vue";
import MainTitle from "@/components/Titles/MainTitle.vue";

export default defineComponent({
  name: "AboutView",
  components: { MenuSandwich, Logo, Content, MainTitle },
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