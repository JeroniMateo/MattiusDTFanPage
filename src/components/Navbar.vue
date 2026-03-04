<template>
  <b-navbar toggleable="lg" type="dark" class="custom-navbar sticky-top">
    <b-container>
      <b-navbar-brand to="/" class="d-flex align-items-center brand-container">
        <img
          :src="logo"
          alt="Mattius DT"
          height="45"
          class="logo-img"
        />
        <span class="ms-2 fw-bold brand-text">MATTIUS <span class="text-white">DT</span></span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto align-items-center">
          <b-nav-item to="/" exact class="nav-link-custom">Inicio</b-nav-item>
          <b-nav-item to="/about" class="nav-link-custom">Sobre mí</b-nav-item>
          <b-nav-item to="/platforms" class="nav-link-custom">Plataformas</b-nav-item>
          <b-nav-item to="/events" class="nav-link-custom">Eventos</b-nav-item>
          
          <b-nav-item to="/shop" class="nav-link-shop ms-lg-3">
            <font-awesome-icon icon="shopping-cart" class="me-1" />
            Tienda
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script setup>
import logo from "@/assets/img/logo.webp";
</script>

<style scoped>
/* Efecto Glassmorphism y Fondo */
.custom-navbar {
  background-color: rgba(18, 18, 18, 0.95) !important;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #b00202;
  padding: 0.8rem 0;
  transition: all 0.3s ease;
}

/* Estilo del Logo */
.brand-text {
  font-size: 1.4rem;
  letter-spacing: 1px;
  color: #ffa500;
  text-shadow: 0 0 10px rgba(255, 165, 0, 0.3);
}

.logo-img {
  transition: transform 0.3s ease;
}

.brand-container:hover .logo-img {
  transform: rotate(10deg) scale(1.1);
}

/* Links Personalizados */
.nav-link-custom :deep(.nav-link) {
  color: #ccc !important;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin: 0 10px;
  transition: color 0.3s ease;
  position: relative;
}

.nav-link-custom :deep(.nav-link):hover {
  color: #ffa500 !important;
}

/* Indicador de página activa */
.nav-link-custom :deep(.router-link-active) {
  color: #ffa500 !important;
}

.nav-link-custom :deep(.router-link-active)::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: #ffa500;
  box-shadow: 0 0 8px #ffa500;
}

/* Botón Tienda Destacado */
.nav-link-shop :deep(.nav-link) {
  background: #ffa500;
  color: #000 !important;
  padding: 8px 20px !important;
  border-radius: 50px;
  font-weight: 800;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 165, 0, 0.3);
}

.nav-link-shop :deep(.nav-link):hover {
  background: #fff;
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(255, 255, 255, 0.4);
}

/* Ajuste para móviles */
@media (max-width: 991px) {
  .nav-link-custom :deep(.nav-link) {
    padding: 10px 0;
    border-bottom: 1px solid #333;
  }
  .nav-link-shop {
    margin-top: 15px;
    width: 100%;
    text-align: center;
  }
}
</style>