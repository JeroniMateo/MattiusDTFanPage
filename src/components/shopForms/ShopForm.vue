<template>

  <section class="h-100 h-custom" style="background-color: #eee;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col">
          <div class="card">
            <div class="card-body p-4">

              <div class="row">

                <div class="col-lg-7">
                  <h5 class="mb-3">
                    <router-link to="/shop" class="text-body"><i
                        class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping
                    </router-link>
                  </h5>
                  <hr>

                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <p class="mb-1">Shopping cart</p>
                      <p class="mb-0">You have <span class="fw-bold text-danger">{{ $store.state.totalItems }}</span>
                        items in your cart</p>
                    </div>
                    <div>
                      <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!"
                                                                                  class="text-body">price <i
                          class="fas fa-angle-down mt-1"></i></a></p>
                    </div>
                  </div>

                  <ItemsOrder v-for="itemOrder of $store.state.shoppingCart" :key="itemOrder"
                              :item-order="itemOrder"/>

                </div>
                <div class="col-lg-5">

                  <div class="card bg-primary text-white rounded-3">
                    <div class="card-body">
                      <div class="d-flex justify-content-between align-items-center mb-4">
                        <h5 class="mb-0">Card details</h5>
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                             class="img-fluid rounded-3" style="width: 45px;" alt="Avatar">
                      </div>

                      <p class="small mb-2">Card type</p>
                      <a href="#!" type="submit" class="text-white"><i
                          class="fab fa-cc-mastercard fa-2x me-2"></i></a>
                      <a href="#!" type="submit" class="text-white"><i
                          class="fab fa-cc-visa fa-2x me-2"></i></a>
                      <a href="#!" type="submit" class="text-white"><i
                          class="fab fa-cc-amex fa-2x me-2"></i></a>
                      <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></a>

                      <form action="/" id="form" class="mt-4">

                        <div class="d-flex justify-content-between my-3">
                          <div class="form-group w-50 mx-2">
                            <input
                                type="text"
                                class="form-control"
                                id="customername"
                                aria-describedby="emailHelp"
                                placeholder="Enter your complete Name" required
                            />
                            <label for="exampleInputEmail1">Name</label>

                          </div>
                          <div class="form-group w-50 mx-3">
                            <input
                                type="email"
                                class="form-control"
                                id="email"
                                placeholder="Email"
                                required
                            />
                            <label for="email">Email address</label>
                          </div>
                        </div>

                        <div class="form-outline form-white mb-4">
                          <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
                                 placeholder="Cardholder's Name" required/>
                          <label class="form-label" for="typeName">Cardholder's Name</label>
                        </div>

                        <div class="form-outline form-white mb-4">
                          <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
                                 placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" required/>
                          <label class="form-label" for="typeText">Card Number</label>
                        </div>

                        <div class="row mb-4">
                          <div class="col-md-6">
                            <div class="form-outline form-white">
                              <input type="text" id="typeExp" class="form-control form-control-lg"
                                     placeholder="MM/YYYY" size="7" minlength="7" maxlength="7" required/>
                              <label class="form-label" for="typeExp">Expiration</label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-outline form-white">
                              <input type="password" id="typeText" class="form-control form-control-lg"
                                     placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" required/>
                              <label class="form-label" for="typeText">Cvv</label>
                            </div>
                          </div>
                        </div>

                        <hr class="my-4">

                        <div class="d-flex justify-content-between">
                          <p class="mb-2">Subtotal</p>
                          <p class="mb-2">{{ $store.state.total }}€</p>
                        </div>

                        <button v-on:click="buy" type="submit" class="btn btn-info btn-block btn-lg">
                          <div class="d-flex justify-content-between">
                            <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                          </div>
                        </button>

                      </form>

                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Confirmation/>
</template>

<script>
import ItemsOrder from "@/components/shopForms/ItemsOrder";
import {useStore} from "vuex";
import {onMounted} from "vue";
import Confirmation from "@/components/shopForms/Confirmation";

export default {
  name: "ShopForm",
  components: {Confirmation, ItemsOrder},

  methods: {
    buy() {
      document.getElementById("form").addEventListener("submit", function () {
        setTimeout('document.getElementById("form-sended").style.display = "flex"')
        setTimeout('document.getElementById("form-sended").style.display = "none"', 2000)
      })
    }
  },

  setup() {
    const store = useStore()

    onMounted(() => {
      store.dispatch("sumTotalItems")
    })
  }
};
</script>

<style scoped>
#cancel {
  background-color: var(--bs-blue);
}

input {
  height: 40px;
}
</style>