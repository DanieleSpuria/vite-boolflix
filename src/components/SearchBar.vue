<script>
  import {store} from '../assets/js/store';
  export default {
   name: 'SearchBar',
   
   data() {
    return {
      store,
      inputFilm: ''
    }
   },

   methods: {
    searchFilm() {
      store.valueFilm = this.inputFilm;
      store.page = 1;
      this.$emit ('searchFilm')
      this.inputFilm = ''
    }
   }
  }
</script>

<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Titoli"
      v-model="inputFilm"
      @keyup.enter="searchFilm()"
    >
    <select>
      <option value="">Seleziona</option>
      <option value="">Film</option>
      <option value="">SerieTv</option>
    </select>
    <button @click="searchFilm()">Search</button>
  </div>
</template>

<style lang="scss" scoped>

</style>