<template>
  <div id="backlinkEngine">
    <div id="title"><h1>Backlink Engine</h1></div>

    <div class="flex spaceAround" id="balance">
      <div class="balancedivs" id="box1">
        <div id="icon" class="circle regpageColor">
          <v-icon class="icon">mdi-text-box-multiple</v-icon>
        </div>
        <h3 class="flex center">Registered Pages</h3>
        <div class="flex center">
          <p id="p1">0</p>
          <p class="dispflexcenter" id="p2">Registered</p>
        </div>
      </div>

      <div class="balancedivs" id="box2">
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
    <div id="pagelist">
      <div class="page">
        <div id="navigation">
          <div class="dispflexcenter circle shadow bgcolor">
            <v-icon>mdi-arrow-right</v-icon>
          </div>
        </div>

        <div id="pageNo">
          <h2 class="flex center">PAGE 0 / 0</h2>
        </div>

        <div id="pageInfo">
          <div id="pageName" class="flex spaceBetween">
            <h3>PAGE NAME</h3>
            <h3 class="thin">/</h3>
          </div>
          <hr class="line" />
          <div id="number" class="flex spaceBetween">
            <h3>LINK OPPORTUNITIES</h3>
            <h3 class="thin">130</h3>
          </div>
          <hr class="line" />
          <div id="topic" class="flex spaceBetween">
            <h3>URL TOPIC</h3>
            <h3 class="thin">Business & Industrial</h3>
          </div>
          <hr class="line" />
          <div id="analyzed" class="flex spaceBetween">
            <h3>LAST ANALYZED</h3>
            <div class="flex">
              <button id="refresh" class="RedBtn dispflexcenter">
                <v-icon>mdi-refresh</v-icon>
              </button>
              <h3 class="thin">25/01/2021</h3>
              
            </div>
          </div>
          <hr class="line" />
        </div>

        <div id="viewPage" class="dispflexcenter">
          <router-link class="nodecor" to="/MainFeatures/Cardview"><button id="view" class="RedBtn dispflexcenter"><h3 class="nodecor light">VIEW</h3></button></router-link>
          
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";

/* PAGE */
#backlinkEngine {
  #title {
    display: flex;
    justify-content: center;
    color: map-get($cs, white1);
    margin-top: 50px;
    margin-bottom: 40px;
  }
  #balance {
    #box1 {
      border-bottom: 2px solid map-get($cs, button);
    }
    #box2 {
      border-bottom: 2px solid map-get($cs, accept);
    }
    .balancedivs {
      box-shadow: 2px 2px 26px rgba(134, 134, 134, 0.16);
      width: 300px;
      min-height: 140px;
      background-color: map-get($cs, white1);
      border-radius: 5px;
      margin: 0 20px;

      padding: 10px;
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
        font-size: 16px;
        @media (min-width: $md) {
          padding: 20px !important;
        }
      }
      #icon {
        display: flex;
        justify-content: center;
        margin-top: -20px;
        margin-left: -20px;
      }
      #p1 {
        font-weight: bold;
      }
      #p2 {
        margin-left: 3px;
        font-size: 12.8px;
      }
    }
  }
  #pagelist {
    justify-self: center;
    margin: 20px 20px;
    padding: 30px;
    border-radius: 5px;
    background-color: map-get($cs, white1);
    border-bottom: 2px solid map-get($cs, purple1);
    @media (min-width: $md) {
      margin: 20px 200px !important;
      max-width: 1200px !important;
    }

    #navigation {
      display: flex;
      float: right;
      margin-top: -40px;
      margin-right: -40px;

      .v-icon {
        color: map-get($cs, purple1);
        font-size: 3rem;
      }
    }
    #pageNo {
    }
    #pageInfo {
      hr.line {
        margin-bottom: 30px;
      }
      #pageName,
      #number,
      #topic,
      #analyzed {
        margin: 5px auto;
      }
      #refresh {
        margin: 0 5px;
        width: 100%;
        .v-icon {
          color: map-get($cs, white1);
        }
      }
    }
    #viewPage {
      #view {
        width: 100%;
       
      }
    }
  }

  /*Multiple use classes*/
  #backlinkEngine {
    .circle {
      height: 50px;
      width: 50px;
      border-radius: 100%;
      @media (min-width: $lg) {
        position: absolute;
        height: 80px !important;
        width: 80px !important;
        margin-left: -40px !important;
        .icon {
          font-size: 2rem;
        }
      }
    }

    .line {
      margin: 5px 0;
      height: 1px;
      border-width: 0;
      background-color: map-get($cs, primary);
      color: map-get($cs, primary);
    }
    .thin {
      font-weight: 300;
      text-align: left;
    }
  }
}
</style>