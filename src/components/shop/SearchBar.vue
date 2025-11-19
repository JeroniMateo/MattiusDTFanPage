<template>
  <div class="search-bar d-flex align-items-center">
    <input
      type="text"
      v-model="searchTerm"
      @input="emitSearch"
      class="form-control search-input"
      placeholder="Buscar productos..."
    />
    <i class="fas fa-search search-icon"></i>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const emit = defineEmits(['search'])
const searchTerm = ref('')

const emitSearch = () => {
  emit('search', searchTerm.value)
}
</script>

<style scoped>
.search-bar {
  position: relative;
  width: 100%;
}

.search-input {
  padding: 12px 45px 12px 15px;
  border-radius: 10px;
  border: none;
  background: #222;
  color: #fff;
  font-size: 1rem;
  transition: box-shadow 0.3s ease;
}

.search-input:focus {
  outline: none;
  box-shadow: 0 0 8px rgba(255, 165, 0, 0.7);
}

.search-icon {
  position: absolute;
  right: 15px;
  font-size: 1.2rem;
  color: #ffa500;
  pointer-events: none;
}
</style>
