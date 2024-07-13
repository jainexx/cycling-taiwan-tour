<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
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

</template>

<style scoped lang="scss">

</style>
