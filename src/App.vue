<!-- <script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <div class="container">
    <h1>Vue Counter 🚀</h1>
    <p>Count: {{ count }}</p>
    <button @click="count++">Increase</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const count = ref(0);

</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
}
button {
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 10px;
}
</style>