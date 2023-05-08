<script>
  import Header from './components/Header.vue';
  import Home from './components/Home.vue';
  import SearchContainer from './components/SearchContainer.vue'
  import ClickCard from './components/partials/ClickCard.vue';
  import axios from 'axios';
  import {store} from './assets/js/store';
  export default {
    name: 'App',
   
    components: {
    Header,
    Home,
    SearchContainer, 
    ClickCard
    },

    data() {
      return {
        store
      }
    },

    methods: {
      getApi(type) {
        store.search = true;
        let apiUrl = store.apiUrl + type;
        store.apiParams.query = store.valueInput;
        axios.get(apiUrl, {params: store.apiParams})
        .then(result => {
          store[type] = result.data.results;
          store.totalPages = result.data.total_pages;
        });
      },
      
      homePop() {
        store.search = false;
        window.scrollTo(0,0);
        store.apiParams.page = this.randomNumber(1, 500);
        axios.get( store.apiPop , {params: store.apiParams})
        .then(result => {
          store.homePop = result.data.results;
          console.log(store.homePop);
        });
      },
      
      genre() {
        axios.get(store.apiGenresList, {params: store.apiParams})
        .then(result => {
          store.genres = result.data.genres;
          console.log(store.genres);
        })
      },

      homeGenre() {
        store.genres.forEach((genre) => {
          store.apiParams.genre = genre.id;
          axios.get(store.apiGenre, {params: store.apiParams}) 
          .then(result => {
            store.homeGenres[`${genre.name}`] = result.data.results;
            console.log(store.homeGenres);
          })
        });
      },

      homeApi() {
        this.homePop();
        
        this.genre();

        // this.homeGenre();
      },

      // open() {
      //   // axios.get(this.api(store.homePop))
      //   // .then(result => {
      //   //   store.list = result.data.results;
      //   //   store.totalPage = result.data.total_pages;
      //   //   store.load = true;
      //   //   store.search = true
      //   // })
      //   console.log('eccolo');
      // },

      randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    },

    mounted() {
      this.homeApi()
    }
  }
</script>








<template>
  <ClickCard :card="store.selectCard" v-if="store.clickCard"/>

  <Header @search="getApi(store.valueSelect)" @reset="homeApi()"/>
  <Home v-if="!store.search" @open="open()"/>
  <SearchContainer
    v-if="store.search"
    @nextPrev="getApi(store.valueSelect)"
    :type="store.valueSelect"
  />
</template>








<style lang="scss">
  @import '../src/assets/scss/main.scss';
</style>