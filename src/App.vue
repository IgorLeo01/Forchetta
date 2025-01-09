<script setup lang="ts">
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
    <router-view></router-view>
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
