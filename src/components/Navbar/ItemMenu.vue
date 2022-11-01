<template>
  <li>
    <i :class="icon" ></i>
    <router-link :to="toHref" >{{title}}</router-link>
  </li>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemMenu",
  props: {
    icon: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    toHref: {
      type: String,
      required: true
    }
  }
});
</script>
  
<style scoped>

</style>