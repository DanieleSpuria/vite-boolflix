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
    <div class="btn">
      <button
        v-if="store.page > 1"
        @click="nextPrev(store.page--)"
      >Prev</button>
    </div>

    <div class="row">
      <Card/>
    </div>

    <div class="btn">
      <button
        v-if="store.page != store.totalPage"
        @click="nextPrev(store.page++)"
      >Next</button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  main {
    display: flex;
    height: 90vh;
    padding-top: 40px;

    .btn {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 20%;
    }

    .row {
      display: flex;
      flex-wrap: wrap;
      height: 100%;
      overflow: scroll;
    }
  }
</style>