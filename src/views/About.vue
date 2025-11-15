<template>
  <div class="about-page">

    <!-- Header -->
    <section class="about-header d-flex align-items-center justify-content-center text-center">
      <h1 data-aos="fade-down">Sobre mí</h1>
    </section>

    <!-- Presentación -->
    <section class="py-5">
      <b-container>
        <b-row class="align-items-center g-4">
          <!-- Foto -->
          <b-col md="4" data-aos="fade-right">
            <img :src="profileImg" alt="Mattius DT" class="img-fluid rounded shadow" />
          </b-col>

          <!-- Descripción -->
          <b-col md="8" data-aos="fade-left">
            <h2 class="mb-3">Hola, soy Mattius DT</h2>
            <p>
              Bienvenido a mi espacio en la web. Soy un apasionado de los videojuegos, deportes y la creación de contenido.
              Aquí comparto mis aventuras, directos en Twitch, videos en YouTube, momentos en TikTok y mucho más.
            </p>
            <p>
              Me encanta interactuar con mi comunidad, organizar eventos online y ofrecer merchandising oficial para mis seguidores.
            </p>

            <!-- Redes sociales -->
            <div class="mt-3 d-flex gap-3">
              <a href="https://www.youtube.com/@mmattiusdt" target="_blank" class="social-link youtube"><i class="fab fa-youtube fa-2x"></i></a>
              <a href="https://www.twitch.tv/mattius_dt" target="_blank" class="social-link twitch"><i class="fab fa-twitch fa-2x"></i></a>
              <a href="https://www.tiktok.com/@mattius_dt" target="_blank" class="social-link tiktok"><i class="fab fa-tiktok fa-2x"></i></a>
              <a href="https://www.instagram.com/mattius_dt/" target="_blank" class="social-link instagram"><i class="fab fa-instagram fa-2x"></i></a>
              <a href="https://x.com/MattiusDT2" target="_blank" class="social-link twitter"><i class="fab fa-twitter fa-2x"></i></a>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>

  </div>
</template>

<script setup>
import profileImg from '@/assets/img/logo.webp'
</script>

<style scoped>
.about-header {
  height: 40vh;
  background: url('@/assets/img/about-bg.webp') center/cover no-repeat;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-header h1 {
  font-size: 5vw;
  font-weight:1000;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.6);
  color: red;
}

/* Redes sociales */
.social-link {
  color: #fff;
  transition: transform 0.3s, color 0.3s;
}

.social-link:hover {
  color: #ffa500;
  transform: scale(1.2);
}

/* Colores individuales opcionales */
.social-link.youtube { color: #FF0000; }
.social-link.twitch { color: #9146FF; }
.social-link.tiktok { color: #000; }
.social-link.instagram { color: #FCAF45; }
.social-link.twitter { color: #1DA1F2; }
</style>
