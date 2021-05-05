<template>
<div>
  <div id="menubar">
    <v-card class="menubtn" id="helpbtn">
      <v-icon x-large>mdi-help-circle</v-icon>
    </v-card>
    <v-card class="menubtn menubtncenter" id="tablogo">
      <router-link to="/"
        ><img src="../../assets/logoT.svg" alt="logo" height="65px" />
      </router-link>
    </v-card>
    <v-card class="menubtn" id="burgermenu">
      <v-icon x-large @click.stop="drawer = !drawer">mdi-menu</v-icon>
    </v-card>
  </div>
  <v-navigation-drawer
            v-model="drawer"
            fixed
            temporary
            bottom
            height="400"
        >
            <v-list-item-group
                v-model="group"
                align="center"
            >
                <v-list-item><a href="#"><v-icon>mdi-link-variant</v-icon><router-link to="/Main Features/LinkOpportunities">Link Opportunities</router-link> </a></v-list-item>
                <v-list-item><a href="#"><v-icon>mdi-view-list</v-icon><router-link to="/Main Features/Lists">Lists</router-link> </a></v-list-item>
                <v-list-item><a href="#" ><v-icon>mdi-dice-3</v-icon><router-link to="/Main Features/RelevanceComparison">Relevance Comparison</router-link> </a></v-list-item>
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

/*RESPONSIVENESS*/
@media only screen and (min-width: 600px) {
  #menubar {
    display: none !important;
  }
}

#menubar {
  display: flex;
  position: fixed;
  align-items: flex-end;
  bottom: 0;
  z-index: 10;
  width: 100%;
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
      font-size: 3.5em !important;
    }
  }
  .menubtncenter {
    height: 90px;
  }
}
.v-list-item{
  justify-content: center;
  a{
    text-decoration: none;
    color: map-get($ColorScheme , text );
  }
}
.v-icon{
  color: map-get($ColorScheme , primary );
}

</style>