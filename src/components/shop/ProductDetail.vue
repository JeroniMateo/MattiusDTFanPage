<template>
  <div class="container py-5">
    <div class="row">
      <!-- Imagen del producto -->
      <div class="col-md-6 text-center mb-4">
        <img
          :src="`/assets/img/${product.img}`"
          alt="Imagen del producto"
          class="img-fluid rounded shadow"
          style="max-height: 400px; object-fit: contain"
        />
      </div>

      <!-- Detalles del producto -->
      <div class="col-md-6">
        <h2 class="fw-bold">{{ product.name }}</h2>
        <p class="text-muted">{{ product.info }}</p>
        <p class="fs-4">💶 {{ product.price }} €</p>

        <!-- Selección de opciones -->
        <div class="mb-3">
          <label class="form-label">Talla</label>
          <select class="form-select" v-model="selectedSize">
            <option disabled value="">Selecciona una talla</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label">Color</label>
          <select class="form-select" v-model="selectedColor">
            <option disabled value="">Selecciona un color</option>
            <option>Rojo</option>
            <option>Azul</option>
            <option>Negro</option>
            <option>Blanco</option>
          </select>
        </div>

        <div class="mb-3">
          <label class="form-label">Género</label>
          <select class="form-select" v-model="selectedGender">
            <option disabled value="">Selecciona un tipo</option>
            <option>Hombre</option>
            <option>Mujer</option>
            <option>Joven</option>
            <option>Niño</option>
          </select>
        </div>

        <div class="mb-4">
          <label class="form-label">Cantidad</label>
          <input type="number" class="form-control" v-model="quantity" min="1" />
        </div>

        <!-- Botones -->
        <div class="d-flex flex-column flex-md-row gap-3">
          <button class="btn btn-primary w-100" @click="addToCart">
            <i class="bi bi-cart-plus me-2"></i>Añadir a la cesta
          </button>

          <button class="btn btn-success w-100" @click="buyNow">
            <i class="bi bi-currency-euro me-2"></i>Comprar ahora
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  name: "ProductDetail",
  data() {
    return {
      selectedSize: "",
      selectedColor: "",
      selectedGender: "",
      quantity: 1,
    };
  },
  computed: {
    product() {
      const id = this.$route.params.id;
      return this.$store.state.products.find((p) => p.id === Number(id)) || {};
    },
  },
  methods: {
    addToCart() {
      if (!this.selectedSize || !this.selectedColor || !this.selectedGender) {
        alert("Por favor, selecciona talla, color y género.");
        return;
      }

      this.$store.commit("addToCart", {
        ...this.product,
        size: this.selectedSize,
        color: this.selectedColor,
        gender: this.selectedGender,
        quantity: this.quantity,
      });

      alert("Producto añadido al carrito ✅");
    },

    buyNow() {
      if (!this.selectedSize || !this.selectedColor || !this.selectedGender) {
        alert("Por favor, selecciona talla, color y género.");
        return;
      }

      this.$store.commit("setBuyNowProduct", {
        ...this.product,
        size: this.selectedSize,
        color: this.selectedColor,
        gender: this.selectedGender,
        quantity: this.quantity,
      });

      this.$router.push("/shop/form");
    },
  },
};
</script>

<style scoped>
select,
input {
  max-width: 300px;
}
</style>
