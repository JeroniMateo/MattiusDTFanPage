<template>
    <div class="ropa-list">
      <h1>Ropa</h1>
      <ul>
        <li v-for="producto in productosRopa" :key="producto.id">
          {{ producto.nombre }} - €{{ producto.precio }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "RopaList",
    data() {
      return {
        productosRopa: [
          { id: 1, nombre: "Camiseta", precio: 20 },
          { id: 2, nombre: "Pantalón", precio: 35 },
          { id: 3, nombre: "Gorra", precio: 15 },
          // Agrega más productos de ejemplo
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Agrega estilos para RopaList aquí */
  </style>
  