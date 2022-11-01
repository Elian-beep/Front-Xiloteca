<template>
  <li>
    <i :class="icon" ></i>
    <router-link class="link-menu" :to="toHref" >{{title}}</router-link>
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
li{
  padding: 16px 24px;
  border-bottom: .5px solid #213140;
  font-size: 16px;
  color: #213140;
}

.link-menu{
  text-decoration: none;
  color: #213140;
  margin-left: 16px;
}
</style>