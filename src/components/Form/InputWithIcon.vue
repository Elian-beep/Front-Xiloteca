<template>
  <div class="area-input">
    <i :class="icon"></i>
    <input :type="typeInput" :placeholder="placeholderInput" />
    <!-- <i class=""></i> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputWithIcon",
  props: {
    typeInput: {
      type: String,
      required: true,
    },
    placeholderInput: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
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

i {
  position: absolute;
  left: 16px;
}

input {
  width: 100%;
  padding: 8px 16px 8px 40px;
  background: none;
  border: none;
}

@media screen and (min-width: 769px){
  /* LAPTOP */
  .area-input{
    font-size: 16px;  
  }

  i{
    left: 20px;
  }

  input{
    padding: 12px 20px 12px 56px;
  }
}

@media screen and (min-width: 1024px){
  /* DESKTOP */
  .area-input{
    font-size: 18px;
  }
}
</style>