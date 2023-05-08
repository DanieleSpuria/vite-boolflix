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
  <div class="overlay">
    <div class="cover">
      <img v-if="card.backdrop_path" :src="store.apiImg + 'w780' + card.backdrop_path" alt="poster">
      <img v-else :src="getImage('no-photo')" alt="no-photo">
      <font-awesome-icon
        :icon="['far', 'circle-xmark']"
        id="close"
        @click="store.clickCard = false"
      />
    </div>
    <div class="card"> 
      <div class="hover">
        <h2>{{ card.title || card.name}}</h2>
        <div class="sub">
          <span v-if="card.original_title != card.title">Titolo originale: </span>
          <h4 v-if="card.original_title != card.title">{{ card.original_title || card.original_name}}</h4>
        </div>
        <div class="languages">
          <span>Lingua originale:</span> 
          <img
            class="img"
            v-if="getImage(card.original_language).includes(card.original_language)"
            :src="getImage(card.original_language)"
            :alt="card.original_language"
          >
          <span v-else>{{ card.original_language }}</span>
        </div>
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
      z-index: 98;
      width: 100%;
      height: 100%;
      padding: 50px;
      background-color: rgba(#000000, .8);

      .cover,
      .card {
        width: 70%;
        margin: 0 auto;
      }

      .cover {
        position: relative;
        border-radius: 10px 10px 0 0;
        overflow: hidden;

        #close {
          position: absolute;
          top: 3%;
          right: 2%;
          font-size: 30px;
          color: lightgrey;
          cursor: pointer;

          &:hover {
            color: #da1f2b;
          }
        }
      }
      
      .card {
        padding: 50px;
        color: white;
        background-color: #181818;
        border-radius: 0 0 10px 10px;
        
        .languages,
        .star,
        .sub,
        p {
          margin-top: 20px
        }
  
        .img {
          width: 3%;
        }

        span,
        h4,
        .languages img {
          display: inline-block;
          margin-right: 8px;
        }
      }
    }

</style>