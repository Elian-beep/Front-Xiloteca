<template>
  <NavBar />
  <!-- <header> -->
  <!-- <MenuSandwich
      @block-scroll="sendBlockScroll"
      :isHome="true"
      :isAbout="false"
    /> -->
  <!-- LOGIN: :isLogin="false" -->
  <!-- </header> -->
  <section class="container" :class="{ blockScroll: blockScroll }">
    <Content>
      <MainTitle text="Filtrar Dados" />
      <section class="area-formFilter">
        <FormFilter
          @send-opc-input="getOpcInput"
          @send-search-input="getSearchInput"
          @list-all="getListAll"
        />
      </section>
      <section class="area-table">
        <SubTitle text="Amostras" />
        <TableSample
          @blockScroll="sendBlockScroll"
          :opcInput="opcInput"
          :searchInput="searchInput"
          :allSamples="listAll"
        />
      </section>
    </Content>
  </section>
  <Footer :menuOpen="blockScroll" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NavBar from "@/components/Navbar/NavBar.vue";
import Content from "@/components/ContentsAiners/Container.vue";
import MainTitle from "@/components/Titles/MainTitle.vue";
import FormFilter from "@/components/Form/FormFilter.vue";
import SubTitle from "@/components/Titles/SubTitle.vue";
import TableSample from "@/components/Form/TableSample.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    // MenuSandwich,
    NavBar,
    Content,
    MainTitle,
    FormFilter,
    SubTitle,
    TableSample,
    Footer,
  },
  data() {
    return {
      blockScroll: false,
      opcInput: "",
      searchInput: "",
      listAll: false,
    };
  },
  methods: {
    sendBlockScroll(isOpen: boolean) {
      console.log(`Block scroll: ${isOpen}`);
      this.blockScroll = isOpen;
    },
    getOpcInput(opcInput: string) {
      this.listAll = false;
      this.opcInput = opcInput;
    },
    getSearchInput(searchInput: string) {
      this.listAll = false;
      this.searchInput = searchInput;
    },
    getListAll(newListAll: boolean) {
      this.listAll = newListAll;
    },
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

  .container {
    max-width: 1500px;
    margin: 0 auto;
  }

  .area-formFilter {
    margin-top: 48px;
  }
}
</style>
