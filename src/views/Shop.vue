<template>
  <div class="shop-page bg-dark-page min-vh-100 py-5">
    <b-container>
      <h1 class="text-center text-white fw-bold mb-5" data-aos="fade-down">Mattiuz Shop</h1>

      <b-row>
        <b-col lg="3" class="mb-4" data-aos="fade-right">
          <aside class="filter-sidebar p-3 shadow">
            <h5 class="text-success mb-3">
              <font-awesome-icon icon="filter" class="me-2" />Filtros
            </h5>
            <ShopFilters @filter-change="handleFilter" />
          </aside>
        </b-col>

        <b-col lg="9" data-aos="fade-left">
          <div class="search-bar-wrapper mb-4">
            <SearchBar @search="handleSearch" />
          </div>

          <div v-if="paginatedProducts.length > 0">
            <ProductList :products="paginatedProducts" @buy="handleBuy" />
            
            <div class="d-flex justify-content-center mt-5">
              <Pagination 
                v-model="currentPage" 
                :total-items="filteredProducts.length" 
                :per-page="perPage" 
              />
            </div>
          </div>

          <div v-else class="text-center py-5 no-results">
            <font-awesome-icon icon="search-minus" size="4x" class="text-muted mb-3" />
            <h3 class="text-white">No hay productos</h3>
            <p class="text-muted">Prueba a cambiar los filtros o la búsqueda.</p>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <Cart />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useCartStore } from '@/stores/cart.js';
import rawProducts from '@/data/products.json';

// COMPONENTES - Asegúrate de que las rutas sean correctas
import SearchBar from '@/components/shop/SearchBar.vue';
import ShopFilters from '@/components/shop/ShopFilters.vue';
import ProductList from '@/components/shop/ProductList.vue';
import Pagination from '@/components/shop/Pagination.vue';
import Cart from '@/components/shop/Cart.vue';

const cart = useCartStore();
const searchQuery = ref('');
const activeFilters = ref({});
const currentPage = ref(1);
const perPage = 6;

// MAPEO SEGURO DE IMÁGENES
const products = rawProducts.map(p => {
  let imgUrl;
  try {
    // Usamos el constructor de URL de Vite
    imgUrl = new URL(`../assets/img/${p.image}`, import.meta.url).href;
    
    // Si la URL generada termina en 'undefined', es que falló
    if (imgUrl.includes('undefined')) throw new Error();
  } catch (e) {
    // Imagen por defecto si la del JSON falla (IMPORTANTE: logo.webp debe existir)
    imgUrl = new URL(`../assets/img/logo.webp`, import.meta.url).href;
  }
  return { ...p, image: imgUrl };
});

const filteredProducts = computed(() => {
  let res = [...products];
  if (searchQuery.value) {
    res = res.filter(p => p.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
  }
  if (activeFilters.value.category) {
    res = res.filter(p => p.category === activeFilters.value.category);
  }
  return res;
});

const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * perPage;
  return filteredProducts.value.slice(start, start + perPage);
});

const handleSearch = (q) => { searchQuery.value = q; currentPage.value = 1; };
const handleFilter = (f) => { activeFilters.value = f; currentPage.value = 1; };
const handleBuy = (p) => { cart.addItem(p); };
</script>

<style scoped>
.bg-dark-page { background-color: #0a0a0a; }
.filter-sidebar { background: #1a1a1a; border-radius: 12px; border: 1px solid #333; color: white; }
.no-results { background: #1a1a1a; border-radius: 15px; border: 1px dashed #444; }
</style>