<template>
  <b-col xl="4" md="6" class="mb-4">
    <div class="profile-card-gaming h-100 p-4 d-flex align-items-start" @click="goToOrders">
      <div class="icon-wrapper me-3">
        <font-awesome-icon icon="shopping-cart" size="lg" />
      </div>
      
      <div class="card-content">
        <h5 class="fw-bold text-white card-title mb-1">Mis pedidos</h5>
        <p class="text-muted small mb-0">
          Rastrear, devolver, cancelar un pedido, descargar la factura o volver a comprar
        </p>
      </div>
    </div>
  </b-col>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToOrders = () => {
  // Redirige al usuario a la tienda o historial (puedes cambiar la ruta más adelante)
  router.push('/shop'); 
};
</script>

<style scoped>
/* Base de la tarjeta estilo Amazon Dark */
.profile-card-gaming {
  background: #141414;
  border: 1px solid #262626;
  border-radius: 10px;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

/* Efecto Hover neón característico */
.profile-card-gaming:hover {
  border-color: #42b883 !important;
  background: #1a1a1a;
  transform: translateY(-3px);
  box-shadow: 0 5px 20px rgba(66, 184, 131, 0.15);
}

/* Esfera contenedora del icono */
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