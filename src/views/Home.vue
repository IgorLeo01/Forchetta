<template>
  <div class="bg-secondary text-white">
    <div class="initial-section min-h-screen relative">
      <transition name="slide-horizontal" mode="out-in">
        <div
          :key="`content-${currentContentIndex}`"
          class="absolute top-40 left-1/2 transform -translate-x-1/2 flex items-start gap-8 w-4/5"
        >
          <div class="flex-1 text-left">
            <div class="text-primary font-baskervville italic text-lg">
              {{ currentContentIndex + 1 }} / {{ contentList.length }}
            </div>
            <div class="bg-primary h-px w-2/3 my-4"></div>
            <h1 class="text-5xl font-baskervville uppercase mb-4">
              {{ contentList[currentContentIndex].title }}
              <br />
              <span
                v-if="contentList[currentContentIndex].subtitle"
                class="text-primary italic"
              >
                {{ contentList[currentContentIndex].subtitle }}
              </span>
            </h1>
            <p class="text-grayText max-w-xl text-lg">
              {{ contentList[currentContentIndex].description }}
            </p>
            <ul
              v-if="contentList[currentContentIndex].schedule"
              class="text-grayText text-sm mt-4"
            >
              <li
                v-for="(item, index) in contentList[currentContentIndex]
                  .schedule"
                :key="index"
              >
                {{ item }}
              </li>
            </ul>
            <button
              class="btn-primary mt-6 px-6 py-3 bg-primary text-secondary text-sm font-prompt rounded"
            >
              <span>{{ contentList[currentContentIndex].buttonText }}</span>
            </button>
          </div>
          <div class="flex-1 flex justify-end">
            <img
              v-if="contentList[currentContentIndex].image"
              :src="contentList[currentContentIndex].image"
              alt="Conteúdo Visual"
              class="rounded-lg shadow-lg max-w-full w-full sm:w-3/4 md:w-4/5 hide-mobile"
            />
          </div>
        </div>
      </transition>
      <div
        class="flex items-center justify-center gap-8 absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <img
          :src="arrowLeft"
          alt="Seta Esquerda"
          class="w-8 h-8 cursor-pointer hover:opacity-80"
          @click="
            stopAutoSlide();
            goToPrevious();
            startAutoSlide();
          "
        />
        <img
          :src="arrowRight"
          alt="Seta Direita"
          class="w-8 h-8 cursor-pointer hover:opacity-80"
          @click="
            stopAutoSlide();
            goToNext();
            startAutoSlide();
          "
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
            o Medaglioni Specialittà, um prato com medalhões de filé grelhados
            cobertos com tomate, catupiry e molho especial à base de creme de
            leite é uma das especialidades da casa, junto ao Spaghetti alla
            Siracusa que traz toda a tradição e o sabor da Sicília , preparado
            com espaguete al dente, tomates frescos, azeitonas, alcaparras e um
            toque especial de pistaches.
          </p>
          <img
            :src="especialidade1"
            alt="Prato menor"
            class="prato-image-left mt-6"
          />
        </div>
        <div class="image-right-container">
          <img
            :src="especialidade2"
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
              {{ comments[currentCommentIndex].text }}
            </p>
            <p class="mt-4 text-sm text-gray-400">
              {{ comments[currentCommentIndex].author }}
            </p>
          </div>
          <img :src="aspasRight" alt="Aspas Direita" class="w-10 h-10" />
        </div>
      </div>
      <div class="flex mt-10 justify-center gap-6">
        <button
          class="btn-critica btn-critica-left"
          @click="goToPreviousCritica"
        >
          <img :src="arrowCriticaLeft" alt="Seta Esquerda" />
        </button>
        <button class="btn-critica btn-critica-right" @click="goToNextCritica">
          <img :src="arrowCriticaRight" alt="Seta Direita" />
        </button>
      </div>
    </div>
  </div>
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
import carbonara from "../assets/Carbonara.png";
import reservar from "../assets/Reservar.png";
import horario from "../assets/Horario.png";
import especialidade1 from "../assets/SpaghettiAllaSiracusa.jpg";
import especialidade2 from "../assets/Especialidade.jpg";
import SpaghettiAllaCarbonara from "../assets/Spaghetti alla Carbonara.jpg";
import RavioloniAllaNapolitana from "../assets/RavioloniAllaNapolitana.jpg";
import GnocciBrachiolli from "../assets/GnocciBrachiolli.jpg";
import LasagneVerde from "../assets/LasagneVerde.jpg";
import FilettoPesceAllaMugnaia from "../assets/FilettoPesceAllaMugnaia.jpg";
import CarpaccioDiPolpo from "../assets/CarpaccioDiPolpo.jpg";
import Burrata from "../assets/Burrata.jpg";
import Arancini from "../assets/Arancini.jpg";

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
      reservar,
      horario,
      especialidade1,
      especialidade2,
      SpaghettiAllaCarbonara,
      currentIndex: 2,
      currentContentIndex: 0,
      autoSlideInterval: null,
      carouselItems: [
        {
          image: SpaghettiAllaCarbonara,
        },
        {
          image: RavioloniAllaNapolitana,
        },
        {
          image: GnocciBrachiolli,
        },
        {
          image: LasagneVerde,
        },
        {
          image: FilettoPesceAllaMugnaia,
        },
        {
          image: CarpaccioDiPolpo,
        },
        {
          image: Burrata,
        },
        {
          image: Arancini,
        },
      ],
      contentList: [
        {
          title: "Clássico Restaurante",
          subtitle: "Italiano",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod posuere nisl, id tristique libero mattis et. Vivamus orci risus...",
          buttonText: "Sobre Nós",
        },
        {
          title: "Experiência Gastronômica",
          subtitle: "Requintada",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod posuere nisl, id tristique libero mattis et. Vivamus orci risus, facilisis at felis non, luctus maximus justo...",
          buttonText: "Descubra o Cardápio",
          image: carbonara,
        },
        {
          title: "Horário de Funcionamento",
          subtitle: "",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod posuere nisl, id tristique libero mattis et. Vivamus orci risus, facilisis at felis non, luctus maximus justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam vitae ex felis. Donec ac diam in sem convallis facilisis non et neque. Vivamus a lacus pulvinar turpis maximus rutrum ut ac purus. Donec.",
          buttonText: "Reservar",
          image: horario,
          schedule: [
            "Sábado - Domingo: 11:30h - 23:00h",
            "Terça - Sexta: 13:30h - 00:00h",
          ],
        },
      ],
      comments: [
        {
          text: "Forchetta traz pratos com influência italiana e referências às culinárias: francesa, portuguesa, com toques de brasilidade e muitas frutas, um menu que resulta em uma gastronomia de sabor único, surpreendente e, ao mesmo tempo, clássica.",
          author: "— Info:mente / 2023",
        },
        {
          text: "A culinária italiana com toque brasileiro! Experiência única que mistura o melhor dos dois mundos.",
          author: "— GoWhere / 2024",
        },
        {
          text: " É sempre agradável comer aqui por causa do serviço espetacular, da gastronomia de alta qualidade e o ambiente muito aconchegante",
          author: "— RestaurantGuru / 2024",
        },
      ],
      currentCommentIndex: 0,
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
    goToPreviousCritica() {
      this.currentCommentIndex =
        (this.currentCommentIndex - 1 + this.comments.length) %
        this.comments.length;
    },
    goToNextCritica() {
      this.currentCommentIndex =
        (this.currentCommentIndex + 1) % this.comments.length;
    },
    goToPrevious() {
      this.currentContentIndex =
        (this.currentContentIndex - 1 + this.contentList.length) %
        this.contentList.length;
      console.log("Index anterior:", this.currentContentIndex);
    },
    goToNext() {
      this.currentContentIndex =
        (this.currentContentIndex + 1) % this.contentList.length;
      console.log("Próximo index:", this.currentContentIndex);
    },
    startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.goToNext();
      }, 5000);
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval);
      this.autoSlideInterval = null;
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    this.stopAutoSlide();
  },
  getImageForContent(index) {
    const images = {
      1: require("../assets/Carbonara.png"),
      2: require("../assets/Tagliatelle-al-ragu.png"),
    };
    console.log("Índice recebido:", index);
    console.log("Imagem retornada:", images[index]);
    return images[index] || "";
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
  overflow: hidden;
}

