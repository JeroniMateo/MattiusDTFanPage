<template>
  <div>
    <!-- Hero -->
    <Hero />

    <!-- Plataformas -->
    <section class="py-5 bg-light">
      <b-container>
        <h2 class="text-center mb-4">Mis Plataformas</h2>
        <b-row class="g-4 justify-content-center">
          <b-col
            md="3"
            v-for="platform in platforms"
            :key="platform.name"
            data-aos="fade-up"
          >
            <b-card :title="platform.name" class="text-center h-100 hover-card">
              <font-awesome-icon :icon="platform.icon" size="3x" class="mb-3" />
              <p>{{ platform.desc }}</p>
              <a
                :href="platform.link"
                target="_blank"
                class="btn btn-warning w-100"
              >
                Visitar
              </a>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- Eventos recientes -->
    <section class="py-5">
      <b-container>
        <h2 class="text-center mb-4">Eventos recientes</h2>
        <b-row class="g-4">
          <b-col
            md="4"
            v-for="event in events"
            :key="event.title"
            data-aos="fade-up"
          >
            <b-card :title="event.title" class="h-100 hover-card">
              <font-awesome-icon :icon="event.icon" size="3x" class="mb-3" />
              <p>{{ event.desc }}</p>
              <small class="text-muted">{{ event.date }}</small>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>

    <!-- Tienda destacada -->
    <section class="py-5 bg-light">
      <b-container>
        <h2 class="text-center mb-4">Tienda destacada</h2>
        <b-row class="g-4">
          <b-col
            md="3"
            v-for="product in featuredProducts"
            :key="product.name"
            data-aos="fade-up"
          >
            <b-card :title="product.name" class="text-center h-100 hover-card">
              <img
                :src="product.img"
                :alt="product.name"
                class="mb-3"
                style="height: 120px; object-fit: cover"
              />
              <p>{{ product.desc }}</p>
              <b-button variant="warning">Comprar</b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script setup>
import Hero from "@/components/Hero.vue";

// JSON data
import rawProducts from "@/data/products.json";
import rawEvents from "@/data/events.json";
import platformsData from "@/data/platforms.json";

// Font Awesome icons
import { 
  faYoutube, faTwitch, faTiktok, faTwitter, faInstagram, faDiscord 
} from "@fortawesome/free-brands-svg-icons";

// -----------------------------
// Products
// -----------------------------
const products = rawProducts.map(p => ({
  ...p,
  img: new URL(`../assets/img/${p.img}`, import.meta.url).href
}));
const featuredProducts = products.slice(0, 4); // show first 4

// -----------------------------
// Platforms
// -----------------------------
const platformIconMap = {
  youtube: faYoutube,
  twitch: faTwitch,
  tiktok: faTiktok,
  twitter: faTwitter,
  instagram: faInstagram,
  discord: faDiscord,
};

const platforms = platformsData.map(p => ({
  ...p,
  icon: platformIconMap[p.icon.toLowerCase()] || faYoutube
}));

// -----------------------------
// Events
// -----------------------------
const eventIconMap = {
  twitch: faTwitch,
  tiktok: faTiktok,
  discord: faDiscord
};

const events = rawEvents.map(e => ({
  ...e,
  icon: eventIconMap[e.icon.toLowerCase()] || faTwitch
}));
</script>

<style scoped>
h2 {
  color: #111;
  font-weight: 700;
}

/* Cards hover */
.hover-card {
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  background-color: var(--dark-bg);
  color: var(--text-color);
}

.hover-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
}

/* Secciones */
section {
  scroll-margin-top: 70px; /* si navbar fijo */
}
</style>
