<template>
  <div class="events-page min-vh-100">

    <section class="events-hero d-flex align-items-center justify-content-center text-center">
      <div class="hero-content" data-aos="zoom-out">
        <h1 class="title">EVENTOS <span class="text-glow">&</span> DIRECTOS</h1>
        <h2 class="subtitle">La hoja de ruta oficial de Mattius DT</h2>
      </div>
    </section>

    <section class="py-4">
      <b-container class="text-center">
        <div class="filter-pills shadow-lg">
          <button 
            v-for="f in ['all', 'live', 'upcoming', 'past']" 
            :key="f"
            :class="['filter-btn', { active: activeFilter === f }]"
            @click="setFilter(f)"
          >
            <span v-if="f === 'live'" class="live-dot-mini"></span>
            {{ f === 'all' ? 'Todos' : f === 'live' ? 'En Directo' : f === 'upcoming' ? 'Próximos' : 'Pasados' }}
          </button>
        </div>
      </b-container>
    </section>

    <section class="py-5">
      <b-container>
        <b-row class="g-4">
          <b-col 
            md="6" lg="4" 
            v-for="event in filteredEvents" 
            :key="event.title" 
            data-aos="fade-up"
          >
            <div :class="['event-card-pro', event.status]">
              <div class="card-glow"></div>
              
              <div class="card-header-gaming">
                <font-awesome-icon :icon="event.icon" size="2x" class="platform-icon" />
                <span class="status-badge">{{ event.status }}</span>
              </div>

              <div class="card-body-gaming">
                <h3 class="event-name">{{ event.title }}</h3>
                <p class="event-description">{{ event.desc }}</p>
              </div>

              <div class="card-footer-gaming">
                <span class="event-date">
                  <font-awesome-icon icon="calendar-alt" class="me-2 text-warning" />
                  {{ event.date }}
                </span>
                <b-button 
                  v-if="event.status === 'live'" 
                  variant="danger" 
                  size="sm" 
                  class="btn-pulse"
                >
                  VER AHORA
                </b-button>
              </div>
            </div>
          </b-col>
        </b-row>

        <div v-if="filteredEvents.length === 0" class="empty-state">
          <font-awesome-icon icon="ghost" size="4x" class="mb-3 opacity-25" />
          <p>No se encontraron eventos en esta categoría.</p>
        </div>
      </b-container>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import rawEvents from '@/data/events.json';
import { faTwitch, faTiktok, faDiscord } from "@fortawesome/free-brands-svg-icons";

// Mapa de iconos
const iconMap = {
  twitch: faTwitch,
  tiktok: faTiktok,
  discord: faDiscord
};

const events = rawEvents.map(e => ({
  ...e,
  icon: iconMap[e.icon] || faTwitch
}));

const activeFilter = ref('all');
const setFilter = (f) => activeFilter.value = f;

const filteredEvents = computed(() => {
  if (activeFilter.value === 'all') return events;
  return events.filter(e => e.status === activeFilter.value);
});
</script>

<style scoped>
.events-page {
  background-color: var(--dark-bg);
  color: white;
}

/* HERO PRO */
.events-hero {
  height: 40vh;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
              url('../assets/img/events-bg.webp') center/cover no-repeat;
  border-bottom: 3px solid var(--primary-color);
}

.title {
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: -2px;
  color: #fff;
}

.text-glow {
  color: var(--primary-color);
  text-shadow: 0 0 20px var(--primary-color);
}

/* FILTROS GAMING */
.filter-pills {
  display: inline-flex;
  background: #1a1a1a;
  padding: 5px;
  border-radius: 50px;
  border: 1px solid #333;
}

.filter-btn {
  background: transparent;
  border: none;
  color: #888;
  padding: 10px 25px;
  border-radius: 50px;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}

.filter-btn.active {
  background: var(--primary-color);
  color: #000;
  box-shadow: 0 0 15px var(--primary-color);
}

/* CARDS PRO */
.event-card-pro {
  background: #141414;
  border-radius: 15px;
  padding: 25px;
  position: relative;
  border: 1px solid #222;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.event-card-pro:hover {
  transform: translateY(-10px) scale(1.02);
  border-color: #444;
}

/* Estado Live Especial */
.event-card-pro.live {
  border-color: #ff1900;
  box-shadow: inset 0 0 20px rgba(255, 25, 0, 0.1);
}

.card-header-gaming {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.platform-icon {
  color: var(--primary-color);
}

.status-badge {
  font-size: 0.7rem;
  font-weight: 900;
  text-transform: uppercase;
  background: #222;
  padding: 4px 10px;
  border-radius: 5px;
  letter-spacing: 1px;
}

.live .status-badge {
  background: #ff1900;
  color: #fff;
}

.event-name {
  font-size: 1.5rem;
  font-weight: 800;
  margin-bottom: 10px;
}

.event-description {
  color: #aaa;
  font-size: 0.9rem;
  line-height: 1.5;
}

.card-footer-gaming {
  margin-top: auto;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.event-date {
  font-weight: 700;
  font-size: 0.85rem;
}

/* Animaciones */
.btn-pulse {
  animation: pulse-red 2s infinite;
  font-weight: 800;
}

@keyframes pulse-red {
  0% { box-shadow: 0 0 0 0 rgba(255, 25, 0, 0.7); }
  70% { box-shadow: 0 0 0 10px rgba(255, 25, 0, 0); }
  100% { box-shadow: 0 0 0 0 rgba(255, 25, 0, 0); }
}

.live-dot-mini {
  display: inline-block;
  width: 8px;
  height: 8px;
  background: #ff1900;
  border-radius: 50%;
  margin-right: 5px;
  box-shadow: 0 0 5px #ff1900;
}

.empty-state {
  padding: 100px 0;
  text-align: center;
  color: #444;
}
</style>