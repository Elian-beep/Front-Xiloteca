<template>
  <!-- ------------------------------- LOOP DE LOADING -->
  <div class="loading-area" :class="{ 'close-loading-area': tableIsOpen }">
    <CircleLoading />
  </div>

  <!-- ------------------------------- TABELA DAS AMOSTRAS -->
  <div class="table-area" :class="{ show: tableIsOpen }">
    <table class="tableSample">
      <thead>
        <tr>
          <th>Cod</th>
          <th class="inLaptop"><span>Família</span></th>
          <th>Nome Científico</th>
          <th class="inTablet">Nome vulgar</th>
          <th class="inDesktop">Coletor</th>
          <th class="inDesktop">Determinador</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sample of SlicedSamples" :key="sample._id">
          <td>{{ sample.cod }}</td>
          <td class="inLaptop">{{ sample.familia }}</td>
          <td @click="openModalSample(sample)" class="link-modal" >{{ sample.nomeCientifico }}</td>
          <td class="inTablet">
            {{ sample.nomeVulgar }}
          </td>
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
</template>
  
<script>
import { defineComponent } from "vue";
import Samples from "../../services/samples.js";
import CircleLoading from "../Loadings/Loading.vue";
import ModalSample from "../Modals/ModalSample.vue";
import SearchSamples from "../../services/searchSamples.js";

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
      dataOpcInput: "",
      dataSearchInput: ""
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
  },
  methods: {
    listAll() {
      Samples.findAll().then((response) => {
        this.samples = response.data;
        this.cloneSamples = this.samples;
        this.tableIsOpen = true;
      });
    },
    search(){
      this.samples = this.cloneSamples;
      this.samples = SearchSamples.search(this.dataSearchInput, this.samples, this.opcInput);
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
  },
  watch: {
    opcInput(newOpcInput){
      this.dataOpcInput = newOpcInput;
      this.search();
    },
    searchInput(newSearchInput){
      this.dataSearchInput = newSearchInput;
      this.search();
    },
  }
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
  margin: 150px auto;
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

  .loading-area{
    margin: 100px auto;
  }

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
  