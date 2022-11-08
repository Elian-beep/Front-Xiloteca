<template>
  <li :class="{ selected: selected }">
    <i :class="icon"></i>
    <router-link class="link-menu" :to="toHref">{{ title }}</router-link>
  </li>
</template>
  
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ItemMenu",
  props: {
    icon: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    toHref: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: false,
    },
  },
});
</script>
  
<style scoped>
li {
  padding: 16px 24px;
  border-bottom: 0.1px solid #213140;
  font-size: 16px;
  color: #213140;
}

.link-menu {
  text-decoration: none;
  color: #213140;
  margin-left: 16px;
}

li.selected {
  border-left: 10px solid #213140;
  background: #d9d9d9;
}

@media screen and (min-width: 481px) {
  /* TABLET */
  li {
    padding: 0;
    list-style: none;
    border: none;
    margin: auto;
    font-size: 17px;
  }

  li.selected {
    border: none;
    background: none;
    border-bottom: 1px solid #213140;
  }
}

@media screen and (min-width: 769px) {
  /* LAPTOP */

  li {
    font-size: 18px;
  }

  li:hover {
    cursor: pointer;
    border-left: 0.5px solid #d9d9d9;
    border-right: 0.5px solid #d9d9d9;
    transition: 0.1s ease-in-out;
    padding: 16px;
  }
}

@media screen and (min-width: 1024px) {
  /* DESKTOP */
  li {
    font-size: 20px;
  }
}
</style>