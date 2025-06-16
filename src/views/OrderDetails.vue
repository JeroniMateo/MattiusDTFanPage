<template>
    <div class="order-details">
      <div class="container">
        <h1>Detalles del Pedido #{{ order.id }}</h1>
  
        <div class="order-summary">
          <h3>Resumen del Pedido</h3>
          <ul>
            <li><strong>Fecha del Pedido:</strong> {{ order.date }}</li>
            <li><strong>Estado:</strong> {{ order.status }}</li>
            <li><strong>Total:</strong> €{{ order.total }}</li>
          </ul>
        </div>
  
        <div class="shipping-info">
          <h3>Información de Envío</h3>
          <ul>
            <li><strong>Nombre:</strong> {{ order.shipping.name }}</li>
            <li><strong>Dirección:</strong> {{ order.shipping.address }}</li>
            <li><strong>Ciudad:</strong> {{ order.shipping.city }}</li>
            <li><strong>Código Postal:</strong> {{ order.shipping.zip }}</li>
          </ul>
        </div>
  
        <div class="products-list">
          <h3>Productos del Pedido</h3>
          <ul>
            <li v-for="product in order.products" :key="product.id">
              <div class="product-item">
                <img :src="product.image" :alt="product.name" class="product-image" />
                <div class="product-info">
                  <p><strong>{{ product.name }}</strong></p>
                  <p>Cantidad: {{ product.quantity }}</p>
                  <p>Precio: €{{ product.price }}</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
  
        <div class="order-actions">
          <button @click="goBack" class="btn btn-secondary">Volver</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "OrderDetails",
    data() {
      return {
        // Suponiendo que obtienes los detalles del pedido desde una API o ruta
        order: {
          id: 12345,
          date: "2024-11-23",
          status: "Enviado",
          total: 99.99,
          shipping: {
            name: "Juan Pérez",
            address: "Calle Ficticia 123",
            city: "Madrid",
            zip: "28001"
          },
          products: [
            {
              id: 1,
              name: "Camiseta",
              quantity: 2,
              price: 19.99,
              image: "../../assets/img/camiseta.jpg"
            },
            {
              id: 2,
              name: "Gorra",
              quantity: 1,
              price: 15.00,
              image: "../../assets/img/gorra.jpg"
            }
          ]
        }
      };
    },
    methods: {
      goBack() {
        this.$router.push("/profile"); // Redirigir al perfil o a la página anterior
      }
    }
  };
  </script>
  
  <style scoped>
  .order-details {
    margin-top: 20px;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
  }
  
  .order-summary, .shipping-info, .products-list {
    margin-bottom: 30px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  .product-item {
    display: flex;
    margin-bottom: 10px;
  }
  
  .product-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    margin-right: 20px;
  }
  
  .product-info {
    flex: 1;
  }
  
  .order-actions {
    margin-top: 20px;
  }
  
  .btn {
    padding: 10px 20px;
  }
  </style>
  