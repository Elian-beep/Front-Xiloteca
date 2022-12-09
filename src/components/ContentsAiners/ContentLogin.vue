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
    background: green;
    padding-top: 96px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
}

@media screen and (min-width: 769px) {
  /* LAPTOP */
  .content{
    padding-top: 120px;
  }
}
</style>