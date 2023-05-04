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
      this.$emit('nextprev')
    }
   }
  }
</script>

<template>
  <div class="container">
    <div class="row">
      <Card/>
    </div>
  
    <button
      v-if="store.page > 1"
      @click="nextPrev(store.page--)"
    >Prev</button>
    <button
      v-if="store.page != store.totalPage"
      @click="nextPrev(store.page++)"
    >Next</button>
  </div>
</template>

<style lang="scss" scoped>
  .container {

    .row {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>