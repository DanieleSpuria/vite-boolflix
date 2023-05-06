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
    },

    mounted() {
      this.randomNumber()
    }
  }
</script>

<template>
  <div class="home">
    <div class="container">
      <div class="jumbotron">
        <img v-if="store.homePop[random].backdrop_path" :src="store.urlImg + 'w1280' + store.homePop[random].backdrop_path" alt="backdrop">
        <img v-else :src="getImage('no-photo')" alt="no-photo">

        <div class="hover-jumbo">
          <h1>{{ store.homePop[random].title }}</h1>
        </div>
      </div>



      <div class="box">
        <h3>Popolari</h3>
        <div class="row"> 
          <Swiper :slidesPerView="5" :spaceBetween="10">
           <SwiperSlide v-for="(card, id) in store.homePop" :key="id">
            <div class="col">
              <div class="card">
                <img v-if="card.backdrop_path" :src="store.urlImg + 'w780' + card.backdrop_path" alt="backdrop">
                <img v-else :src="getImage('no-photo')" alt="no-photo">

                <div class="hover">
                  <h3>{{ card.title }}</h3>
                  <h4 v-if="card.original_title != card.title">{{ card.original_title }}</h4>
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
           </SwiperSlide>
         </Swiper>
        </div>
      </div>



      <div class="box">
        <h3>Fantascienza</h3>
        <div class="row"> 
          <Swiper :slidesPerView="5" :spaceBetween="10">
           <SwiperSlide v-for="(card, id) in store.home1" :key="id">
            <div class="col">
              <div class="card">
                <img v-if="card.backdrop_path" :src="store.urlImg + 'w780' + card.backdrop_path" alt="backdrop">
                <img v-else :src="getImage('no-photo')" alt="no-photo">

                <div class="hover">
                  <h3>{{ card.title }}</h3>
                  <h4 v-if="card.original_title != card.title">{{ card.original_title }}</h4>
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
           </SwiperSlide>
         </Swiper>
        </div>
      </div>



      <div class="box">
        <h3>Investigativo</h3>
        <div class="row"> 
          <Swiper :slidesPerView="5" :spaceBetween="10">
           <SwiperSlide v-for="(card, id) in store.home2" :key="id">
            <div class="col">
              <div class="card">
                <img v-if="card.backdrop_path" :src="store.urlImg + 'w780' + card.backdrop_path" alt="backdrop">
                <img v-else :src="getImage('no-photo')" alt="no-photo">

                <div class="hover">
                  <h3>{{ card.title }}</h3>
                  <h4 v-if="card.original_title != card.title">{{ card.original_title }}</h4>
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
           </SwiperSlide>
         </Swiper>
        </div>
      </div>



      <div class="box">
        <h3>Documentari</h3>
        <div class="row"> 
          <Swiper :slidesPerView="5" :spaceBetween="10">
           <SwiperSlide v-for="(card, id) in store.home3" :key="id">
            <div class="col">
              <div class="card">
                <img v-if="card.backdrop_path" :src="store.urlImg + 'w780' + card.backdrop_path" alt="backdrop">
                <img v-else :src="getImage('no-photo')" alt="no-photo">

                <div class="hover">
                  <h3>{{ card.title }}</h3>
                  <h4 v-if="card.original_title != card.title">{{ card.original_title }}</h4>
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
           </SwiperSlide>
         </Swiper>
        </div>
      </div>



      <div class="box">
        <h3>Horror</h3>
        <div class="row"> 
          <Swiper :slidesPerView="5" :spaceBetween="10">
           <SwiperSlide v-for="(card, id) in store.home4" :key="id">
            <div class="col">
              <div class="card">
                <img v-if="card.backdrop_path" :src="store.urlImg + 'w780' + card.backdrop_path" alt="backdrop">
                <img v-else :src="getImage('no-photo')" alt="no-photo">

                <div class="hover">
                  <h3>{{ card.title }}</h3>
                  <h4 v-if="card.original_title != card.title">{{ card.original_title }}</h4>
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
           </SwiperSlide>
         </Swiper>
        </div>
      </div>



      <div class="box">
        <h3>Fantasy</h3>
        <div class="row"> 
          <Swiper :slidesPerView="5" :spaceBetween="10">
           <SwiperSlide v-for="(card, id) in store.home5" :key="id">
            <div class="col">
              <div class="card">
                <img v-if="card.backdrop_path" :src="store.urlImg + 'w780' + card.backdrop_path" alt="backdrop">
                <img v-else :src="getImage('no-photo')" alt="no-photo">

                <div class="hover">
                  <h3>{{ card.title }}</h3>
                  <h4 v-if="card.original_title != card.title">{{ card.original_title }}</h4>
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
           </SwiperSlide>
         </Swiper>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .home {
    margin-top: 100px;
    padding: 0 10px;
    padding-bottom: 20px;
    color: white;

    .jumbotron {
      position: relative;
      height: 450px;
      border-radius: 5px;
      overflow: hidden;

      .hover-jumbo {
        position: absolute;
        bottom: 2%;
        left: 1%;
      }
    }

    .box {
      margin-top: 20px;

      h3 {
        margin-bottom: 10px;
      }

      .row {

        .col {

          .card {
            max-height: 155px;
            border-radius: 5px;
            overflow: hidden;  
            cursor: pointer;
            position: relative;
 
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
      }
    }
  }
</style>
