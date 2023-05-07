<script>
  import Card from './partials/Card.vue';
  import {store} from '../assets/js/store';
  export default {
   name: 'Main',
   
   components: {
    Card
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

    <span v-if="store.list.length === 0">Non è stato ottenuto nessun risultato</span>
    <!-- <span v-else-if="store.value === ''">Non è stato ottenuto nessun risultato!!!!</span> -->

    <div v-else class="box">
      <div class="btn">
        <font-awesome-icon
          :icon="['fas', 'angle-left']"
          v-if="store.page > 1"
          @click="nextPrev(store.page--)"
          class="arrow"
        />
      </div>
  
      <div class="row">
        <Card/>
      </div>
  
      <div class="btn">
        <font-awesome-icon
          :icon="['fas', 'angle-right']"
          v-if="store.page != store.totalPage && store.load"
          @click="nextPrev(store.page++)"
          class="arrow"
        />
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main {
    display: flex;
    justify-content: center;

    span {
      margin: 200px auto;
      font-size: 20px;
      color: #db202c
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