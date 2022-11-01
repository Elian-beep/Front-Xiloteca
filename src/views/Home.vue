<template>
  <header>
    <MenuSandwich />
  </header>
  <Content>
    <MainTitle text="Filtrar Dados" />
  </Content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuSandwich from "@/components/Navbar/MenuSandwich.vue";
import Content from "@/components/Content.vue";
import MainTitle from "@/components/Titles/MainTitle.vue";

export default defineComponent({
  name: "HomeView",
  components: { MenuSandwich, Content, MainTitle },
});
</script>

<style scoped>
</style>