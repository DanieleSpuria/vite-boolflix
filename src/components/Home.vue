<script>
  import HomeCard from './partials/HomeCard.vue';
  import {store} from '../assets/js/store';
  
  export default {
    name: 'Home',  

    components: {
      HomeCard,
    },
    
    data() {
      return {
        store
      }
    }
  }
</script>

<template>
  <div class="home">
    <div class="container">
      <div class="box">
        <h3>Popolari</h3>
        <div class="row"> 
          <HomeCard/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

  .home {
    margin-top: 100px;
    padding: 0 10px;
    color: white;

    .box {
      border: 1px solid white;

      .row {
        display: flex;
        flex-wrap: wrap;

      }
    }
  }
</style>
