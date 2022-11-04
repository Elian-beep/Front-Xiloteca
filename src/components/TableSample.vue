<template>
  <table class="tableSample">
    <thead>
      <tr>
        <th>Nome Vulgar</th>
        <th>Ver mais</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>Sabia Amarelo de Crevo</td>
        <td>
          <button><i class="fa-solid fa-caret-down"></i></button>
        </td>
      </tr>
      <tr>
        <td>Angelim Rajado</td>
        <td>
          <button><i class="fa-solid fa-caret-down"></i></button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableSample",
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

.tableSample tbody tr{
    height: 40px;
    border-top: 1px solid rgba(33, 49, 64, 0.5);
}

.tableSample tbody tr button{
    border: none;
    background: none;
    font-size: 16px;
}

.tableSample tbody tr button:hover{
    border: .5px solid #213140;
    padding: 2px 4px;
    border-radius: 2px;
    cursor: pointer;
}

.tableSample tbody tr:hover>td{
    background: rgba(33, 49, 64, 0.75);
    cursor: pointer;
    color: #FAFAFA;
}

.tableSample tbody tr:nth-child(even){
    background: #F3F3F3;
}


</style>
  