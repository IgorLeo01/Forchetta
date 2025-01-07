<template>
  <div class="relative">
    <nav
      class="w-full flex items-center justify-between px-10 py-4 bg-secondary z-50"
    >
      <div class="relative flex items-center">
        <img
          src="../assets/LogoForchetta.png"
          alt="Logo Forchetta"
          class="absolute logo-position"
        />
        <span class="text-xl font-baskervville italic text-white"
          >Forchetta</span
        >
      </div>
      <ul class="hidden md:flex gap-12 text-lg">
        <!-- Aumentando o gap e a fonte -->
        <li>
          <a
            href="#"
            class="hover:text-primary text-white font-prompt text-lg py-2 px-4 rounded-md transition-all"
            @click.prevent="navigate('home')"
          >
            Início
          </a>
        </li>
        <li>
          <a
            href="#"
            class="hover:text-primary text-white font-prompt text-lg py-2 px-4 rounded-md transition-all"
            @click.prevent="navigate('sobre')"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="#"
            class="hover:text-primary text-white font-prompt text-lg py-2 px-4 rounded-md transition-all"
            @click.prevent="navigate('menu')"
          >
            Cardápio
          </a>
        </li>
        <li>
          <a
            href="#"
            class="hover:text-primary text-white font-prompt text-lg py-2 px-4 rounded-md transition-all"
          >
            Contato
          </a>
        </li>
      </ul>
      <a
        href="#"
        class="hidden md:block text-primary font-prompt uppercase text-sm mr-4"
        @click.prevent="navigate('reservar')"
      >
        Reservar
      </a>
      <button @click="toggleMenu" class="block md:hidden focus:outline-none">
        <img src="../assets/Hamburguer.png" alt="Menu" class="w-6 h-6" />
      </button>
    </nav>

    <HamburguerMenu :isMenuOpen="isMenuOpen" @close-menu="toggleMenu" />
  </div>
</template>

<script>
import HamburguerMenu from "../components/HamburguerMenu.vue";

export default {
  name: "Navbar",
  components: {
    HamburguerMenu,
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    navigate(page) {
      this.$emit("navigate", page);
    },
  },
};
</script>

<style>
.text-primary {
  color: #ff9900;
}

a.text-primary {
  font-family: "Prompt", sans-serif;
  text-transform: uppercase;
  font-size: 0.875rem;
  padding: 5px 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

a.text-primary:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.text-white {
  color: #ffffff;
}

.logo-position {
  width: 100px;
  position: absolute;
  max-width: none;
  max-height: none;
  left: 0;
  bottom: -3px;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #051114;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

ul {
  display: flex;
  gap: 10px;
}

@media (max-width: 768px) {
  ul {
    display: none;
  }

  .vertical-bar {
    display: none;
  }

  button {
    display: block;
  }
}
</style>
