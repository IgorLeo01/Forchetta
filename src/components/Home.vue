<template>
  <div class="bg-secondary text-white">
    <div class="initial-section min-h-screen">
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
          class="btn-primary mt-6 px-6 py-3 bg-primary text-secondary text-sm font-prompt rounded"
        >
          <span>Sobre Nós</span>
        </button>
      </div>

      <div
        class="flex items-center justify-center gap-8 absolute bottom-10 left-1/2 transform -translate-x-1/2"
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
    </div>
    <div class="scroll-section bg-secondary text-white pt-20">
      <h2 class="text-center text-primary text-5xl font-baskervville mb-12">
        Menu
      </h2>
      <div class="carousel-container">
        <div class="carousel" ref="carousel" @wheel="onWheel">
          <div
            v-for="(item, index) in carouselItems"
            :key="index"
            class="carousel-item"
            :style="getStyle(index)"
          >
            <div class="card-content">
              <img :src="item.image" alt="Card Image" class="card-image" />
              <h3 class="text-lg font-bold">{{ item.title }}</h3>
              <p class="text-sm">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-navigation flex items-center justify-center mt-8">
        <img
          :src="arrowMenuLeft"
          alt="Seta Esquerda"
          class="arrow-icon cursor-pointer"
          @click="moveCarousel(-1)"
        />
        <div class="circles flex gap-2 mx-4">
          <div
            v-for="(item, index) in carouselItems"
            :key="'circle-' + index"
            class="circle"
            :class="{ active: currentIndex === index }"
            @click="goToIndex(index)"
          ></div>
        </div>
        <img
          :src="arrowMenuRight"
          alt="Seta Direita"
          class="arrow-icon cursor-pointer"
          @click="moveCarousel(1)"
        />
      </div>
      <div class="nossa-especialidade relative mt-20">
        <div class="text-container flex flex-col items-start">
          <h2 class="text-primary font-baskervville text-5xl mb-4">
            Nossa Especialidade
          </h2>
          <p class="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            euismod posuere nisl, id tristique libero mattis et. Vivamus orci
            risus, facilisis at felis non, luctus maximus justo. Orci varius
          </p>
          <img
            src="../assets/Tagliatelle-al-ragu2.png"
            alt="Prato menor"
            class="prato-image-left mt-6"
          />
        </div>
        <div class="image-right-container">
          <img
            src="../assets/Tagliatelle-al-ragu.png"
            alt="Prato maior"
            class="prato-image-right"
          />
        </div>
        <div class="stars-container mt-10">
          <img src="../assets/Stars.png" alt="Estrelas" class="stars" />
        </div>
      </div>
      <div
        class="critica-section relative py-20"
        style="text-align: center; background-color: #05161a"
      >
        <h2 class="text-primary text-3xl font-baskervville mb-12">
          Comentários
        </h2>
        <div
          class="flex items-start gap-4 px-4"
          style="justify-content: center"
        >
          <img :src="aspasLeft" alt="Aspas Esquerda" class="w-10 h-10" />
          <div class="max-w-3xl">
            <p class="italic text-lg leading-relaxed">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              euismod posuere nisl, id tristique libero mattis et. Vivamus orci
              risus, facilisis at felis non, luctus maximus justo."
            </p>
            <p class="mt-4 text-sm text-gray-400">— Nome do Crítico</p>
          </div>
          <img :src="aspasRight" alt="Aspas Direita" class="w-10 h-10" />
        </div>
        <div class="flex mt-10 justify-center gap-6">
          <button
            class="btn-critica btn-critica-left"
            @click="goToPreviousCritica"
          >
            <img :src="arrowCriticaLeft" alt="Seta Esquerda" />
          </button>
          <button
            class="btn-critica btn-critica-right"
            @click="goToNextCritica"
          >
            <img :src="arrowCriticaRight" alt="Seta Direita" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <footer class="relative bg-[#040d10] text-white py-8">
    <div class="container mx-auto max-w-3xl">
      <div class="flex justify-between items-center mb-4">
        <p class="font-prompt text-base">laforchetta@laforchetta.com.br</p>
        <div class="flex gap-6">
          <a href="#" class="font-prompt text-sm uppercase hover:text-[#FFA000]"
            >Início</a
          >
          <a href="#" class="font-prompt text-sm uppercase hover:text-[#FFA000]"
            >Sobre</a
          >
          <a href="#" class="font-prompt text-sm uppercase hover:text-[#FFA000]"
            >Cardápio</a
          >
          <a href="#" class="font-prompt text-sm uppercase hover:text-[#FFA000]"
            >Contato</a
          >
        </div>
      </div>
      <div class="w-full h-px bg-[#FFA000] opacity-30"></div>
      <div class="flex flex-col md:flex-row justify-between items-center mt-4">
        <div
          class="flex flex-col items-center md:items-start text-center md:text-left"
        >
          <p class="font-prompt text-sm text-primary">Telefone:</p>
          <p class="font-prompt text-base">(11) 3237-0717</p>
          <p class="font-prompt text-sm mt-2 text-primary">Endereço:</p>
          <p class="font-prompt text-base">
            Rua Santa Justina, 210 Vila Olimpia – São Paulo/SP
          </p>
        </div>
        <div class="flex flex-col items-center mt-4 md:mt-0">
          <p class="font-prompt text-base">Sábado - Domingo: 11:30h - 23:00h</p>
          <p class="font-prompt text-base">Terça - Sexta: 13:30h - 00:00h</p>
        </div>
        <div class="mt-4 md:mt-0">
          <button
            class="footer-button bg-white text-[#040d10] font-prompt text-sm px-6 py-2 rounded-full border-none"
          >
            Reservar
          </button>
        </div>
      </div>
      <div class="w-full h-px bg-[#FFA000] opacity-30 mt-6"></div>
    </div>
    <img
      :src="footerImg"
      alt="Footer Decoration"
      class="absolute right-1 bottom-1 w-40"
      style="opacity: 0.3"
    />
  </footer>
