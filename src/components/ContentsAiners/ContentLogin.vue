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
    height: 100vh;
    background: #F3F3F3;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 32px;
}
</style>