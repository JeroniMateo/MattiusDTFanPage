<template>
    <div id="wishlist" class="container mt-5">
      <h1>Lista de Deseos</h1>
      <div v-if="wishlist.length === 0">
        <p>No tienes productos en tu lista de deseos.</p>
      </div>
      <div v-else>
        <div class="card mb-3" v-for="item in wishlist" :key="item.id">
          <div class="card-body">
            <img :src="item.image" alt="Imagen del producto" class="img-fluid" width="100" />
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.description }}</p>
            <p class="card-text">Precio: {{ item.price }} €</p>
            <router-link :to="'/product/' + item.id" class="btn btn-primary">Ver Producto</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        wishlist: [
          { id: 1, name: 'Camiseta Xayona', description: 'Camiseta con logo', price: 20, image: 'https://via.placeholder.com/150' },
          { id: 2, name: 'Gorra Mattius', description: 'Gorra deportiva', price: 15, image: 'https://via.placeholder.com/150' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .card {
    margin-bottom: 20px;
  }
  </style>
  