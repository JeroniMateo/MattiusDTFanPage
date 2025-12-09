import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia"; // ✅ solo una vez
import './assets/scss/styles.css'


// Bootstrap
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

// AOS - Animate On Scroll
import AOS from "aos";
import "aos/dist/aos.css";

// Font Awesome Vue
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faYoutube,
  faTwitch,
  faTiktok,
  faTwitter,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

library.add(faYoutube, faTwitch, faTiktok, faTwitter, faInstagram, faDiscord);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

// Inicializar AOS
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
});

// Configurar plugins
app.use(createPinia());
app.use(router);
app.use(BootstrapVue3);

app.mount("#app");
