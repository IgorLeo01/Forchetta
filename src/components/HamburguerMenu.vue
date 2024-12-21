<template>
    <div v-if="isMenuOpen" class="fixed top-0 right-0 w-64 h-full bg-secondary shadow-lg z-50 flex flex-col p-6 text-white">
      <button @click="closeMenu" class="mb-4 self-end text-gray-400 hover:text-primary focus:outline-none">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <a href="#" class="hover:text-primary mb-4">Home</a>
      <a href="#" class="hover:text-primary mb-4">Sobre</a>
      <a href="#" class="hover:text-primary mb-4">Cardápio</a>
      <a href="#" class="hover:text-primary mb-4">Contato</a>
      <a href="#" class="text-primary font-prompt uppercase mt-auto">Reservar</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HamburgerMenu',
    props: {
      isMenuOpen: {
        type: Boolean,
        required: true,
      },
    },
    methods: {
      closeMenu() {
        this.$emit('close-menu');
      },
    },
  };
  </script>
  
  <style scoped>
  .bg-secondary {
    background-color: #051114;
  }
  .text-primary {
    color: #ff9900;
  }
  </style>
  