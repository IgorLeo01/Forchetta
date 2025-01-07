<script setup>
import Footer from '../layouts/Footer.vue';
</script>

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
              <span class="menu-item-price">R$ {{ item.price }},00</span>
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
              <span class="menu-item-price">R$ {{ item.price }},00</span>
            </div>
            <p class="menu-item-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
    <section
      class="menu-section bg-another-section"
      ref="sobremesas"
      :class="{ active: activeSection === 'sobremesas' }"
    >
      <div class="menu-category">
        <h2 class="text-center text-primary text-5xl font-baskervville mb-12">
          Sobremesas
        </h2>
        <div class="menu-container">
          <div v-for="item in sobremesas" :key="item.id" class="menu-item-row">
            <div class="menu-item-header">
              <h3 class="menu-item-name">{{ item.name }}</h3>
              <div class="menu-item-divider"></div>
              <span class="menu-item-price">R$ {{ item.price }},00</span>
            </div>
            <p class="menu-item-description">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Footer from '../layouts/Footer.vue';
export default {
  name: "Menu",
  data() {
    return {
      activeSection: "entrada",
      sections: ["entradas", "pratosPrincipais", "sobremesas"],
      menuItems: [
        {
          id: 1,
          name: "Coperto (couvert)",
          price: 17,
          description: "3 tipos de patês, legumes refogados, pães, torradas, manteiga e uma surpresa do chef. / Paté, vegetables, breads, toast, butter and chef´s surprise.",
        },
        {
          id: 2,
          name: "Arancini",
          price: 39,
          description: "Bolinho de arroz italiano cremoso, recheado de queijo, empanado e frito. Acompanha molho de tomate levemente picante. (4 unidades)",
        },
        {
          id: 3,
          name: "Carpaccio Tradizionale",
          price: 47,
          description: "Lâminas de carne crua temperadas com molho de azeite, limão, mostarda, sal e alcaparras. Cobertas com parmesão. / Blades of raw meat served cold with olive oil, lemon juice, mustard, salt, capers and parmesan cheese.",
        },
        {
          id: 4,
          name: "Burrata",
          price: 49,
          description: "Burrata cremosa (100 gramas) acompanhada de tomatinhos Sweet gripe marinados com azeite de manjericão. Servido com pães italianos",
        },
        {
          id: 5,
          name: "Caeser Salad",
          price: 51,
          description: "Alface americana, peito de frango grelhado cortado em tiras, queijo parmesão, croutons e molho de salada caeser. / Letucce, grilled chicken breast in strips, parmesan cheese, croutons and caeser sauce.",
        },
        {
          id: 6,
          name: "Insalata Alla Trevisana",
          price: 51,
          description: "Alface, tomate seco, rúcula, muçarela de búfala e lascas de parmesão. Temperada com nozes no azeite. / Lettuce, dried tomatoes, buffalo mozzarella cheese and chips parmesan cheese. Tempered with nuts in the olive oil.",
        },
        {
          id: 7,
          name: "Carpaccio Di Polpo",
          price: 57,
          description: "Fatias extrafinas de polvo com tempero italiano e alcaparras. / Extra thin slices of octopus with Italian seasoning and caper.",
        },
        {
          id: 8,
          name: "Carpaccio Con Insalata",
          price: 62,
          description: "Com salada de alface e muçarela de búfala, temperada com molho de azeite, limão, mostarda, sal e alcaparras. Coberta com parmesão. / Blades of raw meat, lettuce salad and buffalo mozzarella cheese, served cold with olive oil, lemon juice, mustard, salt, capers and parmesan cheese. ",
        },
      ],
      pratosPrincipais: [
        {
          id: 1,
          name: "Spaghetti alla Carbonara",
          price: 75,
          description: "Massa seca de grano duro, panceta, gema de ovos e queijo pecorino.",
        },
        {
          id: 2,
          name: "Casônsei (Cachunchelli)",
          price: 79,
          description: "Recheados com carne de vitela, presunto cru, uva passa e amareto. Coberto com molho de funghi secchi. / Stuffed with veal, prosciutto, raisins and amaretto. Covered with sauce of dried mushroom.",
        },
        {
          id: 3,
          name: "Ravioloni Alla Napolitana",
          price: 77,
          description: "Raviólis grandes recheados com muçarela de búfala. Molho: pitadas de cebola triturada, tomate sem pele e manjericão. / Stuffed with buffalo mozzarella cheese. Sauce: onion, skinless tomatoes and basil.",
        },
        {
          id: 4,
          name: "Lasagne Verde",
          price: 72,
          description: "Recheada com molho à bolonhesa e molho branco. Gratinada com queijo parmesão. / Stuffed with bolognaise and bechamel sauces. Gratin with parmesan cheese.",
        },
        {
          id: 5,
          name: "Gnocchi Con Braciola",
          price: 79,
          description: "Bife recheado com bacon, pimentão vermelho, cenoura e salsão refogado nos temperos e molho de tomate. / Filled stuffed with bacon, red peppers, carrot and celery seasoned in tomato sauce.",
        },
        {
          id: 6,
          name: "Spaghetti Alla Marinara",
          price: 97,
          description: "Frutos do mar puxados no alho e óleo, tomate sem pele e salsinha. / Sauce: seafood, garlic, olive oil, skinless tomatoes and parsley.",
        },
        {
          id: 7,
          name: "Filetto Di Pesce Alla Bella Mugnaia",
          price: 87,
          description: "Filet de peixe grelhado, molho de manteiga, fumet de peixe, vinho branco, limão, alcaparras, champignons, camarão cortado e batatas cozidas. contém glúten. Grilled fish filet. Sauce: butter, fish stock,  white wine, lemon, capers, mushrooms, shrimp and boiled potatoes. Contains gluten.",
        },
        {
          id: 8,
          name: "Gamberoni All’ampezzana",
          price: 135,
          description: "Camarões puxados na manteiga, vinho branco, tomate sem pele, leite de coco e palmito. Acompanha arroz branco. / Shrimps sautéed with butter, white wine, skinless tomato, coconut table and heart of palm. Served with white rice.",
        },
      ],
      sobremesas: [
        {
          id: 1,
          name: "Frutas Vermelhas Flambadas e Sorvete de Creme",
          price: 42,
          description:
            "Flamed red fruits and vanilla ice cream. (Preparadas no Réchaud)",
        },
        {
          id: 2,
          name: "Banana Flambada e Sorvete de Creme",
          price: 42,
          description:
            "Flamed banana and vanilla ice cream. (Preparadas no Réchaud)",
        },
        {
          id: 3,
          name: "Manga Flambada e Sorvete de Creme",
          price: 42,
          description: "Famed mango and vanilla ice cream (Preparadas no Réchaud)",
        },
        {
          id: 4,
          name: "Morangos Flambados e Sorvete de Creme",
          price: 42,
          description: "Flamed strawberry and vanilla ice cream. (Preparadas no Réchaud)",
        },
        {
          id: 5,
          name: "Mela Cotta All´Arancia Con Gelatto Di Crema",
          price: 27,
          description: "Maçã fatiada em leque cozida na calda de laranja quente e sorvete de creme. / baked appel and syrup hot orange and vanilla ice cream.",
        },
        {
          id: 6,
          name: "Petit Gatêau de Chocolate",
          price: 32,
          description: "Pequeno bolo de chocolate recheado com um cremoso chocolate quente, acompanha sorvete de creme e calda quente de chocolate. / little chocolate cake, stuffed with a hot cream chocolate, served with vanilla ice cream and hot syrup chocolate.",
        },
        {
          id: 7,
          name: "Tiramisù",
          price: 36,
          description: "Queijo mascarpone, biscoito champagne, café e cacau, sobremesa típica da Lacio/Roma. / mascarpone, lady fingers cookie, coffee, cacao powered, typical of dessert Lacio/ Roma.",
        },
        {
          id: 8,
          name: "Torta Mousse de Chocolate",
          price: 27,
          description: "chocolate mousse cake",
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
  margin-top: 15px;
}

.menu-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 40px;
}

.menu-item-row {
  display: flex;
  flex-direction: column;
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
