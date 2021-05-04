<template>
  <v-app>
    <v-main class="body">
      <NavDesktop/>
      <router-view/>
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
  .body{
    background: map-get($ColorScheme, bg);
  }
</style>