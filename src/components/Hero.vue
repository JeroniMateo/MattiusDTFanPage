<template>
  <section class="hero d-flex align-items-center justify-content-center text-center">
    <div class="hero-overlay"></div>

    <div class="hero-content container">
      <h1 class="hero-title" data-aos="fade-down">
        MATTIUS <span class="highlight">DT</span>
      </h1>
      <div class="line-divider mx-auto" data-aos="zoom-in" data-aos-delay="300"></div>
      <p class="hero-subtitle" data-aos="fade-up" data-aos-delay="400">
        Deportes • Gameplays • Aventuras • Comunidad
      </p>
      
      <div class="hero-actions" data-aos="zoom-in" data-aos-delay="600">
        <router-link to="/shop" class="btn btn-main btn-lg mt-3 me-md-3">
          <font-awesome-icon icon="shopping-cart" class="me-2" />Explorar Tienda
        </router-link>
        <router-link to="/platforms" class="btn btn-outline-light btn-lg mt-3">
          Mis Redes
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 90vh; /* Un poco más alto para mayor impacto */
  background-image: url('../assets/img/hero-bg.webp');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  color: #fff;
  position: relative;
  overflow: hidden;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* Gradiente oscuro que nace desde abajo para dar profundidad */
  background: linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
}

.hero-title {
  font-size: clamp(3rem, 10vw, 5rem); /* Tamaño fluido */
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -2px;
  line-height: 1;
  margin-bottom: 0.5rem;
  text-shadow: 3px 3px 0px #b00202; /* Sombra sólida estilo comic/gaming */
}

.highlight {
  color: #ffa500;
  text-shadow: 3px 3px 0px #000;
}

.line-divider {
  width: 100px;
  height: 5px;
  background: #b00202;
  margin-bottom: 1.5rem;
  border-radius: 5px;
}

.hero-subtitle {
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #e0e0e0;
}

/* Botón Principal Estilo Mattiuz */
.btn-main {
  background: #ffa500;
  color: #000;
  font-weight: 800;
  text-transform: uppercase;
  padding: 15px 35px;
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(255, 165, 0, 0.4);
}

.btn-main:hover {
  background: #fff;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.2);
}

.btn-outline-light {
  border-width: 2px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 13px 35px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .hero {
    background-attachment: scroll; /* Desactivar parallax en móvil para mejor rendimiento */
    height: 100vh;
  }
}
</style>