<script>
  import {store} from '../../assets/js/store'
  export default {
    name: 'Card',

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
    v-for="(card, id) of store.listFilm"
    :key="id"
  >
    <div class="card">
      <h3>{{ card.title }}</h3>
      <h4 v-if="card.original_title != card.title">{{ card.original_title }}</h4>
      <span>{{ card.original_language }}</span>
      <span>{{ card.vote_average }}</span>
    </div>
 </div>
</template>

<style lang="scss" scoped>

  .col {
    width: calc(100% / 5);

    .card {
      text-align: center;
      border: 1px solid black;
    }
  }
</style>