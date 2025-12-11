<template>
  <div class="events-page">

    <!-- Hero -->
    <section class="events-hero d-flex align-items-center justify-content-center text-center">
      <div data-aos="fade-down">
        <h1 class="title">Eventos & Directos</h1>
        <h2 class="subtitle">Mira mis directos, eventos especiales y actividades recientes</h2>
      </div>
    </section>

    <!-- Filtros -->
    <section class="py-4 text-center">
      <b-button-group>
        <b-button 
          :variant="activeFilter === 'all' ? 'success' : 'outline-secondary'" 
          @click="setFilter('all')"
        >
          Todos
        </b-button>
        <b-button 
          :variant="activeFilter === 'live' ? 'success' : 'outline-secondary'" 
          @click="setFilter('live')"
        >
          En directo
        </b-button>
        <b-button 
          :variant="activeFilter === 'upcoming' ? 'success' : 'outline-secondary'" 
          @click="setFilter('upcoming')"
        >
          Próximos
        </b-button>
        <b-button 
          :variant="activeFilter === 'past' ? 'success' : 'outline-secondary'" 
          @click="setFilter('past')"
        >
          Pasados
        </b-button>
      </b-button-group>
    </section>

    <!-- Lista de eventos -->
    <section class="py-5">
      <b-container>
        <b-row class="g-4">
          <b-col 
            md="4" 
            v-for="event in filteredEvents" 
            :key="event.title" 
            data-aos="fade-up"
          >
            <b-card :title="event.title" class="h-100 hover-card text-center">
              <font-awesome-icon :icon="event.icon" size="2x" class="mb-3"/>
              <h4>{{ event.desc }}</h4>
              <small :style="{ color: 'var(--btn-warning)' }">{{ event.date }}</small>
            </b-card>
          </b-col>
        </b-row>
        <p v-if="filteredEvents.length === 0" class="text-center mt-3 text-muted">
          No hay eventos para este filtro.
        </p>
      </b-container>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import rawEvents from '@/data/events.json';
import { 
  faTwitch, faTiktok, faDiscord 
} from "@fortawesome/free-brands-svg-icons";

// -----------------------------
// Icons
// -----------------------------
const iconMap = {
  twitch: faTwitch,
  tiktok: faTiktok,
  discord: faDiscord
};

// Map events and attach FontAwesome icons
const events = rawEvents.map(e => ({
  ...e,
  icon: iconMap[e.icon] || faTwitch // fallback
}));

// -----------------------------
// Filter state
// -----------------------------
const activeFilter = ref('all');

const setFilter = (filter) => {
  activeFilter.value = filter;
};

// Computed filtered events
const filteredEvents = computed(() => {
  if (activeFilter.value === 'all') return events;
  return events.filter(e => e.status === activeFilter.value);
});
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

/* Buttons filter */
.b-button-group .btn {
  margin: 0 0.25rem;
}

/* CARDS */
.hover-card {
  border-radius: 12px;
  transition: transform 0.25s, box-shadow 0.25s;
  cursor: pointer;
  background-color: var(--dark-bg);
  color: var(--text-color);
}

.hover-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 30px rgba(0,0,0,0.25);
}

h1, h2 {
  color: var(--text-color);
}
small {
  color: var(--accent-orange-light);
}
h4{
  color: var(--secondary-color)
}
</style>
