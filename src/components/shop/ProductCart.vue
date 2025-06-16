// /src/components/ProductCard.vue
<template>
  <div>
    <h3>{{ product.name }}</h3>
    <button @click="addToCart">Añadir al carrito</button>
  </div>
</template>

<script>
import axios from '../../services/axios'

export default {
  props: {
    product: Object,
  },
  methods: {
    async addToCart() {
      const cartData = {
        user_id: 1,  // Asegúrate de que este ID sea dinámico basado en el usuario logueado
        product_id: this.product.id,
        quantity: 1,
      };

      try {
        await axios.post('/add-to-cart', cartData);
        console.log('Producto añadido al carrito');
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    },
  },
};
</script>
