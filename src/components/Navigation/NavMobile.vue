<template>
<div>
  <div id="menubar">
    <v-card class="menubtn box" id="helpbtn">
      <v-icon x-large>mdi-help-circle</v-icon>
    </v-card>
    <v-card class="menubtn menubtncenter box" id="tablogo">
      <router-link to="/"
        ><img class="noDark" src="../../assets/logoT.svg" alt="logo" height="65px" />
      </router-link>
    </v-card>
    <v-card class="menubtn box" id="burgermenu">
      <v-icon x-large @click.stop="drawer = !drawer">mdi-menu</v-icon>
    </v-card>
  </div>
  <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
        bottom
        hide-overlay
        height="400"
  >
    <v-list-item-group
        v-model="group"
        align="center"
    >
        <v-list-item><a href="#"><v-icon>mdi-link-variant</v-icon><router-link to="/MainFeatures/LinkOpportunities">Link Opportunities</router-link> </a></v-list-item>
        <v-list-item><a href="#"><v-icon>mdi-view-list</v-icon><router-link to="/MainFeatures/CompiledLists">Compiled Lists</router-link> </a></v-list-item>
        <v-list-item><a href="#"><v-icon>mdi-dice-3</v-icon><router-link to="/MainFeatures/RelevanceComparison">Relevance Comparison</router-link> </a></v-list-item>
        <v-list-item><a href="#"><v-icon>mdi-cog</v-icon><router-link to="/Setup/DomainsAndPages">Domains and Pages</router-link> </a></v-list-item>
        <v-list-item><a href="#"><v-icon>mdi-file-document-multiple</v-icon><router-link to="/Setup/BillingAndUsage">Billing and Usage</router-link></a></v-list-item>
        <v-list-item><a href="#"><v-icon>mdi-face-profile</v-icon><router-link to="/Extras/MyProfile">My Profile</router-link> </a></v-list-item>
    </v-list-item-group>
  </v-navigation-drawer>
</div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";

/*MENUBAR*/
#menubar {
  display: flex;
  position: fixed;
  align-items: flex-end;
  bottom: 0;
  z-index: 10;
  width: 100%;
  @media (min-width: 901px) {
            display: none !important;
        }
  #helpbtn {
    border-radius: 5px 0px 0px 0px;
    z-index: 1;
  }
  #tablogo {
    border-radius: 5px 5px 0px 0px;
    box-shadow: 2px 2px 26px rgba(134, 134, 134, 0.16);
    border-bottom: none;
    z-index: 2;
  }
  #burgermenu {
    border-radius: 0px 5px 0px 0px;
    z-index: 1;
  }
  .menubtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33.333%;
    height: 70px;
    background-color: white;
    .v-icon{
      font-size: $biggest !important;
    }
  }
  .menubtncenter {
    height: 90px;
  }
}



/* DRAWER*/
.v-list-item{
  justify-content: center;
  a{
    text-decoration: none;
    color: map-get($cs, primary);
  }
}
.v-icon{
  color: map-get($cs , primary );
}

</style>