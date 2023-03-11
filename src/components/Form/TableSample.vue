<template>
  <!-- ------------------------------- LOOP DE LOADING -->
  <div class="loading-area" :class="{ 'close-loading-area': tableIsOpen }">
    <CircleLoading />
    carregando...
  </div>

  <!-- ------------------------------- TABELA DAS AMOSTRAS -->
  <div class="table-area" :class="{ show: tableIsOpen }">
    <table class="tableSample">
      <thead>
        <tr>
          <th>Código</th>
          <th class="inLaptop"><span>Família</span></th>
          <th>Nome vulgar</th>
          <th class="inTablet">Nome Científico</th>
          <th class="inDesktop">Coletor</th>
          <th class="inDesktop">Determinador</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sample of SlicedSamples" :key="sample._id">
          <td>{{ sample.cod }}</td>
          <td class="inLaptop">{{ sample.familia }}</td>
          <td @click="openModalSample(sample)" class="link-modal">
            {{ sample.nomeVulgar }}
          </td>
          <td class="inTablet">{{ sample.nomeCientifico }}</td>
          <td class="inDesktop">{{ sample.coletor }}</td>
          <td class="inDesktop">{{ sample.determinador }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- ------------------------------- PAGINAÇÃO DA TABELA -->
  <div class="pag-area" :class="{ show: tableIsOpen }">
    <button class="pag-btn-action" @click="previousPage">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <div class="pag-numbers">
      <span
        v-for="page in pagesToShow"
        :key="page"
        @click="goToPage(page)"
        class="pag-number"
        :class="{ 'current-page': currentPage === page }"
        >{{ page }}</span
      >
    </div>
    <button class="pag-btn-action" @click="nextPage">
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </div>

  <ModalSample
    @closeModal="closedModal"
    :openModal="openModal"
    :sample="sample"
  />

  <!-- <div class="table">
    <table class="tableSample">
      <thead>
        <tr>
          <th>Código</th>
          <th class="inLaptop">Família</th>
          <th>Nome Vulgar</th>
          <th class="inTablet">Nome Científico</th>
          <th class="inDesktop">Coletor</th>
          <th class="btnSample">Ver mais</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="sample in displaedSamples" :key="sample._id">
          <td>{{ sample.cod }}</td>
          <td class="inLaptop">{{ sample.familia }}</td>
          <td>{{ sample.nomeVulgar }}</td>
          <td class="inTablet">{{ sample.nomeCientifico }}</td>
          <td class="inDesktop">{{ sample.coletor }}</td>
          <td class="btnSample">
            <button @click="openModal(sample)">
              <i class="fa-solid fa-caret-down"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="loading" :class="{ stopLoading: inLoading }">
      <div class="c-loader"></div>
    </div>
  </div> -->

  <!-- <div class="area-pagination">
    <button class="pag-btnArrow" type="button" v-if="page != 1" @click="page--">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <button
      v-for="pageNumber in pages.slice(page - 1, page + 6)"
      :key="pageNumber"
      class="isPage"
      type="button"
      @click="page = pageNumber"
    >
      {{ pageNumber }}
    </button>
    <button
      class="pag-btnArrow"
      type="button"
      v-if="page < pages.length"
      @click="page++"
    >
      <i class="fa-solid fa-chevron-right"></i>
    </button>
  </div> -->

  <!-- <ModalContainer
    @closedModal="closedModal"
    :mainTitle="titleForModal"
    :showModal="showModal"
  >
    <div class="modal-subHe">
      <img
        src="@/assets/sampleDefault.svg"
        alt="Imagem ilustrativa de amostras cadastradas"
      />
      <div class="area-mainTitles">
        <p><span>Nome científico: </span>{{ sample.nomeCientifico }}</p>
        <p><span>Família: </span>{{ sample.familia }}</p>
        <p><span>Data de coleta: </span>{{ sample.dataColeta }}</p>
      </div>
    </div>
    <div class="area-info">
      <p><span>Descrição: </span>{{ sample.desc }}</p>
      <p><span>Código: </span>{{ sample.cod }}</p>
      <p><span>Lâmina: </span>{{ sample.lamina }}</p>
      <p><span>Herbrário: </span>{{ sample.herb }}</p>
      <p><span>Coletor: </span>{{ sample.coletor }}</p>
      <p><span>Procedência: </span>{{ sample.procedencia }}</p>
      <p><span>Determinador: </span>{{ sample.determinador }}</p>
      <p><span>Remetente: </span>{{ sample.remetente }}</p>
      <p><span>Obs: </span>{{ sample.obs }}</p>
    </div>
  </ModalContainer> -->
</template>
  
<script>
import { defineComponent } from "vue";
import Samples from "../../services/samples.js";
import CircleLoading from "../Loadings/Loading.vue";
import ModalSample from "../Modals/ModalSample.vue";

export default defineComponent({
  name: "TableSample",
  components: { ModalSample, CircleLoading },
  emits: ["blockScroll"],
  props: {
    opcInput: {
      type: String,
      required: true,
    },
    searchInput: {
      type: String,
      required: true,
    },
    allSamples: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      sample: {
        id: "",
        cod: "",
        lamina: "",
        herb: "",
        familia: "",
        nomeCientifico: "",
        nomeVulgar: "",
        procedencia: "",
        coletor: "",
        dataColeta: "",
        determinador: "",
        remetente: "",
        desc: "",
        obs: "",
      },
      samples: [],
      cloneSamples: [],
      currentPage: 1,
      samplesForPage: 70,
      openModal: false,
      tableIsOpen: false,
      // newSamples: [],
      // oldOpc: "",
      // textSearch: "",
      // page: 1,
      // perPage: 100,
      // pages: [],
      // isPage: true,
      // inLoading: true,
      // showModal: false, //Deve ser false
      // titleForModal: "",
      // showAllSamples: true,
    };
  },
  mounted() {
    this.listAll();
  },
  computed: {
    SlicedSamples() {
      return this.samples.slice(
        (this.currentPage - 1) * this.samplesForPage,
        this.currentPage * this.samplesForPage
      );
    },
    totalPages() {
      return Math.ceil(this.samples.length / this.samplesForPage);
    },
    pagesToShow() {
      let pages = [];
      if (this.currentPage <= 3) {
        for (let i = 1; i <= 3; i++) {
          pages.push(i);
        }
        pages.push("..");
        pages.push(this.totalPages);
      } else if (this.currentPage >= this.totalPages - 2) {
        pages.push(1);
        pages.push("..");
        for (let i = this.totalPages - 2; i <= this.totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push("..");
        pages.push(this.currentPage - 1);
        pages.push(this.currentPage);
        pages.push(this.currentPage + 1);
        pages.push("..");
        pages.push(this.totalPages);
      }
      return pages;
    },

    // displaedSamples() {
    //   return this.paginate(this.samples);
    // },
  },
  methods: {
    listAll() {
      Samples.findAll().then((response) => {
        this.samples = response.data;
        this.cloneSamples = this.samples;
        this.tableIsOpen = true;
      });
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    goToPage(page) {
      if (page != "..") this.currentPage = page;
    },
    openModalSample(sample) {
      this.sample = sample;
      this.openModal = true;
    },
    closedModal(closedModal) {
      this.openModal = closedModal;
    },

    // list(opc, text) {
    //   if (!this.showAllSamples && opc == "cod") {
    //     this.listCod(text);
    //   } else if (!this.showAllSamples && opc == "familia") {
    //     this.listFamilia(text);
    //   } else if (!this.showAllSamples && opc == "nomeVulgar") {
    //     this.listNV(text);
    //   } else if (!this.showAllSamples && opc == "nomeCientifico") {
    //     this.listNC(text);
    //   } else if (this.showAllSamples){
    //     this.listAll();
    //   }
    // },
    // listAll() {
    //   this.pages = [];
    //   Samples.findAll().then((response) => {
    //     this.inLoading = false;
    //     this.samples = response.data;
    //   });
    // },
    // listCod(text) {
    //   this.pages = [];
    //   text = text.toUpperCase();
    //   Samples.findCod(text).then((response) => {
    //     this.samples = response.data;
    //     this.inLoading = false;
    //   });
    // },
    // listFamilia(text) {
    //   this.pages = [];
    //   Samples.findFamilia(text).then((response) => {
    //     this.samples = response.data;
    //     this.inLoading = false;
    //   });
    // },
    // listNV(text) {
    //   this.pages = [];
    //   Samples.findNV(text).then((response) => {
    //     this.samples = response.data;
    //     this.inLoading = false;
    //   });
    // },
    // listNC(text) {
    //   this.pages = [];
    //   Samples.findNC(text).then((response) => {
    //     this.samples = response.data;
    //     this.inLoading = false;
    //   });
    // },
    // openModal(sample) {
    //   this.titleForModal = sample.nomeVulgar;
    //   this.sample = sample;
    //   this.showModal = true;
    //   this.$emit("blockScroll", this.showModal);
    // },
    // closedModal(closedModal) {
    //   this.showModal = closedModal;
    //   this.$emit("blockScroll", this.showModal);
    // },
    // paginate(samples) {
    //   let page = this.page;
    //   let perPage = this.perPage;
    //   let from = page * perPage - perPage;
    //   let to = page * perPage;
    //   console.log(`Página na tabela: ${page}`);
    //   return samples.slice(from, to);
    // },
    // setSanples() {
    //   let numberOfpages = Math.ceil(this.samples.length / this.perPage);
    //   for (let i = 1; i <= numberOfpages; i++) {
    //     this.pages.push(i);
    //   }
    // },
  },
  watch: {
    // samples() {
    //   this.setSanples();
    // },
    // opcInput(opc) {
    //   this.showAllSamples = false;
    //   this.list(opc, this.searchInput);
    // },
    // searchInput(text) {
    //   this.showAllSamples = false;
    //   this.list(this.opcInput, text);
    // },
    // allSamples(isListAll) {
    //   if (isListAll) {
    //     this.showAllSamples = isListAll;
    //     this.list("", "");
    //   } else {
    //     this.showAllSamples = false;
    //   }
    // },
  },
});
</script>

<style scoped>
/* TABELA */

.inTablet,
.inLaptop,
.inDesktop {
  display: none;
}

.loading-area {
  /* padding-top: 200px; */
  display: block;
}

.loading-area.close-loading-area {
  display: none;
}

/* ----------- AREA DA TABELA DE AMOSTRAS */
.table-area {
  margin-top: 1em;
  max-height: 500px;
  overflow-y: scroll;
  display: none;
}

.table-area.show {
  display: block;
}

.tableSample {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
}

.tableSample thead {
  height: 55px;
  font-weight: 300;
  text-align: left;
  font-size: 15px;
  color: #213140;
}

.tableSample thead t > {
  padding-left: 10px;
}

.tableSample tbody {
  text-align: left;
  font-weight: 400;
  font-size: 11pt;
  color: #213140;
}

.tableSample tbody tr {
  height: 40px;
  border-top: 1px solid rgba(33, 49, 64, 0.5);
}

.link-modal {
  text-decoration: underline;
  font-style: italic;
}

.link-modal:hover {
  cursor: pointer;
}

.tableSample tbody tr td {
  transition: background-color 0.2s ease-in-out;
  padding-left: 10px;
  /* margin-left: 10px; */
}

.tableSample tbody tr:hover > td {
  background: rgba(33, 49, 64, 0.75);
  color: #fafafa;
}

.tableSample tbody tr:nth-child(even) {
  background: #f3f3f3;
}

.table-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  padding: 8px 10px 8px 8px;
}

.table-action {
  border: none;
  background: none;
  color: #213140;
}

/* PAGINAÇÃO */
.area-pagination {
  width: 100%;
  /* margin-top: 24px; */
  margin: 52px auto;
  display: flex;
  justify-content: center;
  gap: 10px;
}
.area-pagination .pag-btnArrow i {
  color: #130f26;
}

.area-pagination button {
  background: none;
  border: none;
  font-weight: 400;
  font-size: 14px;
  color: #999898;
}

.area-pagination .isPage:hover,
.isPage:focus {
  color: #213140;
  cursor: pointer;
}

/* ICONE DE LOADING */
.loading {
  display: none;
}

.loading.stopLoading {
  display: flex;
  margin-top: 70px;
  margin-bottom: 30vh; /*30vh*/
  justify-content: center;
  width: 100%;
}

.c-loader {
  animation: is-rotating 1s infinite;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: 6px solid #e5e5e5;
  border-top-color: #130f26;
}

/* MODAL INFO */
.modal-subHe {
  display: flex;
  gap: 18px;
  align-items: center;
  margin-top: 16px;
}

.modal-subHe img {
  width: 90px;
  height: 90px;
  border-radius: 2px;
}

.area-mainTitles p,
.area-info p {
  font-weight: 400;
  color: #213140;
}

.area-mainTitles p {
  font-size: 15px;
}

.area-mainTitles span,
.area-info span {
  font-weight: 600;
}

.area-info {
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.area-info p {
  font-size: 14px;
}

/* ----------- AREA DA PAGINAÇÃO DA TABELA */
.pag-area {
  /* background: green; */
  display: none;
  justify-content: center;
  gap: 15px;
  padding-top: 1.5em;
}
.pag-area.show {
  display: flex;
}

.pag-btn-action {
  border: none;
  background: none;
  font-size: 12pt;
  color: #213140;
}

.pag-numbers {
  display: flex;
  gap: 12px;
  font-size: 12pt;
  font-weight: 400;
  color: #999898;
}

.current-page {
  font-weight: bold;
  color: #213140;
  border-bottom: 1px solid;
}

@media screen and (min-width: 481px) {
  /* TABLET */
  .inTablet {
    display: table-cell;
  }

  /* ----------- AREA DA TABELA DE AMOSTRAS */
  .table-area {
    max-height: 550px;
  }

  .tableSample thead {
    height: 60px;
    font-size: 16px;
  }

  .tableSample thead t > {
    padding-left: 12px;
  }

  .tableSample tbody t > {
    padding-left: 12px;
  }

  /* ----------- AREA DA PAGINAÇÃO DA TABELA */
  .pag-area {
    gap: 16px;
  }

  .pag-btn-action {
    font-size: 13pt;
  }

  .pag-numbers {
    gap: 14px;
    font-size: 13pt;
  }
}

@media screen and (min-width: 769px) {
  /* LAPTOP */
  .inLaptop {
    display: table-cell;
  }

  /* ----------- AREA DA PAGINAÇÃO DA TABELA */

  .pag-btn-action i {
    transition: color 0.2s ease-in-out;
  }

  .pag-btn-action:hover i {
    cursor: pointer;
    color: #999898;
  }

  .pag-number {
    transition: color 0.2s ease-in-out;
  }
  .pag-number:hover {
    color: rgba(33, 49, 64, 1);
    cursor: pointer;
  }
  
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */

  .inDesktop {
    display: table-cell;
  }

  .table-area {
    max-height: 900px;
  }
}
</style>
  