<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ContentLogin"
});
</script>

<style scoped>
.content{
    width: 100%;
    height: calc(100vh - 60px);
    background: #F3F3F3;
    padding-top: 96px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
}

@media screen and (min-width: 769px) {
    /* LAPTOP */
    .content{
        padding-top: 50px;
        gap: 30px;
    }
}

@media screen and (min-width: 1024px){
  /* DESKTOP */
  .content{
    flex-direction: row;
    justify-content: center;
    gap: 300px;
  }
}
</style>