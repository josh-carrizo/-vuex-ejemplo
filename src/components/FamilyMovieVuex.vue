<template>
    <div>
      <h2>Family</h2>
      <ul>
        <li v-for="movie in FamilyMovies" :key="movie.id">{{ movie.title }}</li>
      </ul>
    </div>
</template>

<script>
export default {
  name: "ComedyMovieVuex",
  computed: {
    FamilyMovies() {
      return this.$store.state.movies.filter(movie => movie.genre === "Family");
    }
  }
};
</script>

<style>

</style>