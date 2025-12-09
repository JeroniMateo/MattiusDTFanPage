import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Events from "../views/Events.vue";
import Shop from "../views/Shop.vue";
import Platforms from "../views/Platforms.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  { path: "/eventos", name: "Events", component: Events },
  { path: "/shop", name: "Shop", component: Shop },
  { path: "/platforms", name: "Platforms", component: Platforms },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
