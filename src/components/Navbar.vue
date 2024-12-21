<template>
  <div class="relative">
    <!-- Navbar -->
    <nav class="w-full flex items-center justify-between px-10 py-4 bg-secondary z-50">
      <!-- Logo -->
      <div class="text-xl font-baskervville italic">
        Forchetta
      </div>

      <!-- Links de Navegação -->
      <ul class="flex gap-10 text-base">
        <li><a href="#" class="hover:text-primary">Home</a></li>
        <li><a href="#" class="hover:text-primary">Sobre</a></li>
        <li><a href="#" class="hover:text-primary">Cardápio</a></li>
        <li><a href="#" class="hover:text-primary">Contato</a></li>
      </ul>

      <!-- Botão Reservar e Menu Hamburguer -->
      <div class="flex items-center gap-4">
        <!-- Botão Reservar -->
        <a href="#" class="text-primary font-prompt uppercase text-sm">
          Reservar
        </a>
        <!-- Linha Vertical -->
        <div class="h-10 w-px bg-gray-400 opacity-20 z-10"></div>
        <!-- Botão Hamburguer -->
        <button
          @click="toggleMenu"
          class="text-primary focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-8 h-8">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Linha Horizontal -->
    <div class="absolute left-0 w-full h-px bg-gray-400 opacity-20 z-10" style="top: 64px;"></div>

    <!-- Menu Hamburguer -->
    <div
      v-if="isMenuOpen"
      class="fixed top-0 right-0 w-64 h-full bg-secondary shadow-lg z-50 flex flex-col p-6 text-white"
    >
      <button @click="toggleMenu" class="mb-4 self-end text-gray-400 hover:text-primary focus:outline-none">
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
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      console.log('Menu toggled');
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
.text-primary {
  color: #ff9900;
}

.bg-secondary {
  background-color: #051114;
}
</style>
