<template>
  <div class="d-flex flex-column align-items-center col-sm-12 col-md-6 col-lg-6 mt-2 d-flex ">
    <div class="card" style="width: 18rem;">
      <img id="product-img" v-bind:src="require('../../assets/img/' + product.img)"  class="card-img-top" alt="...">
      <div class="card-body d-flex align-items-center">
        <h5>{{product.name}}</h5>
        <p class="card-text fs-6">{{product.info}}</p>
        <p class="card-text fs-6">{{product.price}}€</p>
      </div>
    </div>
    <button @click="add(product)" class="btn pt-0">
      <img src="../../assets/img/button-more.webp" alt="">
    </button>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  props :["product"],

  setup(){
    const store = useStore()

    const add = product => {
      store.dispatch("addProduct", product)
      store.dispatch("sumTotal", product)
    }

    return {add}
  }
}
</script>

<style scoped>
  .card-body {
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #product-img{
    height: 180px;
  }
</style>