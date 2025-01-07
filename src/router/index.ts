import { createRouter, createWebHashHistory } from "vue-router";

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
    path: "/cardapio",
    name: "cardapio",
    component: Menu,
  },
  {
    path: "/reservar",
    name: "reservar",
    component: Reservar,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
