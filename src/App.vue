<template>
  <v-app>
    <NavDesktop />
    <v-main class="body">
      <div id="gradientHeader"></div>

      <div class="cornerIcons fRight">
        <v-card
          class="cornerIcon circle dispflexcenter shadow"
          @click.stop="drawer = !drawer"
        >
          <v-icon id="notifications">mdi-bell</v-icon>
        </v-card>
        <v-card
          class="cornerIcon circle dispflexcenter shadow"
          @click.stop="drawer1 = !drawer1"
        >
          <v-icon id="profile">mdi-account-circle</v-icon>
        </v-card>
      </div>

      <v-navigation-drawer
        id="notificationsDrawer"
        v-model="drawer"
        fixed
        temporary
        top
        right
        height="200"
      >
        <v-list-item-group v-model="group" class="flexcol">
          <div>
            <h3 align="center">You have no new notifications.</h3>
          </div>
          <hr class="line" />
          <h3 class="tcenter">...</h3>
          <hr class="line" />
          <v-list-item align="bottom">
            <router-link id="view" class="RedBtn" to="/Extras/MyProfile">
              View All
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-navigation-drawer>
      <v-navigation-drawer
        id="profileDrawer"
        v-model="drawer1"
        fixed
        temporary
        top
        right
        height="300"
      >
        <v-list-item-group v-model="group1">
          <div class="flex center">
            <h3>Welcome!</h3>
          </div>
          <hr class="line" />
          <div class="flex center">
            <h3>Domains</h3>
          </div>
          <div id="domain" class="flex spaceBetween">
            <img id="domainImg" src="./assets/logoT.svg" alt="domain image" />
            <p class="flex vcenter">Someone@something.com</p>
          </div>
          <v-list-item class="flex spaceBetween">
            <v-icon class="dark">mdi-plus-thick</v-icon>
            <router-link to="/Setup/DomainsAndPages" class="dark">
              Add Domain</router-link
            >
          </v-list-item>
          <hr class="line" />
          <v-list-item class="flex spaceBetween">
            <v-icon class="dark">mdi-account</v-icon>
            <router-link to="/Extras/MyProfile" class="dark">
              My Profile
            </router-link>
          </v-list-item>
          <v-list-item class="flex spaceBetween">
            <v-icon class="dark">mdi-lifebuoy</v-icon>
            <router-link to="/" class="dark"> Help Guides </router-link>
          </v-list-item>
          <v-list-item class="flex spaceBetween">
            <v-icon class="dark">mdi-logout</v-icon>
            <router-link to="/" class="dark"> Logout </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-navigation-drawer>
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
    drawer: false,
    group: null,
    drawer1: false,
    group1: null,
  }),

  watch: {
    group() {
      this.drawer = false;
      this.drawer1 = false;
    },
  },
};
</script>

<style lang="scss">
@import "./src/styles/styles.scss";

.body {
  background: map-get($ColorScheme, bg);
  margin-left: 350px;
  overflow: hidden;
  @media (max-width: $md) {
    margin-left: 0px !important;
  }
  #gradientHeader {
    position: absolute;
    width: 120%;
    left: -10%;
    z-index: 0;
    height: 250px;
    background-image: linear-gradient(
      map-get($ColorScheme, purple1),
      map-get($ColorScheme, button)
    );
    border-radius: 0% 0% 100% 100% / 0% 0% 100% 100%;

    @media (max-width: $md) {
      height: 200px !important;
    }
  }
  #notificationsDrawer {
    border-radius: 10px 0 0 10px;
  }
  #profileDrawer {
    border-radius: 10px 0 0 10px;
    #domain {
      padding: 0 10px;
    }
    #domainImg {
      border-radius: 100%;
      width: 30px;
      height: 30px;
      padding: 5px 1px 1px 1px;
    }
  }
  .cornerIcons {
    position: absolute;
    z-index: 3;
    right: 3%;
    width: 110px;
    display: flex;
    justify-content: space-between;

    .cornerIcon {
      margin-top: 20px;
      @media (max-width: $sm) {
        font-size: 1rem;
        width: 35px;
        height: 35px;
      }

      #notifications {
        color: map-get($ColorScheme, button);
      }
      #profile {
        color: map-get($ColorScheme, accept);
      }
    }
  }
  .router {
    overflow-x: hidden !important;
    position: relative;
    z-index: 2;
  }
}

/* DRAWERS of Notifications & Profile corner buttons */
.v-navigation-drawer {
  margin-top: 70px;
}
.v-list-item {
  padding: 0 10px;
  justify-content: center;
  a {
    text-decoration: none;
    color: map-get($ColorScheme, primary);
  }
}
.v-application p {
  margin: 5px 5px 5px 0;
}
</style>