<template>
  <div class="container py-4">
    <h2 class="text-center mb-4">Catálogo de Productos</h2>

    <!-- Filtros -->
    <div class="row mb-4">
      <div class="col-md-3">
        <label for="category" class="form-label">Categoría</label>
        <select
          id="category"
          class="form-select"
          v-model="filters.category"
          @change="applyFilters"
        >
          <option value="">Selecciona una categoría</option>
          <option value="ropa">Ropa</option>
          <option value="complementos">Complementos</option>
        </select>
      </div>

      <div class="col-md-3">
        <label for="size" class="form-label">Tamaño</label>
        <select
          id="size"
          class="form-select"
          v-model="filters.size"
          @change="applyFilters"
        >
          <option value="">Selecciona una talla</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>

      <div class="col-md-3">
        <label for="color" class="form-label">Color</label>
        <select
          id="color"
          class="form-select"
          v-model="filters.color"
          @change="applyFilters"
        >
          <option value="">Selecciona un color</option>
          <option value="rojo">Rojo</option>
          <option value="azul">Azul</option>
          <option value="negro">Negro</option>
          <option value="blanco">Blanco</option>
        </select>
      </div>

      <div class="col-md-3">
        <label for="price" class="form-label">Rango de Precio</label>
        <input
          type="range"
          id="price"
          class="form-range"
          v-model="filters.price"
          min="0"
          max="500"
          @input="applyFilters"
        />
        <div>Precio: ${{ filters.price }}</div>
      </div>
    </div>

    <!-- Productos -->
    <div class="row">
      <div
        class="col-md-4 mb-4"
        v-for="product in filteredProducts"
        :key="product.id"
      >
        <div class="card h-100">
          <img :src="product.image" class="card-img-top" alt="Producto" />
          <div class="card-body">
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.description }}</p>
            <p class="text-muted">Precio: ${{ product.price }}</p>
          </div>
          <div class="card-footer text-center">
            <button class="btn btn-primary">Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: "Camiseta Roja", description: "Camiseta de algodón", category: "ropa", size: "M", color: "rojo", price: 25, image: "/assets/img/camiseta-roja.jpg" },
        { id: 2, name: "Gorra Azul", description: "Gorra de marca", category: "complementos", size: "L", color: "azul", price: 20, image: "/assets/img/gorra-azul.jpg" },
        { id: 3, name: "Chaqueta Negra", description: "Chaqueta de invierno", category: "ropa", size: "S", color: "negro", price: 50, image: "/assets/img/chaqueta-negra.jpg" },
        { id: 4, name: "Cinturón Cuero", description: "Cinturón de cuero auténtico", category: "complementos", size: "", color: "negro", price: 40, image: "/assets/img/cinturon-cuero.jpg" },
        // Agrega más productos aquí
      ],
      filters: {
        category: "",
        size: "",
        color: "",
        price: 500,
      },
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter((product) => {
        return (
          (this.filters.category ? product.category === this.filters.category : true) &&
          (this.filters.size ? product.size === this.filters.size : true) &&
          (this.filters.color ? product.color === this.filters.color : true) &&
          (product.price <= this.filters.price)
        );
      });
    },
  },
  methods: {
    applyFilters() {
      // Este método es llamado cada vez que se cambia un filtro.
      // Los productos ya están siendo filtrados por la propiedad computed 'filteredProducts'
    },
  },
};
</script>

<style scoped>
.card {
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-10px);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
}

.form-select, .form-range {
  margin-bottom: 1rem;
}

.container {
  max-width: 1200px;
}
</style>
