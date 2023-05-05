<script>
  import {store} from '../assets/js/store';
  export default {
   name: 'Header',
   
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
  <header>
    <div class="container">
      <img src="../assets/img/logo-boolflix.png" alt="logo">
      <div class="search-bar">
        <select v-model="viewSelect">
          <option value="">Seleziona</option>
          <option value="Movie">Film</option>
          <option value="Tv">SerieTv</option>
        </select>
        <input
          type="text"
          placeholder="Titoli"
          v-model="input"
          @keyup.enter="search()"
        >
        <!-- <button @click="search()">Search</button> -->
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  header {

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 20px;
    }

    img {
      width: 15%;
    }
  }
</style>