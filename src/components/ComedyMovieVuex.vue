<template>
    <div>
      <h2>Comedy</h2>
      <ul>
        <li v-for="movie in ComedyMovies" :key="movie.id">{{ movie.title }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "ComedyMovieVuex",
  computed: {
    ComedyMovies() {
      return this.$store.state.movies.filter(movie => movie.genre === "Comedy");
    }
  }
};
</script>

<style scoped>


</style>