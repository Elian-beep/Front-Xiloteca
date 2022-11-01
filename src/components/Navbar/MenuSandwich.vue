<template>
  <div class="areaBtnSandwich">
    <div class="btnSandwich">
      <input @click="clickMenu" type="checkbox" id="checkbox-menu" />
      <label for="checkbox-menu">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <ul class="items-menu" :class="{ isOpen: isOpen }">
      <ItemMenu :to-href="'/'" title="Início" icon="fa-solid fa-house" />
      <ItemMenu
        :toHref="'/about'"
        title="Sobre a Xiloteca"
        icon="fa-sharp fa-solid fa-circle-info"
      />
      <ItemMenu
        :toHref="'/login'"
        title="Fazer Login"
        icon="fa-solid fa-circle-user"
      />
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ItemMenu from "./ItemMenu.vue";

export default defineComponent({
  name: "MenuSandwich",
  components: { ItemMenu },
  data() {
    return {
      isOpen: false, //Iso deve ser false
    };
  },
  methods: {
    clickMenu() {
      this.isOpen = !this.isOpen;
    },
  },
});
</script>

<style>
.btnSandwich {
  width: 100%;
  background: #fafafa;
  padding: 16px 24px;
  border-bottom: 0.5px solid #213140;
}

.items-menu {
  position: absolute;
  left: -100px;
  width: 50vw;
  opacity: 0;
  height: 100vh;

  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: ease-out;

  background: green;
}

.items-menu.isOpen {
  opacity: 1;
  left: 0px;
}

#checkbox-menu {
  display: absolute;
  display: none;
}

/* POSIÇÃO E TAMANHO DO BTN (LABEL) */
label {
  cursor: pointer;
  position: relative;
  display: block;
  height: 22px;
  width: 30px;
}

/* ICONE DE HAMBUERGUER */
label span {
  position: absolute;
  display: block;
  height: 5px;
  width: 100%;
  border-radius: 30px;
  background: #213140;
  transition: 0.25s ease-in-out;
}

label span:nth-child(1) {
  top: 0;
}

label span:nth-child(2) {
  top: 8px;
}

label span:nth-child(3) {
  top: 16px;
}

/* ICONE DE X */
#checkbox-menu:checked + label span:nth-child(1) {
  transform: rotate(-45deg);
  top: 8px;
}

#checkbox-menu:checked + label span:nth-child(2) {
  opacity: 0;
}

#checkbox-menu:checked + label span:nth-child(3) {
  transform: rotate(45deg);
  top: 8px;
}
</style>