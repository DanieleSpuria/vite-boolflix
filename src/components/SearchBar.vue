<script>
  import {store} from '../assets/js/store';
  export default {
   name: 'SearchBar',
   
   data() {
    return {
      store,
      input: '',
      viewSelect: ''
    }
   },

   methods: {
    search() {
      store.value = this.input;
      store.select = this.viewSelect;
      store.page = 1;
      this.$emit ('search');
      this.viewSelect = '';
      this.input = ''
    }
   }
  }
</script>

<template>
  <div class="search-bar">
    <input
      type="text"
      placeholder="Titoli"
      v-model="input"
      @keyup.enter="search()"
    >
    <select v-model="viewSelect">
      <option value="">Seleziona</option>
      <option value="Movie">Film</option>
      <option value="Tv">SerieTv</option>
    </select>
    <button @click="search()">Search</button>
  </div>
</template>

<style lang="scss" scoped>

</style>