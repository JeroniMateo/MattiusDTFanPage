import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Events from "../views/Events.vue";
import Shop from "../views/Shop.vue";
import Platforms from "../views/Platforms.vue";
import Login from "@/components/Auth/Login.vue";
import SignUp from "@/components/Auth/SignUp.vue";
import Checkout from "@/views/Checkout.vue";
import Profile from "@/views/Profile.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  { path: "/events", name: "Events", component: Events },
  { path: "/shop", name: "Shop", component: Shop },
  { path: "/platforms", name: "Platforms", component: Platforms },
  { path: '/login',name: 'login', component: Login},
  {path: '/signup',name: 'signup', component: SignUp},
  {path: '/checkout',name: 'checkout', component: Checkout},
  {path: '/profile',name: 'profile', component: Profile},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
