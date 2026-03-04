<template>
  <div class="product-list-container">
    <b-row class="g-4">
      <b-col
        v-for="(product, index) in products"
        :key="product.id"
        cols="12"
        sm="6"
        md="6"
        lg="4"
        xl="4"
        data-aos="fade-up"
        :data-aos-delay="index * 100" 
      >
        <ProductCard 
          :product="product" 
          @buy="$emit('buy', $event)" 
        />
      </b-col>

      <b-col v-if="products.length === 0" cols="12" class="text-center py-5">
        <div class="empty-state-card p-5 shadow-sm">
          <font-awesome-icon icon="search-minus" size="4x" class="text-muted mb-3" />
          <h4 class="text-white">¡Vaya! No hay resultados</h4>
          <p class="text-muted">Prueba a cambiar los filtros o el texto de búsqueda.</p>
        </div>
      </b-col>
    </b-row>
  </div>
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
.product-list-container {
  min-height: 400px; /* Evita saltos de altura al filtrar */
}

/* Animación suave para la entrada de las cards */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.empty-state-card {
  background: #1a1a1a;
  border-radius: 15px;
  border: 1px dashed #444;
}

/* Ajustes de Grid para pantallas muy grandes */
@media (min-width: 1400px) {
  .col-xl-4 {
    flex: 0 0 auto;
    width: 33.333333%; /* Mantener 3 columnas en LG/XL para que las cards se vean grandes y premium */
  }
}
</style>