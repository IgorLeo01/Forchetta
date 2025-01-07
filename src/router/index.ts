import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Sobre from "../views/Sobre.vue";
import Menu from "../views/Menu.vue";
import Reservar from "../views/Reservar.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/sobre",
    name: "sobre",
    component: Sobre,
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu,
  },
  {
    path: "/reservar",
    name: "reservar",
    component: Reservar,
  },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition; // Restaura a posição salva, se existir
      }
  
      // Se estivermos indo para uma nova página, garantimos que o scroll vá ao topo
      return { top: 0 };
    },
  });

export default router;
