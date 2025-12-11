<template>
  <section class="shop-view container py-5 d-flex">

    <!-- Sidebar Filters -->
    <aside class="me-4 mb-4" style="width: 250px;">
      <ShopFilters @filter-change="handleFilter" />
    </aside>

    <!-- Products List -->
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

    <!-- Floating Cart -->
    <Cart />
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useCartStore } from '@/stores/cart.js'

import SearchBar from '@/components/shop/SearchBar.vue'
import ShopFilters from '@/components/shop/ShopFilters.vue'
import ProductList from '@/components/shop/ProductList.vue'
import Pagination from '@/components/shop/Pagination.vue'
import Cart from '@/components/shop/Cart.vue'

import rawProducts from '@/data/products.json'

// Cart store
const cart = useCartStore()

// Map JSON products to proper image URLs
const products = rawProducts.map(p => ({
  ...p,
  image: new URL(`../assets/img/${p.image}`, import.meta.url).href
}))

// Search & Filters
const searchQuery = ref('')
const activeFilters = ref({})

// Pagination
const currentPage = ref(1)
const perPage = 6

// Filtered products
const filteredProducts = computed(() => {
  let result = products

  // Search
  if (searchQuery.value) {
    result = result.filter(p =>
      p.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    )
  }

  // Category filter
  if (activeFilters.value.category) {
    result = result.filter(p => p.category === activeFilters.value.category)
  }

  // Price filters
  if (activeFilters.value.minPrice) {
    result = result.filter(p => p.price >= parseFloat(activeFilters.value.minPrice))
  }
  if (activeFilters.value.maxPrice) {
    result = result.filter(p => p.price <= parseFloat(activeFilters.value.maxPrice))
  }

  // Sorting
  if (activeFilters.value.sortBy) {
    switch(activeFilters.value.sortBy) {
      case 'price-asc': result = result.sort((a,b) => a.price - b.price); break
      case 'price-desc': result = result.sort((a,b) => b.price - a.price); break
      case 'name-asc': result = result.sort((a,b) => a.name.localeCompare(b.name)); break
      case 'name-desc': result = result.sort((a,b) => b.name.localeCompare(a.name)); break
    }
  }

  return result
})

// Paginated products
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = start + perPage
  return filteredProducts.value.slice(start, end)
})

// Event handlers
const handleSearch = query => { 
  searchQuery.value = query
  currentPage.value = 1
}
const handleFilter = filters => {
  activeFilters.value = filters
  currentPage.value = 1
}
const handleBuy = product => {
  cart.addItem(product)
}
</script>

<style scoped>
.shop-view aside {
  background: #111;
  padding: 20px;
  border-radius: 12px;
  color: white;
  min-height: 300px;
}
.shop-view { min-height: 80vh; }
</style>
