<template>
  <div class="search-bar-container">
    <div class="search-input-wrapper">
      <font-awesome-icon icon="search" class="search-icon-left" />

      <input
        type="text"
        v-model="searchTerm"
        @input="emitSearch"
        class="form-control custom-search-input"
        placeholder="¿Qué estás buscando, Mattius?"
      />

      <button 
        v-if="searchTerm" 
        class="clear-btn" 
        @click="clearSearch"
        type="button"
      >
        <font-awesome-icon icon="times" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])
const searchTerm = ref('')

const emitSearch = () => {
  emit('search', searchTerm.value)
}

const clearSearch = () => {
  searchTerm.value = ''
  emitSearch()
}
</script>

<style scoped>
.search-bar-container {
  width: 100%;
  max-width: 600px; /* Limitamos el ancho para que no se estire demasiado */
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.custom-search-input {
  padding: 14px 45px 14px 45px; /* Espacio para los iconos de ambos lados */
  background: #1a1a1a;
  border: 2px solid #333;
  border-radius: 12px;
  color: #fff;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.custom-search-input:focus {
  background: #222;
  border-color: #ffa500;
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.2);
  outline: none;
}

.search-icon-left {
  position: absolute;
  left: 15px;
  color: #555;
  transition: color 0.3s;
}

.custom-search-input:focus + .search-icon-left,
.custom-search-input:not(:placeholder-shown) + .search-icon-left {
  color: #ffa500;
}

.clear-btn {
  position: absolute;
  right: 15px;
  background: none;
  border: none;
  color: #888;
  cursor: pointer;
  padding: 5px;
  transition: color 0.2s, transform 0.2s;
}

.clear-btn:hover {
  color: #ff1900; /* Rojo de tu marca al borrar */
  transform: scale(1.2);
}

/* Estilo para el placeholder */
.custom-search-input::placeholder {
  color: #666;
  font-style: italic;
}
</style>