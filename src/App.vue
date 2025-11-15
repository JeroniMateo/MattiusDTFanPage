<template>
  <div class="d-flex flex-column min-vh-100">
    <NavBar />
    <router-view class="flex-grow-1" />
    <Footer />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>
