<template>
  <b-navbar type="dark" variant="dark" class="navbar-black shadow-sm">
    <b-container>
      <!-- Logo -->
      <b-navbar-brand to="/" class="d-flex align-items-center">
        <img
          :src="logo"
          alt="Mattius DT"
          height="50"
          class="d-inline-block align-text-top"
        />
        <span class="ms-2 fw-bold navbar-brand-text">Mattius DT</span>
      </b-navbar-brand>

      <!-- Menú -->
      <b-navbar-nav class="ms-auto">
        <b-nav-item
          to="/"
          exact
          class="nav-link-orange"
          active-class="text-warning"
          >Inicio</b-nav-item
        >
        <b-nav-item to="/about" class="nav-link-orange">Sobre mí</b-nav-item>
        <b-nav-item to="/platforms" class="nav-link-orange"
          >Plataformas</b-nav-item
        >
        <b-nav-item to="/eventos" class="nav-link-orange">Eventos</b-nav-item>
        <b-nav-item to="/shop" class="nav-link-orange">Tienda</b-nav-item>
      </b-navbar-nav>
    </b-container>
  </b-navbar>
</template>

<script setup>
import logo from "@/assets/img/logo.webp";
</script>

<style scoped>
/* Fondo negro */
.navbar-black {
  background-color: #b00202;
}

/* Logo */
.navbar-brand-text {
  font-size: 1.2rem;
  color: #ffa500;
}

/* Links dentro de b-nav-item */
.navbar-black .nav-link-custom a {
  color: #fff !important; /* blanco por defecto */
  font-weight: 500;
  margin-left: 1rem;
  transition: color 0.3s, transform 0.2s;
}

/* Hover de links */
.navbar-black .nav-link-custom a:hover {
  color: #ffa500 !important;
  transform: scale(1.05);
}

/* Link activo */
.navbar-black .router-link-active a {
  color: #ffa500 !important;
  font-weight: 600;
}

/* Sombra ligera */
.shadow-sm {
  box-shadow: 0 2px 6px rgba(185, 65, 65, 0.2);
}
.nav-link-orange:deep(a) {
  color: orange !important;
}

.nav-link-orange:deep(a):hover {
  color: #ffb347 !important;
}

:deep(.router-link-active) {
  color: white !important;
  border-bottom: 2px solid white;
}
</style>
