<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body,
html {
  font-family: "Inter", sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0); /*pode ser transparent também*/
}

@media screen and (min-width: 769px) {
  /* LAPTOP */
  body::-webkit-scrollbar {
    background: #999999;
    width: 4px;
    border-radius: 2px;
  }

  body::-webkit-scrollbar-thumb {
    background: #213140;
    border-radius: 2px;
  }
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */

  body::-webkit-scrollbar {
    width: 10px;
  }
}
</style>
