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
    max-height: 1008px;
    overflow-y: scroll;
    width: 100vw;
    padding: 16px 24px;
}

@media screen and (min-width: 481px){
  /* TABLET */
  main{
    height: 100vh;
    width: 100%;
    padding: 24px 48px;
  }
}

@media screen and (min-width: 769px){
  /* LAPTOP */
  main{
    padding: 32px 56px;
  }
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */
  main{
    padding: 56px 96px;
  }
}
</style>
  