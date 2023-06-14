<template>
  <form @submit.prevent="search">
    <div class="area-radios">
      <div class="area-opc">
        <input
          type="radio"
          required
          v-model="opcInput"
          value="cod"
          id="opcCod"
          name="opcFill"
        />
        <label for="opcCod">Código</label>
      </div>
      <div class="area-opc">
        <input
          type="radio"
          required
          v-model="opcInput"
          value="familia"
          id="opcFamilia"
          name="opcFill"
        />
        <label for="opcFamilia">Família</label>
      </div>
      <div class="area-opc">
        <input
          type="radio"
          required
          v-model="opcInput"
          value="nomeVulgar"
          id="opcNV"
          name="opcFill"
        />
        <label for="opcNV">Nome Vulgar</label>
      </div>
      <div class="area-opc">
        <input
          type="radio"
          required
          v-model="opcInput"
          value="nomeCientifico"
          id="opcNC"
          name="opcFill"
        />
        <label for="opcNC">Nome Científico</label>
      </div>
    </div>

    <div class="area-search">
      <input
        required
        class="inptText"
        v-model="searchInput"
        type="search"
        placeholder="Digite sua pesquisa"
      />
      <button class="btnSearch" type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <!-- <OrderFill /> -->
      <button type="button" class="btnListAll" @click="listAll">Listar todos</button>
    </div>
  </form>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormFill",
  emits: ["sendOpcInput", "sendSearchInput", "listAll"],
  data() {
    return {
      opcInput: "",
      searchInput: "",
      isListAll: false,
    };
  },
  methods: {
    search() {
      // console.log(`Pesquisar "${this.searchInput}" como "${this.opcInput}"`);
      this.$emit("sendOpcInput", this.opcInput);
      this.$emit("sendSearchInput", this.searchInput);
    },
    listAll() {
      this.isListAll = true;
      this.$emit("listAll", this.isListAll);
      this.isListAll = false;
    },
  },
});
</script>
  
<style scoped>
.area-radios {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.area-opc {
  display: flex;
  gap: 12px;
  width: 50%;
  margin-top: 12px;
}

.area-opc input {
  all: unset;
  height: 14px;
  width: 16px;
  border-radius: 2px;
  border: 0.5px solid #213140;
}

.area-opc input:checked {
  transition: 0.2s;
  background: #213140;
}

.area-opc label {
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  color: #213140;
}

.area-search {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 24px;
  justify-content: end;
}

.inptText {
  width: 80%;
  border: none;
  height: 33px;
  background: #f3f3f3;
  border: 0.5px solid #213140;
  border-radius: 2px;
  padding-left: 8px;
  outline: none;
}

.inptText::placeholder {
  font-weight: 300;
  font-size: 12px;
  color: rgba(33, 49, 64, 0.75);
}

.btnSearch {
  width: 15%;
  background: #213140;
  border-radius: 2px;
  font-weight: 400;
  font-size: 14px;
  color: #fafafa;
}

.btnListAll {
  height: 33px;
  width: 6rem;
  background: #fafafa;
  border-radius: 2px;
  border: 0.5px solid #213140;
  padding: 8px;
  font-weight: 400;
  font-size: 14px;
}

@media screen and (min-width: 481px) {
  /* TABLET */
  .area-opc input {
    width: 18px;
    height: 16px;
  }

  .area-opc label {
    font-size: 16px;
  }

  .area-search {
    justify-content: space-between;
    gap: .5rem;
  }

  .inptText {
    width: 57%;
    font-size: 14px;
  }

  .btnSearch {
    width: 10%;
  }
}

@media screen and (min-width: 769px) {
  /* LAPTOP */
  form {
    display: flex;
    justify-content: space-between;
  }

  .area-radios {
    width: 45%;
    max-width: 520px;
  }

  .area-search {
    width: 80%;
    max-width: 750px;
    gap: 10px;
    justify-content: end;
  }

  .inptText {
    width: 85%;
    font-size: 16px;
  }

  .area-opc input:hover, .btnSearch:hover, .btnListAll:hover{
    cursor: pointer;
  }

  .btnSearch {
    width: 10%;
    max-width: 40px;
  }
}

@media screen and (min-width: 1024px) {
  form {
    justify-content: space-evenly;
  }
  /* DESKTOP */
  .inptText::placeholder {
    font-size: 14px;
  }

  .area-opc label {
    font-size: 18px;
  }
}
</style>