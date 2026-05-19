<template>
  <b-col xl="4" md="6" class="mb-4">
    <div class="profile-card-gaming h-100 p-4 d-flex align-items-start" @click="managePayments">
      <div class="icon-wrapper me-3">
        <font-awesome-icon icon="trash-alt" size="lg" />
      </div>
      
      <div class="card-content">
        <h5 class="fw-bold text-white card-title mb-1">Mis pagos</h5>
        <p class="text-muted small mb-0">
          Administrar o añadir métodos de pago (Tarjeta, PayPal, Bizum) y ver transacciones recientes
        </p>
      </div>
    </div>
  </b-col>
</template>

<script setup>
const managePayments = () => {
  // Lógica futura: Pasarela segura o bóveda de tarjetas (Stripe / Supabase Vault)
  alert("💳 Métodos de pago seguros: Próximamente podrás guardar tus tarjetas encriptadas o vincular tu cuenta de Bizum.");
};
</script>

<style scoped>
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

.card-title {
  font-size: 1.05rem;
  letter-spacing: 0.5px;
}

.card-content {
  line-height: 1.4;
}
</style>