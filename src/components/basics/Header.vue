<template>
  <div id="header" class="container-lg">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbar">
      <div
        class="container-lg d-flex justify-content-between px-sm-3 px-md-5 py-3 border-bottom border-secondary"
      >
        <router-link class="navbar-brand" to="/">
          <img id="logo" src="../../assets/img/logo.webp" alt="" />
          <img
            class="img-fluid"
            src="../../assets/img/xayona.webp"
            alt=""
            width="150px"
            height="100px"
          />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse col-auto justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link
                style="color: var(--bs-primary)"
                class="link-primary nav-link mx-2 active-link"
                aria-current="page"
                to="/"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-secondary mx-2" to="#"
                >About</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-secondary mx-2" to="/shop"
                >Shop</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-secondary mx-2" to="#"
                >Services</router-link
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="../../assets/img/logo.webp" alt="" width="30px"> Mi cuenta
              </a>
              <ul class="dropdown-menu dropdown-menu-end">
                <li>
                  <router-link class="dropdown-item" to="/user/profile">
                    <i class="fas fa-id-badge me-2"></i> Mi Perfil
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/user/orders">
                    <i class="fas fa-box me-2"></i> Mis Pedidos
                  </router-link>
                </li>
                <li>
                  <router-link class="dropdown-item" to="/user/wishlist">
                    <i class="fas fa-heart me-2"></i> Lista de deseos
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
div.collapse {
  float: right;
}
#navbar {
  background: url("../../assets/img/bg-header.webp") no-repeat center;
  background-size: cover;
}

img#logo {
  width: 10vh;
}
</style>
