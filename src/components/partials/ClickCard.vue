<script>
  import {store} from '../../assets/js/store';
  export default {
   name: 'ClickCard',

   props: {
    card: Object,
   },

   data() {
    return {
      store
    }
   },

   methods: {
    getImage(img) {
      return new URL (`../../assets/img/${img}.png`, import.meta.url).href;
    },
   }
  }
</script>

<template>
  <div class="overlay" @click="store.clickCard = false">
    <div class="card"> 
      <img v-if="card.backdrop_path" :src="store.urlImg + 'w780' + card.backdrop_path" alt="poster">
      <img v-else :src="getImage('no-photo')" alt="no-photo">

      <div class="hover">
        <h3>{{ card.title }}</h3>
        <h4 v-if="card.original_title != card.title">Titolo originale: {{ card.original_title }}</h4>
        <img
          class="img"
          v-if="getImage(card.original_language).includes(card.original_language)"
          :src="getImage(card.original_language)"
          :alt="card.original_language"
        >
        <span v-else>{{ card.original_language }}</span>
        <div class="star">
          <font-awesome-icon :icon="['fas', 'star']" v-for="n of Math.ceil(card.vote_average.toFixed(0) / 2)" :key="n"/>
          <font-awesome-icon :icon="['far', 'star']" v-for="n of (5 - Math.ceil(card.vote_average.toFixed(0) / 2))" :key="n"/> 
        </div>
        <p>{{ card.overview }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    
    .overlay {
      position: absolute;
      z-index: 99;
      width: 100%;
      height: 100%;
      padding: 50px;
      background-color: rgba(#000000, .8);
  
      .card {
        width: 70%;
        margin: 0 auto;
        padding: 50px;
        color: white;
        background-color: #181818;
  
        .img {
          width: 2%;
        }
      }
    }

</style>