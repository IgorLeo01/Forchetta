<script setup lang="ts">
import Home from "./views/Home.vue";
import Menu from "./views/Menu.vue";
import Sobre from "./views/Sobre.vue";
import Reservar from "./views/Reservar.vue";
import Navbar from "./layouts/Navbar.vue";
import Footer from "./layouts/Footer.vue";
import { ref, watch } from "vue";

const currentPage = ref("home");

watch(currentPage, () => {
  if (window.scrollY !== 0) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
});

</script>

<template>
  <div>
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

    <Footer @navigate="currentPage = $event" />
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
