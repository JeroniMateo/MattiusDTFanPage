<template>
  <div>
    <!-- Hero -->
    <Hero />

    <!-- Plataformas -->
    <section class="py-5 bg-light">
      <b-container>
        <h2 class="text-center mb-4">Mis Plataformas</h2>
        <b-row class="g-4 justify-content-center">
          <b-col md="3" v-for="platform in platforms" :key="platform.name">
            <b-card :title="platform.name" class="text-center h-100">
              <img :src="platform.img" :alt="platform.name" class="mb-3" style="height: 80px;" />
              <p>{{ platform.desc }}</p>
              <a :href="platform.link" target="_blank" class="btn btn-warning">Visitar</a>
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
          <b-col md="4" v-for="event in events" :key="event.title">
            <b-card :title="event.title" class="h-100">
              <img :src="event.img" :alt="event.title" class="mb-3" style="height: 150px; object-fit: cover;" />
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
          <b-col md="3" v-for="product in products" :key="product.name">
            <b-card :title="product.name" class="text-center h-100">
              <img :src="product.img" :alt="product.name" class="mb-3" style="height: 120px; object-fit: cover;" />
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
import Hero from '@/components/Hero.vue'

const platforms = [
  { name: 'YouTube', img: '@/assets/img/youtube.webp', desc: 'Gameplays y deportes', link: 'https://www.youtube.com/@mmattiusdt' },
  { name: 'Twitch', img: '@/assets/img/twitch.webp', desc: 'Streaming en vivo', link: 'https://www.twitch.tv/mattius_dt' },
  { name: 'TikTok', img: '@/assets/img/tiktok.webp', desc: 'Momentos cortos', link: 'https://www.tiktok.com/@mattius_dt' },
  { name: 'Instagram', img: '@/assets/img/instagram.webp', desc: 'Fotos y contenido', link: 'https://www.instagram.com/mattius_dt/' }
]

const events = [
  { title: 'Directo especial', img: '@/assets/img/event1.webp', desc: 'Gameplays épicos en directo', date: '12 Nov 2025' },
  { title: 'Torneo online', img: '@/assets/img/event2.webp', desc: 'Competición con premios', date: '20 Nov 2025' },
  { title: 'Q&A con fans', img: '@/assets/img/event3.webp', desc: 'Preguntas y respuestas', date: '25 Nov 2025' }
]

const products = [
  { name: 'Camiseta oficial', img: '@/assets/img/product1.webp', desc: 'Camiseta de calidad premium' },
  { name: 'Gorra Mattius DT', img: '@/assets/img/product2.webp', desc: 'Gorra ajustable y cómoda' },
  { name: 'Taza Gamer', img: '@/assets/img/product3.webp', desc: 'Para café o té mientras juegas' },
  { name: 'Sudadera Hoodie', img: '@/assets/img/product4.webp', desc: 'Hoodie oficial Mattius DT' }
]
</script>

<style scoped>
h2 {
  color: #111;
  font-weight: 700;
}

section {
  scroll-margin-top: 70px; /* si navbar fijo */
}
/* Cards con efecto hover */
.b-card {
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.b-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.3);
}

</style>
