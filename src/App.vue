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

      genre() {
        axios.get(store.apiGenresList, {params: store.apiParams})
        .then(result => {
          store.genres = result.data.genres;
        })
      },

      homeApi() {
        store.search = false;
        window.scrollTo(0,0);
        store.apiParams.page = this.randomNumber(1, 500);
        axios.get( store.apiPop , {params: store.apiParams})
        .then(result => {
          store.homePop = result.data.results;
        });
        
        this.genre();

          // store.genres.forEach((genre) => {
          //   axios.get(store.genre + genre.id + '&page=' + this.randomNumber(1, 500)) 
          //   .then(result => {
          //     store.homeGenre[`${genre.name}`] = result.data.results;
          //   })
          // });
        
        // store.load = true;
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
      // this.homeApi()
    }
  }
</script>








<template>
  <ClickCard :card="store.selectCard" v-if="store.clickCard"/>

  <Header @search="getApi(store.valueSelect)" @reset="homeApi()"/>
  <!-- <Home v-if="!store.search" @open="open()"/> -->
  <SearchContainer
    v-if="store.search"
    @nextPrev="getApi(store.valueSelect)"
    :type="store.valueSelect"
  />
</template>








<style lang="scss">
  @import '../src/assets/scss/main.scss';
</style>