<template class="d-flex">
  <main class="container d-flex mt-5">
    <section class="row ">
      <div class="container col-sm-12 col-lg-9 my-3">
        <div class="row">
          <Product
              v-for="product of $store.state.products" :key="product.id"
              :product="product"
          />
        </div>
      </div>
      <aside
          class="container-fluid d-flex flex-column justify-content-between col-sm-8 col-lg-3 p-0 sticky-lg-top my-3
                border-start border-end border-2">
        <ShoppingCart/>
        <button id="checkoutButton" class="btn ">
          <router-link id="checkoutLink" class="nav-link text-white" to="/shop/form">Buy</router-link>
        </button>
      </aside>
    </section>
  </main>
</template>

<script>
import Product from "@/components/shop/Product";
import ShoppingCart from "@/components/shop/ShoppingCart";
import {useStore} from "vuex";
import {onMounted} from "vue";

export default {
  name: "Shop",
  components: {
    Product,
    ShoppingCart
  },

  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch("fetchData")
    })
  }
}


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

}
</style>