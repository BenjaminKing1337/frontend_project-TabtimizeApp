<template>
  <v-app>
    <NavDesktop/>
    
    <v-main class="body">
      <div id="gradientHeader"></div>
      <router-view class="router"/>
    </v-main>
  </v-app>
</template>

<script>
import NavDesktop from './components/Navigation/NavDesktop'
//import NavMobile from './components/Navigation/NavMobile'

export default {
  name: 'App',

  components: {
    NavDesktop,
    //NavMobile
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "./src/styles/styles.scss";
  
  .body {
    background: map-get($ColorScheme, bg);
    margin-left: 350px !important;
    #gradientHeader {
      position: absolute;
      width: 110%;
      left: -5%;
      z-index: 0;
      height: 300px;
      background-image: linear-gradient(map-get($ColorScheme, purple), map-get($ColorScheme, button));
      border-radius: 0% 0% 100% 100% / 0% 0% 100% 100%
    }
    .router {
      position: relative;
      z-index: 2;
    }
  }

</style>