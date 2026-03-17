<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '@/lib/supabase'; // Asegúrate de que la ruta es correcta

const platforms = ref([]);
const loading = ref(true);

const fetchPlatforms = async () => {
  loading.value = true;
  try {
    const { data, error } = await supabase
      .from('platforms')
      .select('*')
      .order('order_index', { ascending: true });

    if (error) throw error;

    // Mapeamos desc_text a desc para que tu template no cambie
    platforms.value = data.map(p => ({
      ...p,
      desc: p.desc_text
    }));
  } catch (err) {
    console.error('Error cargando plataformas:', err.message);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchPlatforms();
});
</script>

<template>
  <div class="platforms-page bg-dark-page min-vh-100 py-5">
    <b-container>
      <div class="text-center mb-5" data-aos="fade-down">
        <h1 class="display-4 fw-bold text-white">MIS <span class="text-warning">PLATAFORMAS</span></h1>
        <p class="text-muted mx-auto" style="max-width: 600px;">
          Conéctate conmigo en todas mis redes sociales para no perderte ningún contenido, sorteo o directo.
        </p>
      </div>

      <div v-if="loading" class="text-center py-5">
        <div class="spinner-border text-warning" role="status"></div>
        <p class="text-muted mt-3">CARGANDO REDES SOCIALES...</p>
      </div>

      <b-row v-else class="justify-content-center">
        <b-col 
          v-for="(platform, index) in platforms" 
          :key="platform.id" 
          cols="12" sm="6" lg="4" xl="3" 
          class="mb-4"
        >
          <a :href="platform.link" target="_blank" class="text-decoration-none">
            <div 
              class="platform-card h-100 p-4 text-center" 
              :class="platform.icon"
              data-aos="zoom-in" 
              :data-aos-delay="index * 50"
            >
              <div class="icon-circle mb-3 mx-auto">
                <font-awesome-icon :icon="['fab', platform.icon]" size="2x" />
              </div>
              <h4 class="text-white fw-bold mb-2">{{ platform.name }}</h4>
              <p class="text-muted small mb-0">{{ platform.desc }}</p>
              
              <div class="go-link mt-3">
                <span>Visitar Canal</span>
                <font-awesome-icon icon="external-link-alt" class="ms-2 small" />
              </div>
            </div>
          </a>
        </b-col>
      </b-row>

      <div class="community-banner mt-5 p-5 text-center rounded shadow-lg" data-aos="fade-up">
        <h2 class="fw-bold text-white">¿Aún no estás en Discord?</h2>
        <p class="text-light opacity-75">Únete a nuestra comunidad oficial.</p>
        <b-button href="https://discord.com/invite/56HWrAP9AT" target="_blank" variant="primary" class="btn-discord px-5 py-2 fw-bold">
          ENTRAR AL SERVIDOR
        </b-button>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
/* FONDO GENERAL */
.bg-dark-page { 
  background-color: #0a0a0a; 
  background-image: radial-gradient(circle at 50% -20%, #1e1e1e 0%, #0a0a0a 80%);
}

/* TARJETAS DE PLATAFORMA */
.platform-card {
  background: #141414;
  border: 1px solid #222;
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.icon-circle {
  width: 70px;
  height: 70px;
  background: #1a1a1a;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s;
  color: #fff;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.5);
}

.go-link {
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffa500;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s;
}

/* HOVER EFFECTS GENERALES */
.platform-card:hover {
  transform: translateY(-10px);
  background: #1e1e1e;
  border-color: #444;
}

.platform-card:hover .go-link {
  opacity: 1;
  transform: translateY(0);
}

.platform-card:hover .icon-circle {
  transform: scale(1.1) rotate(5deg);
}

/* COLORES DINÁMICOS POR PLATAFORMA (Basado en la clase platform.icon) */
.youtube:hover { border-color: #FF0000; box-shadow: 0 10px 30px rgba(255, 0, 0, 0.2); }
.youtube:hover .icon-circle { background: #FF0000; }

.twitch:hover { border-color: #9146FF; box-shadow: 0 10px 30px rgba(145, 70, 255, 0.2); }
.twitch:hover .icon-circle { background: #9146FF; }

.twitter:hover { border-color: #1DA1F2; box-shadow: 0 10px 30px rgba(29, 161, 242, 0.2); }
.twitter:hover .icon-circle { background: #1DA1F2; }

.instagram:hover { border-color: #E4405F; box-shadow: 0 10px 30px rgba(228, 64, 95, 0.2); }
.instagram:hover .icon-circle { background: #E4405F; }

.tiktok:hover { border-color: #00f2ea; box-shadow: 0 10px 30px rgba(0, 242, 234, 0.1); }
.tiktok:hover .icon-circle { background: #000; color: #ff0050; text-shadow: 2px 0 #00f2ea; }

.discord:hover { border-color: #5865F2; box-shadow: 0 10px 30px rgba(88, 101, 242, 0.2); }
.discord:hover .icon-circle { background: #5865F2; }

/* BANNER DE COMUNIDAD (DISCORD) */
.community-banner {
  background: linear-gradient(135deg, #5865F2 0%, #2c2f33 100%);
  border: none;
  position: relative;
  z-index: 1;
}

.community-banner::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: url('https://www.transparenttextures.com/patterns/carbon-fibre.png');
  opacity: 0.1;
  z-index: -1;
}

.btn-discord {
  background-color: #fff;
  color: #5865F2;
  border: none;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.btn-discord:hover {
  transform: scale(1.05);
  background-color: #f0f0f0;
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

/* SPINNER */
.spinner-border {
  width: 3rem;
  height: 3rem;
}
</style>