</template>

<script>
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import arrowMenuLeft from "../assets/ArrowMenuLeft.png";
import arrowMenuRight from "../assets/ArrowMenuRight.png";
import Tagliatelle1 from "../assets/Tagliatelle-al-ragu.png";
import Tagliatelle2 from "../assets/Tagliatelle-al-ragu2.png";
import arrowCriticaRight from "../assets/arrowCriticaRight.png";
import arrowCriticaLeft from "../assets/arrowCriticaLeft.png";
import aspasRight from "../assets/aspasRight.png";
import aspasLeft from "../assets/aspasLeft.png";
import footerImg from "../assets/FooterImg.png";

export default {
  name: "Home",
  data() {
    return {
      arrowLeft,
      arrowRight,
      arrowMenuLeft,
      arrowMenuRight,
      Tagliatelle2,
      Tagliatelle1,
      arrowCriticaRight,
      arrowCriticaLeft,
      aspasRight,
      aspasLeft,
      footerImg,
      currentIndex: 2,
      carouselItems: [
        {
          image: "path/to/image1.jpg",
          title: "Prato 1",
        },
        {
          image: "path/to/image2.jpg",
          title: "Prato 2",
        },
        {
          image: "path/to/image3.jpg",
          title: "Prato 3",
        },
        {
          image: "path/to/image4.jpg",
          title: "Prato 4",
        },
        {
          image: "path/to/image3.jpg",
          title: "Prato 3",
        },
        {
          image: "path/to/image4.jpg",
          title: "Prato 4",
        },
        {
          image: "path/to/image3.jpg",
          title: "Prato 3",
        },
        {
          image: "path/to/image4.jpg",
          title: "Prato 4",
        },
      ],
    };
  },
  methods: {
    onWheel(event) {
      event.preventDefault();
      const direction = event.deltaY > 0 ? 1 : -1;
      this.moveCarousel(direction);
    },
    moveCarousel(direction) {
      const totalItems = this.carouselItems.length;
      this.currentIndex =
        (this.currentIndex + direction + totalItems) % totalItems;
    },
    getStyle(index) {
      const total = this.carouselItems.length;
      const middle = 2;
      const position = (index - this.currentIndex + total) % total;
      const scale = position === middle ? 1 : 0.8;
      const translateX = (position - middle) * 220;
      const zIndex = position === middle ? 2 : 1;
      const opacity = position === middle ? 1 : 0.5;

      return {
        transform: `translateX(${translateX}px) scale(${scale})`,
        zIndex,
        opacity,
        transition: "transform 0.5s ease, opacity 0.5s ease",
      };
    },
  },
  goToPreviousCritica() {
    console.log("Botão crítica anterior clicado");
  },
  goToNextCritica() {
    console.log("Botão crítica próximo clicado");
  },
};
</script>

<style>
.initial-section::before {
  z-index: -1;
}

.content-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

.initial-section {
  background-color: #051114;
  z-index: 0;
  width: 100%;
  position: relative;
}

.initial-section::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("../assets/backgroundForchetta.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -1;
  opacity: 0.8;
  pointer-events: none;
}

.scroll-section {
  background-color: #040d10;
}

.carousel-container {
  overflow: hidden;
  position: relative;
  height: 400px;
}

.carousel {
  position: relative;
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transform: translateX(-10%);
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel-item {
  position: absolute;
  width: 200px;
  height: 300px;
  background-color: #05161a;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.carousel-item:last-child {
  margin-right: 0;
}

.carousel:hover .carousel-item {
  opacity: 0.5;
}

.carousel-item:hover {
  transform: scale(1);
  opacity: 1;
}

.card-content {
  text-align: center;
}

.card-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.card-content h3 {
  color: #ffa000;
}

.card-content p {
  color: #d1d1d1;
}

.carousel-navigation {
  position: relative;
}

.circles {
  display: flex;
}

.circle {
  width: 12px;
  height: 12px;
  border: 2px solid #ffa000;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.circle.active {
  background-color: #ffa000;
}

.nossa-especialidade {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  padding: 20px;
  max-width: 1200px;
  margin-top: 200px;
  left: 70px;
}

.content-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
}

