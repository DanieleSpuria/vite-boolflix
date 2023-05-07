<script>
  import {store} from '../../assets/js/store';
  export default {
    name: 'Card', 

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
      
      .hover {
        position:absolute;
          bottom: 0;
          left: 0;
          padding: 20px 50px 5px 5px;
          font-size: 12px;
          color: white;
          background-color: rgba(#da1f2b, .6);
          border-top-right-radius: 100%;
        
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