<script>
  import Card from './partials/Card.vue';
  export default {
   name: 'Main',
   
   components: {
    Card
   }
  }
</script>

<template>
  <div class="row">
    <Card/>
  </div>
</template>

<style lang="scss" scoped>
  .row {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
  }
</style>