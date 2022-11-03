<template>
  <div class="areaBtnSandwich" :class="{ 'isOpen': isOpen }">
    <div class="btnSandwich">
      <input @click="clickMenu" type="checkbox" id="checkbox-menu" />
      <label for="checkbox-menu">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <ul class="items-menu" :class="{ 'isOpen': isOpen }">
      <ItemMenu
        :selected="isHome"
        :to-href="'/'"
        title="Início"
        icon="fa-solid fa-house"
      />
      <ItemMenu
        :selected="isAbout"
        :toHref="'/about'"
        title="Sobre a Xiloteca"
        icon="fa-sharp fa-solid fa-circle-info"
      />
      <ItemMenu
      :selected="isLogin"
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
  props: {
    isHome: {
      type: Boolean,
      required: false,
    },
    isAbout: {
      type: Boolean,
      required: false,
    },
    isLogin: {
      type: Boolean,
      required: false
    }
  },
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
.areaBtnSandwich {
  width: 100%;
  border-bottom: 0.5px solid #213140;
}

.btnSandwich {
  padding: 16px 24px;
}

.items-menu {
  background: #FAFAFA;
  position: absolute;
  left: -200px;
  width: 60vw;
  opacity: 0;
  height: 1008px;

  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: ease-out;
}

.items-menu.isOpen {
  opacity: 1;
  left: 0px;

  box-shadow: 0px 10px 20px rgba(33, 49, 64, 0.25);
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
  height: 3px;
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

@media screen and (min-width: 481px) {
  /*TABLET*/
  .btnSandwich{
    display: none;
  }

  .items-menu{
    position: static;
    opacity: 1;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: auto;
  }
}

@media screen and (min-width: 769px) {
  /*LAPTOP*/
  .areaBtnSandwich{
    width: 500px;
    border: none;
  }
}

@media screen and (min-width: 1024px){
  /* DESKTOP */
  .items-menu{
    width: 600px;
    gap: 56px;
    height: 80px;
  }
}
</style>