<template>
  <div class="cardview_page">
    <div id="cardview">
      <div id="head" class="bglight corners shadow">
        <div id="results">
          <h5>
            Showing 25 / 138 link opportunities for:
            www.[CurrentTargetPage].com/
          </h5>
        </div>
        <div id="filtersortcheck">
          <div class="flexcol flexend">
            <label class="checkmarkbox">
              <h5 id="selectall">Select All</h5>
              <input type="checkbox"
                    @click="selectAll"
                    v-model="allSelected" />
              <span class="checkmark shadow"></span>
            </label>
          </div>
          <div id="filtersort" class="flex">
            <div id="filter">
              <v-menu offset-y bottom left class="flex" min-width="280px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn id="filtersortBtn" v-bind="attrs" v-on="on"
                    >Add Filter<v-icon>mdi-plus</v-icon></v-btn
                  >
                </template>
                <div id="cats">
                  <div id="cat1">
                    <div id="Metrics">
                      Metrics
                      <div tag="button">LRS</div>
                      <div tag="button">Keyword</div>
                      <div tag="button">Authority</div>
                    </div>
                    <div id="Topics">
                      Topics
                      <div tag="button">URL Topic</div>
                      <div tag="button">Content Topic</div>
                      <div tag="button">Domain Topic</div>
                    </div>
                  </div>
                  <div id="cat2">
                    <div id="Stats">
                      Stats
                      <div tag="button">Word Count</div>
                      <div tag="button">Anchor Text</div>
                      <div tag="button">Analyzed Date</div>
                      <div tag="button">Front Page</div>
                      <div tag="button">Languages</div>
                      <div tag="button">TLD</div>
                    </div>
                  </div>
                </div>
              </v-menu>
            </div>
            <div id="sort" class="text-center">
              <v-menu offset-y bottom left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn id="filtersortBtn" v-bind="attrs" v-on="on"
                    >Sort By<v-icon>mdi-chevron-down</v-icon></v-btn
                  >
                </template>
                <v-list>
                  <div tag="button">LRS</div>
                  <div tag="button">SEO</div>
                  <div style="text-align: left" tag="button">
                    Word <br />
                    Count
                  </div>
                </v-list>
              </v-menu>
            </div>
          </div>
        </div>
      </div>
      <div id="cards">
       <Card/>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../../components/Cards/Card.vue";

export default {
  name: "Cardview",

  components: {
    Card,
  },

  data: () => ({
    selected: [],
    allSelected: false,
    cardIds: [],
  }),

  methods: {
    selectAll: function () {
      this.cardIds = [];

      if (!this.allSelected) {
        for (const card in this.cards) {
          this.cardIds.push(this.cards[card].id.toString());
        }
      }
    },
    select: function () {
      this.allSelected = false;
    },
  },

  
};
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";
.cardview_page {
  padding: 45px;
  @media (max-width: $sm) {
    padding: 20px;
  }
}

#cardview {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  #head {
    z-index: 3;
    padding: 10px;
    margin: 20px auto;
    width: 100%;
    animation: bpprimary 20s infinite alternate-reverse;

    #results {
    }
    #filtersortcheck {
      height: 100%;
      .checkmarkbox {
        #selectall {
          position: absolute;
          top: 15px;
          left: 10px;
          font-size: $smaller;
          color: map-get($cs, greyed);
        }
        .checkmark {
          top: 12px;
          left: -20px;
          &:after {
            border: solid map-get($cs, white1);
          }
        }
      }
      #filtersort {
        justify-content: flex-end;
        #filter {
          margin: 0 1%;

          #cats {
            min-width: 600px;
            display: flex;
            flex-direction: row;
            flex-flow: nowrap;
          }
          .v-icon {
            color: map-get($cs, button);
          }
        }
        #sort {
          margin: 0 1%;
          .v-icon {
            color: map-get($cs, primary);
          }
        }
        #filtersortBtn {
          font-size: $smaller;
          padding: 3px;
          background-color: unset;
          box-shadow: none;
          width: fit-content;
          height: fit-content;
          border-radius: 15px;
          &:hover {
            background-color: unset !important;
          }
          &:active {
            transform: none;
          }
        }
      }
    }
  }
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

  #cards {
    //^collapse here^
    margin: 30px 0;
  }
}
</style>