<template>
  <footer class="custom-footer pt-5 pb-4">
    <b-container>
      <b-row class="text-center text-md-start align-items-start">

        <b-col md="4" class="mb-4 mb-md-0">
          <div class="footer-brand mb-3">
            <img :src="logo" alt="Logo Mattius DT" class="footer-logo mb-2">
            <h5 class="fw-bold brand-name">MATTIUS <span class="text-white">DT</span></h5>
          </div>
          <p class="text-muted small pe-md-4">
            Acompañame en mis aventuras diarias. Deportes, Gameplays y la mejor comunidad del mundo. ¡Suscríbete y no te pierdas nada!
          </p>
        </b-col>

        <b-col md="4" class="mb-4 mb-md-0">
          <h6 class="text-white fw-bold mb-3 text-uppercase small letter-spacing">Navegación</h6>
          <ul class="list-unstyled footer-nav">
            <li><router-link to="/" class="footer-link">Inicio</router-link></li>
            <li><router-link to="/about" class="footer-link">Sobre mí</router-link></li>
            <li><router-link to="/platforms" class="footer-link">Plataformas</router-link></li>
            <li><router-link to="/events" class="footer-link">Eventos</router-link></li>
            <li><router-link to="/shop" class="footer-link">Tienda Oficial</router-link></li>
          </ul>
        </b-col>

        <b-col md="4">
          <h6 class="text-white fw-bold mb-3 text-uppercase small letter-spacing">Comunidad</h6>
          <div class="d-flex justify-content-center justify-content-md-start gap-3 social-icons">
            <a href="https://www.youtube.com/@thewildhouse63" target="_blank" class="social-link youtube" title="YouTube">
              <font-awesome-icon :icon="['fab','youtube']" />
            </a>
            <a href="https://www.twitch.tv/mattius_dt" target="_blank" class="social-link twitch" title="Twitch">
              <font-awesome-icon :icon="['fab','twitch']" />
            </a>
            <a href="https://www.tiktok.com/@mattius_dt" target="_blank" class="social-link tiktok" title="TikTok">
              <font-awesome-icon :icon="['fab','tiktok']" />
            </a>
            <a href="https://x.com/MattiusDT2" target="_blank" class="social-link twitter" title="Twitter/X">
              <font-awesome-icon :icon="['fab','twitter']" />
            </a>
            <a href="https://www.instagram.com/mattius_dt/" target="_blank" class="social-link instagram" title="Instagram">
              <font-awesome-icon :icon="['fab','instagram']" />
            </a>
            <a href="https://discord.com/invite/56HWrAP9AT" target="_blank" class="social-link discord" title="Discord">
              <font-awesome-icon :icon="['fab','discord']" />
            </a>
          </div>
          <div class="mt-4">
             <b-badge variant="outline-warning" class="p-2 px-3">#TeamMattiuz</b-badge>
          </div>
        </b-col>

      </b-row>

      <hr class="footer-divider my-4">

      <div class="footer-bottom d-flex flex-column flex-md-row justify-content-between align-items-center text-muted small">
        <p class="mb-2 mb-md-0">&copy; 2026 Mattius DT. Desarrollado con pasión para la comunidad.</p>
        <div class="footer-legal">
          <a href="#" class="text-muted text-decoration-none me-3">Privacidad</a>
          <a href="#" class="text-muted text-decoration-none">Términos</a>
        </div>
      </div>
    </b-container>
  </footer>
</template>

<script setup>
import logo from '@/assets/img/logo.webp'
</script>

<style scoped>
.custom-footer {
  background-color: #0a0a0a; /* Negro profundo para el pie de página */
  border-top: 2px solid #b00202; /* Línea roja distintiva */
}

.footer-logo {
  height: 60px;
  filter: drop-shadow(0 0 5px rgba(255, 0, 0, 0.2));
}

.brand-name {
  color: #ffa500;
  letter-spacing: 2px;
}

.letter-spacing {
  letter-spacing: 1.5px;
}

.footer-link {
  color: #888;
  text-decoration: none;
  display: inline-block;
  padding: 4px 0;
  transition: all 0.3s ease;
}

.footer-link:hover {
  color: #ffa500;
  transform: translateX(5px);
}

/* Social Icons Glow Effect */
.social-icons a {
  font-size: 1.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #1a1a1a;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.social-icons a:hover {
  transform: translateY(-5px);
  color: #fff !important;
}

.social-link.youtube:hover { background: #FF0000; box-shadow: 0 0 15px #FF0000; }
.social-link.twitch:hover { background: #9146FF; box-shadow: 0 0 15px #9146FF; }
.social-link.tiktok:hover { background: #000; box-shadow: 0 0 15px #ffffff44; }
.social-link.twitter:hover { background: #1DA1F2; box-shadow: 0 0 15px #1DA1F2; }
.social-link.instagram:hover { background: #E4405F; box-shadow: 0 0 15px #E4405F; }
.social-link.discord:hover { background: #5865f2; box-shadow: 0 0 15px #5865f2; }

.footer-divider {
  border-color: rgba(255, 255, 255, 0.05);
}
</style>