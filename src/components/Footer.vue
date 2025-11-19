<template>
  <b-footer class="bg-dark text-light pt-5">
    <b-container>
      <b-row class="text-center text-md-start align-items-start">

        <!-- Logo e info -->
        <b-col md="4" class="mb-4 mb-md-0">
          <img :src="logo" alt="Logo Mattius DT" class="mb-3" style="height: 70px;">
          <h5 class="fw-bold">Mattius DT Fan Shop</h5>
          <p class="text-muted small">Deportes, Gameplays, Aventuras y más</p>
        </b-col>

        <!-- Navegación -->
        <b-col md="4" class="mb-4 mb-md-0">
          <h6 class="fw-bold mb-3">Navegación</h6>
          <ul class="list-unstyled footer-nav">
            <li><router-link to="/" class="footer-link">Inicio</router-link></li>
            <li><router-link to="/about" class="footer-link">Sobre mí</router-link></li>
            <li><router-link to="/plataformas" class="footer-link">Plataformas</router-link></li>
            <li><router-link to="/eventos" class="footer-link">Eventos</router-link></li>
            <li><router-link to="/shop" class="footer-link">Tienda</router-link></li>
          </ul>
        </b-col>

        <!-- Redes sociales -->
        <b-col md="4">
          <h6 class="fw-bold mb-3">Sígueme</h6>
          <div class="d-flex justify-content-center justify-content-md-start gap-3 social-icons">
            <a href="https://www.youtube.com/@mmattiusdt" target="_blank" class="social-link youtube">
              <font-awesome-icon :icon="['fab','youtube']" size="2x"/>
            </a>
            <a href="https://www.twitch.tv/mattius_dt" target="_blank" class="social-link twitch">
              <font-awesome-icon :icon="['fab','twitch']" size="2x"/>
            </a>
            <a href="https://www.tiktok.com/@mattius_dt" target="_blank" class="social-link tiktok">
              <font-awesome-icon :icon="['fab','tiktok']" size="2x"/>
            </a>
            <a href="https://x.com/MattiusDT2" target="_blank" class="social-link twitter">
              <font-awesome-icon :icon="['fab','twitter']" size="2x"/>
            </a>
            <a href="https://www.instagram.com/mattius_dt/" target="_blank" class="social-link instagram">
              <font-awesome-icon :icon="['fab','instagram']" size="2x"/>
            </a>
            <a href="https://discord.com/invite/56HWrAP9AT" target="_blank" class="social-link discord">
              <font-awesome-icon :icon="['fab','discord']" size="2x"/>
            </a>
          </div>
        </b-col>

      </b-row>

      <hr class="border-secondary my-4">

      <div class="text-center text-muted small">
        &copy; 2025 Mattius DT. Todos los derechos reservados.
      </div>
    </b-container>
  </b-footer>
</template>

<script setup>
import logo from '@/assets/img/logo.webp'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>

<style scoped>
.footer-link {
  color: #ffa500;
  text-decoration: none;
  display: block;
  margin: 5px 0;
  transition: color 0.3s;
}

.footer-link:hover {
  color: #fff;
}

.social-link {
  transition: transform 0.3s, color 0.3s;
}

.social-link:hover {
  transform: scale(1.2);
  color: #ffa500 !important;
}

/* Colores por red */
.social-link.youtube { color: #FF0000; }
.social-link.twitch { color: #9146FF; }
.social-link.tiktok { color: #000; }
.social-link.twitter { color: #1DA1F2; }
.social-link.instagram { color: #FCAF45; }
.social-link.discord { color: #7289DA; }

.footer-nav li {
  margin-bottom: 0.5rem;
}
</style>
