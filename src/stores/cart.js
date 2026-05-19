import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [], // Array que contendrá objetos con la estructura exacta: { product, quantity }
  }),
  
  getters: {
    // Cuenta el número total de unidades en el carro (para la burbuja roja)
    totalItems: (state) => {
      return state.items.reduce((total, item) => total + item.quantity, 0);
    },
    
    // Calcula el precio total de la compra multiplicando precio por cantidad
    totalPrice: (state) => {
      return state.items.reduce((total, item) => {
        // Nos aseguramos de que acceda a item.product.price
        const price = item.product && item.product.price ? item.product.price : 0;
        return total + (price * item.quantity);
      }, 0);
    }
  },
  
  actions: {
    // Añadir producto al carro
    addItem(product) {
      // Buscamos si el producto ya existe comparando item.product.id
      const existingItem = this.items.find(item => item.product.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        // Forzamos la estructura exacta que pide a gritos tu Cart.vue:
        this.items.push({
          product: { ...product }, // Metemos el producto dentro de la propiedad product
          quantity: 1
        });
      }
    },
    
    // Restar cantidad o eliminar por completo usando el ID
    removeItem(productId) {
      const index = this.items.findIndex(item => item.product.id === productId);
      
      if (index !== -1) {
        if (this.items[index].quantity > 1) {
          this.items[index].quantity -= 1;
        } else {
          // Si solo queda 1 unidad, se elimina del array para que desaparezca visualmente
          this.items.splice(index, 1);
        }
      }
    },
    
    // Vaciar el carrito por completo
    clearCart() {
      this.items = [];
    }
  }
});