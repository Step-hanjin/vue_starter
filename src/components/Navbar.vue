<template>
    <nav class="navbar">
        <RouterLink to="/" exact-active-class="active">Home</RouterLink>
        <RouterLink to="/about" exact-active-class="active">About</RouterLink>
    </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.navbar{
    background: #333;
    padding: 15px;
    display: flex;
    gap: 20px;
    justify-content: center;
}
.navbar a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}
</style>