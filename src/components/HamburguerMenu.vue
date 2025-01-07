<template>
  <div :class="['sidebar', { open: isMenuOpen }]">
    <button @click="closeMenu" class="close-button">
      ✕
    </button>
    <router-link to="/" class="sidebar-link">Início</router-link>
    <router-link to="/sobre" class="sidebar-link">Sobre</router-link>
    <router-link to="/menu" class="sidebar-link">Cardápio</router-link>
    <router-link to="/contato" class="sidebar-link">Contato</router-link>
    <router-link to="/reservar" class="sidebar-link">Reservar</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'HamburguerMenu',
  props: {
    isMenuOpen: {
      type: Boolean as PropType<boolean>,
      required: true,
    },
  },
  methods: {
    closeMenu() {
      this.$emit('close-menu');
    },
  },
});
</script>


<style scoped>
.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: #051114;
  z-index: 2000;
  padding: 20px;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar a {
  color: #ffffff;
  text-decoration: none;
  font-size: 1rem;
  display: block;
  margin-bottom: 15px;
}

.sidebar a:hover {
  color: #ff9900;
}

button {
  background: none;
  border: none;
  color: #ff9900;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 20px;
}
</style>
