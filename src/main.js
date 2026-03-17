import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import './assets/scss/styles.css';

import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// ICONOS DE MARCAS (Social Media)
import { 
  faYoutube, faTwitch, faTiktok, faTwitter, faInstagram, faDiscord 
} from "@fortawesome/free-brands-svg-icons";

// ICONOS SÓLIDOS (Interfaz y UI)
import { 
  faFilter, faSearch, faShoppingCart, faSearchMinus, faTimes, 
  faPlus, faMinus, faGhost, faCartPlus, faTrashAlt, faInfoCircle,
  faAnglesLeft, faAnglesRight, faChevronLeft, faChevronRight,
  faCalendarAlt, faExternalLinkAlt // <--- ESTOS FALTABAN
} from "@fortawesome/free-solid-svg-icons";

// AÑADIR TODOS A LA LIBRERÍA
library.add(
  faYoutube, faTwitch, faTiktok, faTwitter, faInstagram, faDiscord,
  faFilter, faSearch, faShoppingCart, faSearchMinus, faTimes, 
  faPlus, faMinus, faGhost, faCartPlus, faTrashAlt, faInfoCircle,
  faAnglesLeft, faAnglesRight, faChevronLeft, faChevronRight,
  faCalendarAlt, faExternalLinkAlt // <--- AÑADIDOS AQUÍ TAMBIÉN
);

const app = createApp(App);

// Registro global del componente
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.use(BootstrapVue3);
app.mount("#app");