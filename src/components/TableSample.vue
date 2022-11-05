<template>
  <table class="tableSample">
    <thead>
      <tr>
        <th>Nome Vulgar</th>
        <th class="inTablet">Nome Científico</th>
        <th class="inLaptop">Família</th>
        <th class="inDesktop">Coletor</th>
        <th>Ver mais</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="sample of samples" :key="sample._id">
        <td>{{ sample.nomeVulgar }}</td>
        <td class="inTablet">{{ sample.nomeCientifico }}</td>
        <td class="inLaptop">{{ sample.familia }}</td>
        <td class="inDesktop">{{ sample.coletor }}</td>
        <td>
          <button><i class="fa-solid fa-caret-down"></i></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
  
<script>
import { defineComponent } from "vue";
import Samples from "../services/samples.js";

export default defineComponent({
  name: "TableSample",
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
    };
  },
  mounted() {
    this.list("all");
  },
  methods: {
    list(opcShowSample) {
      if (opcShowSample == "Oa") {
        console.log("Exibir em ordem alfabética");
      } else if (opcShowSample == "Ar") {
        console.log("Exibir os adicionados recentemente");
      } else if (opcShowSample == "Ma") {
        console.log("Exibir os mais antigos");
      } else if (opcShowSample == "all"){
        console.log("Está exibindo todos");
        this.listAll();
      }
    },
    listAll() {
      Samples.findAll().then((response) => {
        this.samples = response.data;
      });
    },
  },
});
</script>

<style>
.tableSample {
  width: 100%;
  border-spacing: 0;
  border-collapse: collapse;
}

.tableSample thead {
  height: 55px;
  font-weight: 300;
  font-size: 16px;
  color: #213140;
}

.tableSample tbody {
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  color: #213140;
}

.tableSample tbody tr {
  height: 40px;
  border-top: 1px solid rgba(33, 49, 64, 0.5);
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

@media screen and (min-width: 481px) {
  /* TABLET */
  .inTablet {
    display: table-cell;
  }
}

@media screen and (min-width: 769px) {
  /* LAPTOP */
  .inLaptop {
    display: table-cell;
  }
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */
  .inDesktop {
    display: table-cell;
  }
}
</style>
  