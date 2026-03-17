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

          <div v-if="loading" class="text-center py-5">
            <div class="spinner-border text-success" role="status"></div>
            <p class="text-muted mt-3">SINCRONIZANDO INVENTARIO...</p>
          </div>

          <div v-else-if="paginatedProducts.length > 0">
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
import { ref, computed, onMounted } from 'vue';
import { useCartStore } from '@/stores/cart.js';
import { supabase } from '@/lib/supabase'; // Importamos el cliente que creaste

// COMPONENTES
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

// ESTADOS PARA DATOS DINÁMICOS
const rawProductsFromDB = ref([]);
const loading = ref(true);

// CARGA DE DATOS DESDE SUPABASE
const fetchProducts = async () => {
  loading.value = true;
  try {
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('id', { ascending: true });

    if (error) throw error;

    // MAPEO DE IMÁGENES (Mantenemos tu lógica de assets locales)
    rawProductsFromDB.value = data.map(p => {
      let imgUrl;
      try {
        imgUrl = new URL(`../assets/img/${p.image}`, import.meta.url).href;
        if (imgUrl.includes('undefined')) throw new Error();
      } catch (e) {
        imgUrl = new URL(`../assets/img/logo.webp`, import.meta.url).href;
      }
      return { ...p, image: imgUrl };
    });
  } catch (err) {
    console.error('Error en Supabase:', err.message);
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  fetchProducts();
});

// LÓGICA DE FILTRADO (Ahora usa los datos de la DB)
const filteredProducts = computed(() => {
  let res = [...rawProductsFromDB.value];
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
/* FONDO Y CONTENEDOR PRINCIPAL */
.bg-dark-page { 
  background-color: #0a0a0a; 
  background-image: radial-gradient(circle at 50% 0%, #1a1a1a 0%, #0a0a0a 100%);
}

/* TÍTULO PRINCIPAL */
h1 {
  letter-spacing: 2px;
  text-shadow: 0 0 20px rgba(66, 184, 131, 0.3);
}

/* SIDEBAR DE FILTROS */
.filter-sidebar { 
  background: #141414; 
  border-radius: 16px; 
  border: 1px solid #222; 
  color: white; 
  position: sticky;
  top: 20px;
  transition: border-color 0.3s ease;
}

.filter-sidebar:hover {
  border-color: #42b883;
}

/* BARRA DE BÚSQUEDA */
.search-bar-wrapper {
  background: #141414;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #222;
}

/* ESTADO SIN RESULTADOS */
.no-results { 
  background: #141414; 
  border-radius: 20px; 
  border: 2px dashed #333; 
  transition: all 0.3s ease;
}

.no-results h3 {
  font-weight: 700;
  letter-spacing: 1px;
}

/* CARGANDO (SPINNER) */
.spinner-border { 
  width: 4rem; 
  height: 4rem; 
  border-width: 0.3em;
  filter: drop-shadow(0 0 10px #42b883);
}

/* PAGINACIÓN CUSTOM (Si usas clases de Bootstrap o tu componente) */
:deep(.pagination .page-link) {
  background-color: #1a1a1a;
  border-color: #333;
  color: #fff;
  transition: all 0.2s;
}

:deep(.pagination .page-link:hover) {
  background-color: #42b883;
  color: #000;
}

:deep(.pagination .active .page-link) {
  background-color: #42b883;
  border-color: #42b883;
  color: #000;
}

/* RESPONSIVE */
@media (max-width: 991.98px) {
  .filter-sidebar {
    position: static;
    margin-bottom: 2rem;
  }
}

/* ANIMACIONES AOS AJUSTES */
[data-aos] {
  pointer-events: none;
}
.aos-animate {
  pointer-events: auto;
}
</style>