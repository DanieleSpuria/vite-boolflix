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
    nextPrev() {
      store.page++;
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
  
    <button>Prev</button>
    <button @click="nextPrev()">Next</button>
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