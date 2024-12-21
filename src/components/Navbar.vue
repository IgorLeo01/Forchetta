<template>
  <div class="relative">
    <nav class="w-full flex items-center justify-between px-10 py-4 bg-secondary z-50">
      <div class="text-xl font-baskervville italic">
        Forchetta
      </div>

      <ul class="flex gap-10 text-base">
        <li><a href="#" class="hover:text-primary">Home</a></li>
        <li><a href="#" class="hover:text-primary">Sobre</a></li>
        <li><a href="#" class="hover:text-primary">Cardápio</a></li>
        <li><a href="#" class="hover:text-primary">Contato</a></li>
      </ul>

      <div class="flex items-center gap-4">
        <a href="#" class="text-primary font-prompt uppercase text-sm">
          Reservar
        </a>
        <div class="h-10 w-px bg-gray-400 opacity-20"></div>
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

    <div
      class="absolute left-0 w-full h-px bg-gray-400 opacity-20"
      style="top: 64px;"
    ></div>

    <HamburgerMenu
      :isMenuOpen="isMenuOpen"
      @close-menu="toggleMenu"
    />
  </div>
</template>

<script>
import HamburgerMenu from './HamburgerMenu.vue';

export default {
  name: 'Navbar',
  components: {
    HamburgerMenu,
  },
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

.bg-gray-400 {
  background-color: rgba(217, 217, 217, 0.2);
}
</style>
