<template>
    <main>
        <h1>Vue User App</h1>
        <UserForm @submit="addUser" />
        <UserList :users="users" />
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import UserForm from '@/components/UserForm.vue';
import UserList from '@/components/UserList.vue';

const users = ref<
    Array<{ name: string; age: number }>
>([]);

const addUser = (name: string, age: number) => {
    users.value.push({ name, age });
};
</script>

<style scoped>
main {
  max-width: 500px;
  margin: 2rem auto;
  text-align: center;
}
</style>