<template>
  <div class="checkout-page bg-dark-page min-vh-100 py-5 text-white">
    <b-container>
      <div class="d-flex align-items-center justify-content-between mb-5 border-bottom border-secondary pb-3" data-aos="fade-down">
        <h1 class="h2 text-success fw-bold text-uppercase tracking-wider mb-0">
          <font-awesome-icon icon="shield-alt" class="me-2" />Tramitar tu pedido
        </h1>
        <span class="text-muted small">🔒 Servidor Seguro de MattiuzDT</span>
      </div>

      <b-row v-if="cart.items.length > 0">
        <b-col lg="8">
          
          <section class="checkout-section p-4 mb-4 shadow" data-aos="fade-right">
            <h4 class="text-success fw-bold mb-4 d-flex align-items-center justify-content-between">
              <span>1. Dirección de envío</span>
              <b-badge variant="success" pill class="small fs-6">Paso 1</b-badge>
            </h4>

            <div v-if="savedAddresses.length > 0" class="mb-4">
              <p class="text-muted small fw-bold mb-2">TUS DIRECCIONES GUARDADAS</p>
              <b-row>
                <b-col md="6" v-for="addr in savedAddresses" :key="addr.id" class="mb-3">
                  <div 
                    class="address-card p-3 rounded border position-relative h-100 cursor-pointer"
                    :class="selectedAddressId === addr.id ? 'border-success bg-black-50' : 'border-secondary bg-black-25'"
                    @click="selectSavedAddress(addr)"
                  >
                    <b-form-radio v-model="selectedAddressId" :value="addr.id" name="saved-addr" class="custom-radio fw-bold">
                      {{ addr.fullName }}
                    </b-form-radio>
                    <p class="text-muted small mb-1 ms-4 mt-1">{{ addr.address }}</p>
                    <p class="text-muted small mb-0 ms-4">{{ addr.zipCode }} - {{ addr.city }}</p>
                    <span class="text-muted small mb-0 ms-4 d-block mt-1"><font-awesome-icon icon="phone" class="me-1 small" />{{ addr.phone }}</span>
                  </div>
                </b-col>
              </b-row>
            </div>

            <b-form-radio v-model="selectedAddressId" value="new" name="saved-addr" class="custom-radio fw-bold mb-3">
              Utilizar una nueva dirección de envío
            </b-form-radio>

            <b-collapse :visible="selectedAddressId === 'new'" class="mt-3">
              <div class="p-3 bg-black-25 rounded border border-secondary">
                <b-row>
                  <b-col md="6" class="mb-3">
                    <label class="form-label text-muted small fw-bold">Nombre Completo</label>
                    <b-form-input v-model="newAddress.fullName" placeholder="Ej. Nombre y Apellidos" class="bg-input text-white border-secondary"></b-form-input>
                  </b-col>
                  <b-col md="6" class="mb-3">
                    <label class="form-label text-muted small fw-bold">Dirección</label>
                    <b-form-input v-model="newAddress.address" placeholder="Calle, número, piso, puerta..." class="bg-input text-white border-secondary"></b-form-input>
                  </b-col>
                  <b-col md="4" class="mb-3">
                    <label class="form-label text-muted small fw-bold">Ciudad</label>
                    <b-form-input v-model="newAddress.city" placeholder="Ej. Palma" class="bg-input text-white border-secondary"></b-form-input>
                  </b-col>
                  <b-col md="4" class="mb-3">
                    <label class="form-label text-muted small fw-bold">Código Postal</label>
                    <b-form-input v-model="newAddress.zipCode" placeholder="Ej. 07001" class="bg-input text-white border-secondary"></b-form-input>
                  </b-col>
                  <b-col md="4" class="mb-3">
                    <label class="form-label text-muted small fw-bold">Teléfono de contacto</label>
                    <b-form-input v-model="newAddress.phone" placeholder="Obligatorio para reparto" class="bg-input text-white border-secondary"></b-form-input>
                  </b-col>
                </b-row>
                <b-form-checkbox v-model="saveAddressCheckbox" class="custom-checkbox text-muted small mt-2">
                  Guardar esta dirección en mi cuenta para futuras compras
                </b-form-checkbox>
              </div>
            </b-collapse>
          </section>

          <section class="checkout-section p-4 mb-4 shadow" data-aos="fade-right" data-aos-delay="100">
            <h4 class="text-success fw-bold mb-4 d-flex align-items-center justify-content-between">
              <span>2. Método de pago</span>
              <b-badge variant="success" pill class="small fs-6">Paso 2</b-badge>
            </h4>
            
            <div class="payment-methods p-3 bg-black-25 rounded border border-secondary">
              <div class="payment-option p-3 rounded mb-2 border" :class="paymentMethod === 'card' ? 'border-success' : 'border-transparent'">
                <b-form-radio v-model="paymentMethod" name="payment" value="card" class="custom-radio">
                  <span class="text-white fw-bold">Tarjeta de Crédito / Débito</span>
                  <p class="text-muted small mb-0 ms-4">Visa, Mastercard, Maestro, American Express.</p>
                </b-form-radio>
              </div>
              
              <div class="payment-option p-3 rounded mb-2 border" :class="paymentMethod === 'paypal' ? 'border-success' : 'border-transparent'">
                <b-form-radio v-model="paymentMethod" name="payment" value="paypal" class="custom-radio">
                  <span class="text-white fw-bold">PayPal</span>
                  <p class="text-muted small mb-0 ms-4">Conéctate a tu cuenta de PayPal de forma segura e instantánea.</p>
                </b-form-radio>
              </div>

              <div class="payment-option p-3 rounded border" :class="paymentMethod === 'bizum' ? 'border-success' : 'border-transparent'">
                <b-form-radio v-model="paymentMethod" name="payment" value="bizum" class="custom-radio">
                  <span class="text-white fw-bold text-success-light">Bizum</span>
                  <p class="text-muted small mb-0 ms-4">Paga directamente con tu teléfono móvil utilizando tu clave Bizum.</p>
                </b-form-radio>
              </div>
            </div>
          </section>

          <section class="checkout-section p-4 mb-4 shadow" data-aos="fade-right" data-aos-delay="200">
            <h4 class="text-success fw-bold mb-4 d-flex align-items-center justify-content-between">
              <span>3. Revisar productos y envío</span>
              <b-badge variant="success" pill class="small fs-6">Paso 3</b-badge>
            </h4>
            
            <div class="checkout-items-list p-2">
              <div v-for="item in cart.items" :key="item.product.id" class="d-flex align-items-center justify-content-between border-bottom border-secondary py-3">
                <div class="d-flex align-items-center">
                  <img :src="item.product.image" class="item-img-review me-4 shadow" />
                  <div>
                    <h6 class="mb-1 text-white fw-bold fs-5">{{ item.product.name }}</h6>
                    <p class="text-muted small mb-2">Categoría: <span class="text-white">{{ item.product.category }}</span></p>
                    <span class="badge bg-success-25 text-success border border-success px-3 py-1 fw-bold">Cantidad: {{ item.quantity }}</span>
                  </div>
                </div>
                <div class="text-end">
                  <span class="text-success fw-bold fs-4">{{ ((item.product.price || 0) * item.quantity).toFixed(2) }}€</span>
                  <p class="text-muted small mb-0">{{ item.product.price }}€ por unidad</p>
                </div>
              </div>
            </div>
          </section>
        </b-col>

        <b-col lg="4" data-aos="fade-left">
          <aside class="summary-card p-4 sticky-top shadow">
            <h5 class="text-white fw-bold mb-4 text-center text-uppercase tracking-wider">Resumen del Pedido</h5>
            
            <div class="d-flex justify-content-between mb-2 small text-muted">
              <span>Productos ({{ cart.totalItems }}):</span>
              <span>{{ cart.totalPrice.toFixed(2) }}€</span>
            </div>
            <div class="d-flex justify-content-between mb-3 small text-muted">
              <span>Envío y manipulación:</span>
              <span class="text-success fw-bold">GRATIS</span>
            </div>
            
            <hr class="border-secondary my-3" />

            <div class="d-flex justify-content-between mb-4 align-items-center">
              <span class="h5 mb-0 fw-bold">Importe Total:</span>
              <span class="h3 mb-0 text-success fw-bold text-shadow-glow">{{ cart.totalPrice.toFixed(2) }}€</span>
            </div>

            <b-button variant="success" class="w-100 fw-bold py-3 neon-btn text-uppercase" @click="placeOrder" :disabled="isProcessing">
              <span v-if="isProcessing" class="spinner-border spinner-border-sm me-2" role="status"></span>
              {{ isProcessing ? 'Procesando...' : 'Confirmar y Pagar' }}
            </b-button>
            
            <p class="text-muted text-center small mt-3 mb-0">
              Al confirmar el pedido, aceptas las condiciones de venta de MattiuzDT Shop.
            </p>
          </aside>
        </b-col>
      </b-row>

      <div v-else class="text-center py-5" data-aos="zoom-in">
        <font-awesome-icon icon="shopping-basket" size="5x" class="text-secondary mb-4 opacity-25" />
        <h2 class="text-white fw-bold">No tienes artículos para tramitar</h2>
        <p class="text-muted">Añade productos de la tienda antes de pasar por caja.</p>
        <b-button to="/shop" variant="success" class="mt-3 px-4 py-2 fw-bold">VOLVER A LA TIENDA</b-button>
      </div>
    </b-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart.js';
