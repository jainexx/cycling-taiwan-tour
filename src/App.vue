<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
// import breadCrum from './components/breadCrum.vue'

</script>

<template>
  <div class="header">
    <Header />
  </div>

  <!-- <div class="breadCrum">
    <breadCrum />
  </div> -->

  <div class="content">
    <RouterView />
  </div>

  <div class="footer">
    <Footer />
  </div>

</template>

<style scoped lang="scss">

</style>
