<template>
    <main class="home">
        <h1>My first Vue App</h1>
        <Counter />
    </main>
</template>

<script setup lang="ts">
import Counter from '../components/Counter.vue'
</script>

<style scoped>
.home {
    text-align: center;
    margin-top: 40px;
}
</style>