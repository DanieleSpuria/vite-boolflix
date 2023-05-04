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
    searchFilm() {
      console.log(this.store.valueFilm);
      this.$emit ('searchFilm')
      store.valueFilm = ''
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
      @keyup.enter="searchFilm()"
    >
    <button @click="searchFilm()">Search</button>
  </div>
</template>

<style lang="scss" scoped>

</style>