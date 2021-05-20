<template>
  <div>
    <div
      id="card1"
      class="flexcol card corners shadow"
    >
      <div id="checkmarkboxcontainer">
        <label class="checkmarkbox">
          <input type="checkbox" />
          <span class="checkmark shadow"></span>
        </label>
      </div>
      <div id="headcontainer">
        <div id="pic">
          <img class="noDark" src="../../assets/logoT.svg" />
        </div>
        <div id="headline">
          <div id="url">
            <h3 class="truncate"> {{ card.url }}
              https://www.tabtimize.netlify.com/hs6SdHG6et7ksJhU1Ww2EE
            </h3>
          </div>
          <div id="title">
            <h3> {{ card.title }}
              Tabtimize - Link Building Made Easy!</h3>
          </div>
        </div>
      </div>
      <div id="midcontainer">
        <div class="line" />
        <div id="metrics" class="flex spaceAround tcenter">
          <div id="SEOscore">
            <h3>
              SEO <br />
              Score
            </h3>
            <p> {{ card.seo }}
              97.33</p>
          </div>
          <div style="border-right: 1px solid #959794"></div>
          <div id="LRS" class="flexcol vcenter">
            <h3>LRS</h3>
            <div id="progressbar">
              <div class="barframe absolute"></div>
              <v-progress-linear
                value="39"
                color="tabtimize"
                class="bargradient noDark"
              ></v-progress-linear>
            </div>
            <p> {{ card.lrs }}
              39.58</p>
          </div>
          <div style="border-right: 1px solid #959794"></div>
          <div id="wordCount">
            <h3>
              Word <br />
              Count
            </h3>
            <p> {{ card.word }}
              666</p>
          </div>
        </div>
        <div class="line" />
        <div id="anchorsugs">
          <v-expansion-panels inset class="expansionbtn">
            <v-expansion-panel class="expansionbtn">
              <v-expansion-panel-header class="expansionbtn"
                ><h3>Anchor Suggestions</h3></v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <ul>
                  <li>
                    {{ card.anch1 }}
                    Lorem ipsum dolor sit amet,
                    <span style="color: blue">
                      consectetur adipiscing elit, sed do eiusmod tempor</span
                    >
                    incididunt ut labore et dolore magna aliqua.
                  </li>
                  <li>
                    {{ card.anch2 }}
                    Ut enim
                    <span style="color: blue">
                      ad minim veniam, quis nostrud exercitation ullamco
                      laboris</span
                    >
                    nisi ut aliquip ex ea commodo consequat.
                  </li>
                  <li>
                    {{ card.anch3 }}
                    Quis nostrudincididunt ut labore
                    <span style="color: blue">et dolore magna </span>
                  </li>
                </ul>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div class="line" />
        <div id="keywords">
          <v-expansion-panels inset class="expansionbtn">
            <v-expansion-panel class="expansionbtn">
              <v-expansion-panel-header class="expansionbtn"
                ><h3>Keywords & Topics</h3></v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <div id="kwords" class="flex spaceBetween truncate">
                  <h4>Keywords:</h4>
                  <h5>{{ card.key }}
                    Frameworks</h5>
                </div>
                <div id="urlTopics" class="flex spaceBetween truncate">
                  <h4>URL Topic:</h4>
                  <h5>{{ card.urltop }}
                    Technology & Development</h5>
                </div>
                <div id="domainTopics" class="flex spaceBetween truncate">
                  <h4>Domain Topic:</h4>
                  <h5>{{ card.domtop }}
                    Technology & Development</h5>
                </div>
                <div id="contentTopics" class="flex spaceBetween truncate">
                  <h4>Content Topic:</h4>
                  <h5>{{ card.contop }}
                    Components</h5>
                </div>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </div>
        <div class="line" />
      </div>
      <div id="tailcontainer" class="flex spaceBetween">
        <div id="analyzed">
          <h3>Analyzed</h3>
          <div class="flex spaceAround">
            <p>{{ card.anal }}
              11/05/21</p>
            <v-btn class="RedBtn dispflexcenter shadow noDark">
              <v-icon class="light">mdi-refresh</v-icon>
            </v-btn>
          </div>
        </div>
        <div style="border-right: 1px solid #959794"></div>
        <div id="export" class="flexcol vcenter center noDark">
          <v-menu offset-x top left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="RedBtn dispflexcenter" v-bind="attrs" v-on="on">
                <v-icon class="light">mdi-chevron-left</v-icon>
                <v-icon class="light">mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-list>
              <div tag="button">Export</div>
              <div tag="button">Add to List</div>
              <div tag="button">Remove</div>
            </v-list>
          </v-menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";

