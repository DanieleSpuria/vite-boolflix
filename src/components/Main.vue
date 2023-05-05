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
      this.$emit('nextPrev')
    }
   }
  }
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <Card/>
      </div>
    <!-- TODO: aggiungere bottoni next prev lateralmente fissi, mentre i risultati scorrono -->
      <button
        v-if="store.page > 1"
        @click="nextPrev(store.page--)"
      >Prev</button>
      <button
        v-if="store.page != store.totalPage"
        @click="nextPrev(store.page++)"
      >Next</button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main {
    padding-top: 40px;

    .row {
      display: flex;
      flex-wrap: wrap;
    }
  }
</style>