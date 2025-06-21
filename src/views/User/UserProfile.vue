<template>
  <div class="container-fluid user-container mt-4">
    <div class="row">
      <!-- Sidebar -->
      <aside class="col-lg-3 mb-4">
        <div class="list-group shadow">
          <router-link to="/user/login" class="list-group-item list-group-item-action" active-class="active">Iniciar Sesión</router-link>
          <router-link to="/user/signup" class="list-group-item list-group-item-action" active-class="active">Registrarse</router-link>
          <router-link to="/user/profile" class="list-group-item list-group-item-action" active-class="active">Mi Perfil</router-link>
          <router-link to="/user/wishlist" class="list-group-item list-group-item-action" active-class="active">Lista de Deseos</router-link>
          <router-link to="/user/orders" class="list-group-item list-group-item-action" active-class="active">Mis Pedidos</router-link>
        </div>
      </aside>

      <!-- Main Content -->
      <section class="col-lg-9">
        <div class="card shadow p-4">
          <router-view />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserView',
};
</script>

<style scoped>
.user-container {
  min-height: 75vh;
}

.list-group-item.active {
  background-color: var(--bs-primary);
  color: #fff;
  font-weight: bold;
  border: none;
}

.card {
  border-radius: 12px;
  background-color: #fff;
}
</style>
