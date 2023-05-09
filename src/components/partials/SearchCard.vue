<script>
  import {store} from '../../assets/js/store';
  export default {
    name: 'SearchCard', 

    props: {
      card: Object
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

      click(card) {
        store.selectCard = card;
        store.clickCard = true;
        window.scrollTo(0,0);
      }
    }
  }
</script>








<template>
  <div class="col">
    <div class="card" @click="click(card)">
      <img v-if="card.backdrop_path" :src="store.apiImg + 'w780' + card.backdrop_path" alt="poster">
      <img v-else :src="getImage('no-photo')" alt="no-photo">

      <div class="hover">
        <h3>{{ card.title || card.name}}</h3>
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