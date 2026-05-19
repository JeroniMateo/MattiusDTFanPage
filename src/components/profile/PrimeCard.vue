<template>
  <b-col xl="4" md="6" class="mb-4">
    <div class="profile-card-gaming h-100 p-4 d-flex align-items-start" @click="openPrimeBenefits">
      <div class="icon-wrapper me-3">
        <font-awesome-icon icon="calendar-alt" size="lg" />
      </div>
      
      <div class="card-content">
        <h5 class="fw-bold text-white card-title mb-1">
          <span class="text-success-neon">Mattiuz</span> Prime
        </h5>
        <p class="text-muted small mb-0">
          Administrar tu suscripción, consultar las ventajas y la configuración de pago
        </p>
      </div>
    </div>
  </b-col>
</template>

<script setup>
const openPrimeBenefits = () => {
  // Lógica futura: Abrir landing de beneficios o gestión de suscripción
  alert("✨ Bienvenido a la zona Mattiuz Prime. Próximamente verás aquí tus ventajas exclusivas.");
};
</script>

<style scoped>
/* Estilo base idéntico para mantener la uniformidad */
.profile-card-gaming {
  background: #141414;
  border: 1px solid #262626;
  border-radius: 10px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.profile-card-gaming:hover {
  border-color: #42b883 !important;
  background: #1a1a1a;
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(66, 184, 131, 0.15);
}

.icon-wrapper {
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

/* Color específico para el branding Prime */
.text-success-neon {
  color: #00ff95; /* Un verde un poco más brillante para el servicio Prime */
  text-shadow: 0 0 5px rgba(0, 255, 149, 0.2);
}

.card-title {
  font-size: 1.05rem;
  letter-spacing: 0.5px;
}

.card-content {
  line-height: 1.4;
}
</style>