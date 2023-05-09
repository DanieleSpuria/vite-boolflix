<script>
  import HomeCard from './partials/HomeCard.vue';
  import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'
  import {store} from '../assets/js/store';
  
  export default {
    name: 'Home',  

    components: {
      HomeCard,
      Swiper,
      SwiperSlide
    },
    
    data() {
      return {
        store,
        random: 0
      }
    },

    methods: {
      getImage(img) {
        return new URL (`../assets/img/${img}.png`, import.meta.url).href;
      },

      randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      },

      click(selectCard) {
        store.selectCard = selectCard;
        store.clickCard = true;
        window.scrollTo(0,0);
      },
    },

    mounted() {
      this.random = this.randomNumber(store.homePop.length, 0);
    }
  }
</script>








<template>
  <div class="home">
    <div class="jumbotron"  @click="click(store.homePop[random])">
      <img v-if="store.homePop[random].backdrop_path" :src="store.apiImg + 'w1280' + store.homePop[random].backdrop_path" alt="backdrop">
      <img v-else :src="getImage('no-photo')" alt="no-photo">

      <div class="hover-jumbo">
        <h1>{{ store.homePop[random].title }}</h1>
      </div>
    </div>


    <div class="container">
      <div class="box">
        <h3>Popolari</h3>
        <div class="row"> 
          <Swiper :slidesPerView="5" :spaceBetween="10">
           <SwiperSlide v-for="(filmPop, filmPopId) in store.homePop" :key="filmPopId">
            <div class="col" @click="click(filmPop)">
              <div class="card">
                <img v-if="filmPop.backdrop_path" :src="store.apiImg + 'w780' + filmPop.backdrop_path" alt="backdrop">
                <img v-else :src="getImage('no-photo')" alt="no-photo">

                <div class="hover">
                  <h4>{{ filmPop.title }}</h4>
                </div>
              </div>
            </div>
           </SwiperSlide>
         </Swiper>
        </div>
      </div>


      <div class="genre" v-for="(genre, genreId) in store.homeGenres" :key="genreId">
        <div class="box">
          <h3>{{genreId}}</h3>
          <div class="row"> 
            <Swiper :slidesPerView="5" :spaceBetween="10">
             <SwiperSlide v-for="(card, cardId) in genre" :key="cardId"> 
              <div class="col" @click="click(card)">
                <div class="card">
                  <img v-if="card.backdrop_path" :src="store.apiImg + 'w780' + card.backdrop_path" alt="backdrop">
                  <img v-else :src="getImage('no-photo')" alt="no-photo">

                  <div class="hover">
                    <h4>{{ card.title }}</h4>
                  </div>
                </div>
              </div>
             </SwiperSlide>
           </Swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>








<style lang="scss" scoped>
  .home {
    padding-bottom: 40px;
    color: white;

    .jumbotron {
      position: relative;
      height: 500px;
      border-radius: 5px;
      overflow: hidden;
      cursor: pointer;

      .hover-jumbo {
        position: absolute;
        bottom: 2%;
        left: 5%;
      }
    }

    .box {
      margin-top: 40px;

      h3 {
          margin-bottom: 10px;
          cursor: pointer;
        }

      .row {
        
        .col {

          .card {
            max-height: 155px;
            border-radius: 5px;
            overflow: hidden;  
            cursor: pointer;
            position: relative;
  
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
      }
    }
  }
</style>
