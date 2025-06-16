<template>
    <div id="mis-pedidos" class="container mt-5">
      <h1>Mis Pedidos</h1>
      <div v-if="orders.length === 0">
        <p>No se encontraron pedidos.</p>
      </div>
      <div v-else>
        <div class="card mb-3" v-for="order in orders" :key="order.id">
          <div class="card-body">
            <h5 class="card-title">Pedido #{{ order.id }}</h5>
            <p class="card-text">Fecha: {{ order.date }}</p>
            <p class="card-text">Estado: {{ order.status }}</p>
            <router-link :to="'/order/' + order.id" class="btn btn-primary">Ver Detalles</router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        orders: [
          { id: 1, date: '2024-11-01', status: 'Enviado' },
          { id: 2, date: '2024-11-15', status: 'Pendiente' }
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
  