<template>
    <header>
        <MenuSandwich />
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuSandwich from '@/components/Navbar/MenuSandwich.vue';

export default defineComponent({
    name: 'HomeView',
    components: { MenuSandwich }
});
</script>

<script>
</script>