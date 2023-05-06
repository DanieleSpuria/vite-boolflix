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
  <div
    class="col"
    v-for="card in store.homePop"
    :key="card.id"
  >
    <div class="card">
      <img :src="store.urlImg + 'w780' + card.backdrop_path" alt="backdrop">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .col {
    display: flex;
    width: calc(100% / 5);
  
  }
</style>