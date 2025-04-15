<template>
    <main class="home">
        <h1>🏠 Home</h1>
        <UserForm />
        <Counter />
    </main>
</template>

<script setup lang="ts">
import Counter from '../components/Counter.vue'
import UserForm from '@components/UserForm.vue'
</script>

<style scoped>
.home {
    text-align: center;
}
</style>