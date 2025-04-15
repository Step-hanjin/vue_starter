<template>
    <form @submit.prevent="handleSubmit">
        <h2>📝 User Form</h2>
        <label>
            Name:
            <input v-model="name" type="text" />
        </label>

        <lable>
            Age:
            <input v-model.number="age" type="number" />
        </lable>

        <button type="submit">Add</button>
        <p><strong>Preview: </strong>{{ preview }}</p>
    </form>
</template>

<script setup lang="ts">
import { ref, computed, defineEmits } from 'vue';

const emit = defineEmits<{
    (e: 'submit', name: string, age: number): void;
}>();

const name = ref('');
const age = ref<number | null>(null);

const preview= computed(() => {
    return name.value && age.value ? 
        `Name: ${name.value}, Age: ${age.value}` :
        "Fill out the form";
});

const handleSubmit = () => {
    if (name.value.trim()){
        emit('submit', name.value, age.value);
        name.value = '';
        name.age = null;
    }
}

</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 300px;
}
input {
    padding: 8px;
    font-size: 16px;
}
button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
</style>