<template>
    <div>
        <h2>User List</h2>
        <ul>
            <li v-for="(user, index) in users" :key="index">
                {{ user.name }} ({{ user.age }} years old)
            </li>    
        </ul>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    users: Array<{ name: string; age: number }>
}>()
</script>

<style scoped>
ul {
    padding-left: 1rem;
}
li {
    line-height: 1.5;
}
</style>