<template class="d-flex">
  <main class="container d-flex mt-5">
    <section class="row">
      <!-- Productos + Filtros -->
      <div class="container col-sm-12 col-lg-9 my-3">
        <!-- Filtros -->
        <div class="row mb-4">
          <div class="col-md-3">
            <label for="category" class="form-label">Categoría</label>
            <select id="category" class="form-select" v-model="filters.category">
              <option value="">Todas</option>
              <option value="ropa">Ropa</option>
              <option value="complementos">Complementos</option>
            </select>
          </div>

          <div class="col-md-3">
            <label for="size" class="form-label">Talla</label>
            <select id="size" class="form-select" v-model="filters.size">
              <option value="">Todas</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
            </select>
          </div>

          <div class="col-md-3">
            <label for="color" class="form-label">Color</label>
            <select id="color" class="form-select" v-model="filters.color">
              <option value="">Todos</option>
              <option value="negro">Negro</option>
              <option value="blanco">Blanco</option>
              <option value="azul">Azul</option>
              <option value="gris">Gris</option>
              <option value="beige">Beige</option>
              <option value="varios">Varios</option>
            </select>
          </div>

          <div class="col-md-3">
            <label for="price" class="form-label">Precio máx.</label>
            <input type="range" id="price" class="form-range" v-model="filters.price" min="0" max="30" />
            <div>Precio: €{{ filters.price }}</div>
          </div>
        </div>

        <!-- Productos -->
        <div class="row">
          <Product
            v-for="product in filteredProducts"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>

      <!-- Carrito -->
      <aside class="container-fluid d-flex flex-column justify-content-between col-sm-8 col-lg-3 p-0 sticky-lg-top my-3 border-start border-end border-2">
        <ShoppingCart />
        <button id="checkoutButton" class="btn">
          <router-link id="checkoutLink" class="nav-link text-white" to="/shop/form">Buy</router-link>
        </button>
      </aside>
    </section>
  </main>
</template>

<script>
import Product from "@/components/shop/Product";
import ShoppingCart from "@/components/shop/ShoppingCart";
import { useStore } from "vuex";
import { onMounted, reactive, computed } from "vue";

export default {
  name: "Shop",
  components: {
    Product,
    ShoppingCart
  },
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch("fetchData");
    });

    const filters = reactive({
      category: "",
      size: "",
      color: "",
      price: 30
    });

    const filteredProducts = computed(() => {
      return store.state.products.filter(product => {
        const matchesCategory = filters.category ? product.category === filters.category : true;
        const matchesSize = filters.size ? product.size === filters.size : true;
        const matchesColor = filters.color ? product.color === filters.color : true;
        const matchesPrice = product.price <= filters.price;
        return matchesCategory && matchesSize && matchesColor && matchesPrice;
      });
    });

    return {
      filters,
      filteredProducts
    };
  }
};
</script>

<style scoped>
aside {
  height: 60vh;
  border-radius: 20px;
}

#checkoutButton {
  background-color: var(--bs-blue);
  border-radius: 0 0 20px 20px;
}

#checkoutLink {
  font-weight: bold;
}

.card-img-top {
  object-fit: cover;
  height: 200px;
}
</style>
