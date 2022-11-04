<template>
  <form @submit.prevent="">
    <div class="area-radios">
      <div class="area-opc">
        <input type="radio" value="cod" id="opcCod" name="opcFill" />
        <label for="opcCod">Código</label>
      </div>
      <div class="area-opc">
        <input type="radio" value="familia" id="opcFamilia" name="opcFill" />
        <label for="opcFamilia">Família</label>
      </div>
      <div class="area-opc">
        <input type="radio" value="nomeVulgar" id="opcNV" name="opcFill" />
        <label for="opcNV">Nome Vulgar</label>
      </div>
      <div class="area-opc">
        <input type="radio" value="nomeCientifico" id="opcNC" name="opcFill" />
        <label for="opcNC">Nome Científico</label>
      </div>
    </div>

    <div class="area-search">
      <input class="inptText" type="search" placeholder="Digite sua pesquisa" />
      <button class="btnSearch" type="submit">
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
      <OrderFill />
    </div>
  </form>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";
import OrderFill from "./OrderFill.vue";

export default defineComponent({
  name: "FormFill",
  components: { OrderFill },
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
  border-bottom: 0.5px solid #213140;
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

@media screen and (min-width: 481px) {
  /* TABLET */
  .area-opc input {
    width: 18px;
    height: 16px;
  }

  .area-opc label {
    font-size: 16px;
  }

  .area-search{
    justify-content: space-between;
    gap: 3%;
  }

  .inptText{
    width: 57%;
  }

  .btnSearch{
    width: 10%;
  }

}
</style>