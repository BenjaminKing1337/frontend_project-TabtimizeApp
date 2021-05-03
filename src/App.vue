<template>
  <v-app>
    <v-main class="body">
      <NavDesktop/>
      <!-- <NavMobile/> -->
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import NavDesktop from "./components/Navigation/NavDesktop";
// import NavMobile from "./components/Navigation/NavMobile";

export default {
  components: {
    NavDesktop: NavDesktop,
    // NavMobile: NavMobile,
  }
};
</script>

<style lang="scss">
@import "./src/styles/styles.scss";

.body{
  background: map-get($ColorScheme, bg);
}
  
</style>