<template>
  <header>
    <Logo :isVisible="false" class="logo" />
    <MenuSandwich :isHome="true" :isAbout="false" :isLogin="false" />
  </header>
  <Content>
    <MainTitle text="Filtrar Dados" />
    <section class="area-formFilter">
      <FormFilter />
    </section>
  </Content>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuSandwich from "@/components/Navbar/MenuSandwich.vue";
import Content from "@/components/Content.vue";
import MainTitle from "@/components/Titles/MainTitle.vue";
import Logo from "@/components/Titles/Logo.vue";
import FormFilter from "@/components/FormFilter.vue";


export default defineComponent({
  name: "HomeView",
  components: { MenuSandwich, Content, MainTitle, Logo, FormFilter },
});
</script>

<style scoped>

.area-formFilter{
  margin-top: 12px;
  width: 100%;
}

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