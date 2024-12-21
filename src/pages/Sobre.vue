<template>
    <div class="bg-secondary text-white min-h-screen px-10 py-16">
      <div class="text-center">
        <h1 class="text-5xl font-baskervville uppercase mb-6">
          Sobre <span class="text-primary">Nós</span>
        </h1>
        <div class="w-16 h-px bg-primary mx-auto mb-10"></div>
      </div>
  
      <div class="flex flex-col md:flex-row gap-10 items-center md:items-start">
        <div class="md:w-1/2">
          <img
            src="https://via.placeholder.com/600x400" 
            alt="Restaurante Forchetta"
            class="rounded-lg shadow-lg"
          />
        </div>
  
        <!-- Texto -->
        <div class="md:w-1/2 text-lg leading-8">
          <p class="mb-6">
            Bem-vindo ao Forchetta, o clássico restaurante italiano que traz o sabor autêntico da Itália para você.
            Nossa missão é proporcionar uma experiência gastronômica única, com pratos preparados com ingredientes
            frescos e de alta qualidade.
          </p>
          <p class="mb-6">
            Desde a nossa fundação, seguimos a tradição italiana em cada prato servido. Do nosso famoso risoto ao
            tradicional tiramisù, cada detalhe é cuidadosamente planejado para oferecer a você o melhor.
          </p>
          <p>
            Estamos localizados no coração da cidade, prontos para recebê-lo com hospitalidade e um ambiente
            aconchegante. Venha nos visitar e descubra o verdadeiro sabor da Itália.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Sobre",
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
  