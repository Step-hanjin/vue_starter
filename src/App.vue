<!-- <script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
</script> -->

<template>
  <Navbar/>
  <router-view/>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue'
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