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
</style>