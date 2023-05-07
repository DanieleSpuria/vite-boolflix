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

      getPop() {
        // axios.get(this.api(store.homePop))
        // .then(result => {
        //   store.list = result.data.results;
        //   store.totalPage = result.data.total_pages;
        //   store.load = true;
        //   store.search = true
        // })
        console.log('eccolo');
      },

      randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      },

      genre() {
        axios.get(store.listGenre)
        .then(result => {
          store.arrayGenre = result.data.genres;
        })
      },

      homeGenre() {
        store.search = false;
        axios.get(store.pop + '&page=' + this.randomNumber(1, 500))
        .then(result => {
          store.homePop = result.data.results;
        });

        this.genre();

        store.arrayGenre.forEach((genres, i) => {
          axios.get(store.genre + genres.id + '&page=' + this.randomNumber(1, 500)) 
          .then(result => {
            store.homeGenre[`${genres.name}`] = result.data.results;
          })
        });

        window.scrollTo(0,0);
        store.load = true;
      }
    },

    mounted() {
      this.homeGenre()
    }
  }
</script>








<template>
  <ClickCard :card="store.selectCard" v-if="store.clickCard" @keyup.esc="store.clickCard = false"/>

  <Header @search="getApi()" @reset="homeGenre()"/>
  <Home v-if="!store.search && store.load" @pop="getPop()"/>
  <Main v-else @nextPrev="getApi()"/>
</template>








<style lang="scss">
  @import '../src/assets/scss/main.scss';
</style>