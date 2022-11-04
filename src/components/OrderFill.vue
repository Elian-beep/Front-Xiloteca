<template>
  <select name="select">
    <option value="" selected>
      <div>Ordenar por</div>
    </option>
    <option value="Oa">Ordem alfabética (Nome Vulgar)</option>
    <option value="Ar">Adicionados recentemente</option>
    <option value="Ma">Mais Antigos</option>
  </select>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "OrderFill",
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

@media screen and (min-width: 481px){
  /* TABLET */
  select{
    width: 26%;
  }
}
</style>