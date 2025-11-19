<template>
  <div class="platforms-page">

    <!-- Header -->
    <section class="platforms-header d-flex align-items-center justify-content-center text-center">
      <h1 data-aos="fade-down">Mis Plataformas</h1>
      <p data-aos="fade-up" data-aos-delay="200">Sígueme y descubre mi contenido en todas mis redes</p>
    </section>

    <!-- Cards de plataformas -->
    <section class="py-5">
      <b-container>
        <b-row class="g-4 justify-content-center">
          <b-col md="3" v-for="platform in platforms" :key="platform.name" data-aos="fade-up">
            <b-card class="text-center h-100 hover-card">
              <img :src="platform.img" :alt="platform.name" class="mb-3" style="height: 80px;">
              <h5>{{ platform.name }}</h5>
              <p>{{ platform.desc }}</p>
              <a :href="platform.link" target="_blank" class="btn btn-warning">Visitar</a>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>

  </div>
</template>

<script setup>
const platforms = [
  { name: 'YouTube', img: '@/assets/img/youtube.webp', desc: 'Gameplays y deportes', link: 'https://www.youtube.com/@mmattiusdt' },
  { name: 'Twitch', img: '@/assets/img/twitch.webp', desc: 'Streaming en vivo', link: 'https://www.twitch.tv/mattius_dt' },
  { name: 'TikTok', img: '@/assets/img/tiktok.webp', desc: 'Momentos cortos', link: 'https://www.tiktok.com/@mattius_dt' },
  { name: 'Instagram', img: '@/assets/img/instagram.webp', desc: 'Fotos y contenido', link: 'https://www.instagram.com/mattius_dt/' },
  { name: 'X / Twitter', img: '@/assets/img/twitter.webp', desc: 'Últimas noticias y tweets', link: 'https://x.com/MattiusDT2' },
  { name: 'Discord', img: '@/assets/img/discord.webp', desc: 'Comunidad y chat', link: 'https://discord.com/invite/56HWrAP9AT' }
]
</script>

<style scoped>
.platforms-header {
  height: 30vh;
  background: url('@/assets/img/platforms-bg.webp') center/cover no-repeat;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
}

.platforms-header h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.platforms-header p {
  font-size: 1.2rem;
}

/* Hover cards */
.hover-card {
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.hover-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 25px rgba(0,0,0,0.3);
}
</style>
