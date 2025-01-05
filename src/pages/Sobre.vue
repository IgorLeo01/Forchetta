<script setup>
import Footer from '../layouts/Footer.vue';
</script>

<template>
  <div class="bg-secondary text-white min-h-screen flex flex-col">
    <div class="content px-10 py-16 flex-grow">
      <p class="breadcrumb text-center italic uppercase text-white">
        Início / Sobre
      </p>
      <div class="text-center">
        <h1 class="text-5xl font-baskervville uppercase mb-6">
          <span class="text-primary">Sobre Nós</span>
        </h1>
        <div class="w-16 h-px bg-primary mx-auto mb-10"></div>
      </div>
      <div class="flex flex-col md:flex-row gap-10 items-center md:items-start">
        <div class="image-localization md:w-1/2 flex justify-center"></div>
        <div class="md:w-1/2 text-lg leading-8">
          <p class="mb-6">
            Bem-vindo ao Forchetta, o clássico restaurante italiano que traz o
            sabor autêntico da Itália para você. Nossa missão é proporcionar uma
            experiência gastronômica única, com pratos preparados com
            ingredientes frescos e de alta qualidade.
          </p>
          <p class="mb-6">
            Desde a nossa fundação, seguimos a tradição italiana em cada prato
            servido. Do nosso famoso risoto ao tradicional tiramisù, cada
            detalhe é cuidadosamente planejado para oferecer a você o melhor.
          </p>
          <p>
            Estamos localizados no coração da cidade, prontos para recebê-lo com
            hospitalidade e um ambiente aconchegante. Venha nos visitar e
            descubra o verdadeiro sabor da Itália.
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.bg-secondary {
  background-color: #051114;
}

.text-primary {
  color: #ff9900;
}

.breadcrumb {
  font-family: "Baskervville";
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
  text-transform: uppercase;
  margin-top: 20px;
  margin-bottom: 30px;
}

.image-localization {
  width: 100%;
  height: 300px;
  max-width: 500px;
  background-image: url('../assets/LocalizationForchetta.png');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>