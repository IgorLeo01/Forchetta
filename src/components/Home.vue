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
          class="mt-6 px-6 py-3 bg-primary text-secondary text-sm font-prompt rounded"
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
    </div>
  </div>
</template>

<script>
import arrowLeft from "../assets/arrowLeft.png";
import arrowRight from "../assets/arrowRight.png";
import arrowMenuLeft from "../assets/ArrowMenuLeft.png";
import arrowMenuRight from "../assets/ArrowMenuRight.png"

export default {
  name: "Home",
  data() {
    return {
      arrowLeft,
      arrowRight,
      arrowMenuLeft,
      arrowMenuRight,
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
};
</script>

<style scoped>
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

button {
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
  }

  .bg-primary {
    margin: 0 auto;
    width: 100%;
  }
}
</style>