.card {
  padding: 10px;
  margin-top: 20px;
  background-color: map-get($cs, white1);
  animation: bpprimary 20s infinite alternate-reverse;

#checkmarkboxcontainer {
  .checkmarkbox {
    .checkmark {
      top: -20px;
      left: -20px;
      &:after {
        border: solid map-get($cs, white1);
      }
    }
  }
}
#headcontainer {
  //^collapse^
  display: block;

  #pic {
    float: left;
    border: 3px double map-get($cs, primary);
    border-radius: 5px;
    min-height: 50px;
    min-width: 50px;
    max-height: 50px;
    max-width: 50px;
    margin: 1%;
    img {
      height: 100%;
      width: 100%;
    }
  }
  #headline {
    margin: 1%;

    #url {
      font-size: $smallest;
      position: relative;

      h3 {
        color: map-get($cs, greyed);
      }
    }
    #title {
      position: relative;
      h3 {
        color: map-get($cs, hLink);
      }
    }
  }
}
#midcontainer {
  //^collapsehere^
  h3 {
    color: map-get($cs, purple1);
  }
  #metrics {
    //^collapsehere^
    margin: 10px 0;
    #SEOscore {
      h3 {
        line-height: 14px;
      }
    }
    #LRS {
      #progressbar {
        width: 70px;
        position: relative;
        .bargradient {
          position: inherit;
          border-radius: 15px;
          height: 10px !important;
          z-index: 2;
        }
        .barframe {
          z-index: 1;
          border-radius: 15px;
          height: 10px;
          width: 100%;
          background-color: map-get($cs, transparency);
        }
      }
    }
    #wordCount {
      h3 {
        line-height: 14px;
      }
    }
    h3 {
      font-size: $small;
    }
    p {
      color: map-get($cs, hLink);
      margin: 0;
      font-size: $medium2;
      font-weight: 600;
    }
  }
  #anchorsugs {
    //^collapse here^
    font-size: $small;
    li {
      &::marker {
        color: map-get($cs, purple1);
      }
    }
  }
  #keywords {
    //^collapse here^
    h4 {
      font-size: $smaller;
    }
    h5 {
      font-size: $smallest;
      text-decoration: underline;
      color: map-get($cs, hLink);
    }
    @media (min-width: 350px) {
      h4 {
        font-size: $small;
      }
      h5 {
        font-size: $smaller;
      }
    }
  }
}
#tailcontainer {
  margin: 10px 0 0 0;
  h3 {
    color: map-get($cs, purple1);
  }
  #analyzed {
    //^collapse here^
    width: 50%;
  }
  #export {
    //^collapse here^
    height: 80px;
    width: 50%;

    button {
      transform: scale(1.6);
      min-width: 50px;
      min-height: 25px;
      background-color: map-get($cs, button) !important;
      .v-icon {
        margin: -10%;
      }
    }
  }
}
}
.darkMode {
  .card {
    h3 {
      color: map-get($cs, white1) !important;
      filter: invert(1) hue-rotate(180deg);
    }
  }
  .shadow {
    box-shadow: none;
  }
}
</style>