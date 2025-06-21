<template>
  <div class="profile-form">
    <h2 class="mb-4 text-center">Mi Perfil</h2>

    <!-- Avatar -->
    <div class="text-center mb-4">
      <img
        :src="user.avatar || defaultAvatar"
        alt="Avatar"
        class="rounded-circle border border-secondary"
        width="120"
        height="120"
      />
      <input type="file" class="form-control mt-2" @change="uploadAvatar" />
    </div>

    <form @submit.prevent="saveProfile">
      <!-- Nombre -->
      <div class="mb-3">
        <label for="name" class="form-label">Nombre completo</label>
        <input
          type="text"
          id="name"
          class="form-control"
          v-model="user.name"
          required
        />
      </div>

      <!-- Email -->
      <div class="mb-3">
        <label for="email" class="form-label">Correo electrónico</label>
        <input
          type="email"
          id="email"
          class="form-control"
          v-model="user.email"
          required
        />
      </div>

      <!-- Dirección -->
      <div class="mb-3">
        <label for="address" class="form-label">Dirección</label>
        <input
          type="text"
          id="address"
          class="form-control"
          v-model="user.address"
        />
      </div>

      <!-- Teléfono -->
      <div class="mb-3">
        <label for="phone" class="form-label">Teléfono</label>
        <input
          type="tel"
          id="phone"
          class="form-control"
          v-model="user.phone"
        />
      </div>

      <!-- Nueva Contraseña -->
      <div class="mb-3">
        <label for="password" class="form-label">Nueva contraseña</label>
        <input
          type="password"
          id="password"
          class="form-control"
          v-model="user.password"
          placeholder="Deja en blanco si no deseas cambiarla"
        />
      </div>

      <button type="submit" class="btn btn-primary w-100">Guardar Cambios</button>

      <div v-if="saved" class="alert alert-success mt-3">
        Cambios guardados correctamente.
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MyProfile",
  data() {
    return {
      user: {
        name: "Mattius DT",
        email: "mattius@example.com",
        address: "Calle Aventuras 123, Palma",
        phone: "666 999 111",
        avatar: null,
        password: "",
      },
      
      saved: false,
    };
  },
  methods: {
    uploadAvatar(e) {
      const file = e.target.files[0];
      if (file) {
        this.user.avatar = URL.createObjectURL(file);
      }
    },
    saveProfile() {
      // Aquí iría la lógica de guardado (Vuex, API, etc)
      console.log("Datos guardados:", this.user);
      this.saved = true;
      setTimeout(() => (this.saved = false), 3000);
    },
  },
};
</script>

<style scoped>
.profile-form {
  max-width: 500px;
  margin: auto;
}
img.rounded-circle {
  object-fit: cover;
}
</style>
