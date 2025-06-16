<template>
    <div class="container d-flex justify-content-center align-items-center" style="height: 100vh;">
      <div class="card p-4 shadow-sm" style="max-width: 500px; width: 100%;">
        <h2 class="text-center mb-4">Registro</h2>
        <form @submit.prevent="signup">
          <!-- Foto de Perfil -->
          <div class="mb-3">
            <label for="profilePicture" class="form-label">Foto de Perfil</label>
            <input
              type="file"
              id="profilePicture"
              class="form-control"
              accept="image/*"
              @change="handleFileChange"
            />
          </div>
  
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
  
          <!-- Nombre -->
          <div class="mb-3">
            <label for="firstName" class="form-label">Nombre</label>
            <input
              type="text"
              id="firstName"
              v-model="firstName"
              class="form-control"
              placeholder="Ingresa tu nombre"
              required
            />
          </div>
  
          <!-- Apellidos -->
          <div class="mb-3">
            <label for="lastName" class="form-label">Apellidos</label>
            <input
              type="text"
              id="lastName"
              v-model="lastName"
              class="form-control"
              placeholder="Ingresa tus apellidos"
              required
            />
          </div>
  
          <!-- Correo Electrónico -->
          <div class="mb-3">
            <label for="email" class="form-label">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              v-model="email"
              class="form-control"
              placeholder="Ingresa tu correo electrónico"
              required
            />
          </div>
  
          <!-- Teléfono -->
          <div class="mb-3">
            <label for="phone" class="form-label">Teléfono</label>
            <input
              type="tel"
              id="phone"
              v-model="phone"
              class="form-control"
              placeholder="Ingresa tu teléfono"
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
  
          <!-- Confirmar Contraseña -->
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              class="form-control"
              placeholder="Confirma tu contraseña"
              required
            />
          </div>
  
          <!-- Botón de Registro -->
          <div class="d-grid gap-2 mb-3">
            <button type="submit" class="btn btn-success">Registrarse</button>
          </div>
        </form>
  
        <div class="text-center">
          <p>¿Ya tienes cuenta? <router-link to="/login">Inicia sesión aquí</router-link></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        profilePicture: null,
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      };
    },
    methods: {
      handleFileChange(event) {
        const file = event.target.files[0];
        this.profilePicture = file;
      },
      async signup() {
        if (this.password !== this.confirmPassword) {
          alert("Las contraseñas no coinciden.");
          return;
        }
  
        const formData = new FormData();
        formData.append("profilePicture", this.profilePicture);
        formData.append("username", this.username);
        formData.append("firstName", this.firstName);
        formData.append("lastName", this.lastName);
        formData.append("email", this.email);
        formData.append("phone", this.phone);
        formData.append("password", this.password);
  
        try {
          const response = await fetch("http://localhost:5000/api/signup", {
            method: "POST",
            body: formData,
          });
  
          const data = await response.json();
  
          if (data.success) {
            alert("Registro exitoso!");
            this.$router.push("/login");
          } else {
            alert("Error en el registro: " + data.message);
          }
        } catch (error) {
          console.error("Error en la solicitud de registro:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .card {
    max-width: 500px;
    width: 100%;
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }
  
  .container {
    max-width: 500px;
  }
  
  .btn-success {
    background-color: #28a745;
    border-color: #28a745;
    font-weight: bold;
  }
  
  .btn-success:hover {
    background-color: #218838;
    border-color: #1e7e34;
  }
  </style>
  