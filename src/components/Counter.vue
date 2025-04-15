<template>
    <div class="counter">
        <p class="count">Count: {{ counter.count }}</p>
        <p class="message">This number is <strong>{{ isEven() ? 'Even' : 'Odd' }}</strong>.</p>

        <div class="buttons">
            <button @click="counter.decrement" :disabled="counter.count <=0">-</button>
            <button @click="counter.reset" :disabled="counter.count === 0">Reset</button>
            <button @click="counter.increment" :disabled="counter.count >= 10">+</button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
const counter = useCounterStore();

const isEven = () => {
    return counter.count % 2 === 0;
}
</script>

<style scoped>
.counter {
    text-align: center;
}
.count {
    font-size: 2.5rem;
}
.message {
    font-size: 1.2rem;
    color: #666;
    margin-bottom: 20px;
}
.buttons button{
    padding: 10px;
    margin: 0 8px;
}
</style>