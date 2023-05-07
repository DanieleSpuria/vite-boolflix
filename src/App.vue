<script>
  import Header from './components/Header.vue';
  import Home from './components/Home.vue';
  import Main from './components/Main.vue';
  import ClickCard from './components/partials/ClickCard.vue';
  import axios from 'axios';
  import {store} from './assets/js/store';
  export default {
    name: 'App',
   
    components: {
    Header,
    Home,
    Main, 
    ClickCard
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
          store.load = true;
          store.search = true
        })
      },

      homeApi() {
        store.search = false;
        axios.get(store.pop + '&page=' + this.randomNumber(1, 500))
        .then(result => {
          store.homePop = result.data.results;
        })

        axios.get(store.genre + 878 + '&page=' + this.randomNumber(1, 500)) 
        .then(result => {
          store.home1 = result.data.results;
        })

        axios.get(store.genre + 80 + '&page=' + this.randomNumber(1, 500)) 
        .then(result => {
          store.home2 = result.data.results;
        })

        axios.get(store.genre + 99 + '&page=' + this.randomNumber(1, 500)) 
        .then(result => {
          store.home3 = result.data.results;
        })

        axios.get(store.genre + 27 + '&page=' + this.randomNumber(1, 500)) 
        .then(result => {
          store.home4 = result.data.results;
        })

        axios.get(store.genre + 14 + '&page=' + this.randomNumber(1, 500)) 
        .then(result => {
          store.home5 = result.data.results;
        })


        // store.home.forEach(n => {
        //   axios.get(store.genre + n.genre + '&page=' + this.randomNumber(1, 500)) 
        //     .then(result => {
        //     n.list = result.data.results;
        //     console.log(store.home);
        //   })
        // })


        store.load = true;
      },

      randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      },
    },

    mounted() {
      this.homeApi()
    }
  }
</script>

<template>
  <ClickCard :card="store.selectCard" v-if="store.clickCard" @keyup.esc="store.clickCard = false"/>

  <Header @search="getApi()" @reset="homeApi()"/>
  <Home v-if="!store.search && store.load"/>
  <Main v-else @nextPrev="getApi()"/>
</template>

<style lang="scss">
  @import '../src/assets/scss/main.scss';
</style>