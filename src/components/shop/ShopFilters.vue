<template>
  <div class="filters-sidebar p-3 shadow-lg">
    <h5 class="filter-main-title mb-4">
      <font-awesome-icon icon="filter" class="me-2" />Refinar Búsqueda
    </h5>

    <div class="filter-group mb-4">
      <label class="filter-label">Categoría</label>
      <div class="custom-select-wrapper">
        <select v-model="selectedCategory" @change="emitFilters" class="filter-select">
          <option value="">Todas las categorías</option>
          <option v-for="cat in categories" :key="cat" :value="cat">
            {{ cat }}
          </option>
        </select>
      </div>
    </div>

    <div class="filter-group mb-4">
      <label class="filter-label">Rango de Precio</label>
      <div class="d-flex align-items-center gap-2">
        <input
          type="number"
          v-model.number="minPrice"
          @input="emitFilters"
          class="filter-input"
          placeholder="Min"
        />
        <span class="text-muted">-</span>
        <input
          type="number"
          v-model.number="maxPrice"
          @input="emitFilters"
          class="filter-input"
          placeholder="Max"
        />
      </div>
    </div>

    <div class="filter-group mb-4">
      <label class="filter-label">Ordenar por</label>
      <select v-model="sortBy" @change="emitFilters" class="filter-select">
        <option value="">Destacados</option>
        <option value="price-asc">Precio: Menor a Mayor</option>
        <option value="price-desc">Precio: Mayor a Menor</option>
        <option value="name-asc">Nombre: A-Z</option>
        <option value="name-desc">Nombre: Z-A</option>
      </select>
    </div>

    <b-button 
      variant="outline-danger" 
      size="sm" 
      class="w-100 mt-2 py-2 reset-btn"
      @click="resetFilters"
    >
      <font-awesome-icon icon="times" class="me-2" />Limpiar filtros
    </b-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['filter-change'])

const categories = ["Camisetas", "Sudaderas", "Accesorios", "Ediciones Limitadas"]

const selectedCategory = ref("")
const minPrice = ref(null)
const maxPrice = ref(null)
const sortBy = ref("")

const emitFilters = () => {
  emit("filter-change", {
    category: selectedCategory.value,
    minPrice: minPrice.value,
    maxPrice: maxPrice.value,
    sortBy: sortBy.value
  })
}

const resetFilters = () => {
  selectedCategory.value = ""
  minPrice.value = null
  maxPrice.value = null
  sortBy.value = ""
  emitFilters()
}
</script>

<style scoped>
.filters-sidebar {
  background: #141414; /* Un gris casi negro para contrastar con el fondo total */
  border-radius: 15px;
  border: 1px solid #222;
  position: sticky;
  top: 100px;
}

.filter-main-title {
  color: #fff;
  font-weight: 800;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.filter-group {
  display: flex;
  flex-direction: column;
}

.filter-label {
  color: #888;
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: uppercase;
}

/* Inputs y Selects Estilizados */
.filter-select,
.filter-input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  background: #0a0a0a;
  color: #fff;
  border: 1px solid #333;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.filter-select:focus,
.filter-input:focus {
  border-color: #ffa500;
  box-shadow: 0 0 10px rgba(255, 165, 0, 0.2);
  outline: none;
}

/* Eliminar flechas de input number */
.filter-input::-webkit-inner-spin-button,
.filter-input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.reset-btn {
  font-weight: 700;
  border-radius: 10px;
  border-width: 2px;
  transition: all 0.3s;
}

.reset-btn:hover {
  background-color: #ff1900;
  border-color: #ff1900;
  color: white;
}
</style>