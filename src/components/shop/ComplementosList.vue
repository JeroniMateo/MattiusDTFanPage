<template>
    <div class="complementos-list">
      <h1>Complementos</h1>
      <ul>
        <li v-for="complemento in productosComplementos" :key="complemento.id">
          {{ complemento.nombre }} - €{{ complemento.precio }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: "ComplementosList",
    data() {
      return {
        productosComplementos: [
          { id: 1, nombre: "Llavero", precio: 5 },
          { id: 2, nombre: "Pulsera", precio: 10 },
          { id: 3, nombre: "Bolso", precio: 25 },
          // Agrega más productos de ejemplo
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Agrega estilos para ComplementosList aquí */
  </style>
  