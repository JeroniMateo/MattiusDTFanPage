<template>
  <aside class="cart-container shadow-sm">
    <h5 class="cart-title">Carrito</h5>

    <div v-if="cart.items.length === 0" class="text-muted text-center">
      El carrito está vacío
    </div>

    <div v-else class="cart-items">
      <div v-for="item in cart.items" :key="item.id" class="cart-item d-flex align-items-center mb-3">
        <img :src="item.image" alt="" class="cart-item-img me-2" />
        <div class="flex-grow-1">
          <h6 class="mb-1">{{ item.name }}</h6>
          <p class="mb-0 small">Precio: ${{ item.price }}</p>
          <div class="d-flex align-items-center mt-1">
            <button class="btn btn-sm btn-outline-secondary me-1" @click="decreaseQty(item)">-</button>
            <span class="mx-2">{{ item.quantity }}</span>
            <button class="btn btn-sm btn-outline-secondary ms-1" @click="increaseQty(item)">+</button>
            <button class="btn btn-sm btn-outline-danger ms-3" @click="removeItem(item)">Eliminar</button>
          </div>
        </div>
      </div>
    </div>

    <div class="cart-footer mt-3 border-top pt-2">
      <p class="mb-1 fw-bold">Total: ${{ total }}</p>
      <button class="btn btn-warning w-100" :disabled="cart.items.length === 0">Finalizar Compra</button>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '@/stores/cart.js'

const cart = useCartStore()

const increaseQty = (item) => cart.addItem(item)
const decreaseQty = (item) => cart.decreaseItem(item.id)
const removeItem = (item) => cart.removeItem(item.id)

const total = computed(() =>
  cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0)
)
</script>

<style scoped>
.cart-container {
  position: sticky;
  top: 100px;
  max-width: 300px;
  background: #111;
  padding: 20px;
  border-radius: 12px;
  color: white;
  height: fit-content;
}

.cart-title { font-size: 1.3rem; margin-bottom: 1rem; color: #ffa500; }
.cart-item-img { width: 50px; height: 50px; object-fit: cover; border-radius: 8px; }
.cart-footer button { transition: transform 0.2s; }
.cart-footer button:hover { transform: scale(1.05); }
</style>
