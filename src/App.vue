<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    
    <Navbar />

    <main class="flex-grow-1">
      <router-view v-slot="{ Component }">
        <transition name="page-fade" mode="out-in">
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </main>

    <Footer />
    
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue' // Ajusta la ruta si es necesario
import Footer from '@/components/Footer.vue' // Ajusta la ruta si es necesario
</script>

<style>
/* Animación Gaming Suave */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Evita que el footer salte si la página es corta */
#app {
  background-color: #0a0a0a; /* Tu color de fondo global */
}
</style>