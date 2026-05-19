<template>
  <b-col xl="4" md="6" class="mb-4">
    <div class="profile-card-gaming h-100 p-4 d-flex align-items-start" v-b-modal.modal-security-card>
      <div class="icon-wrapper me-3">
        <font-awesome-icon icon="user" size="lg" />
      </div>
      
      <div class="card-content">
        <h5 class="fw-bold text-white card-title mb-1">Inicio de sesión y seguridad</h5>
        <p class="text-muted small mb-0">
          Editar el nombre, el número de teléfono móvil, el correo electrónico y la contraseña
        </p>
      </div>
    </div>

    <b-modal 
      id="modal-security-card" 
      title="Inicio de sesión y seguridad" 
      header-bg-variant="dark" 
      header-text-variant="success" 
      body-bg-variant="dark" 
      body-text-variant="white" 
      hide-footer 
      centered
    >
      <b-form @submit.prevent="handleUpdateProfile">
        <div class="mb-3">
          <label class="small text-muted fw-bold mb-2">Nombre de usuario (público)</label>
          <b-form-input 
            v-model="tempUsername" 
            class="bg-input border-secondary text-white py-2"
            placeholder="Introduce tu nuevo username"
          ></b-form-input>
        </div>
        
        <div class="mb-3">
          <label class="small text-muted fw-bold mb-2">Correo electrónico</label>
          <b-form-input 
            v-model="userEmail" 
            disabled 
            class="bg-input border-secondary text-muted py-2 bg-disabled"
          ></b-form-input>
          <span class="text-muted extra-small d-block mt-1">El correo no se puede modificar por seguridad.</span>
        </div>

        <b-button type="submit" variant="success" class="w-100 fw-bold py-2 mt-3 text-uppercase tracking-wider">
          Guardar cambios
        </b-button>
      </b-form>
    </b-modal>
  </b-col>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '@/stores/auth';

const auth = useAuthStore();

// Vinculamos de forma reactiva los datos del store de Pinia
const tempUsername = ref(auth.profile?.username || auth.displayName || '');
const userEmail = computed(() => auth.userEmail || '');

const handleUpdateProfile = () => {
  if (!tempUsername.value.trim()) {
    alert("⚠️ El nombre de usuario no puede estar vacío.");
    return;
  }
  
  // Aquí es donde en el futuro llamaremos a Supabase para actualizar la tabla 'profiles'
  alert(`🎉 ¡Cambios guardados localmente! Nuevo nombre: ${tempUsername.value}`);
};
</script>

<style scoped>
.profile-card-gaming {
  background: #141414;
  border: 1px solid #262626;
  border-radius: 10px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.profile-card-gaming:hover {
  border-color: #42b883 !important;
  background: #1a1a1a;
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(66, 184, 131, 0.15);
}

.icon-wrapper {
  width: 52px;
  height: 52px;
  min-width: 52px;
  background: rgba(66, 184, 131, 0.08);
  color: #42b883;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(66, 184, 131, 0.2);
}

.card-title {
  font-size: 1.05rem;
  letter-spacing: 0.5px;
}

.card-content {
  line-height: 1.4;
}

/* Estilos específicos para los inputs del Modal */
.bg-input {
  background-color: #0d0d0d !important;
}
.bg-input:focus {
  border-color: #42b883 !important;
  box-shadow: 0 0 8px rgba(66, 184, 131, 0.2) !important;
}
.bg-disabled {
  background-color: #1a1a1a !important;
  cursor: not-allowed;
}
.extra-small {
  font-size: 0.75rem;
}
.tracking-wider {
  letter-spacing: 1px;
}
</style>