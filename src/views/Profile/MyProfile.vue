<template>
  <div>
    <h1>Mi Perfil</h1>
    <div v-if="user">
      <p>Nombre: {{ user.name }}</p>
      <p>Email: {{ user.email }}</p>
    </div>
    <div v-else>
      <p>Inicia sesión para ver tu perfil.</p>
    </div>
  </div>
</template>

<script>
import axios from '../../services/axios';

export default {
  data() {
    return {
      user: null,
    };
  },
  created() {
    this.fetchUserProfile();
  },
  methods: {
    async fetchUserProfile() {
      try {
        const response = await axios.get('/profile');
        this.user = response.data;
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    },
  },
};
</script>
