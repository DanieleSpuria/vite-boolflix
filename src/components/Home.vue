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

      randomNumber() {
        this.random = Math.floor(Math.random() * (store.homePop.length + 1));
      },

      click(card) {
        store.selectCard = card;
        store.clickCard = true;
        window.scrollTo(0,0);
      },
    },

    mounted() {
      this.randomNumber()
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
        <h3 @click="$emit ('open')">Popolari</h3>
        <div class="row"> 
          <Swiper :slidesPerView="5" :spaceBetween="10">
           <SwiperSlide v-for="(card, id) in store.homePop" :key="id">
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


      <div class="genre" v-for="(genre, id) in store.homeGenres" :key="id">
        <div class="box">
          <h3 @click="$emit ('open')">{{id}}</h3>
          <div class="row"> 
            <Swiper :slidesPerView="5" :spaceBetween="10">
             <SwiperSlide v-for="(card, id) in genre" :key="id">
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
