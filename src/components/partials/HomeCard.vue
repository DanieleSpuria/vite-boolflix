<script>
  import {store} from '../../assets/js/store';
  export default {
    name: 'HomeCard',
    
    data() {
      return {
        store
      }
    }
  }
</script>

<template>
  <div class="box" v-for="n of 5" :key="n">
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
</template>

<style lang="scss" scoped>
  .col {
    display: flex;
    width: calc(100% / 5);
  
  }
</style>