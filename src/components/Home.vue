<template>
    <div class="relative bg-secondary text-white min-h-screen">
      <nav class="absolute top-0 left-0 w-full flex items-center justify-between p-4">
        <div class="text-xl font-baskervville italic">
          Forchetta
        </div>
        <ul class="flex gap-10 text-base">
          <li><a href="#" class="hover:text-primary">Home</a></li>
          <li><a href="#" class="hover:text-primary">Sobre</a></li>
          <li><a href="#" class="hover:text-primary">Cardápio</a></li>
          <li><a href="#" class="hover:text-primary">Contato</a></li>
        </ul>
        <a
          href="#"
          class="text-primary font-prompt uppercase text-sm"
        >
          Reservar
        </a>
      </nav>
  
      <div class="absolute left-10 top-20">
        <div class="text-primary font-baskervville italic text-lg">01 / 03</div>
        <div class="bg-primary h-px w-1/3 my-4"></div>
        <h1 class="text-5xl font-baskervville uppercase">
          Clássico Restaurante<br />
          <span class="text-primary italic">Italiano</span>
        </h1>
        <div class="bg-primary h-px w-1/3 my-4"></div>
        <p class="text-grayText max-w-xl text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod
          posuere nisl, id tristique libero mattis et. Vivamus orci risus...
        </p>
        <button class="mt-6 px-6 py-3 bg-primary text-secondary text-sm uppercase font-prompt rounded">
          Sobre Nós
        </button>
      </div>
  
      <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button class="w-10 h-10 bg-primary rounded-full"></button>
        <button class="w-10 h-10 bg-primary rounded-full"></button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Home',
  };
  </script>
  