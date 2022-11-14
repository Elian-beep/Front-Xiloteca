<template>
  <header>
    <Logo :isVisible="false" class="logo" />
    <MenuSandwich
      @block-scroll="sendBlockScroll"
      :isHome="true"
      :isAbout="false"
      :isLogin="false"
    />
  </header>
  <section class="container" :class="{ blockScroll: blockScroll }">
    <Content>
      <MainTitle text="Filtrar Dados" />
      <section class="area-formFilter">
        <FormFilter @send-opc-input="getOpcInput" @send-search-input="getSearchInput" />
      </section>
      <section class="area-table">
        <SubTitle text="Amostras" />
        <TableSample :opcInput="opcInput" :searchInput="searchInput" />
      </section>
    </Content>
  </section>
  <Footer :menuOpen="blockScroll" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuSandwich from "@/components/Navbar/MenuSandwich.vue";
import Content from "@/components/Content.vue";
import MainTitle from "@/components/Titles/MainTitle.vue";
import Logo from "@/components/Titles/Logo.vue";
import FormFilter from "@/components/FormFilter.vue";
import SubTitle from "@/components/Titles/SubTitle.vue";
import TableSample from "@/components/TableSample.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    MenuSandwich,
    Content,
    MainTitle,
    Logo,
    FormFilter,
    SubTitle,
    TableSample,
    Footer,
  },
  data() {
    return {
      blockScroll: false,
      opcInput: '',
      searchInput: ''
    };
  },
  methods: {
    sendBlockScroll(isOpen: boolean) {
      console.log(`Menu aberto: ${isOpen}`);
      this.blockScroll = isOpen;
    },
    getOpcInput(opcInput: string){
      this.opcInput = opcInput;
    },
    getSearchInput(searchInput: string){
      this.searchInput = searchInput;
    }
  },
});
</script>

<style scoped>
.container {
  position: static;
}

.container.blockScroll {
  position: fixed;
}
.area-formFilter {
  margin-top: 12px;
  width: 100%;
}

.area-table {
  margin-top: 16px;
}

@media screen and (min-width: 481px) {
  /* TABLET */

  .area-formFilter {
    margin-top: 22px;
  }

  .area-table {
    margin-top: 24px;
  }
}

@media screen and (min-width: 769px) {
  /* LAPTOP */
  header {
    display: flex;
    justify-content: space-between;
    background: #fafafa;
    border-bottom: 0.5px solid #213140;
  }

  .area-formFilter {
    margin-top: 32px;
  }
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */

  header {
    justify-content: space-around;
  }

  .area-formFilter {
    margin-top: 48px;
  }
}
</style>
