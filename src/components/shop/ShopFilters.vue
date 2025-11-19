<template>
  <div class="filters-container p-3">
    
    <!-- Categoría -->
    <div class="filter-group">
      <label class="filter-label">Categoría</label>
      <select v-model="selectedCategory" @change="emitFilters" class="filter-select">
        <option value="">Todas</option>
        <option v-for="cat in categories" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
    </div>

    <!-- Precio mínimo -->
    <div class="filter-group">
      <label class="filter-label">Precio mínimo</label>
      <input
        type="number"
        v-model="minPrice"
        @input="emitFilters"
        class="filter-input"
        min="0"
        placeholder="0€"
      />
    </div>

    <!-- Precio máximo -->
    <div class="filter-group">
      <label class="filter-label">Precio máximo</label>
      <input
        type="number"
        v-model="maxPrice"
        @input="emitFilters"
        class="filter-input"
        min="0"
        placeholder="100€"
      />
    </div>

    <!-- Ordenar -->
    <div class="filter-group">
      <label class="filter-label">Ordenar por</label>
      <select v-model="sortBy" @change="emitFilters" class="filter-select">
        <option value="">Ninguno</option>
        <option value="price-asc">Precio (menor a mayor)</option>
        <option value="price-desc">Precio (mayor a menor)</option>
        <option value="name-asc">Nombre (A-Z)</option>
        <option value="name-desc">Nombre (Z-A)</option>
      </select>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['filter-change'])

const categories = ["Camisetas", "Sudaderas", "Accesorios", "Ediciones Limitadas"]

const selectedCategory = ref("")
const minPrice = ref("")
const maxPrice = ref("")
const sortBy = ref("")

const emitFilters = () => {
  emit("filter-change", {
    category: selectedCategory.value,
    minPrice: minPrice.value,
    maxPrice: maxPrice.value,
    sortBy: sortBy.value
  })
}
</script>

<style scoped>
.filters-container {
  background: #111;
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

/* Cada grupo */
.filter-group {
  display: flex;
  flex-direction: column;
  width: 200px;
}

/* Labels */
.filter-label {
  color: #ffa500;
  margin-bottom: 5px;
  font-weight: 600;
  font-size: 0.9rem;
}

/* Inputs */
.filter-select,
.filter-input {
  padding: 10px;
  border-radius: 8px;
  background: #222;
  color: #fff;
  border: 1px solid #333;
  transition: border 0.3s ease;
}

.filter-select:focus,
.filter-input:focus {
  border: 1px solid #ffa500;
  outline: none;
}
</style>