import { useAuthStore } from '@/stores/auth.js';
import { useRouter } from 'vue-router';

const cart = useCartStore();
const auth = useAuthStore();
const router = useRouter();

const paymentMethod = ref('card');
const isProcessing = ref(false);
const saveAddressCheckbox = ref(false);

// Direcciones ficticias guardadas del usuario para simular la experiencia Amazon
const savedAddresses = ref([
  { id: 1, fullName: auth.displayName || 'Jeroni', address: 'Calle Principal 12, 2º A', city: 'Palma', zipCode: '07002', phone: '600123456' },
  { id: 2, fullName: auth.displayName || 'Jeroni', address: 'Avenida de las Estaciones 45, Escalera B', city: 'Palma', zipCode: '07005', phone: '699887766' }
]);

// Por defecto, seleccionamos la primera dirección guardada si existe, si no "new"
const selectedAddressId = ref(savedAddresses.value.length > 0 ? savedAddresses.value[0].id : 'new');

const activeAddress = ref({ ...savedAddresses.value[0] });

const newAddress = ref({
  fullName: '',
  address: '',
  city: '',
  zipCode: '',
  phone: ''
});

const selectSavedAddress = (addr) => {
  selectedAddressId.value = addr.id;
  activeAddress.value = addr;
};

const placeOrder = async () => {
  let finalAddress = {};

  // Validar según la pestaña elegida
  if (selectedAddressId.value === 'new') {
    if (!newAddress.value.address || !newAddress.value.city || !newAddress.value.zipCode || !newAddress.value.phone) {
      alert("🚨 Por favor, rellena todos los campos de la nueva dirección de envío.");
      return;
    }
    finalAddress = newAddress.value;
    
    // Si marcó la casilla de guardar, la añadimos al array simulado
    if (saveAddressCheckbox.value) {
      savedAddresses.value.push({
        id: Date.now(),
        ...newAddress.value
      });
    }
  } else {
    finalAddress = activeAddress.value;
  }

  isProcessing.value = true;

  try {
    // Simulación del envío de datos y pasarela de pago (2 segundos)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert(`🎉 ¡Pedido procesado con éxito vía ${paymentMethod.value.toUpperCase()}!\nEnviando a: ${finalAddress.address}, ${finalAddress.city}`);
    
    cart.clearCart(); // Vaciamos el carro en Pinia
    router.push('/shop'); // Al menú principal
  } catch (error) {
    console.error("Error al guardar pedido:", error);
  } finally {
    isProcessing.value = false;
  }
};
</script>

