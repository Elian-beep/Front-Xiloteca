<template>
  <div class="table">
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
        <tr
          v-for="sample in displaedSamples"
          :key="sample._id"
          @click="openModal(sample)"
        >
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
  </div>

  <div class="area-pagination">
    <button class="pag-btnArrow" type="button" v-if="page != 1" @click="page--">
      <i class="fa-solid fa-chevron-left"></i>
    </button>
    <button
      v-for="pageNumber in pages.slice(page - 1, page + 4)"
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
  </div>

  <ModalContainer
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
  </ModalContainer>
</template>
  
<script>
import { defineComponent } from "vue";
import Samples from "../services/samples.js";
import ModalContainer from "./Modals/Modal.vue";

export default defineComponent({
  name: "TableSample",
  components: { ModalContainer },
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
      newSamples: [],
      oldOpc: "",
      textSearch: "",
      page: 1,
      perPage: 30,
      pages: [],
      isPage: true,
      inLoading: true,
      showModal: false, //Deve ser false
      titleForModal: "",
    };
  },
  mounted() {
    this.list("");
  },
  methods: {
    list(opc, text) {
      if (opc == "cod") {
        this.listCod(text);
      } else if (opc == "familia") {
        this.listFamilia(text);
      } else if (opc == "nomeVulgar") {
        this.listNV(text);
      } else if (opc == "nomeCientifico") {
        this.listNC(text);
      } else {
        this.listAll();
      }
    },
    listAll() {
      this.pages = [];
      Samples.findAll().then((response) => {
        this.inLoading = false;
        this.samples = response.data;
      });
    },
    listCod(text) {
      this.pages = [];
      text = text.toUpperCase();
      Samples.findCod(text).then((response) => {
        this.samples = response.data;
        this.inLoading = false;
      });
    },
    listFamilia(text) {
      this.pages = [];
      Samples.findFamilia(text).then((response) => {
        this.samples = response.data;
        this.inLoading = false;
      });
      // text = text.toLowerCase();
      // Samples.findAll().then((response) => {
      //   this.samples = Object.freeze(response.data);
      //   for (this.sample of this.samples) {
      //     this.sample.familia = this.sample.familia.toLowerCase();
      //     if (this.sample.familia == text) {
      //       this.sample.familia =
      //       this.sample.familia[0].toUpperCase() +
      //         this.sample.familia.substring(1);
      //         this.newSamples.push(this.sample);
      //       }
      //   }
      //   this.samples = this.newSamples;
      //   this.newSamples = [];
      // });
    },
    listNV(text) {
      this.pages = [];
      Samples.findNV(text).then((response) => {
        this.samples = response.data;
        this.inLoading = false;
      });
    },
    listNC(text) {
      this.pages = [];
      Samples.findNC(text).then((response) => {
        this.samples = response.data;
        this.inLoading = false;
      });
    },
    openModal(sample) {
      this.titleForModal = sample.nomeVulgar;
      this.sample = sample;
      this.showModal = true;
      this.$emit("blockScroll", this.showModal);
    },
    closedModal(closedModal) {
      this.showModal = closedModal;
      this.$emit("blockScroll", this.showModal);
    },
    paginate(samples) {
      let page = this.page;
      let perPage = this.perPage;
      let from = page * perPage - perPage;
      let to = page * perPage;
      console.log(`Página na tabela: ${page}`);
      return samples.slice(from, to);
    },
    setSanples() {
      let numberOfpages = Math.ceil(this.samples.length / this.perPage);
      for (let i = 1; i <= numberOfpages; i++) {
        this.pages.push(i);
      }
    },
  },
  computed: {
    displaedSamples() {
      return this.paginate(this.samples);
    },
  },
  watch: {
    samples() {
      this.setSanples();
    },
    opcInput(opc) {
      this.list(opc, this.searchInput);
    },
    searchInput(text) {
      this.list(this.opcInput, text);
    },
  },
});
</script>

<style scoped>
.tableSample {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
}

.tableSample thead {
  height: 55px;
  font-weight: 300;
  text-align: left;
  font-size: 16px;
  color: #213140;
}

.tableSample thead tr th {
  padding-left: 10px;
}

.tableSample tbody {
  text-align: left;
  font-weight: 400;
  font-size: 14px;
  color: #213140;
}

.tableSample tbody tr {
  height: 40px;
  border-top: 1px solid rgba(33, 49, 64, 0.5);
}

.tableSample tbody tr td {
  padding-left: 10px;
  /* margin-left: 10px; */
}

.tableSample .btnSample {
  text-align: right;
  padding-right: 10px;
}

.tableSample tbody tr button {
  border: none;
  background: none;
  font-size: 16px;
}

.tableSample tbody tr button:hover {
  color: #fafafa;
  cursor: pointer;
}

.tableSample tbody tr:hover > td {
  background: rgba(33, 49, 64, 0.75);
  color: #fafafa;
}

.tableSample tbody tr:nth-child(even) {
  background: #f3f3f3;
}

.inTablet,
.inLaptop,
.inDesktop {
  display: none;
}

.area-pagination {
  width: 100%;
  margin-top: 24px;
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

.area-pagination .isPage:hover {
  color: #213140;
  cursor: pointer;
}

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

.modal-subHe {
  display: flex;
  gap: 18px;
  align-items: center;
  margin-top: 16px;
}

.modal-subHe img {
  width: 110px;
  height: 110px;
  border-radius: 2px;
}

.area-mainTitles p{
  font-size: 15px;
  font-weight: 400;
  color: #213140;
}

.area-mainTitles span{
  font-size: 16px;
  font-weight: 600;
}

.area-info{
  margin-top: 16px;
}

.area-info p{
  font-size: 14px;
  font-weight: 400;
  color: #213140;
}

.area-info span {
  font-weight: 600;
}

@keyframes is-rotating {
  to {
    transform: rotate(1turn);
  }
}

@media screen and (min-width: 481px) {
  /* TABLET */

  .inTablet {
    display: table-cell;
  }

  .area-pagination {
    margin-top: 28px;
  }

  .area-pagination button {
    font-size: 16px;
  }
}

@media screen and (min-width: 769px) {
  /* LAPTOP */

  .inLaptop {
    display: table-cell;
  }

  .area-pagination {
    margin-top: 40px;
    gap: 16px;
  }

  .area-pagination button {
    font-size: 18px;
  }
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */

  .inDesktop {
    display: table-cell;
  }

  .area-pagination {
    margin-top: 48px;
  }
}
</style>
  