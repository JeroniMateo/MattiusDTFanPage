<template>
  <div class="d-flex justify-content-between align-items-center p-3 bg-primary" id="title">
    <p class="fs-5 text-white m-0"><b>Order cart</b></p>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart text-white"
         viewBox="0 0 16 16">
      <path
          d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>
  </div>
  <div>
    <Items
        v-for="item of $store.state.shoppingCart" :key="item"
        :item="item"
    />
  </div>
  <div>
    <p class="text-center">Total : {{ $store.state.total }}€</p>
  </div>

</template>

<script>
import Items from "@/components/shop/Items";

export default {
  name: "ShoppingCart",
  components: {
    Items
  },
}
</script>

<style scoped>
#title{
  border-radius: 20px 20px 0 0;
}

</style>