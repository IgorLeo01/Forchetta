<script setup lang="ts">
import Home from './pages/Home.vue';
import Navbar from './components/Navbar.vue';
import Menu from './pages/Menu.vue';
import { ref } from 'vue';
const currentPage = ref('home');

</script>

<template>
  <Navbar @navigate="currentPage = $event" />
  <div v-if="currentPage === 'home'">
    <Home />
  </div>
  <div v-if="currentPage === 'menu'">
    <Menu />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
