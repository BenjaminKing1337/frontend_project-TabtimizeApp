<template>
  <v-app>
    <NavDesktop />
    
    <v-main class="body">
      <div id="gradientHeader"></div>
      <router-view class="router" />
    </v-main>
    <NavMobile />
  </v-app>
</template>

<script>
import NavDesktop from "./components/Navigation/NavDesktop.vue";
import NavMobile from "./components/Navigation/NavMobile.vue";
//import NavMobile from './components/Navigation/NavMobile'

export default {
  name: "App",

  components: {
    NavDesktop,
    NavMobile,
    //NavMobile
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "./src/styles/styles.scss";

/*RESPONSIVENESS*/
@media only screen and (max-width: 600px) {
  .body {
    margin-left: 0px !important;
  }
}
.body {
  background: map-get($ColorScheme, bg);
  margin-left: 350px;
  width: 100%;
  overflow: hidden;
  #gradientHeader {
    position: absolute;
    width: 120%;
    left: -10%;
    z-index: 0;
    height: 300px;
    background-image: linear-gradient(
      map-get($ColorScheme, purple),
      map-get($ColorScheme, button)
    );
    border-radius: 0% 0% 100% 100% / 0% 0% 100% 100%;
  }
  .router {
    overflow-x: hidden !important;
    position: relative;
    z-index: 2;
  }
}
</style>