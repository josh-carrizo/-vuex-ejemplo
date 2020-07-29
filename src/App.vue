<template>
  <div id="app">
    <ComedyMovieVuex />
    <FamilyMovieVuex />
  </div>
</template>

<script>
import ComedyMovieVuex from './components/ComedyMovieVuex.vue'
import FamilyMovieVuex from './components/FamilyMovieVuex.vue'
export default {
  name: 'App',
  components: {
    ComedyMovieVuex,
    FamilyMovieVuex
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>