<style scoped>
.bg-dark-page { 
  background-color: #0a0a0a; 
  background-image: radial-gradient(circle at 50% 0%, #1a1a1a 0%, #0a0a0a 100%);
}
.tracking-wider { letter-spacing: 2px; }

/* SECCIONES PASO A PASO */
.checkout-section {
  background: #141414;
  border: 1px solid #222;
  border-radius: 12px;
}

/* DIRECCIONES GUARDADAS */
.address-card {
  transition: all 0.2s ease;
  border-width: 2px !important;
}
.address-card:hover {
  border-color: #42b883 !important;
}
.cursor-pointer { cursor: pointer; }
.bg-black-25 { background: rgba(0, 0, 0, 0.25); }
.bg-black-50 { background: rgba(0, 0, 0, 0.5); }

/* INPUTS Y FORMULARIOS */
.bg-input {
  background-color: #0d0d0d !important;
  border: 1px solid #333 !important;
}
.bg-input:focus {
  border-color: #42b883 !important;
  box-shadow: 0 0 10px rgba(66, 184, 131, 0.2) !important;
}

/* OPCIONES DE PAGO */
.payment-option {
  background: rgba(0,0,0,0.15);
  border-width: 2px !important;
  transition: border-color 0.2s;
}
.border-transparent { border-color: transparent; }
.text-success-light { color: #00cc7a; }

/* REVISIÓN DE PRODUCTOS */
.item-img-review {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #333;
}
.bg-success-25 {
  background: rgba(66, 184, 131, 0.1);
}

/* CONTENEDOR DERECHO TOTALES (INTACTO) */
.summary-card {
  background: #141414;
  border: 1px solid #42b883;
  border-radius: 16px;
  top: 30px;
}
.text-shadow-glow {
  text-shadow: 0 0 15px rgba(66, 184, 131, 0.4);
}
.neon-btn {
  letter-spacing: 1px;
  box-shadow: 0 4px 15px rgba(25, 135, 84, 0.3);
  transition: transform 0.2s;
}
.neon-btn:hover {
  transform: scale(1.02);
}

/* COMPONENTES COMPATIBILIDAD BOOTSTRAP */
:deep(.custom-radio .form-check-input:checked) {
  background-color: #42b883 !important;
  border-color: #42b883 !important;
}
:deep(.custom-checkbox .form-check-input:checked) {
  background-color: #42b883 !important;
  border-color: #42b883 !important;
}
</style>