.text-container {
  flex: 1;
  max-width: 50%;
  padding-right: 20px;
}

.text-container h2 {
  font-family: "Baskervville", serif;
  font-size: 60px;
  line-height: 115%;
  color: #ffa000;
  max-width: 400px;
}

.description {
  font-family: "Prompt", sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #c8c8c8;
  margin-bottom: 20px;
  max-width: 400px;
}

.prato-image-left {
  width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.image-right-container {
  flex: 1;
  display: flex;
  justify-content: flex-end;
  position: relative;
  top: -500px;
  right: 150px;
}

.prato-image-right {
  width: 500px;
  height: auto;
  object-fit: cover;
  border-radius: 10px;
}

.stars-container {
  display: flex;
  justify-content: center;
  margin-top: -250px;
}

.stars {
  width: 20px;
  height: auto;
}

@media (max-width: 768px) {
  .nossa-especialidade {
    flex-direction: column;
    padding: 10px;
    max-width: 100%;
    margin-top: 50px;
    margin-right: 80px;
  }

  .content-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .text-container {
    max-width: 90%;
    padding-right: 0;
    margin-bottom: 20px;
  }

  .text-container h2 {
    font-size: 36px;
    line-height: 1.2;
  }

  .description {
    font-size: 14px;
    line-height: 1.5;
    margin-bottom: 20px;
  }

  .prato-image-left {
    width: 100%;
    height: auto;
  }

  .image-right-container {
    position: static;
    margin-top: 20px;
    justify-content: center;
  }

  .prato-image-right {
    width: 100%;
    height: auto;
  }

  .stars-container {
    margin-top: 10px;
  }

  .stars {
    width: 15px;
    height: auto;
    margin-top: 60px;
  }
}

.btn-primary {
  font-size: 0.875rem;
  border-radius: 20px;
  background-color: #ff9900;
  color: #051114;
  padding: 10px 20px;
  border: 2px solid #ff9900;
  position: relative;
  overflow: hidden;
  z-index: 2;
  transition: color 0.3s ease, background-color 0.3s ease;
}

.btn-primary span {
  position: relative;
  z-index: 2;
}

.btn-primary::before {
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

.btn-primary:not(.btn-critica):hover::before {
  width: 300%;
  height: 300%;
}

.btn-primary:hover {
  background-color: #051114;
  color: #ff9900;
}

img {
  display: inline-block;
  max-width: 100%;
  width: 40px;
  height: auto;
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
    margin-left: 30;
  }

  .bg-primary {
    margin: 0 auto;
    width: 100%;
    margin-top: 30px;
  }

  .critica-section {
    background-color: #040d10;
  }

  .critica-section img {
    transition: opacity 0.3s ease;
  }

  .critica-section img:hover {
    opacity: 0.8;
  }

  .critica-section button img {
    width: 24px;
    height: 24px;
  }

  .text-primary {
    color: #ffa000;
  }

  .btn-critica {
    width: 50px;
    height: 50px;
    background-color: #ffa000;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    cursor: pointer;
    border: none;
  }

  .btn-critica:hover {
    background-color: #ffa000;
    transform: none;
  }

  .btn-critica-left {
    margin-right: 20px;
  }

  .btn-critica-right {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    .btn-critica {
      width: 40px;
      height: 40px;
    }
  }

  .footer {
    background-color: #040d10;
    color: #ffffff;
    padding: 40px 20px;
  }

  .footer h1 {
    font-family: "Baskervville", serif;
    font-style: italic;
    font-size: 24px;
    color: #ffffff;
  }

  .footer-content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-contact {
    font-size: 14px;
  }

  .footer-contact a.footer-link {
    color: #ffa000;
    text-decoration: none;
  }

  .footer-contact a.footer-link:hover {
    text-decoration: underline;
  }

  .footer-navigation a.footer-nav-link {
    display: block;
    margin-bottom: 8px;
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .footer-navigation a.footer-nav-link:hover {
    color: #ffa000;
  }

  footer .footer-button {
    background-color: #ffffff; /* Fundo branco */
    color: #040d10; /* Texto escuro */
    border: none; /* Sem borda */
    border-radius: 9999px; /* Totalmente arredondado */
    padding: 12px 24px; /* Espaçamento interno */
    font-family: "Prompt", sans-serif; /* Fonte específica */
    font-size: 1rem; /* Tamanho do texto */
    transition: none; /* Sem animações */
  }

  footer .footer-button:hover {
    background-color: #ffffff; /* Mantém o fundo branco no hover */
    color: #040d10; /* Mantém a cor do texto no hover */
  }

  .footer-bottom {
    text-align: center;
    margin-top: 20px;
  }

  .footer-bottom .footer-image {
    width: 100%;
    height: auto;
    opacity: 0.7;
  }

  .footer-bottom p {
    font-size: 12px;
    color: #ffffff;
    margin-top: 10px;
    opacity: 0.8;
  }
}
</style>
