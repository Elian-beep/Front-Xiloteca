<template>
  <select name="select">
    <option value="" selected>
      <div>Ordenar por</div>
    </option>
    <option value="Oa">
      <button @click="sendOrder('Oa')">Ordem alfabética (Nome Vulgar)</button>
    </option>
    <option @click="sendOrder('Ar')" value="Ar">
      Adicionados recentemente
    </option>
    <option @click="sendOrder('Ma')" value="Ma">Mais Antigos</option>
  </select>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderFill",
  emits: ["chosenOrder"],
  methods: {
    sendOrder(order: string) {
      console.log(`Ordem escolhida: ${order}`);
      this.$emit("chosenOrder", order);
    },
  },
});
</script>
  
<style scoped>
select {
  height: 33px;
  width: 35%;
  background: #fafafa;
  border-radius: 2px;
  border: 0.5px solid #213140;
  padding: 8px;

  font-weight: 400;
  font-size: 14px;
}

@media screen and (min-width: 481px) {
  /* TABLET */
  select {
    width: 26%;
  }
}

@media screen and (min-width: 769px) {
  /* LAPTOP */
  select {
    width: 35%;
    max-width: 120px;
  }
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */
}
</style>