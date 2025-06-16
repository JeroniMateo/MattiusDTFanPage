  <template>
<div class="container w-50">
    <h2 id="h2-recepie">Xayona Main Recepies</h2>
  <div  id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner w-50 ">
    <div  class="carousel-item active">
      <img  src="../../assets/img/CamisetaNegraCentral.webp" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div  class="carousel-item">
      <img src="../../assets/img/SudaderaAzul.webp" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div class="carousel-item">
      <img  src="../../assets/img/SudaderaGrisJuvenil.webp" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

</div>
</template>

<script>
export default {
    name: "Carousel"
}
</script>

<style scoped>
    h5{
        color: orangered;
    }
    p{
        color: red;
    }
    span{
        background-color: green;
    }
  div.carousel-inner{
  display: contents;
  }
  h2#h2-recepie{
    color: green;
  }
</style>