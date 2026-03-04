<template>
  <div>
    <b-button @click="showCart = true" class="cart-floating-btn shadow-lg border-0">
      <font-awesome-icon icon="shopping-cart" />
      <b-badge v-if="cart.totalItems > 0" variant="danger" pill class="cart-badge bounce">
        {{ cart.totalItems }}
      </b-badge>
    </b-button>

    <b-offcanvas v-model="showCart" title="MY CART" placement="end" body-class="bg-dark-gaming p-0" header-class="bg-dark-gaming text-success border-bottom border-secondary py-4">
      <div class="d-flex flex-column h-100">
        <div v-if="cart.items.length > 0" class="flex-grow-1 overflow-auto p-3 custom-scrollbar">
          <div v-for="item in cart.items" :key="item.id" class="cart-item-gaming mb-3 p-2">
            <div class="d-flex align-items-center">
              <img :src="item.image" class="item-img-small me-3" />
              <div class="flex-grow-1">
                <h6 class="mb-0 text-white fw-bold text-truncate" style="max-width: 140px;">{{ item.name }}</h6>
                <div class="text-success small fw-bold">{{ item.price }}€</div>
              </div>
              <b-button variant="link" class="text-danger p-1" @click="cart.removeItem(item.id)">
                <font-awesome-icon icon="times" />
              </b-button>
            </div>
            <div class="d-flex justify-content-between align-items-center mt-2 px-2 py-1 bg-black-25 rounded border border-secondary">
              <div class="d-flex align-items-center">
                <button class="btn-qty" @click="cart.decreaseItem(item.id)">-</button>
                <span class="mx-3 text-white fw-bold">{{ item.quantity }}</span>
                <button class="btn-qty" @click="cart.addItem(item)">+</button>
              </div>
              <span class="text-muted small">{{ ((item.price || 0) * (item.quantity || 0)).toFixed(2) }}€</span>
            </div>
          </div>
        </div>

        <div v-else class="empty-state text-center my-auto">
          <font-awesome-icon icon="ghost" size="4x" class="text-secondary mb-3 opacity-25" />
          <h4 class="text-white fw-bold">CARRO VACÍO</h4>
        </div>

        <div class="cart-footer p-4 border-top border-secondary bg-black">
          <div class="d-flex justify-content-between mb-3">
            <span class="text-muted h6 mb-0">TOTAL_VALOR:</span>
            <span class="h4 mb-0 text-success fw-bold">{{ (cart.totalPrice || 0).toFixed(2) }}€</span>
          </div>
          <b-button variant="success" class="w-100 fw-bold py-3 neon-btn" :disabled="cart.items.length === 0" @click="checkout">
            FINALIZAR_PEDIDO
          </b-button>
        </div>
      </div>
    </b-offcanvas>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart.js';
const cart = useCartStore();
const showCart = ref(false);
const checkout = () => alert('¡Pedido enviado al sistema!');
</script>

<style scoped>
.bg-dark-gaming { background-color: #0d0d0d !important; }
.bg-black-25 { background: rgba(0,0,0,0.5); }
.cart-floating-btn { position: fixed; bottom: 30px; right: 30px; z-index: 1050; width: 65px; height: 65px; border-radius: 15px; background: #198754; font-size: 1.5rem; box-shadow: 0 0 15px rgba(25, 135, 84, 0.4); }
.cart-item-gaming { background: #151515; border: 1px solid #222; border-radius: 8px; }
.item-img-small { width: 50px; height: 50px; object-fit: cover; border-radius: 4px; }
.btn-qty { background: none; border: none; color: #198754; font-weight: bold; padding: 0 10px; }
.neon-btn { text-transform: uppercase; letter-spacing: 2px; box-shadow: 0 0 10px rgba(25, 135, 84, 0.3); }
</style>