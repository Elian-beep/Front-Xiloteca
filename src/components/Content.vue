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
    /* height: 1008px;
    max-height: 1008px; */
    width: 100vw;
    padding: 16px 24px;
}

@media screen and (min-width: 481px){
  /* TABLET */
  main{
    width: 100%;
    padding: 24px 40px;
  }
}

@media screen and (min-width: 769px){
  /* LAPTOP */
  main{
    padding: 32px 80px;
    /* background: blue; */
  }

  main::-webkit-scrollbar {
    background: #999999;
    width: 4px;
  }

  main::-webkit-scrollbar-thumb{
    background: #213140;
  }
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */
  main{
    padding: 48px 96px;
    /* background: green; */
  }

  main::-webkit-scrollbar {
    width: 6px;
  }
}
</style>
  