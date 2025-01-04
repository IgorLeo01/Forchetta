<template>
  <div class="menu-page bg-secondary text-white">
    <header class="menu-header py-12">
      <p class="inicio text-center italic uppercase text-white">
        Início / Cardápio
      </p>
      <h1 class="text-center text-primary text-6xl font-baskervville uppercase">
        Cardápio
      </h1>
    </header>
    <section
      class="menu-section"
      ref="entradas"
      :class="{ active: activeSection === 'entradas' }"
    >
      <div class="menu-category">
        <h2 class="text-center text-primary text-5xl font-baskervville mb-12">
          Entradas
        </h2>
        <div class="menu-container">
          <div v-for="item in menuItems" :key="item.id" class="menu-item-row">
            <div class="menu-item-header">
              <h3 class="menu-item-name">{{ item.name }}</h3>
              <div class="menu-item-divider"></div>
              <span class="menu-item-price">${{ item.price }}</span>
            </div>
            <p class="menu-item-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="menu-section bg-new-section"
      ref="pratosPrincipais"
      :class="{ active: activeSection === 'pratosPrincipais' }"
    >
      <div class="menu-category">
        <h2 class="text-center text-primary text-5xl font-baskervville mb-12">
          Pratos Principais
        </h2>
        <div class="menu-container">
          <div v-for="item in pratosPrincipais" :key="item.id" class="menu-item-row">
            <div class="menu-item-header">
              <h3 class="menu-item-name">{{ item.name }}</h3>
              <div class="menu-item-divider"></div>
              <span class="menu-item-price">${{ item.price }}</span>
            </div>
            <p class="menu-item-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="menu-section bg-another-section"
      ref="bebidas"
      :class="{ active: activeSection === 'bebidas' }"
    >
      <div class="menu-category">
        <h2 class="text-center text-primary text-5xl font-baskervville mb-12">
          Bebidas
        </h2>
        <div class="menu-container">
          <div v-for="item in bebidas" :key="item.id" class="menu-item-row">
            <div class="menu-item-header">
              <h3 class="menu-item-name">{{ item.name }}</h3>
              <div class="menu-item-divider"></div>
              <span class="menu-item-price">${{ item.price }}</span>
            </div>
            <p class="menu-item-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {
      activeSection: "entrada",
      sections: ["entradas", "pratosPrincipais", "bebidas"],
      menuItems: [
        {
          id: 1,
          name: "Spaghetti Alla Carbonara",
          price: 49,
          description: "Lorem passionate chefs masterfully",
        },
        {
          id: 2,
          name: "Croquetas de Jamón",
          price: 19,
          description: "Lorem passionate chefs masterfully",
        },
        {
          id: 3,
          name: "Paella Valenciana",
          price: 59,
          description: "Lorem passionate chefs masterfully",
        },
        {
          id: 4,
          name: "Peri Peri Prawns",
          price: 39,
          description: "Lorem passionate chefs masterfully",
        },
        {
          id: 5,
          name: "Golden Saffron Risotto",
          price: 99,
          description: "Lorem passionate chefs masterfully",
        },
      ],
      pratosPrincipais: [
        {
          id: 1,
          name: "Foie Gras and Fig Terrine",
          price: 59,
          description: "Lorem passionate chefs masterfully",
        },
        {
          id: 2,
          name: "Truffle-Infused Filet Mignon",
          price: 29,
          description: "Lorem passionate chefs masterfully",
        },
        {
          id: 3,
          name: "Butter Poached Lobster",
          price: 89,
          description: "Lorem passionate chefs masterfully",
        },
        {
          id: 4,
          name: "Pastéis de Nata (Portugal)",
          price: 79,
          description: "Lorem passionate chefs masterfully",
        },
        {
          id: 5,
          name: "Apple Strudel (Austria)",
          price: 79,
          description: "Lorem passionate chefs masterfully",
        },
      ],
      bebidas: [
        {
          id: 1,
          name: "Tiramisu",
          price: 35,
          description:
            "Classic Italian dessert with mascarpone cheese and espresso.",
        },
        {
          id: 2,
          name: "Crème Brûlée",
          price: 29,
          description:
            "Rich vanilla custard topped with a crispy caramelized sugar layer.",
        },
        {
          id: 3,
          name: "Chocolate Lava Cake",
          price: 39,
          description: "Warm chocolate cake with a gooey molten center.",
        },
        {
          id: 4,
          name: "Lemon Tart",
          price: 25,
          description: "Tangy lemon filling in a buttery shortbread crust.",
        },
      ],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      this.sections.forEach((section, index) => {
        const sectionElement = this.$refs[section];
        const offsetTop = sectionElement.offsetTop;

        if (scrollTop >= offsetTop - windowHeight / 2) {
          this.activeSection = section;
        }
      });
    },
  },
};
</script>

<style>
.menu-page {
  background-color: #05161a;
}

.menu-header {
  background-color: #040d10;
  border-bottom: 2px solid #ffa000;
  position: relative;
  padding: 80px 0;
}

.menu-header .inicio {
  font-family: "Baskervville";
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  position: relative;
  top: 20px;
  margin-bottom: 20px;
}

.menu-header h1 {
  font-size: 40px;
  color: #ffa000;
  margin-top: 20px;
}

.menu-category h2 {
  font-size: 45px;
  color: #ffa000;
  text-align: center;
  font-family: "Baskervville";
  margin-bottom: 40px;
}

.menu-section {
  position: relative;
  width: 100%;
  height: 100vh;
  transition: transform 0.8s ease, z-index 0.8s ease;
}

.menu-section:not(.active) {
  z-index: 1;
  transform: translateY(100%);
}

.menu-section.active {
  z-index: 2;
  transform: translateY(0);
  margin-top: 30px;
}

.menu-category {
  margin: 0 auto;
  max-width: 1200px;
}

.menu-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 40px;
}

.menu-item-row {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.menu-item-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 10px;
}

.menu-item-name {
  font-family: "Prompt", sans-serif;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffa000;
}

.menu-item-divider {
  flex: 1;
  height: 2px;
  margin: 0 10px;
  background: #ffa000;
}

.menu-item-price {
  font-family: "Prompt", sans-serif;
  font-size: 18px;
  color: #ffa000;
  font-weight: bold;
}

.menu-item-description {
  font-family: "Prompt", sans-serif;
  font-size: 16px;
  color: #ffffff;
  font-style: italic;
  margin-top: -13px;
}

.bg-new-section {
  background-color: #062026;
}

.bg-another-section {
  background-color: #05161a;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.fade-enter {
  opacity: 0;
  transform: translateY(50px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.menu-section {
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.menu-section.active {
  opacity: 1;
  transform: translateY(0);
}
</style>
