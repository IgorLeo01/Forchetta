<template>
    <div class="menu-page bg-secondary text-white">
      <header class="menu-header py-12">
        <h1 class="text-center text-primary text-6xl font-baskervville uppercase">
          Cardápio
        </h1>
      </header>
      <section class="menu-section">
        <div class="menu-category">
          <h2 class="text-center text-primary text-5xl font-baskervville mb-12">
            Entrada
          </h2>
          <div class="menu-grid">
            <div v-for="item in menuItems" :key="item.id" class="menu-item">
              <div class="menu-item-title flex justify-between items-center">
                <h3 class="text-xl font-bold">{{ item.name }}</h3>
                <span class="text-lg text-primary">${{ item.price }}</span>
              </div>
              <p class="menu-item-description text-grayText text-sm italic">
                {{ item.description }}
              </p>
              <p class="menu-item-extra text-primary text-xs mt-2">
                {{ item.extra }}
              </p>
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
        menuItems: [
          {
            id: 1,
            name: "Spaghetti Alla Carbonara",
            price: 49,
            description: "Lorem passionate chefs masterfully",
            extra: "Extra free juice",
          },
          {
            id: 2,
            name: "Croquetas de Jamón",
            price: 19,
            description: "Lorem passionate chefs masterfully",
            extra: "Extra free juice",
          },
          {
            id: 3,
            name: "Paella Valenciana",
            price: 59,
            description: "Lorem passionate chefs masterfully",
            extra: "Extra free juice",
          },
          {
            id: 4,
            name: "Peri Peri Prawns",
            price: 39,
            description: "Lorem passionate chefs masterfully",
            extra: "Extra free juice",
          },
          {
            id: 5,
            name: "Golden Saffron Risotto",
            price: 99,
            description: "Lorem passionate chefs masterfully",
            extra: "Extra free juice",
          },
          {
            id: 6,
            name: "Caviar-Topped Oysters",
            price: 79,
            description: "Lorem passionate chefs masterfully",
            extra: "Extra free juice",
          },
          {
            id: 7,
            name: "Foie Gras and Fig Terrine",
            price: 59,
            description: "Lorem passionate chefs masterfully",
            extra: "Extra free juice",
          },
          {
            id: 8,
            name: "Truffle-Infused Filet Mignon",
            price: 29,
            description: "Lorem passionate chefs masterfully",
            extra: "Extra free juice",
          },
          {
            id: 9,
            name: "Butter Poached Lobster",
            price: 39,
            description: "Lorem passionate chefs masterfully",
            extra: "Extra free juice",
          },
          {
            id: 10,
            name: "Herb-Crusted Rack of Lamb",
            price: 79,
            description: "Lorem passionate chefs masterfully",
            extra: "Extra free juice",
          },
        ],
      };
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
  }
  
  .menu-section {
    padding: 40px 20px;
  }
  
  .menu-category {
    margin: 0 auto;
    max-width: 1200px;
  }
  
  .menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }
  
  .menu-item {
    background: #040d10;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease;
  }
  
  .menu-item:hover {
    transform: scale(1.05);
  }
  
  .menu-item-title {
    margin-bottom: 10px;
  }
  
  .menu-item-description {
    margin-bottom: 8px;
  }
  
  .menu-item-extra {
    color: #ffa000;
    font-style: italic;
  }
  </style>
