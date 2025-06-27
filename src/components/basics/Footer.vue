<template>
  <footer class="bg-dark text-light pt-4 mt-5">
    <div class="container">
      <div class="row align-items-center">
        <!-- Logo e info -->
        <div class="col-md-4 text-center mb-3">
          <img src="../../assets/img/logo.webp" alt="Logo Mattius DT" class="mb-2" style="height: 60px" />
          <h5 class="fw-bold">Mattius DT Fan Shop</h5>
          <p class="small">Deportes, Gameplays, Aventuras y más</p>
        </div>

        <!-- Navegación -->
        <div class="col-md-4 text-center mb-3" id="footer-nav">
          <ul class="list-unstyled">
            <li><router-link to="/" class="footer-link">Inicio</router-link></li>
            <li><router-link to="/catalog" class="footer-link">Catálogo</router-link></li>
            <li><router-link to="/about" class="footer-link">Sobre mí</router-link></li>
            <li><router-link to="/contact" class="footer-link">Contacto</router-link></li>
            <li><router-link to="/social" class="footer-link">Redes Sociales</router-link></li>
          </ul>
        </div>

        <!-- Redes sociales -->
        <div class="col-md-4 text-center mb-3">
          <div class="d-flex justify-content-center gap-3">
            <a href="https://www.youtube.com/@mmattiusdt" target="_blank"><i class="fab fa-youtube fa-2x text-danger"></i></a>
            <a href="https://www.twitch.tv/mattius_dt" target="_blank"><i class="fab fa-twitch fa-2x text-info"></i></a>
            <a href="https://www.tiktok.com/@mattius_dt" target="_blank"><i class="fab fa-tiktok fa-2x text-white"></i></a>
            <a href="https://x.com/MattiusDT2" target="_blank"><i class="fab fa-twitter fa-2x text-light"></i></a>
            <a href="https://www.instagram.com/mattius_dt/" target="_blank"><i class="fab fa-instagram fa-2x text-warning"></i></a>
            <a href="https://discord.com/invite/56HWrAP9AT" target="_blank"><i class="fab fa-discord fa-2x text-secondary"></i></a>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-center py-3 mt-3 border-top border-secondary">
        <p class="mb-0 small">&copy; 2025 Mattius DT. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer-link {
  color: #ffa500;
  text-decoration: none;
  display: block;
  margin: 5px 0;
}

.footer-link:hover {
  color: #fff;
}

#footer-nav {
    display: grid;
    justify-content: center;
    align-items: center;
    height: 100%;
    flex-direction: column;
    color:aqua}
</style>
