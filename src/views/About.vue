<template>
    <MenuSandwich />
    <h1>Sobre a xiloteca</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuSandwich from '@/components/Navbar/MenuSandwich.vue';

export default defineComponent({
    name: 'AboutView',
    components: { MenuSandwich }
});
</script>

<script>
</script>