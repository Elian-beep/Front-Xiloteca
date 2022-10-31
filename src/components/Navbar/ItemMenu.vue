<template>
  <li>
    <i :class="icon" ></i>
    <button>{{title}}</button>
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
    }
  }
});
</script>
  
<script>
</script>