<script>
  import SearchBar from './components/SearchBar.vue';
  import Main from './components/Main.vue';
  import axios from 'axios';
  import {store} from './assets/js/store';
  export default {
   name: 'App',
   
   components: {
    SearchBar,
    Main
   },

   data() {
    return {
      store
    }
   },

   methods: {
    getApiFilm() {
      axios.get(`${store.apiFilm}${store.valueFilm}&page=${store.page}`)
      .then(result => {
        store.listFilm = result.data.results;
        store.totalPage = result.data.total_pages;
      })
    }
   }
  }
</script>

<template>
  <SearchBar @searchFilm="getApiFilm()"/>
  <Main @nextprev="getApiFilm()"/>
</template>

<style lang="scss">
  @import '../src/assets/scss/main.scss';
</style>