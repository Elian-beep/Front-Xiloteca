<template>
  <div class="areaBtnSandwich">
    <input type="checkbox" />
    <ul>
      <ItemMenu title="Início" icon="fa-solid fa-house" />
      <ItemMenu title="Sobre a Xiloteca" icon="fa-sharp fa-solid fa-circle-info" />
      <ItemMenu title="Fazer Login" icon="fa-solid fa-circle-user" />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemMenu from "./ItemMenu.vue";

export default defineComponent({
  name: "MenuSandwich",
  components: { ItemMenu }
});
</script>

<script>
</script>