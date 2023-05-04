<script>
  import SearchBar from './components/SearchBar.vue';
  import Main from './components/Main.vue';
import axios from 'axios';
  export default {
   name: 'App',
   
   components: {
    SearchBar,
    Main
   },

   methods: {
    getApi() {
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=b35e5259fc80aa97841e519ada2e3d64&language=it-IT&query=matrix')
      .then(result => {
        console.log(result.data);
      })
    }
   },

   mounted(){
    this.getApi()
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