<template>
    <div>
        <div id="balance" class="flex spaceAround">
      <div class="balancedivs box shadow" id="box1">
        <div id="icon" class="circle regpageColor">
          <v-icon class="icon">mdi-text-box-multiple</v-icon>
        </div>
        <h3 class="flex center">Registered Pages</h3>
        <div class="flex center">
          <p id="p1">3</p>
          <p class="dispflexcenter" id="p2">Registered</p>
        </div>
      </div>

      <div class="balancedivs box shadow" id="box2">
        <div id="icon" class="circle anabalaColor">
          <v-icon class="icon">mdi-cursor-pointer</v-icon>
        </div>
        <h3 class="flex center">Analysis Balance</h3>
        <div class="flex center">
          <p id="p1">0 / 0</p>
          <p class="dispflexcenter" id="p2">Used</p>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";

#balance {
    width: 100%;
    max-width: 1590px;
    margin: 0 auto;
    @media (min-width: $sm) {
      justify-content: space-between;
      .balancedivs {
        width: 100%;
      }
    }
    #box1 {
      animation: bpbutton 25s infinite alternate-reverse;
    }
    #box2 {
      animation: bpaccept 25s infinite alternate-reverse;
      margin-left: 2%;
    }
    .balancedivs {
      box-shadow: 2px 2px 26px rgba(134, 134, 134, 0.16);
      background-color: map-get($cs, white1);
      border-radius: 5px;
      padding: 10px;
      width: 100%;
      .regpageColor {
        background: linear-gradient(
          map-get($cs, button),
          map-get($cs, white1) 99%
        );
      }
      .anabalaColor {
        background: linear-gradient(
          map-get($cs, accept),
          map-get($cs, white1) 99%
        );
      }
      h3 {
        font-size: $small;
        @media (min-width: $md) {
          padding: 20px;
        }
      }
      #icon {
        display: flex;
        justify-content: center;
        margin-top: -20px;
        margin-left: -20px;
        @media (min-width: 1100px) {
          transform: scale(1.5);
        }
        .v-icon {
          color: map-get($cs, icongrey) !important;
        }
      }
      #p1 {
        font-weight: bold;
      }
      #p2 {
        margin-left: 3px;
        font-size: $small;
      }
    }
  }

  .circle {
      height: 50px;
      width: 50px;
      border-radius: 100%;
    }
</style>