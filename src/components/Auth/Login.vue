<template>
  <div class="auth-page min-vh-100 d-flex align-items-center justify-content-center">
    <div class="auth-container p-4 shadow-lg" data-aos="fade-up">
      <h2 class="text-white fw-bold mb-4 text-center">BIENVENIDO DE NUEVO</h2>

      <b-form @submit.prevent="handleLogin">
        <b-form-group label="EMAIL" class="mb-3 text-success small fw-bold">
          <b-form-input v-model="email" type="email" required class="bg-dark text-white border-secondary"></b-form-input>
        </b-form-group>

        <b-form-group label="CONTRASEÑA" class="mb-4 text-success small fw-bold">
          <b-form-input v-model="password" type="password" required class="bg-dark text-white border-secondary"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="success" class="w-100 fw-bold py-2 mb-3" :disabled="loading">
          {{ loading ? 'VERIFICANDO...' : 'INICIAR SESIÓN' }}
        </b-button>

        <div class="text-center">
          <router-link to="/signup" class="text-muted small text-decoration-none">
            ¿No tienes cuenta? <span class="text-success">Regístrate aquí</span>
          </router-link>
        </div>
      </b-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const loading = ref(false);
const auth = useAuthStore();
const router = useRouter();

const handleLogin = async () => {
  loading.value = true;
  try {
    await auth.signIn(email.value, password.value);
    router.push('/');
  } catch (error) {
    alert("Error: " + error.message);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
/* Reutilizamos tus estilos base */
.auth-page {
  background-color: #0a0a0a;
  background-image: radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000 100%);
}
.auth-container {
  width: 100%;
  max-width: 400px;
  background: #111;
  border: 1px solid #333;
  border-radius: 15px;
}
</style>