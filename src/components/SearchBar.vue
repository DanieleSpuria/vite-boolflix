<script>
  import {store} from '../assets/js/store';
  export default {
   name: 'SearchBar',
   
   data() {
    return {
      store
    }
   },

   methods: {
    log() {
      console.log(this.store.valueFilm);
    }
   }
  }
</script>

<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Insert name film"
      v-model="store.valueFilm"
      @keyup.enter="log()"
    >
    <button>Search</button>
  </div>
</template>

<style lang="scss" scoped>

</style>