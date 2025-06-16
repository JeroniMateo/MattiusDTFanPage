<template>
  <Header/>
  <router-view/>
  <Footer/>
</template>

<script>
import Header from '@/components/basics/Header.vue'
import Footer from '@/components/basics/Footer.vue'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>
<style>
body{
   background: url("../src/assets/img/bg-body.webp");
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
