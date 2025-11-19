<template>
  <b-card class="product-card h-100 d-flex flex-column shadow-sm">
    <!-- Imagen del producto -->
    <img :src="product.image || placeholder" :alt="product.name" class="product-img mb-3" />

    <!-- Contenido -->
    <div class="flex-grow-1">
      <h5 class="fw-bold product-name">{{ product.name }}</h5>
      <p class="text-muted small mb-2">{{ product.category }}</p>
      <p class="mb-3 product-desc">{{ product.desc || 'Producto oficial Mattius DT' }}</p>
    </div>

    <!-- Precio + botón -->
    <div class="d-flex justify-content-between align-items-center mt-auto">
      <span class="fw-bold product-price">{{ product.price.toFixed(2) }}€</span>
      <b-button variant="warning" size="sm" @click="$emit('buy', product)">Añadir</b-button>
    </div>
  </b-card>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const placeholder = 'https://via.placeholder.com/400x300?text=Producto'
</script>

<style scoped>
.product-card {
  border-radius: 12px;
  transition: transform 0.25s, box-shadow 0.25s;
  background: #111;
  color: #fff;
}

.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 25px rgba(0,0,0,0.3);
}

.product-img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 10px;
}

.product-name {
  font-size: 1.1rem;
  color: #ffa500;
}

.product-desc {
  font-size: 0.85rem;
  color: #ccc;
}

.product-price {
  color: #ffa500;
  font-size: 1rem;
}
</style>
