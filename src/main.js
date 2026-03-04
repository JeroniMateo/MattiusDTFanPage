import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import './assets/scss/styles.css';

// Bootstrap
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

// Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faYoutube, faTwitch, faTiktok, faTwitter, faInstagram, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faFilter, faSearch, faShoppingCart, faSearchMinus, faTimes, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

library.add(
  faYoutube, faTwitch, faTiktok, faTwitter, faInstagram, faDiscord,
  faFilter, faSearch, faShoppingCart, faSearchMinus, faTimes, faPlus, faMinus
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());
app.use(router);
app.use(BootstrapVue3);

app.mount("#app");