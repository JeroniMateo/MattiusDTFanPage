<template>
  <div class="d-flex justify-content-between align-items-center w-100 px-3 my-3" style="height: 70px">

    <div class="col-xl-4">
      <img v-bind:src="require('../../assets/img/' + item.img)" class="img-fluid " alt="">
    </div>
  
    <div class="d-flex align-items-center col-xl-2">
      <button class="fs-5" @click="deleteProduct(item)">-</button>
      <p class="m-0 mx-2 fs-5">{{ item.amount }}</p><br>
       
      <button @click="add(item)" class="fs-5">+</button>
    </div>

    <div class="col-xl-1">
      <p class="m-0 fs-6" style="color: var(--bs-red)"> <b>{{ item.price * item.amount }}€</b></p>
    </div>

  </div>
</template>

<script>

import {useStore} from "vuex";

export default {
  name: "Items",
  props: ["item"],

  setup() {
    const store = useStore()

    const deleteProduct = product => store.dispatch("deleteOneProduct", product)
    const add = product => {
      store.dispatch("addProduct", product)
      store.dispatch("sumTotal", product)
    }

    return {deleteProduct, add}

  }
}
</script>

<style scoped>
img {
  width: 100px;
}

button {
  background: transparent;
  border: 0;
  padding: 0;
}
</style>