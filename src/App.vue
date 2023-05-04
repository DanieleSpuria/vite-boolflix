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
    getApi() {
      axios.get(`${store.api} ${store.valueFilm}`)
      .then(result => {
        store.listFilm = result.data.results;
        console.log(store.listFilm);
      })
    }
   }
  }
</script>

<template>
  <SearchBar @searchFilm="getApi()"/>
  <Main/>
</template>

<style lang="scss">
  @import '../src/assets/scss/main.scss';
</style>