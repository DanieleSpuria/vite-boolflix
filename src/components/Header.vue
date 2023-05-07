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
      console.log(store.value);
    }
   }
  }
</script>








<template>
  <header>
    <div class="container">
      <img @click="$emit ('reset')" src="../assets/img/logo-boolflix.png" alt="logo">
      <div class="search-bar">
        <select v-model="viewSelect">
          <option value="">Seleziona</option>
          <option value="movie">Film</option>
          <option value="tv">SerieTv</option>
        </select>
        <input
          type="text"
          placeholder="Titoli"
          v-model="input"
          @keyup.enter="search()"
        >
      </div>
    </div>
  </header>
</template>








<style lang="scss" scoped>
  header {
    position: fixed;
    top: 0;
    z-index: 90;
    width: 100%;
    // background-color: #141414;


    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 0;
    }

    img {
      width: 15%;
      cursor: pointer;
    }

    select,
    input {
      padding: 10px;
      margin-left: 2px;
      cursor: pointer;
    }
  }

  .black {
    background-color: 141414;
  }
</style>