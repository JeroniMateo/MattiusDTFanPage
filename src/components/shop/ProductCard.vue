<template>
  <b-card class="product-card h-100 shadow-lg border-0">
    <div class="product-img-wrapper position-relative overflow-hidden rounded">
      <b-badge variant="danger" class="category-badge shadow">
        {{ product.category }}
      </b-badge>
      <img 
        :src="product.image || placeholder" 
        :alt="product.name" 
        class="product-img w-100" 
      />
    </div>

    <div class="product-body mt-3 d-flex flex-column flex-grow-1">
      <h5 class="fw-bold product-name mb-1">{{ product.name }}</h5>
      <p class="mb-3 product-desc flex-grow-1">
        {{ product.desc || 'Edición oficial Mattius DT para la comunidad.' }}
      </p>

      <div class="d-flex justify-content-between align-items-center pt-2 border-top border-secondary mt-auto">
        <div class="price-container">
          <span class="price-symbol">€</span>
          <span class="fw-bold product-price">{{ product.price.toFixed(2) }}</span>
        </div>
        <b-button 
          variant="warning" 
          class="add-btn px-3 fw-bold" 
          @click="$emit('buy', product)"
        >
          <font-awesome-icon icon="plus" class="me-1 small" />Añadir
        </b-button>
      </div>
    </div>
  </b-card>
</template>

<script setup>
const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const placeholder = 'https://placehold.co/400x300/111/ffa500?text=Mattiuz+Shop'
</script>

<style scoped>
.product-card {
  background: #1a1a1a; /* Un poco más claro que el fondo para que resalte */
  color: #fff;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid #222 !important;
}

.product-card:hover {
  transform: translateY(-8px);
  border-color: #ffa500 !important;
  box-shadow: 0 15px 30px rgba(255, 165, 0, 0.1) !important;
}

/* Imagen y Efecto Zoom */
.product-img-wrapper {
  height: 200px;
}

.product-img {
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-img {
  transform: scale(1.1);
}

/* Category Badge */
.category-badge {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 2;
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding: 5px 10px;
  background-color: #b00202 !important; /* Rojo de tu marca */
}

/* Tipografía */
.product-name {
  font-size: 1.15rem;
  color: #fff;
  transition: color 0.3s;
}

.product-card:hover .product-name {
  color: #ffa500;
}

.product-desc {
  font-size: 0.85rem;
  color: #888;
  line-height: 1.4;
}

.product-price {
  font-size: 1.25rem;
  color: #ffa500;
}

.price-symbol {
  color: #ffa500;
  margin-right: 2px;
}

/* Botón Añadir */
.add-btn {
  border-radius: 8px;
  transition: all 0.2s;
}

.add-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.5);
}
</style>