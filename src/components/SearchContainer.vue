<script>
  import SearchCard from './partials/SearchCard.vue';
  import {store} from '../assets/js/store';
  export default {
   name: 'SearchContainer',
   
   components: {
    SearchCard
   },

   props: {
      type: String
    },

   data() {
    return {
      store
    }
   },

   methods: {
    nextPrev(op) {
      op;
      this.$emit('nextPrev');
    }
   }
  }
</script>








<template>
  <main>
    <div class="error">
      <span v-if="store[type].length === 0">Non è stato ottenuto nessun risultato</span>
      <!-- <span v-if="store.valueSelect === ''">Non è stato ottenuto nessun risultato!!!!</span> -->
    </div>

    <div class="box">
      <div class="btn">
        <font-awesome-icon
          :icon="['fas', 'angle-left']"
          @click="nextPrev(store.apiParams.page--)"
          v-if="store.apiParams.page > 1"
          class="arrow"
        />
      </div>
      
      <div class="row">
        <SearchCard 
          v-for="(card) of store[type]"
          :key="card.id" 
          :card="card"
        />
      </div>
  
      <div class="btn">
        <font-awesome-icon
          :icon="['fas', 'angle-right']"
          @click="nextPrev(store.apiParams.page++)"
          v-if="store.apiParams.page != store.totalPages"
          class="arrow"
        />
      </div>
    </div>
  </main>
</template>








<style lang="scss" scoped>
  main {
    // display: flex;
    // justify-content: center;

    .error {
      text-align: center;

      span {
        margin: 200px auto;
        font-size: 20px;
        color: #db202c
      }
    }


    .box {
      display: flex;
      justify-content: space-between;
      height: 100vh;
      width: 100%;
      padding-top: 100px;
      padding-bottom: 20px;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5%;
  
        .arrow {
          font-size: 60px;
          font-weight: 100;
          color: white;
          cursor: pointer;
  
          &:hover {
          color: #db202c;
          }
        }
      }
  
      .row {
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        height: 100%;
        margin: 0 auto;
        overflow: scroll;
      }
    }
  }
</style>