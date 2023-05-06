<script>
  import Header from './components/Header.vue';
  import Home from './components/Home.vue';
  import Main from './components/Main.vue';
  import axios from 'axios';
  import {store} from './assets/js/store';
  export default {
    name: 'App',
   
    components: {
    Header,
    Home,
    Main
    },

    data() {
      return {
        store
      }
    },

    methods: {
      api(select) {
        if (select === 'movie') return store.api = store.movie + store.value + '&page=' + store.page;
        if (select === 'tv') return store.api = store.tv + store.value + '&page=' + store.page;
      },

      getApi() {
        axios.get(this.api(store.select))
        .then(result => {
          store.list = result.data.results;
          store.totalPage = result.data.total_pages;
          store.load = true
        })
      },

      homeApi() {
        axios.get(store.pop)
        .then(result => {
          store.homePop = result.data.results;
          console.log(store.homePop);
        })
      }
    },

    mounted() {
      this.homeApi()
    }
  }
</script>

<template>
  <Header @search="getApi()"/>
  <Home/>
  <!-- <Main @nextPrev="getApi()"/> -->
</template>

<style lang="scss">
  @import '../src/assets/scss/main.scss';
</style>