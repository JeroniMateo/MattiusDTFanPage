<template>
  <div class="events-page">

    <!-- Hero -->
    <section class="events-hero d-flex align-items-center justify-content-center text-center">
      <div data-aos="fade-down">
        <h1 class="title">Eventos & Directos</h1>
        <p class="subtitle">Mira mis directos, eventos especiales y actividades recientes</p>
      </div>
    </section>

    <!-- Próximos eventos -->
    <section class="py-5">
      <b-container>
        <h2 class="section-title mb-4" data-aos="fade-right">Próximos Eventos</h2>

        <b-row class="g-4">
          <b-col md="4" v-for="event in upcomingEvents" :key="event.title" data-aos="zoom-in">
            <b-card class="event-card h-100">
              <img :src="event.img" class="event-img" />
              <div class="p-3">
                <h5 class="fw-bold">{{ event.title }}</h5>
                <p class="text-muted small">{{ event.date }} - {{ event.time }}</p>
                <p>{{ event.desc }}</p>
                <a :href="event.link" target="_blank" class="btn btn-warning w-100">Ver Evento</a>
              </div>
            </b-card>
          </b-col>
        </b-row>

      </b-container>
    </section>

    <!-- Eventos pasados -->
    <section class="py-5 bg-light">
      <b-container>
        <h2 class="section-title mb-4" data-aos="fade-right">Eventos Pasados</h2>

        <b-row class="g-4">
          <b-col md="4" v-for="event in pastEvents" :key="event.title" data-aos="fade-up">
            <b-card class="event-card past h-100">
              <img :src="event.img" class="event-img" />
              <div class="p-3">
                <h5 class="fw-bold">{{ event.title }}</h5>
                <p class="text-muted small">{{ event.date }}</p>
                <p>{{ event.desc }}</p>
              </div>
            </b-card>
          </b-col>
        </b-row>

      </b-container>
    </section>

  </div>
</template>

<script setup>
const upcomingEvents = [
  {
    title: "Directo Especial — FIFA 25",
    date: "12 Enero 2025",
    time: "19:00 CET",
    desc: "Partidas, risas y torneos especiales en vivo.",
    img: "@/assets/img/event1.webp",
    link: "https://twitch.tv/mattius_dt"
  },
  {
    title: "Reacción al Partido del Barça",
    date: "18 Enero 2025",
    time: "21:00 CET",
    desc: "Comentamos el partido en directo con la comunidad.",
    img: "@/assets/img/event2.webp",
    link: "https://youtube.com/@mmattiusdt"
  }
]

const pastEvents = [
  {
    title: "Especial 10.000 Seguidores",
    date: "10 Diciembre 2024",
    desc: "Gran celebración en Twitch con sorteos y desafíos.",
    img: "@/assets/img/event3.webp"
  },
  {
    title: "Torneo de Fall Guys",
    date: "22 Noviembre 2024",
    desc: "Competimos con la comunidad en directo.",
    img: "@/assets/img/event4.webp"
  }
]
</script>

<style scoped>
/* HERO */
.events-hero {
  height: 35vh;
  background: url('@/assets/img/events-bg.webp') center/cover no-repeat;
  color: #fff;
  text-shadow: 2px 2px 10px rgba(0,0,0,0.6);
}

.title {
  font-size: 3rem;
  font-weight: 800;
}

.subtitle {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}

/* TITULOS */
.section-title {
  font-weight: 700;
  font-size: 1.8rem;
}

/* CARDS */
.event-card {
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.25s, box-shadow 0.25s;
  cursor: pointer;
}

.event-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.25);
}

.event-img {
  width: 100%;
  height: 170px;
  object-fit: cover;
}

/* Eventos pasados en gris */
.past {
  filter: grayscale(40%);
}
</style>
