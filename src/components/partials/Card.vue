<script>
  import {store} from '../../assets/js/store'
  export default {
    name: 'Card',

    data() {
      return {
        store
      }
    },

    methods: {
      getImage(img) {
        return new URL (`../../assets/img/${img}.png`, import.meta.url).href;
      }
    }
  }
</script>

<template>
  <div
    class="col"
    v-for="(card, id) of store.list"
    :key="id"
  >
    <div class="card">
      <img v-if="card.poster_path" :src="store.urlImg + 'w780' + card.poster_path" alt="poster">
      <img v-else :src="getImage('no-photo')" alt="no-photo">
      <h3 v-if="store.select === 'Movie'">{{ card.title }}</h3>
      <h3 v-if="store.select === 'Tv'">{{ card.name}}</h3>
      <h4
        v-if="card.original_title != card.title && store.select === 'Movie'"
      >{{ card.original_title }}</h4>
      <h4
        v-if="card.original_name != card.name && store.select === 'Tv'"
      >{{ card.original_name }}</h4>
      <img
        class="img"
        v-if="getImage(card.original_language).includes(card.original_language)"
        :src="getImage(card.original_language)"
        :alt="card.original_language"
      >
      <span v-else>{{ card.original_language }}</span>
      <span>{{ card.vote_average.toFixed(1) }}</span>
    </div>
 </div>
</template>

<style lang="scss" scoped>

  .col {
    width: calc(100% / 5);
    padding: 10px;

    .card {
      text-align: center;
      border: 1px solid black;
      

      .img {
        width: 12%;
      }
    }
  }
</style>