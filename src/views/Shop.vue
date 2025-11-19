<template>
  <section class="shop-view container py-5 d-flex">

    <!-- Barra lateral de filtros -->
    <aside class="me-4 mb-4" style="width: 250px;">
      <ShopFilters @filter-change="handleFilter" />
    </aside>

    <!-- Lista de productos -->
    <div class="flex-grow-1 me-4">
      <SearchBar @search="handleSearch" />
      <ProductList
        :products="paginatedProducts"
        @buy="handleBuy"
      />
      <Pagination
        v-model="currentPage"
        :total-items="filteredProducts.length"
        :per-page="perPage"
      />
    </div>

    <!-- Carrito flotante -->
    <Cart />
  </section>
</template>

<script setup>
import SearchBar from '@/components/shop/SearchBar.vue'
import ShopFilters from '@/components/shop/ShopFilters.vue'
import ProductList from '@/components/shop/ProductList.vue'
import Pagination from '@/components/shop/Pagination.vue'
import Cart from '@/components/shop/Cart.vue'

import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart.js'
const cart = useCartStore()

// Datos de ejemplo
const products = ref([
  { id: 1, name: 'Camiseta Mattius DT', price: 25, category: 'Camisetas', image: '/img/camisa1.webp' },
  { id: 2, name: 'Sudadera Mattius DT', price: 45, category: 'Sudaderas', image: '/img/sudadera1.webp' },
  { id: 3, name: 'Taza Oficial', price: 15, category: 'Accesorios', image: '/img/taza1.webp' },
  { id: 4, name: 'Gorra Mattius DT', price: 20, category: 'Accesorios', image: '/img/gorra1.webp' },
  { id: 5, name: 'Edición Limitada Camiseta', price: 35, category: 'Ediciones Limitadas', image: '/img/camisa2.webp' },
  { id: 6, name: 'Sudadera Negra', price: 50, category: 'Sudaderas', image: '/img/sudadera2.webp' },
  { id: 7, name: 'Taza Coleccionista', price: 18, category: 'Accesorios', image: '/img/taza2.webp' },
  { id: 8, name: 'Gorra Oficial', price: 22, category: 'Accesorios', image: '/img/gorra2.webp' },
])

// Filtros y búsqueda
const searchQuery = ref('')
const activeFilters = ref({})

// Paginación
const currentPage = ref(1)
const perPage = 6

const filteredProducts = computed(() => {
  let result = products.value

  if (searchQuery.value)
    result = result.filter(p => p.name.toLowerCase().includes(searchQuery.value.toLowerCase()))

  if (activeFilters.value.category)
    result = result.filter(p => p.category === activeFilters.value.category)

  if (activeFilters.value.minPrice)
    result = result.filter(p => p.price >= parseFloat(activeFilters.value.minPrice))

  if (activeFilters.value.maxPrice)
    result = result.filter(p => p.price <= parseFloat(activeFilters.value.maxPrice))

  if (activeFilters.value.sortBy) {
    switch(activeFilters.value.sortBy) {
      case 'price-asc': result = result.sort((a,b)=> a.price-b.price); break
      case 'price-desc': result = result.sort((a,b)=> b.price-a.price); break
      case 'name-asc': result = result.sort((a,b)=> a.name.localeCompare(b.name)); break
      case 'name-desc': result = result.sort((a,b)=> b.name.localeCompare(a.name)); break
    }
  }

  return result
})

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = start + perPage
  return filteredProducts.value.slice(start, end)
})

// Eventos
const handleSearch = (query) => { searchQuery.value = query; currentPage.value = 1 }
const handleFilter = (filters) => { activeFilters.value = filters; currentPage.value = 1 }
const handleBuy = (product) => { cart.addItem(product); alert(`Añadiste "${product.name}" al carrito! Total: ${cart.totalItems}`) }
</script>

<style scoped>
.shop-title { font-size: 2.5rem; color: #ffa500; }
.shop-view aside { background: #111; padding: 20px; border-radius: 12px; color: white; min-height: 300px; }
.shop-view { min-height: 80vh; }
</style>
