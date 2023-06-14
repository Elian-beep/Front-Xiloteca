<template>
  <div class="area-logo" :class="{ isVisible: isVisible }">
    <h1>Xiloteca</h1>
    <span>Professor Narciso da Silva Cardoso</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LogoXiloteca",
  props: {
    isVisible: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style>
.area-logo {
  display: none;
}

.area-logo.isVisible {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.area-logo h1 {
  font-weight: 700;
  font-size: 28px;
  color: #213140;
  margin: 0;
  display: inline;
}

.area-logo span {
  font-weight: 400;
  font-size: 10px;
  text-align: center;
  margin: 0;
  color: #213140;
}

@media screen and (min-width: 769px) {
  /* LAPTOP */
  .area-logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 250px;
    margin-left: 24px;
  }

  .area-logo h1 {
    font-size: 28px;
  }
}

@media screen and (min-width: 1024px){
  /* DESKTOP */
  .area-logo h1{
    font-size: 32px;
  }

  .area-logo span{
    font-size: 12px;
    text-align: center;
  }
}
</style>
