<template>
  <h2>{{text}}</h2>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainTitle",
  props: {
    text: {
        type: String,
        required: true
    }
  },
});
</script>
  
<style scoped>
h2 {
  font-weight: 600;
  font-size: 20px;
  color: #213140;
  text-align: center;
}
</style>