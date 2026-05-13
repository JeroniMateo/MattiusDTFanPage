<template>
  <b-navbar toggleable="lg" type="dark" class="custom-navbar sticky-top">
    <b-container>
      <b-navbar-brand to="/" class="d-flex align-items-center brand-container">
        <img :src="logo" alt="Mattius DT" height="45" class="logo-img" />
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

          <!-- SECCIÓN DE USUARIO DINÁMICA -->
          <template v-if="!auth.user">
            <!-- Botón Login (Estilo texto simple) -->
            <b-nav-item to="/login" class="nav-link-custom ms-lg-3">LOGIN</b-nav-item>
            
            <!-- Botón Unirse (Estilo botón delineado) -->
            <b-nav-item to="/signup" class="nav-link-auth-btn ms-lg-2">
              UNIRSE
            </b-nav-item>
          </template>

          <!-- DROPDOWN CUANDO ESTÁ LOGUEADO -->
          <b-nav-item-dropdown v-else right no-caret class="nav-link-user ms-lg-4">
            <template #button-content>
              <div class="user-avatar-container">
                <font-awesome-icon icon="user" class="text-white" />
              </div>
            </template>
            <b-dropdown-header class="small text-muted">
              HOLA, {{ auth.user.email.split('@')[0].toUpperCase() }}
            </b-dropdown-header>
            <b-dropdown-item to="/profile">MI PERFIL</b-dropdown-item>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item @click="handleLogout" class="text-danger">
              <font-awesome-icon icon="sign-out-alt" class="me-2" /> CERRAR SESIÓN
            </b-dropdown-item>
          </b-nav-item-dropdown>

        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script setup>
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";
import logo from "@/assets/img/logo.webp";

const auth = useAuthStore();
const router = useRouter();

const handleLogout = async () => {
  try {
    await auth.signOut();
    router.push("/");
  } catch (error) {
    console.error("Error al salir:", error.message);
  }
};
</script>

<style scoped>
/* --- TUS ESTILOS EXISTENTES --- */
.custom-navbar {
  background-color: rgba(18, 18, 18, 0.95) !important;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid #b00202;
  padding: 0.8rem 0;
  transition: all 0.3s ease;
}
.brand-text {
  font-size: 1.4rem;
  letter-spacing: 1px;
  color: #ffa500;
  text-shadow: 0 0 10px rgba(255, 165, 0, 0.3);
}
.logo-img { transition: transform 0.3s ease; }
.brand-container:hover .logo-img { transform: rotate(10deg) scale(1.1); }

.nav-link-custom :deep(.nav-link) {
  color: #ccc !important;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9rem;
  margin: 0 10px;
  transition: color 0.3s ease;
  position: relative;
}
.nav-link-custom :deep(.nav-link):hover { color: #ffa500 !important; }
.nav-link-custom :deep(.router-link-active) { color: #ffa500 !important; }

.nav-link-shop :deep(.nav-link) {
  background: #ffa500;
  color: #000 !important;
  padding: 8px 20px !important;
  border-radius: 50px;
  font-weight: 800;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 165, 0, 0.3);
}

/* --- NUEVOS ESTILOS PARA AUTH --- */
.nav-link-auth-btn :deep(.nav-link) {
  border: 2px solid #ffa500;
  color: #ffa500 !important;
  padding: 6px 20px !important;
  border-radius: 50px;
  font-weight: 700;
  font-size: 0.8rem;
  transition: all 0.3s ease;
}
.nav-link-auth-btn :deep(.nav-link):hover {
  background: #ffa500;
  color: #000 !important;
}

.user-avatar-container {
  width: 35px;
  height: 35px;
  background: #222;
  border: 1px solid #ffa500;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}
.user-avatar-container:hover {
  box-shadow: 0 0 10px #ffa500;
}

:deep(.dropdown-menu) {
  background: #111;
  border: 1px solid #333;
}
:deep(.dropdown-item) {
  color: #ccc;
  font-size: 0.8rem;
  font-weight: 600;
}
:deep(.dropdown-item:hover) {
  background: #ffa500;
  color: #000;
}

@media (max-width: 991px) {
  .nav-link-shop, .nav-link-auth-btn {
    margin: 10px 0;
    width: 100%;
    text-align: center;
  }
}
</style>