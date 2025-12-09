<template>
  <div class="platforms-page">
    <!-- Header -->
    <section
      class="platforms-header d-flex align-items-center justify-content-center text-center"
    >
      <div>
        <h1 data-aos="fade-down">Mis Plataformas</h1>
        <h2 data-aos="fade-up" data-aos-delay="200">
          Sígueme y descubre mi contenido en todas mis redes
        </h2>
      </div>
    </section>

    <!-- Cards de plataformas -->
    <section class="py-5">
      <b-container>
        <b-row class="g-4 justify-content-center">
          <b-col
            md="3"
            v-for="platform in platforms"
            :key="platform.name"
            data-aos="fade-up"
          >
            <b-card class="text-center h-100 hover-card" id="targetCard">
              <font-awesome-icon :icon="platform.icon" size="3x" class="mb-3" />
              <h5>{{ platform.name }}</h5>
              <p>{{ platform.desc }}</p>
              <a
                :href="platform.link"
                target="_blank"
                class="btn btn-warning w-100"
                >Visitar</a
              >
            </b-card>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script setup>
import {
  faYoutube,
  faTwitch,
  faTiktok,
  faTwitter,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

const platforms = [
  {
    name: "YouTube",
    icon: faYoutube,
    desc: "Gameplays y deportes",
    link: "https://www.youtube.com/@thewildhouse4609",
  },
  {
    name: "Twitch",
    icon: faTwitch,
    desc: "Streaming en vivo",
    link: "https://www.twitch.tv/mattius_dt",
  },
  {
    name: "Kick",
    icon: faTiktok,
    desc: "Streams alternativos",
    link: "https://kick.com/mattius-dt",
  },
  {
    name: "TikTok",
    icon: faTiktok,
    desc: "Momentos cortos",
    link: "https://www.tiktok.com/@mattius_dt",
  },
  {
    name: "Instagram",
    icon: faInstagram,
    desc: "Fotos y contenido",
    link: "https://www.instagram.com/mattius_dt/",
  },
  {
    name: "X / Twitter",
    icon: faTwitter,
    desc: "Tweets y noticias",
    link: "https://x.com/MattiusDT2",
  },
  {
    name: "Discord",
    icon: faDiscord,
    desc: "Comunidad y chat",
    link: "https://discord.com/invite/56HWrAP9AT",
  },
];
</script>

<style scoped>
/* ===== HEADER ===== */
.platforms-header {
  height: 32vh;
  background-size: cover;
  background-position: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
}

.platforms-header h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.platforms-header p {
  font-size: 1.2rem;
}

/* ===== CARD STYLE ===== */
.platform-logo {
  height: 80px;
  user-select: none;
}

.hover-card {
  background: #181818;
  border: 1px solid #2b2b2b;
  color: white;
  border-radius: 14px;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.3s;
  padding: 20px;
  cursor: pointer;
}

.hover-card h5 {
  color: var(--primary-color);
  font-weight: 600;
}

.hover-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.45);
  border-color: var(--primary-color);
}

/* ===== BUTTON ===== */
.btn-warning {
  background-color: var(--primary-color) !important;
  border: none !important;
  color: white !important;
  font-weight: 600;
  transition: 0.2s;
}

.btn-warning:hover {
  background-color: var(--accent-orange-light) !important;
}
h1 {
  color: red;
}
h2 {
  color: orange;
}
.targetCard {
  color: orange;
}
</style>
