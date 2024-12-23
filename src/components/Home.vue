<template>
  <div class="relative bg-secondary text-white min-h-screen">
    <nav
      class="absolute top-0 left-0 w-full flex items-center justify-between p-4"
    >
      <div class="text-xl font-baskervville italic">Forchetta</div>
      <ul class="flex gap-10 text-base">
        <li><a href="#" class="hover:text-primary">Home</a></li>
        <li><a href="#" class="hover:text-primary">Sobre</a></li>
        <li><a href="#" class="hover:text-primary">Cardápio</a></li>
        <li><a href="#" class="hover:text-primary">Contato</a></li>
      </ul>
      <a href="#" class="text-primary font-prompt uppercase text-sm">
        Reservar
      </a>
    </nav>

    <div
      class="absolute top-40 left-1/3 transform -translate-x-1/2 text-center"
    >
      <div class="text-primary font-baskervville italic text-lg mr-96">01 / 03</div>
      <div class="bg-primary h-px w-2/3 my-4 mr-28"></div>
      <h1 class="text-5xl font-baskervville uppercase">
        Clássico Restaurante<br />
        <span class="text-primary italic">Italiano</span>
      </h1>
      <div class="bg-primary h-px w-2/3 my-4 ml-56"></div>
      <p class="text-grayText max-w-xl text-sm mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod
        posuere nisl, id tristique libero mattis et. Vivamus orci risus...''
      </p>
      <button
        class="mt-6 px-6 py-3 bg-primary text-secondary text-sm uppercase font-prompt rounded"
      >
        Sobre Nós
      </button>
    </div>
  </div>
  <div
    class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-8"
  >
    <img
      :src="arrowLeft"
      alt="Seta Esquerda"
      class="w-8 h-8 cursor-pointer hover:opacity-80"
      @click="goToPrevious"
    />
    <img
      :src="arrowRight"
      alt="Seta Direita"
      class="w-8 h-8 cursor-pointer hover:opacity-80"
      @click="goToNext"
    />
  </div>
</template>

<script>
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";

export default {
  name: "Home",
  data() {
    return {
      arrowLeft,
      arrowRight,
    };
  },
  methods: {
    goToPrevious() {
      console.log("Seta Esquerda clicada");
    },
    goToNext() {
      console.log("Seta Direita clicada");
    },
  },
};
</script>
