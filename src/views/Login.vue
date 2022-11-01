<template>
    <MenuSandwich />
    <h1>Login</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MenuSandwich from '@/components/Navbar/MenuSandwich.vue';

export default defineComponent({
    name: 'LoginView',
    components: { MenuSandwich }
});
</script>

<script>
</script>