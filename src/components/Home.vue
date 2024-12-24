<template>
  <div class="relative bg-secondary text-white min-h-screen">
    <div
      class="absolute top-40 left-1/3 transform -translate-x-1/2 text-center"
    >
      <div class="text-primary font-baskervville italic text-lg mr-96">
        01 / 03
      </div>
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
        class="mt-6 px-6 py-3 bg-primary text-secondary text-sm font-prompt rounded"
      >
        <span>Sobre Nós</span>
      </button>
    </div>
  </div>
  <div
    class="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-8"
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

<style scoped>
.content-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.bg-secondary {
  background-color: #051114;
  position: relative;
  z-index: 0;
  width: 100%;
}

.bg-secondary::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/backgroundForchetta.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 0.875rem;
  max-width: 90%;
}

button {
  font-size: 0.875rem;
  border-radius: 20px;
  background-color: #ff9900;
  color: #051114;
  padding: 10px 20px;
  border: 2px solid #ff9900;
  position: relative;
  overflow: hidden;
  z-index: 0;
  transition: color 0.3s ease, background-color 0.3s ease;
}

button span {
  position: relative;
  z-index: 2;
}

button::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background-color: #051114;
  border-radius: 50%;
  transition: width 0.5s ease, height 0.5s ease;
  transform: translate(-50%, -50%);
  z-index: 1;
}

button:hover::before {
  width: 300%;
  height: 300%;
}

button:hover {
  color: #ff9900;
  background-color: #051114;
}

@media (max-width: 768px) {
  .content-container {
    top: 15%;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 10px;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.8rem;
  }

  p {
    font-size: 0.75rem;
    line-height: 1.2;
  }

  button {
    padding: 8px 16px;
    font-size: 0.75rem;
  }

  .text-primary {
    margin-right: 0;
    font-size: 0.8rem;
  }

  .bg-primary {
    margin: 0 auto;
    width: 100%;
  }
}
</style>
