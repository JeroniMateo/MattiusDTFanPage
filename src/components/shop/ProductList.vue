<template>
  <b-row class="g-4">
    <b-col
      v-for="product in products"
      :key="product.id"
      md="4"
      lg="3"
      data-aos="fade-up"
    >
      <ProductCard :product="product" @buy="$emit('buy', $event)" />
    </b-col>

    <!-- Empty state -->
    <div v-if="products.length === 0" class="text-center text-muted my-5">
      No se encontraron productos.
    </div>
  </b-row>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

const props = defineProps({
  products: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['buy'])
</script>

<style scoped>
/* Ajustes para cards */
.b-row {
  margin-top: 10px;
}

[data-aos] {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

/* Opcional: puedes integrar AOS u otra librería de scroll */
</style>
