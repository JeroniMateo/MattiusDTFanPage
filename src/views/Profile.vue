<template>
  <div class="profile-page bg-dark-page min-vh-100 py-5 text-white">
    <b-container>
      <header class="mb-5">
        <h1 class="fw-bold text-uppercase tracking-wider text-white mb-1">Mi cuenta</h1>
        <p class="text-muted fs-5 mb-0">{{ auth.userEmail }}</p>
      </header>

      <b-row>
        <OrdersCard />
        <SecurityCard />
        <PrimeCard />
        <AddressCard />
        <BusinessCard />
        <PaymentsCard />
        <GiftsCard />
        <MessagingCard />
        <DigitalServicesCard />
        <ContactCard />
        <ListsCard />
        <AppCard />
      </b-row>

      <div class="text-center mt-5">
        <b-button variant="outline-danger" class="px-5 py-3 fw-bold logout-btn" @click="handleLogout">
          <font-awesome-icon icon="sign-out-alt" class="me-2" /> CERRAR SESIÓN DE LA CUENTA
        </b-button>
      </div>
    </b-container>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth';
import { useRouter } from 'vue-router';

// IMPORTACIÓN INDIVIDUAL DE LOS 12 COMPONENTES MODULARES 🚀
import OrdersCard from '@/components/profile/OrdersCard.vue';
import SecurityCard from '@/components/profile/SecurityCard.vue';
import PrimeCard from '@/components/profile/PrimeCard.vue';
import AddressCard from '@/components/profile/AddressCard.vue';
import BusinessCard from '@/components/profile/BusinessCard.vue';
import PaymentsCard from '@/components/profile/PaymentsCard.vue';
import GiftsCard from '@/components/profile/GiftsCard.vue';
import MessagingCard from '@/components/profile/MessagingCard.vue';
import DigitalServicesCard from '@/components/profile/DigitalServicesCard.vue';
import ContactCard from '@/components/profile/ContactCard.vue';
import ListsCard from '@/components/profile/ListsCard.vue';
import AppCard from '@/components/profile/AppCard.vue';

const auth = useAuthStore();
const router = useRouter();

const handleLogout = async () => {
  await auth.signOut();
  router.push('/shop');
};
</script>

<style scoped>
.bg-dark-page { 
  background-color: #0a0a0a; 
  background-image: radial-gradient(circle at 50% 0%, #151515 0%, #0a0a0a 100%);
}
.tracking-wider { letter-spacing: 1px; }

.logout-btn {
  letter-spacing: 1px;
  border-radius: 8px;
  transition: all 0.2s;
}
.logout-btn:hover {
  background-color: #dc3545;
  color: white;
  box-shadow: 0 0 15px rgba(220, 53, 69, 0.3);
}
</style>