<template>
  <header>
    <Logo />
    <MenuSandwich :isHome="false" :isAbout="true" :isLogin="false" />
  </header>
  <Content>
    <h1>Sobre a xiloteca</h1>
  </Content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuSandwich from "@/components/Navbar/MenuSandwich.vue";
import Logo from "@/components/Titles/Logo.vue";
import Content from "@/components/Content.vue";

export default defineComponent({
  name: "AboutView",
  components: { MenuSandwich, Logo, Content },
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
</style>