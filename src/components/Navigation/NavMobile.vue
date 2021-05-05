<template>
  <div id="menubar">
    <v-card class="menubtn" id="helpbtn">
      <v-icon x-large>mdi-help-circle</v-icon>
    </v-card>
    <v-card class="menubtn menubtncenter" id="tablogo">
      <router-link to="/"
        ><img src="../../assets/logoT.svg" alt="logo" height="80px" />
      </router-link>
    </v-card>
    <v-card class="menubtn" id="burgermenu">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-navigation-drawer v-model="drawer" absolute top temporary>
        <v-list nav dense>
          <v-list-item-group v-model="group">
            <v-list-item>
              <v-list-item-title>
                <router-link to="/Main Features/LinkOpportunities"
                  >Link Opportunities</router-link
                >
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/Main Features/Lists"
                  >Link Opportunities</router-link
                >
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/Main Features/RelevanceComparison"
                  >Link Opportunities</router-link
                >
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/Main Features/LinkOpportunities"
                  >Link Opportunities</router-link
                >
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/Main Features/LinkOpportunities"
                  >Link Opportunities</router-link
                >
              </v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>
                <router-link to="/Main Features/LinkOpportunities"
                  >Link Opportunities</router-link
                >
              </v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
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
  position: absolute;
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
    box-shadow: inset 0px 0px 1px 1px rgba(134, 134, 134, 0.233);
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
    height: 80px;
    background-color: whitesmoke;
  }
  .menubtncenter {
    height: 100px;
  }
}
</style>