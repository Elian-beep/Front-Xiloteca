<template>
  <main>
    <slot></slot>
  </main>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContainerMain",
});
</script>
  
<style scoped>
main{
    height: 1008px;
    width: 100vw;
    padding: 16px 24px;
}
</style>
  