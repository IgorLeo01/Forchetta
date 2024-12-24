<template>
  <div :class="['sidebar', { open: isMenuOpen }]">
    <button @click="closeMenu" class="close-button">
      ✕
    </button>
    <a href="#">Inicio</a>
    <a href="#">Sobre</a>
    <a href="#">Cardápio</a>
    <a href="#">Contato</a>
  </div>
</template>

<script>
export default {
  name: "HamburguerMenu",
  props: {
    isMenuOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeMenu() {
      this.$emit("close-menu");
    },
  },
};
</script>


<style>
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
  transform: translateX(0); /* Mostra o sidebar */
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