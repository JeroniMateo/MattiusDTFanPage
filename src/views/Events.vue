<script setup>
import { ref, computed, onMounted } from 'vue';
import { supabase } from '@/lib/supabase'; // Asegúrate de que la ruta es correcta
import { faTwitch, faTiktok, faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt, faGhost } from "@fortawesome/free-solid-svg-icons";

// Mapa de iconos para FontAwesome
const iconMap = {
  twitch: faTwitch,
  tiktok: faTiktok,
  discord: faDiscord
};

const rawEventsFromDB = ref([]);
const loading = ref(true);
const activeFilter = ref('all');

// 1. CARGA DE DATOS DESDE SUPABASE
const fetchEvents = async () => {
  loading.value = true;
  try {
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('event_date', { ascending: false }); // Los más nuevos arriba

    if (error) throw error;

    // Mapeamos los datos para que encajen con tus componentes
    rawEventsFromDB.value = data.map(e => ({
      ...e,
      desc: e.desc_text,     // Transformamos desc_text -> desc
      date: e.event_date,    // Transformamos event_date -> date
      icon: iconMap[e.icon] || faTwitch // Convertimos el string en el objeto icono
    }));
  } catch (err) {
    console.error('Error cargando eventos:', err.message);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchEvents();
});

// 2. FILTRADO
const setFilter = (f) => activeFilter.value = f;

const filteredEvents = computed(() => {
  if (activeFilter.value === 'all') return rawEventsFromDB.value;
  return rawEventsFromDB.value.filter(e => e.status === activeFilter.value);
});
</script>

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
        <div v-if="loading" class="text-center py-5">
          <div class="spinner-border text-success" role="status"></div>
          <p class="text-muted mt-3">Sincronizando agenda con el servidor...</p>
        </div>

        <b-row v-else class="g-4">
          <b-col 
            md="6" lg="4" 
            v-for="event in filteredEvents" 
            :key="event.id" 
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
                  <font-awesome-icon :icon="['fas', 'calendar-alt']" class="me-2 text-warning" />
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

        <div v-if="!loading && filteredEvents.length === 0" class="empty-state">
          <font-awesome-icon :icon="['fas', 'ghost']" size="4x" class="mb-3 opacity-25" />
          <p>No se encontraron eventos en esta categoría.</p>
        </div>
      </b-container>
    </section>
  </div>
</template>

<style scoped>
/* FONDO Y HERO */
.events-page {
  background-color: #0d0d0d;
  color: white;
  background-image: linear-gradient(to bottom, #111 0%, #0d0d0d 100%);
}

.events-hero {
  height: 40vh;
  background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), 
              url('https://www.transparenttextures.com/patterns/carbon-fibre.png');
  border-bottom: 2px solid #42b883;
}

.title {
  font-size: 3.5rem;
  font-weight: 900;
  letter-spacing: -1px;
}

.text-glow {
  color: #42b883;
  text-shadow: 0 0 15px rgba(66, 184, 131, 0.6);
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 4px;
}

/* FILTROS (PILLS) */
.filter-pills {
  display: inline-flex;
  background: #1a1a1a;
  padding: 8px;
  border-radius: 50px;
  border: 1px solid #333;
}

.filter-btn {
  background: transparent;
  border: none;
  color: #888;
  padding: 8px 20px;
  border-radius: 40px;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-btn.active {
  background: #42b883;
  color: #000;
  box-shadow: 0 4px 15px rgba(66, 184, 131, 0.3);
}

.live-dot-mini {
  width: 8px;
  height: 8px;
  background: #ff4b2b;
  border-radius: 50%;
  display: inline-block;
  animation: blink 1s infinite;
}

/* EVENT CARDS PRO */
.event-card-pro {
  background: #161616;
  border-radius: 20px;
  padding: 25px;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid #222;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.event-card-pro:hover {
  transform: translateY(-5px);
  border-color: #444;
}

/* Glow dinámico según status */
.event-card-pro.live { border-left: 4px solid #ff4b2b; }
.event-card-pro.upcoming { border-left: 4px solid #42b883; }
.event-card-pro.past { border-left: 4px solid #555; opacity: 0.8; }

.card-header-gaming {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.platform-icon { opacity: 0.8; }

.status-badge {
  font-size: 0.7rem;
  font-weight: 900;
  text-transform: uppercase;
  padding: 4px 12px;
  border-radius: 6px;
  background: #222;
}

.live .status-badge { color: #ff4b2b; border: 1px solid #ff4b2b; }
.upcoming .status-badge { color: #42b883; border: 1px solid #42b883; }

.event-name {
  font-size: 1.4rem;
  font-weight: 800;
  margin-bottom: 10px;
}

.event-description {
  font-size: 0.9rem;
  color: #aaa;
  line-height: 1.6;
}

.card-footer-gaming {
  margin-top: auto;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.event-date {
  font-size: 0.85rem;
  font-weight: 600;
  color: #eee;
}

/* BOTÓN PULSE PARA LIVE */
.btn-pulse {
  animation: pulse-red 2s infinite;
  font-weight: 800;
  font-size: 0.7rem;
}

@keyframes pulse-red {
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 75, 43, 0.7); }
  70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(255, 75, 43, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 75, 43, 0); }
}

@keyframes blink {
  0% { opacity: 1; }
  50% { opacity: 0.3; }
  100% { opacity: 1; }
}

.empty-state {
  padding: 100px 0;
  opacity: 0.5;
}
</style>