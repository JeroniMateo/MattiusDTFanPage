import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.quantity, 0)
  },
  actions: {
    addItem(product) {
      const existing = this.items.find(i => i.id === product.id)
      if (existing) {
        existing.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
    },
    decreaseItem(id) {
      const existing = this.items.find(i => i.id === id)
      if (existing) {
        existing.quantity--
        if (existing.quantity <= 0) {
          this.removeItem(id)
        }
      }
    },
    removeItem(id) {
      this.items = this.items.filter(i => i.id !== id)
    },
    clearCart() {
      this.items = []
    }
  }
})
