<script>
  import {store} from '../../assets/js/store';
  import ClickCard from './ClickCard.vue';
  export default {
    name: 'Card', 

    components: {
      ClickCard
    },

    data() {
      return {
        store,
      }
    },

    methods: {
      getImage(img) {
        return new URL (`../../assets/img/${img}.png`, import.meta.url).href;
      },

      click(c) {
        store.selectCard = c;
        store.clickCard = true;
      }
    }
  }
</script>

<template>
  <ClickCard :card="store.selectCard" v-if="store.clickCard"   @keyup.esc="store.clickCard = false"/>


  <div
    class="col"
    v-for="(card, id) of store.list"
    :key="id"
  >


    <div class="card" @click="click(card)">
      <img v-if="card.backdrop_path" :src="store.urlImg + 'w780' + card.backdrop_path" alt="poster">
      <img v-else :src="getImage('no-photo')" alt="no-photo">

      <div class="hover">
        <h3 v-if="store.select === 'movie'">{{ card.title }}</h3>
        <h3 v-if="store.select === 'tv'">{{ card.name}}</h3>
        <h4
          v-if="card.original_title != card.title && store.select === 'movie'"
        >{{ card.original_title }}</h4>
        <h4
          v-if="card.original_name != card.name && store.select === 'tv'"
        >{{ card.original_name }}</h4>
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

  .col {
    width: calc(100% / 5);
    padding: 20px 5px;

    .card {
      position: relative;
      max-height: 155px;
      overflow: hidden;
      border-radius: 5px;
      cursor: pointer;

      &:hover .hover{
          display: flex;
        }
      
      .hover {
        display: none;
        flex-direction: column;
        align-items: center;
        position:absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 10px ;
        color: white;
        background-color: rgba(#000000, .7);
        
        .img {
          width: 12%;
        }

        p {
          text-align: justify;
          overflow: scroll;
        }
      }
    }
  }
</style>