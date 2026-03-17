<template>
  <div class="home-page min-vh-100">
    <Hero />

    <div v-if="loading" class="text-center py-5">
      <div class="spinner-border text-success" style="width: 3rem; height: 3rem;" role="status"></div>
      <p class="mt-3 text-success fw-bold">SINCRONIZANDO CON EL SERVIDOR...</p>
    </div>

    <template v-else>
      <section class="py-5 bg-dark-section">
        <b-container>
          <h2 class="text-center section-title mb-5" data-aos="fade-down">Conecta conmigo</h2>
          <b-row class="g-4 justify-content-center">
            <b-col md="3" sm="6" v-for="platform in platforms" :key="platform.id" data-aos="zoom-in">
              <a :href="platform.link" target="_blank" class="text-decoration-none">
                <b-card class="text-center h-100 platform-card border-0 shadow-sm">
                  <div class="icon-wrapper mb-3">
                    <font-awesome-icon 
                      :icon="platform.icon" 
                      size="3x" 
                      :class="['platform-icon', 'icon-' + (platform.name?.toLowerCase() || 'default')]" 
                    />
                  </div>
                  <h4 class="platform-name text-white fw-bold">{{ platform.name }}</h4>
                  <p class="small text-muted">{{ platform.desc }}</p>
                  <div class="visit-badge mt-3">ENTRAR</div>
                </b-card>
              </a>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <section class="py-5">
        <b-container>
          <div class="d-flex justify-content-between align-items-center mb-5">
            <h2 class="section-title mb-0">Eventos Recientes</h2>
            <router-link to="/events" class="btn btn-outline-success px-4 rounded-pill">Ver todos</router-link>
          </div>
          <b-row class="g-4">
            <b-col md="4" v-for="event in events" :key="event.id" data-aos="fade-up">
              <b-card class="h-100 event-card border-0 shadow">
                <div class="d-flex align-items-center mb-3">
                  <font-awesome-icon :icon="event.icon" size="2x" class="me-3 text-success" />
                  <h5 class="mb-0 text-white fw-bold">{{ event.title }}</h5>
                </div>
                <p class="text-secondary small">{{ event.desc }}</p>
                <div class="mt-auto d-flex justify-content-between align-items-center pt-3 border-top border-secondary">
                  <small class="text-warning fw-bold">
                    <font-awesome-icon icon="calendar-alt" class="me-1" />
                    {{ event.date }}
                  </small>
                  <span class="badge-status" :class="event.status?.toLowerCase()">{{ event.status }}</span>
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
            <b-col md="3" sm="6" v-for="product in featuredProducts" :key="product.id" data-aos="flip-left">
              <b-card class="text-center h-100 product-card border-0 shadow">
                <div class="product-img-container mb-3">
                  <img :src="product.img" :alt="product.name" class="img-fluid product-img" />
                </div>
                <h5 class="text-white fw-bold">{{ product.name }}</h5>
                <p class="text-success fs-4 fw-bold mb-3">{{ product.price }}€</p>
                <router-link to="/shop" class="btn btn-success w-100 fw-bold py-2 rounded-3">COMPRAR</router-link>
              </b-card>
            </b-col>
          </b-row>
        </b-container>
      </section>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabase';
import Hero from "@/components/Hero.vue";

// Iconos de FontAwesome (Marcas y Sólidos)
import { 
  faYoutube, faTwitch, faTiktok, faTwitter, faInstagram, faDiscord 
} from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

// Estados reactivos
const featuredProducts = ref([]);
const events = ref([]);
const platforms = ref([]);
const loading = ref(true);

// Mapas de iconos (Prevenimos errores si el string de la BD no coincide)
const platformIconMap = {
  youtube: faYoutube,
  twitch: faTwitch,
  tiktok: faTiktok,
  twitter: faTwitter,
  instagram: faInstagram,
  discord: faDiscord,
};
const eventIconMap = { 
  twitch: faTwitch, 
  tiktok: faTiktok, 
  discord: faDiscord 
};

const fetchData = async () => {
  loading.value = true;
  try {
    // 1. CARGAR PRODUCTOS
    const { data: pData, error: pError } = await supabase.from('products').select('*').limit(4);
    if (pError) throw pError;
    if (pData) {
      featuredProducts.value = pData.map(p => ({
        ...p,
        // Usamos p.image que es el nombre del archivo en assets
        img: new URL(`../assets/img/${p.image}`, import.meta.url).href
      }));
    }

    // 2. CARGAR EVENTOS
    const { data: eData, error: eError } = await supabase.from('events').select('*').order('event_date', { ascending: false }).limit(3);
    if (eError) throw eError;
    if (eData) {
      events.value = eData.map(e => ({
        ...e,
        desc: e.desc_text || '',
        date: e.event_date || '',
        icon: eventIconMap[e.icon?.toLowerCase()] || faTwitch
      }));
    }

    // 3. CARGAR PLATAFORMAS
    const { data: plData, error: plError } = await supabase.from('platforms').select('*').order('order_index', { ascending: true });
    if (plError) throw plError;
    if (plData) {
      platforms.value = plData.map(p => ({
        ...p,
        desc: p.desc_text || '',
        icon: platformIconMap[p.icon?.toLowerCase()] || faYoutube
      }));
    }

  } catch (error) {
    console.error("🚀 Error en Supabase:", error.message || error);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchData();
});
</script>

<style scoped>
/* BASE */
.home-page { 
  background-color: #0a0a0a; 
  color: white; 
}
.section-title { 
  font-weight: 900; 
  text-transform: uppercase; 
  letter-spacing: 2px; 
  color: #fff;
}
.bg-dark-section { 
  background-color: #121212; 
}

/* PLATFORMS */
.platform-card { 
  background: #1a1a1a; 
  transition: all 0.4s ease; 
  border-radius: 15px; 
}
.platform-card:hover { 
  transform: translateY(-10px); 
  background: #222; 
}
.icon-twitch { color: #9146ff; }
.icon-youtube { color: #ff0000; }
.icon-discord { color: #5865f2; }
.icon-tiktok { color: #00f2ea; }
.visit-badge { 
  background: rgba(66, 184, 131, 0.1); 
  color: #42b883; 
  padding: 5px 15px; 
  border-radius: 20px; 
  font-size: 0.7rem; 
  font-weight: 900; 
}

/* EVENTS */
.event-card { 
  background: #1a1a1a; 
  border-radius: 15px; 
  padding: 1rem; 
}
.badge-status { 
  font-size: 0.7rem; 
  padding: 4px 10px; 
  border-radius: 6px; 
  text-transform: uppercase; 
  font-weight: 900; 
}
.live { background: #ff4b2b; color: white; box-shadow: 0 0 10px rgba(255, 75, 43, 0.4); }
.upcoming { background: #42b883; color: black; }
.past { background: #333; color: #888; }

/* SHOP */
.product-card { 
  background: #1a1a1a; 
  border-radius: 15px; 
}
.product-img-container { 
  background: #fff; 
  border-radius: 12px; 
  padding: 15px; 
  height: 180px; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
}
.product-img { 
  max-height: 100%; 
  transition: transform 0.4s ease; 
}
.product-card:hover .product-img { 
  transform: scale(1.1) rotate(3deg); 
}
</style>