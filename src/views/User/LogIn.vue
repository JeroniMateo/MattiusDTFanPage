<template>
  <div class="container d-flex justify-content-center align-items-center" style="height: 100vh;">
    <div class="card p-4 shadow-sm" style="max-width: 400px; width: 100%;">
      <h2 class="text-center mb-4">Iniciar Sesión</h2>
      <form @submit.prevent="login">
        <!-- Nombre de Usuario -->
        <div class="mb-3">
          <label for="username" class="form-label">Nombre de Usuario</label>
          <input
            type="text"
            id="username"
            v-model="username"
            class="form-control"
            placeholder="Ingresa tu nombre de usuario"
            required
          />
        </div>

        <!-- Contraseña -->
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>

        <!-- Botón de Login -->
        <div class="d-grid gap-2 mb-3">
          <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
        </div>
      </form>

      <div class="text-center">
        <p>¿No tienes cuenta? <router-link to="/signup">Regístrate aquí</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async login() {
      const payload = {
        username: this.username,
        password: this.password,
      };

      try {
        const response = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (data.success) {
          localStorage.setItem("auth_token", data.token);
          this.$router.push("/profile");
        } else {
          alert("Credenciales incorrectas");
        }
      } catch (error) {
        console.error("Error en login:", error);
      }
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 400px;
  width: 100%;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.container {
  max-width: 500px;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  font-weight: bold;
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #004085;
}
</style>
