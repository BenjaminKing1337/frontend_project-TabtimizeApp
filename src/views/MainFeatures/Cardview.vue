<template>
  <div class="dispflexcenter flexcol">
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
              <input type="checkbox" />
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
        
        <CardTabtimize/>
                <CardTabtimize/>
                        <CardTabtimize/>
                                <CardTabtimize/>
                                        <CardTabtimize/>
      </div>
    </div>
  </div>
</template>

<script>
import CardTabtimize from "../../components/Cards/CardTabtimize.vue";

export default {
  name: "Cardview",

  components: {
    CardTabtimize,
  },
};
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";

#cardview {
  display: flex;
  flex-direction: column;
  padding: 100px 0;
  width: 90%;
  border-radius: 5px;
  #head {
    z-index: 3;
    padding: 10px;
    margin: 20px auto;
    width: 100%;
    animation: bpprimary 20s infinite alternate-reverse;
    @media (min-width: $md) {
    }
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

  #cards {
    //^collapse here^
    margin: 30px 0;
  }
}

</style>