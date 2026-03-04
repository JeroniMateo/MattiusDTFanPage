<template>
  <div class="home-page">
    <Hero />

    <section class="py-5 bg-dark-section">
      <b-container>
        <h2 class="text-center section-title" data-aos="fade-down">Mis Plataformas</h2>
        <b-row class="g-4 justify-content-center">
          <b-col
            md="3"
            sm="6"
            v-for="platform in platforms"
            :key="platform.name"
            data-aos="zoom-in"
          >
            <a :href="platform.link" target="_blank" class="text-decoration-none">
              <b-card class="text-center h-100 platform-card border-0">
                <font-awesome-icon 
                  :icon="platform.icon" 
                  size="3x" 
                  :class="['mb-3', 'icon-' + platform.name.toLowerCase()]" 
                />
                <h4 class="platform-name">{{ platform.name }}</h4>
                <p class="small text-muted">{{ platform.desc }}</p>
                <div class="visit-badge">Visitar</div>
              </b-card>
            </a>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="py-5">
      <b-container>
        <div class="d-flex justify-content-between align-items-center mb-4">
          <h2 class="section-title mb-0">Eventos Recientes</h2>
          <router-link to="/events" class="btn btn-outline-success btn-sm">Ver todos</router-link>
        </div>
        <b-row class="g-4">
          <b-col
            md="4"
            v-for="event in events.slice(0, 3)" 
            :key="event.title"
            data-aos="fade-up"
          >
            <b-card class="h-100 event-card border-0">
              <div class="d-flex align-items-center mb-3">
                <font-awesome-icon :icon="event.icon" size="2x" class="me-3 text-success" />
                <h5 class="mb-0">{{ event.title }}</h5>
              </div>
              <p class="text-secondary small">{{ event.desc }}</p>
              <div class="mt-auto d-flex justify-content-between align-items-center">
                <small class="text-warning font-weight-bold">{{ event.date }}</small>
                <span class="badge-status" :class="event.status">{{ event.status }}</span>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <section class="py-5 bg-dark-section">
      <b-container>
        <h2 class="text-center section-title mb-5">Tienda Destacada</h2>
        <b-row class="g-4">
          <b-col
            md="3"
            sm="6"
            v-for="product in featuredProducts"
            :key="product.name"
            data-aos="flip-left"
          >
            <b-card class="text-center h-100 product-card border-0">
              <div class="product-img-container mb-3">
                <img :src="product.img" :alt="product.name" class="img-fluid product-img" />
              </div>
              <h5 class="text-white">{{ product.name }}</h5>
              <p class="small text-muted mb-3">{{ product.desc }}</p>
              <b-button variant="success" class="w-100">Comprar ahora</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script setup>
// Tu lógica de script se mantiene igual, está muy bien planteada.
// Solo asegúrate de que el event.status (live, upcoming, past) venga en tu JSON.
import Hero from "@/components/Hero.vue";
import rawProducts from "@/data/products.json";
import rawEvents from "@/data/events.json";
import platformsData from "@/data/platforms.json";
import { 
  faYoutube, faTwitch, faTiktok, faTwitter, faInstagram, faDiscord 
} from "@fortawesome/free-brands-svg-icons";

const products = rawProducts.map(p => ({
  ...p,
  img: new URL(`../assets/img/${p.img}`, import.meta.url).href
}));
const featuredProducts = products.slice(0, 4);

const platformIconMap = {
  youtube: faYoutube, twitch: faTwitch, tiktok: faTiktok,
  twitter: faTwitter, instagram: faInstagram, discord: faDiscord,
};

const platforms = platformsData.map(p => ({
  ...p,
  icon: platformIconMap[p.icon.toLowerCase()] || faYoutube
}));

const eventIconMap = { twitch: faTwitch, tiktok: faTiktok, discord: faDiscord };
const events = rawEvents.map(e => ({
  ...e,
  icon: eventIconMap[e.icon.toLowerCase()] || faTwitch
}));
</script>

<style scoped>
.home-page {
  background-color: #121212; /* Fondo general más oscuro */
}

.section-title {
  color: #fff;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.bg-dark-section {
  background-color: #1a1a1a;
}

/* Platform Cards Custom */
.platform-card {
  background: #252525;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent !important;
}
.platform-card:hover {
  transform: translateY(-10px);
  background: #333;
  border-bottom: 3px solid #42b883 !important;
}

/* Icon Colors */
.icon-twitch { color: #9146ff; }
.icon-youtube { color: #ff0000; }
.icon-discord { color: #5865f2; }
.icon-tiktok { color: #00f2ea; }

/* Product Images */
.product-img-container {
  overflow: hidden;
  border-radius: 10px;
  background: #fff;
  padding: 10px;
}
.product-img {
  transition: transform 0.5s ease;
  height: 150px;
  object-fit: contain;
}
.product-card:hover .product-img {
  transform: scale(1.1);
}

/* Badges */
.badge-status {
  font-size: 0.7rem;
  padding: 2px 8px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: bold;
}
.live { background: #ff4b2b; color: white; }
.past { background: #444; color: #bbb; }
</style>