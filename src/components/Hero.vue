<template>
  <section class="hero d-flex align-items-center justify-content-center text-center">
    <div class="hero-content">
      <h1 class="hero-title" data-aos="fade-down">Bienvenido a Mattius DT Fan Page</h1>
      <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="200">Deportes, gameplays, aventuras y mucho más</p>
      <router-link to="/shop" class="btn btn-warning btn-lg mt-3" data-aos="zoom-in" data-aos-delay="400">
        Ver Tienda
      </router-link>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  height: 80vh;
  background-image: url('@/assets/img/hero-bg.webp');
  background-attachment: fixed; /* efecto parallax */
  background-position: center;
  background-size: cover;
  color: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content {
  background-color: rgba(0,0,0,0.5); /* overlay para contraste */
  padding: 2rem;
  border-radius: 0.5rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-top: 1rem;
}
</style>
