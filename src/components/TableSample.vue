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
        <tr v-for="sample in displaedSamples" :key="sample._id">
          <td>{{ sample.cod }}</td>
          <td class="inLaptop">{{ sample.familia }}</td>
          <td>{{ sample.nomeVulgar }}</td>
          <td class="inTablet">{{ sample.nomeCientifico }}</td>
          <td class="inDesktop">{{ sample.coletor }}</td>
          <td class="btnSample">
            <button><i class="fa-solid fa-caret-down"></i></button>
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
</template>
  
<script>
import { defineComponent } from "vue";
import Samples from "../services/samples.js";

export default defineComponent({
  name: "TableSample",
  props: {
    opcInput: {
      type: String,
      required: false,
    },
    searchInput: {
      type: String,
      required: false,
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
      page: 1,
      perPage: 30,
      pages: [],
      isPage: true,
      inLoading: true,
    };
  },
  mounted() {
    this.list('');
  },
  methods: {
    list(opc) {
      // if (opcShowSample == "Oa") {
      //   console.log("Exibir em ordem alfabética");
      // } else if (opcShowSample == "Ar") {
      //   console.log("Exibir os adicionados recentemente");
      // } else if (opcShowSample == "Ma") {
      //   console.log("Exibir os mais antigos");
      // } else if (opcShowSample == "all") {
      //   console.log("Está exibindo todos");
      //   this.listAll();
      // }

      if (opc == "cod") {
        console.log("passou aqui");
        this.listCod(this.searchInput);
      } else if (opc == "familia") {
        // Listar a familia buscada
      } else if (opc == "nomeVulgar") {
        // Listar o nome vulgar buscado
      } else if (opc == "nomeCientifico") {
        // Listar o nome cientifico buscado
      } else {
        this.listAll();
      }
    },
    listAll() {
      Samples.findAll().then((response) => {
        this.inLoading = false;
        this.samples = response.data;
      });
    },
    listCod(codSearch) {
      Samples.findAll().then((response) => {
        this.samples = response.data;
        console.log(this.samples[1]);
      });
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
      if (this.opcInput == "cod"){
        console.log('vai exibir com opc');
      }else if(this.opcInput == "familia"){
        console.log('vai exibir com familia');
      }
      return this.paginate(this.samples);
    },
  },
  watch: {
    samples() {
      this.setSanples();
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
  