.initial-section .text-left {
  max-width: 65%;
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
  height: 310px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 10px;
}

.card-content h3 {
  color: #ffa000;
}

h1 {
  font-size: 3.75rem;
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
  font-size: 18px;
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

p {
  font-size: 1.25rem;
  line-height: 1.2;
}

@media (max-width: 768px) {
  .content-container {
    top: 15%;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 10px;
  }

  h1 {
    font-size: 2.5rem;
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
    font-size: 1.25rem;
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
    background-color: #ffffff;
    color: #040d10;
    border: none;
    border-radius: 9999px;
    padding: 12px 24px;
    font-family: "Prompt", sans-serif;
    font-size: 1rem;
    transition: none;
  }

  footer .footer-button:hover {
    background-color: #ffffff;
    color: #040d10;
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

  .slide-horizontal-enter-active,
  .slide-horizontal-leave-active {
    transition: transform 0.5s ease, opacity 0.5s ease;
  }

  .slide-horizontal-enter-from {
    transform: translateX(100%);
    opacity: 0;
  }

  .slide-horizontal-leave-to {
    transform: translateX(-100%);
    opacity: 0;
  }

  @media (max-width: 768px) {
    .hide-mobile {
      display: none !important;
    }

    .content-container {
      top: 15%;
      left: 50%;
      transform: translate(-50%, 0);
      padding: 10px;
    }

    h1 {
      font-size: 2.5rem;
      line-height: 1.8rem;
    }

    p {
      font-size: 0.75rem;
      line-height: 1.2;
    }
  }
}
</style>
