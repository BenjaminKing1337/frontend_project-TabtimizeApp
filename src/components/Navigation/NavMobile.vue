<template>
  <div id="menubar">
    <div class="menubtn" id="helpbtn">
      <v-icon x-large>mdi-help-circle</v-icon>
    </div>
    <div class="menubtn menubtncenter" id="tablogo">
      <router-link to="/"
        ><img src="../../assets/logoT.svg" alt="logo" height="80px" />
      </router-link>
    </div>
    <div class="menubtn" id="burgermenu">
            <v-icon x-large>mdi-menu</v-icon>

    </div>
  </div>
</template>

<script>
export default {};
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
  z-index: 1;
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