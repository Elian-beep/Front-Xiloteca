<template>
  <div class="area-input">
    <input :v-model="vmodel" :type="typeInput" :placeholder="placeholderInput" />
    <!-- <i class=""></i> -->
  </div>
</template>
  
  <script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputNoIcon",
  props: {
    typeInput: {
      type: String,
      required: true,
    },
    vmodel: {
      type: String,
      required: false,
    },
    placeholderInput: {
      type: String,
      required: true,
    }
  },
});
</script>
  
  <style scoped>
.area-input {
  position: relative;
  display: flex;
  align-items: center;
  border: 0.5px solid #213140;
  border-radius: 2px;
}

input {
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
}

@media screen and (min-width: 769px) {
  /* LAPTOP */
  .area-input {
    font-size: 16px;
  }
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */
  .area-input {
    font-size: 18px;
  }
}
</style>