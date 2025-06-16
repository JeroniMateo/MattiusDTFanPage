<template>
  <div
      class="container-md pt-5 pb-5 border-top border-bottom border-secondary"
    >
      <div class="row d-flex justify-content-between">
        <div
          class="d-flex flex-column align-items-center col-xl-4 col-lg-6 mt-2"
        >
          <div class="card p-2" style="width: 18rem">
            <img
              src="	https://i.blogs.es/45ba14/carrot-cake-fitness1/1366_2000.jpg"
              class="card-img-top"
              alt="..." width="600px"
            />
            <div class="card-body">
              <h2 class="cart-title">Carrot cake fitness proteico</h2>
              <p class="card-text">
                Siendo puntillosos, un auténtico carrot cake se correspondería a
                la receta estadounidense y más contundente de este postre,
                aunque existen muchas versiones de tartas y pasteles de
                zanahoria. 
              </p>
            </div>
          </div>
          <div class="container">
            <router-link to="/shop">
              <button id="homeProduct " class="btn pt-0">
                <img
                  src="../../assets/img/button-more.webp" alt=""
                />
              </button>
            </router-link>
          </div>
        </div>

        <div
          class="d-flex flex-column align-items-center col-xl-4 col-lg-6 mt-2"
        >
          <div class="card p-2" style="width: 18rem">
            <img
              src="https://i.blogs.es/d73fac/mousse-fresas1/1366_2000.jpg"
              class="card-img-top"
              alt="..." width="600px"
            />
            <div class="card-body">
              <h2 class="cart-title">Mousse de fresas y queso fresco</h2>
              <p class="card-text">
                Las fresas y fresones de temporada Por sí solas parecen ya un
                dulce delicioso, pero también gusta aprovechar para utilizarlas
                en algún postre saludable.
              </p>
            </div>
          </div>
          <div class="container">
            <router-link to="/shop">
              <button id="homeProduct" class="btn pt-0">
                <img
                  src="../../assets/img/button-more.webp" alt=""
                />
              </button>
            </router-link>
          </div>
        </div>
        <div
          class="d-flex flex-column align-items-center col-xl-4 col-lg-12 mt-2"
        >
          <div class="card p-2" style="width: 18rem">
            <img
              src="https://i.blogs.es/12d615/mango-20curd/1366_2000.jpg"
              class="card-img-top"
              alt="..." width="600px"
            />
            <div class="card-body">
              <h2 class="card-title">
                Milhojas sencillo de mango y frambuesas
              </h2>
              <p class="card-text">
                Este milhojas sencillo de mango y frambuesas se prepara en un
                santiamén. Si tenéis un mango en casa, queréis variar un poco la
                forma habitual de comerlo .
              </p>
            </div>
          </div>
          <div class="container">
            <router-link to="/shop">
              <button id="homeProduct" class="btn pt-0">
                <img
                  src="../../assets/img/button-more.webp" alt=""
                />
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'HomeCarts'
}
</script>

<style>

</style>