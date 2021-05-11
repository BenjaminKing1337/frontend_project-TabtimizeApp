<template>
  <div class="dispflexcenter flexcol">
    <div id="cardview">
      <div id="results">
        <h5>
          Showing 25 / 138 link opportunities for: www.[CurrentTargetPage].com/
        </h5>
      </div>
      <div id="filtersort" class="flex">
        <div id="filter">
          <v-menu offset-y bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn id="filtersortBtn" v-bind="attrs" v-on="on"
                >Add Filter</v-btn
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
              <v-btn id="filtersortBtn" v-bind="attrs" v-on="on">Sort By</v-btn>
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
    <div id="cards">
      <div id="card1">
        <div id="pic"><img src="../../assets/logoT.svg" /></div>
        <div id="metrics">
          <div id="SEOscore"><h3>SEO Score</h3></div>
          <div id="LRS"><h3>LRS</h3></div>
          <div id="wordCount"><h3>Word Count</h3></div>
        </div>
        <div id="anchorsugs"><h3>Anchor Suggestions</h3></div>
        <div id="keywords"><h3>Keywords & Topics</h3></div>
        <div id="analyzed"><h3>Analyzed</h3><p>11/05/21</p><button class="RedBtn dispflexcenter"><v-icon>mdi-refresh</v-icon></button></div>
        <div id="export"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";

#cardview {
  display: flex;
  flex-direction: column;
  margin-top: 100px !important;
  width: 90%;
  background-color: map-get($cs, white1);
  border-radius: 5px;
  padding: 10px;
  #results {
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
    }
    #sort {
      margin: 0 1%;
    }
    #filtersortBtn {
      font-size: $smaller;
      padding: 3px;
      background-color: unset;
      box-shadow: none;
      &:hover {
        background-color: unset !important;
      }
    }
  }
  #cards {
    background-color: map-get($cs, white1);
  }
}
</style>