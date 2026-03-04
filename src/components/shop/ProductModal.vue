<template>
  <b-modal 
    v-model="internalShow" 
    centered 
    hide-footer 
    size="lg"
    body-class="p-0 bg-dark-gaming text-white border-0"
    header-class="bg-dark-gaming text-success border-bottom border-secondary"
    title="DETALLES_DEL_OBJETO"
  >
    <div v-if="product" class="row g-0">
      <div class="col-md-6 border-end border-secondary">
        <img :src="product.image" class="img-fluid h-100 object-fit-cover" :alt="product.name">
      </div>
      <div class="col-md-6 p-4">
        <h2 class="fw-bold mb-2 text-white">{{ product.name }}</h2>
        <p class="text-success h4 mb-3 fw-bold">{{ product.price }}€</p>
        <p class="text-muted mb-4" style="line-height: 1.6;">
          {{ product.description || 'Este item aumentará tus estadísticas. No olvides equiparlo en tu inventario.' }}
        </p>
        <div class="d-grid gap-2 mt-auto">
          <b-button variant="success" size="lg" class="fw-bold py-3 neon-btn" @click="$emit('add-to-cart', product)">
            <font-awesome-icon icon="cart-plus" class="me-2" />AÑADIR AL CARRO
          </b-button>
          <b-button variant="outline-secondary" @click="internalShow = false">CERRAR</b-button>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({ show: Boolean, product: Object });
const emit = defineEmits(['close', 'add-to-cart']);

const internalShow = computed({
  get: () => props.show,
  set: (val) => { if (!val) emit('close'); }
});
</script>

<style scoped>
.bg-dark-gaming { background-color: #0d0d0d !important; }
.object-fit-cover { object-fit: cover; }
.neon-btn { box-shadow: 0 0 10px rgba(25, 135, 84, 0.3); }
</style>