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
    api(select) {
      if (select === 'Movie') return store.api = store.Movie + store.value + '&page=' + store.page;
      if (select === 'Tv') return store.api = store.Tv + store.value + '&page=' + store.page;
    },
    
    getApi() {
      axios.get(this.api(store.select))
      .then(result => {
        store.list = result.data.results;
        store.totalPage = result.data.total_pages;
        })
      
      
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