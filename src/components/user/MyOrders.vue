<template>
  <div class="wishlist-container">
    <h2 class="mb-4 text-center">Lista de Deseos</h2>

    <div v-if="wishlist.length === 0" class="text-center text-muted">
      <p>No tienes productos en tu lista de deseos.</p>
    </div>

    <div v-else class="row">
      <div
        class="col-md-4 mb-4"
        v-for="item in wishlist"
        :key="item.id"
      >
        <div class="card h-100">
          <img
            :src="require(`@/assets/img/${item.img}`)"
            class="card-img-top"
            alt="Producto"
          />
          <div class="card-body">
            <h5 class="card-title">{{ item.name }}</h5>
            <p class="card-text">{{ item.info }}</p>
            <p class="text-muted">Precio: {{ item.price }} €</p>
          </div>
          <div class="card-footer text-center d-flex justify-content-between">
            <button class="btn btn-outline-danger btn-sm" @click="removeFromWishlist(item.id)">
              Quitar
            </button>
            <button class="btn btn-primary btn-sm" @click="addToCart(item)">
              Añadir al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WishList",
  data() {
    return {
      wishlist: [
        {
          id: 0,
          img: "Bolsa.webp",
          name: "Hazelnut Butter and Coffee Meringues",
          price: 5,
          info: "Hazelnut Butter and Coffee Meringues balls",
        },
        {
          id: 1,
          img: "Botella.webp",
          name: "Apple cake",
          price: 6,
          info: "pieces Apple Vegan Cake",
        },
        // Aquí irían más productos guardados
      ],
    };
  },
  methods: {
    removeFromWishlist(id) {
      this.wishlist = this.wishlist.filter((item) => item.id !== id);
    },
    addToCart(product) {
      // Aquí deberías integrar con Vuex o emitir un evento
      this.$store.commit("addToCart", product);
      alert(`${product.name} añadido al carrito.`);
    },
  },
};
</script>

<style scoped>
.card-img-top {
  height: 200px;
  object-fit: cover;
}
.card-footer {
  background-color: #f8f9fa;
}
</style>
