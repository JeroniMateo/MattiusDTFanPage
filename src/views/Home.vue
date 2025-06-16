<template>
  <main id="main">
    <HomeMain />
    <Carousel />
    <HomeCarts/>
  </main>
</template>

<script>
// @ is an alias to /src
import HomeMain from "../components/home/HomeMain.vue";
import Carousel from "../components/home/Carousel.vue";
import HomeCarts from "../components/home/HomeCarts.vue";
export default {
  name: "Home",
  components: {
    HomeMain,
    Carousel,
    HomeCarts
  },
};
</script>
<style scoped>
a#home {
  color: link-danger;
}
</style>