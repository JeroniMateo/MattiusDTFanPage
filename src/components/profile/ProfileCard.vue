<template>
  <b-col xl="4" md="6" class="mb-4">
    <div class="amazon-card h-100 p-4 d-flex align-items-start" @click="$emit('click')">
      <div class="icon-container me-3">
        <font-awesome-icon :icon="icon" size="lg" />
      </div>
      
      <div>
        <h5 class="fw-bold card-title mb-1" :class="titleClass">
          <slot name="title">{{ title }}</slot>
        </h5>
        <p class="card-text text-muted small mb-0">
          {{ description }}
        </p>
      </div>
    </div>
  </b-col>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, default: '' },
  description: { type: String, required: true },
  titleClass: { type: String, default: '' }
});

defineEmits(['click']);
</script>

<style scoped>
/* ESTILO DE LA TARJETA COMPONENTE */
.amazon-card {
  background: #141414;
  border: 1px solid #262626;
  border-radius: 10px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  height: 100%;
}

/* EFECTO SELECCIÓN GAMING AL PASAR EL RATÓN */
.amazon-card:hover {
  border-color: #42b883 !important;
  background: #1a1a1a;
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(66, 184, 131, 0.15);
}

/* CONTENEDOR DE ICONOS REDONDEADOS */
.icon-container {
  width: 52px;
  height: 52px;
  min-width: 52px;
  background: rgba(66, 184, 131, 0.08);
  color: #42b883;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(66, 184, 131, 0.2);
}

.card-title {
  color: #ffffff;
  font-size: 1.05rem;
}

.card-text {
  line-height: 1.4;
}
</style>