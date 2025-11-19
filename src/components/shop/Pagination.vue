<template>
  <nav v-if="totalPages > 1" aria-label="Paginación productos" class="mt-4">
    <ul class="pagination justify-content-center">

      <!-- Página anterior -->
      <li :class="['page-item', { disabled: currentPage === 1 }]">
        <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Anterior</a>
      </li>

      <!-- Números de página -->
      <li
        v-for="page in pagesToShow"
        :key="page"
        :class="['page-item', { active: page === currentPage }]"
      >
        <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
      </li>

      <!-- Página siguiente -->
      <li :class="['page-item', { disabled: currentPage === totalPages }]">
        <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Siguiente</a>
      </li>

    </ul>
  </nav>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  totalItems: {
    type: Number,
    required: true
  },
  perPage: {
    type: Number,
    default: 6
  },
  modelValue: {
    type: Number,
    default: 1
  }
})

const emit = defineEmits(['update:modelValue'])

const currentPage = ref(props.modelValue)

watch(() => props.modelValue, val => {
  currentPage.value = val
})

const totalPages = computed(() => Math.ceil(props.totalItems / props.perPage))

// Mostrar solo unas páginas alrededor de la actual (por ejemplo 5)
const pagesToShow = computed(() => {
  const pages = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(totalPages.value, currentPage.value + 2)

  for (let i = start; i <= end; i++) {
    pages.push(i)
  }

  return pages
})

const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  emit('update:modelValue', page)
}
</script>

<style scoped>
.pagination .page-item .page-link {
  background: #222;
  color: #fff;
  border-radius: 8px;
  margin: 0 3px;
  border: 1px solid #333;
  transition: background 0.3s, color 0.3s, transform 0.2s;
}

.pagination .page-item.active .page-link {
  background: #ffa500;
  color: #111;
}

.pagination .page-item.disabled .page-link {
  opacity: 0.5;
  pointer-events: none;
}

.pagination .page-item .page-link:hover {
  background: #ffa500;
  color: #111;
  transform: scale(1.05);
}
</style>
