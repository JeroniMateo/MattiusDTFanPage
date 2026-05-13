<template>
  <div class="auth-page min-vh-100 d-flex align-items-center justify-content-center py-5">
    <div class="auth-container p-4 shadow-lg" data-aos="fade-up">
      <h2 class="text-white fw-bold mb-4 text-center border-bottom pb-2 border-secondary">CREAR CUENTA</h2>

      <b-form @submit.prevent="handleSignup">
        <!-- Grid para campos cortos -->
        <b-row>
          <b-col md="12">
            <b-form-group label="EMAIL" class="mb-3 text-success small fw-bold">
              <b-form-input v-model="form.email" type="email" required class="bg-dark text-white border-secondary"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="12">
            <b-form-group label="NOMBRE DE USUARIO" class="mb-3 text-success small fw-bold">
              <b-form-input v-model="form.username" type="text" required class="bg-dark text-white border-secondary"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <b-form-group label="NOMBRE COMPLETO" class="mb-3 text-success small fw-bold">
          <b-form-input v-model="form.fullName" type="text" required class="bg-dark text-white border-secondary"></b-form-input>
        </b-form-group>

        <b-row>
          <b-col md="6">
            <b-form-group label="FECHA NACIMIENTO" class="mb-3 text-success small fw-bold">
              <b-form-input v-model="form.birthDate" type="date" required class="bg-dark text-white border-secondary"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="TELÉFONO" class="mb-3 text-success small fw-bold">
              <b-form-input v-model="form.phone" type="tel" required class="bg-dark text-white border-secondary"></b-form-input>
            </b-form-group>
          </b-col>
        </b-row>

        <hr class="border-secondary my-4">

        <b-form-group label="CONTRASEÑA" class="mb-3 text-success small fw-bold">
          <b-form-input v-model="form.password" type="password" required class="bg-dark text-white border-secondary"></b-form-input>
        </b-form-group>

        <b-form-group label="CONFIRMAR CONTRASEÑA" class="mb-4 text-success small fw-bold">
          <b-form-input v-model="form.confirmPassword" type="password" required class="bg-dark text-white border-secondary"></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="success" class="w-100 fw-bold py-2 mb-3" :disabled="loading">
          {{ loading ? 'CREANDO CUENTA...' : 'CONFIRMAR REGISTRO' }}
        </b-button>

        <div class="text-center">
          <router-link to="/login" class="text-muted small text-decoration-none">
            ¿Ya tienes cuenta? <span class="text-success">Inicia sesión</span>
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

const auth = useAuthStore();
const router = useRouter();
const loading = ref(false);

const form = ref({
  email: '',
  username: '',
  fullName: '',
  birthDate: '',
  phone: '',
  password: '',
  confirmPassword: ''
});

const handleSignup = async () => {
  if(form.value.password !== form.value.confirmPassword) {
    alert("Las contraseñas no coinciden");
    return;
  }

  loading.value = true;
  try {
    // Nota: Aquí pasas el email, password y un objeto con el resto de metadatos (username, etc)
    await auth.signUp(form.value.email, form.value.password, {
      username: form.value.username,
      full_name: form.value.fullName,
      phone: form.value.phone,
      birth_date: form.value.birthDate
    });
    alert("¡Registro enviado! Revisa tu correo para confirmar.");
    router.push('/login');
  } catch (error) {
    alert(error.message);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.auth-page {
  background-color: #0a0a0a;
  background-image: radial-gradient(circle at 50% 50%, #1a1a1a 0%, #000 100%);
}
.auth-container {
  width: 100%;
  max-width: 500px; /* Un poco más ancho para el registro */
  background: #111;
  border: 1px solid #333;
  border-radius: 15px;
}
</style>