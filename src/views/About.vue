<template>
  <div class="about-page">

    <section class="about-header d-flex align-items-center justify-content-center text-center">
      <div class="header-overlay"></div>
      <h1 data-aos="zoom-in">Sobre mí</h1>
    </section>

    <section class="py-5 bg-dark-page">
      <b-container>
        <b-row class="align-items-center g-5">
          <b-col md="4" data-aos="fade-right" class="text-center">
            <div class="image-container">
              <img :src="profileImg" alt="Mattius DT" class="profile-pic shadow-lg" />
            </div>
          </b-col>

          <b-col md="8" data-aos="fade-left">
            <div class="bio-card">
              <h2 class="mb-3 highlight-text">Hola, soy Mattius DT</h2>
              <p class="lead">
                Bienvenido a mi espacio en la web. Soy un apasionado de los videojuegos, deportes y la creación de contenido.
              </p>
              <p>
                Desde que empecé esta aventura, mi objetivo ha sido crear un lugar donde podamos disfrutar de buenos momentos, 
                ya sea compitiendo en directos de Twitch o compartiendo contenido rápido en TikTok.
              </p>
              <p>
                Me encanta interactuar con mi comunidad, organizar eventos online y ofrecer merchandising oficial para mis seguidores. 
                <strong>¡Gracias por formar parte de este viaje!</strong>
              </p>

              <div class="mt-4 d-flex gap-4 social-box">
                <a href="https://www.youtube.com/@mmattiusdt" target="_blank" class="social-link youtube">
                  <font-awesome-icon :icon="['fab', 'youtube']" size="2x" />
                </a>
                <a href="https://www.twitch.tv/mattius_dt" target="_blank" class="social-link twitch">
                  <font-awesome-icon :icon="['fab', 'twitch']" size="2x" />
                </a>
                <a href="https://www.tiktok.com/@mattius_dt" target="_blank" class="social-link tiktok">
                  <font-awesome-icon :icon="['fab', 'tiktok']" size="2x" />
                </a>
                <a href="https://www.instagram.com/mattius_dt/" target="_blank" class="social-link instagram">
                  <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
                </a>
                <a href="https://x.com/MattiusDT2" target="_blank" class="social-link twitter">
                  <font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
                </a>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

  </div>
</template>

<script setup>
import profileImg from '@/assets/img/logo.webp'
// Asegúrate de tener importados estos iconos en tu main.js o agrégalos aquí si es necesario
</script>

<style scoped>
.bg-dark-page {
  background-color: #121212;
  color: #eee;
}

.about-header {
  position: relative;
  height: 45vh;
  background: url('../assets/img/about-bg.webp') center/cover no-repeat;
  color: #fff;
  overflow: hidden;
}

.header-overlay {
  position: absolute;
  top: 0; left: 0; width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Oscurece un poco la imagen para que el texto resalte */
}

.about-header h1 {
  position: relative;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  text-transform: uppercase;
  color: #ff0000; /* Tu color rojo característico */
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
}

/* Efecto Glow en la Foto */
.image-container {
  position: relative;
  display: inline-block;
}

.image-container::before {
  content: '';
  position: absolute;
  top: -10px; left: -10px; right: -10px; bottom: -10px;
  background: linear-gradient(45deg, #ff0000, #42b883);
  border-radius: 50%; /* Si tu logo es redondo */
  z-index: -1;
  filter: blur(15px);
  opacity: 0.4;
}

.profile-pic {
  width: 100%;
  max-width: 300px;
  border: 4px solid #333;
  border-radius: 20px; /* Ajusta según si quieres cuadrado o redondo */
}

/* Tipografía */
.highlight-text {
  color: #42b883; /* Color verde Vue/Éxito */
  font-weight: 800;
}

.bio-card {
  padding: 2rem;
  background: #1a1a1a;
  border-radius: 15px;
  border-left: 5px solid #ff0000;
}

/* Redes Sociales Mejoradas */
.social-link {
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-5px) scale(1.2);
  filter: drop-shadow(0 0 10px currentColor);
}

.social-link.youtube { color: #FF0000; }
.social-link.twitch { color: #9146FF; }
.social-link.tiktok { color: #fff; }
.social-link.instagram { color: #E4405F; }
.social-link.twitter { color: #1DA1F2; }
</style>