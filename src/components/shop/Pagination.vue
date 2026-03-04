<template>
  <nav v-if="totalPages > 1" aria-label="Paginación productos" class="pagination-wrapper mt-5">
    <ul class="pagination justify-content-center custom-pagination">

      <li :class="['page-item', { disabled: currentPage === 1 }]">
        <a class="page-link shadow-sm" href="#" @click.prevent="changePage(1)" title="Primera">
          <font-awesome-icon icon="angles-left" />
        </a>
      </li>

      <li :class="['page-item', { disabled: currentPage === 1 }]">
        <a class="page-link shadow-sm" href="#" @click.prevent="changePage(currentPage - 1)">
          <font-awesome-icon icon="chevron-left" />
        </a>
      </li>

      <li
        v-for="page in pagesToShow"
        :key="page"
        :class="['page-item', { active: page === currentPage }]"
      >
        <a class="page-link fw-bold shadow-sm" href="#" @click.prevent="changePage(page)">
          {{ page }}
        </a>
      </li>

      <li :class="['page-item', { disabled: currentPage === totalPages }]">
        <a class="page-link shadow-sm" href="#" @click.prevent="changePage(currentPage + 1)">
          <font-awesome-icon icon="chevron-right" />
        </a>
      </li>

      <li :class="['page-item', { disabled: currentPage === totalPages }]">
        <a class="page-link shadow-sm" href="#" @click.prevent="changePage(totalPages)" title="Última">
          <font-awesome-icon icon="angles-right" />
        </a>
      </li>

    </ul>
  </nav>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  totalItems: { type: Number, required: true },
  perPage: { type: Number, default: 6 },
  modelValue: { type: Number, default: 1 }
})

const emit = defineEmits(['update:modelValue'])
const currentPage = ref(props.modelValue)

watch(() => props.modelValue, val => {
  currentPage.value = val
})

const totalPages = computed(() => Math.ceil(props.totalItems / props.perPage))

const pagesToShow = computed(() => {
  const pages = []
  const start = Math.max(1, currentPage.value - 2)
  const end = Math.min(totalPages.value, currentPage.value + 2)
  for (let i = start; i <= end; i++) { pages.push(i) }
  return pages
})

const changePage = (page) => {
  if (page < 1 || page > totalPages.value) return
  currentPage.value = page
  emit('update:modelValue', page)
  
  // Scrollear hacia arriba suavemente al cambiar de página
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
</script>

<style scoped>
.pagination-wrapper {
  user-select: none;
}

.custom-pagination .page-link {
  background: #1a1a1a;
  color: #ccc;
  border: 1px solid #333;
  padding: 10px 18px;
  margin: 0 4px;
  border-radius: 10px !important; /* Forzamos bordes redondeados */
  transition: all 0.3s ease;
}

.custom-pagination .page-item.active .page-link {
  background: var(--primary-color, #ffa500);
  color: #000;
  border-color: var(--primary-color, #ffa500);
  box-shadow: 0 0 15px rgba(255, 165, 0, 0.4);
}

.custom-pagination .page-item:not(.active):not(.disabled) .page-link:hover {
  background: #333;
  color: var(--primary-color, #ffa500);
  border-color: var(--primary-color, #ffa500);
  transform: translateY(-3px);
}

.custom-pagination .page-item.disabled .page-link {
  background: #111;
  color: #444;
  border-color: #222;
}

/* Ajuste para iconos de FontAwesome */
.page-link svg {
  font-size: 0.9rem;
}
</style>