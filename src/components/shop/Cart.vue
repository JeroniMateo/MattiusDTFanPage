<template>
  <div>
    <b-button v-b-toggle.sidebar-cart class="cart-floating-btn shadow-lg">
      <font-awesome-icon icon="shopping-cart" />
      <b-badge v-if="cart.totalItems > 0" variant="danger" pill class="cart-badge">
        {{ cart.totalItems }}
      </b-badge>
    </b-button>

    <b-sidebar
      id="sidebar-cart"
      title="Tu Carrito"
      right
      shadow
      backdrop
      bg-variant="dark"
      text-variant="light"
      class="custom-cart-sidebar"
    >
      <div class="px-3 py-2 h-100 d-flex flex-column">
        
        <div v-if="cart.items.length === 0" class="empty-cart text-center my-auto">
          <font-awesome-icon icon="search-minus" size="4x" class="text-muted mb-3" />
          <p class="text-muted">El carrito está vacío</p>
          <b-button variant="outline-warning" v-b-toggle.sidebar-cart size="sm">Seguir comprando</b-button>
        </div>

        <div v-else class="cart-items-list flex-grow-1 overflow-auto">
          <div v-for="item in cart.items" :key="item.id" class="cart-item-card mb-3 p-2 rounded">
            <div class="d-flex align-items-center">
              <img :src="item.image" :alt="item.name" class="cart-item-img me-2" />
              <div class="flex-grow-1">
                <h6 class="mb-0 text-truncate" style="max-width: 150px;">{{ item.name }}</h6>
                <p class="mb-0 text-warning fw-bold">{{ item.price }}€</p>
              </div>
              <b-button variant="link" class="text-danger p-0 ms-2" @click="removeItem(item)">
                <font-awesome-icon icon="times" />
              </b-button>
            </div>
            
            <div class="d-flex justify-content-between align-items-center mt-2 bg-black-50 p-1 rounded">
              <div class="quantity-controls">
                <b-button size="sm" variant="dark" @click="decreaseQty(item)">-</b-button>
                <span class="mx-3 small fw-bold">{{ item.quantity }}</span>
                <b-button size="sm" variant="dark" @click="increaseQty(item)">+</b-button>
              </div>
              <span class="small text-muted">{{ (item.price * item.quantity).toFixed(2) }}€</span>
            </div>
          </div>
        </div>

        <div class="cart-footer border-top border-secondary pt-3 mt-auto">
          <div class="d-flex justify-content-between mb-3">
            <span class="h5 mb-0">Total:</span>
            <span class="h5 mb-0 text-warning fw-bold">{{ total.toFixed(2) }}€</span>
          </div>
          <b-button 
            variant="warning" 
            block 
            class="w-100 fw-bold py-2 shadow" 
            :disabled="cart.items.length === 0"
            @click="checkout"
          >
            FINALIZAR COMPRA
          </b-button>
          <b-button 
            variant="link" 
            size="sm" 
            class="text-muted w-100 mt-2" 
            @click="cart.clearCart()"
          >
            Vaciar carrito
          </b-button>
        </div>
      </div>
    </b-sidebar>
  </div>
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

const checkout = () => {
  alert('¡Gracias por tu compra, Mattius! Redirigiendo a pasarela...')
}
</script>

<style scoped>
/* Botón flotante */
.cart-floating-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary-color);
  border: none;
  font-size: 1.5rem;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.cart-floating-btn:hover {
  transform: scale(1.1) rotate(-10deg);
  background-color: white;
  color: var(--primary-color);
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 0.8rem;
  padding: 5px 8px;
}

/* Items del Carrito */
.cart-item-card {
  background: #1a1a1a;
  border: 1px solid #333;
}

.cart-item-img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 6px;
}

.bg-black-50 {
  background: rgba(0, 0, 0, 0.3);
}

.quantity-controls button {
  padding: 0px 8px;
  line-height: 1.2;
}

/* Sidebar Styling */
:deep(.b-sidebar) {
  width: 350px !important;
}

:deep(.b-sidebar-header) {
  border-bottom: 1px solid #333;
  background: #111 !important;
}
</style>