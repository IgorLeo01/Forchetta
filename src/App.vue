<script setup lang="ts">
import Home from './pages/Home.vue';
import Menu from './pages/Menu.vue';
import Sobre from './pages/Sobre.vue';
import Reservar from './pages/Reservar.vue';
import Navbar from './layouts/Navbar.vue';
import { ref, watch } from 'vue';

const currentPage = ref('home');

watch(currentPage, () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
</script>

<template>
  <Navbar @navigate="currentPage = $event" />
  <div v-if="currentPage === 'home'">
    <Home />
  </div>
  <div v-if="currentPage === 'menu'">
    <Menu />
  </div>
  <div v-if="currentPage === 'sobre'">
    <Sobre />
  </div>
  <div v-if="currentPage === 'reservar'">
    <Reservar />
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
