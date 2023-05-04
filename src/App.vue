<script>
  import SearchBar from './components/SearchBar.vue';
  import Main from './components/Main.vue';
  export default {
   name: 'App',
   
   components: {
    SearchBar,
    Main
   }
  }
</script>

<template>
  <SearchBar/>
  <Main/>
</template>

<style lang="scss">
  @import '../src/assets/scss/main.scss';
</style>