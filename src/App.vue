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
      if (store.select === 'Movie') {
        axios.get(`${store.Movie}${store.value}&page=${store.page}`)
        .then(result => {
          store.list = result.data.results;
          store.totalPage = result.data.total_pages;
          console.log(`${store.Movie}${store.value}&page=${store.page}`);
        })
      };
      if (store.select === 'Tv') {
        axios.get(`${store.Tv}${store.value}&page=${store.page}`)
        .then(result => {
          store.list = result.data.results;
          store.totalPage = result.data.total_pages;
          console.log(`${store.Tv}${store.value}&page=${store.page}`);
        })
      }
    }
   }
  }
</script>

<template>
  <SearchBar @search="getApi(store.select)"/>
  <Main @nextPrev="getApi()"/>
</template>

<style lang="scss">
  @import '../src/assets/scss/main.scss';
</style>