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
        <div id="card1" class="flexcol card corners shadow">
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
                <h3 class="truncate">
                  https://www.tabtimize.netlify.com/hs6SdHG6et7ksJhU1Ww2EE
                </h3>
              </div>
              <div id="title">
                <h3>Tabtimize - Link Building Made Easy!</h3>
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
                <p>97.33</p>
              </div>
              <div style="border-right: 1px solid black"></div>
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
                <p>39.58</p>
              </div>
              <div style="border-right: 1px solid black"></div>
              <div id="wordCount">
                <h3>
                  Word <br />
                  Count
                </h3>
                <p>666</p>
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
                        Lorem ipsum dolor sit amet,
                        <span style="color: blue">
                          consectetur adipiscing elit, sed do eiusmod
                          tempor</span
                        >
                        incididunt ut labore et dolore magna aliqua.
                      </li>
                      <li>
                        Ut enim
                        <span style="color: blue">
                          ad minim veniam, quis nostrud exercitation ullamco
                          laboris</span
                        >
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
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
                      <h5>Frameworks</h5>
                    </div>
                    <div id="urlTopics" class="flex spaceBetween truncate">
                      <h4>URL Topic:</h4>
                      <h5>Technology & Development</h5>
                    </div>
                    <div id="domainTopics" class="flex spaceBetween truncate">
                      <h4>Domain Topic:</h4>
                      <h5>Technology & Development</h5>
                    </div>
                    <div id="contentTopics" class="flex spaceBetween truncate">
                      <h4>Content Topic:</h4>
                      <h5>Components</h5>
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
                <p>11/05/21</p>
                <button class="RedBtn dispflexcenter shadow noDark">
                  <v-icon class="light">mdi-refresh</v-icon>
                </button>
              </div>
            </div>
            <div style="border-right: 1px solid black"></div>
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
        <div id="TESTcard" class="flexcol card corners shadow">
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
                <h3 class="truncate">
                  https://www.tabtimize.netlify.com/hs6SdHG6et7ksJhU1Ww2EE
                </h3>
              </div>
              <div id="title">
                <h3>Tabtimize - Link Building Made Easy!</h3>
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
                <p>97.33</p>
              </div>
              <div style="border-right: 1px solid black"></div>
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
                <p>39.58</p>
              </div>
              <div style="border-right: 1px solid black"></div>
              <div id="wordCount">
                <h3>
                  Word <br />
                  Count
                </h3>
                <p>666</p>
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
                        Lorem ipsum dolor sit amet,
                        <span style="color: blue">
                          consectetur adipiscing elit, sed do eiusmod
                          tempor</span
                        >
                        incididunt ut labore et dolore magna aliqua.
                      </li>
                      <li>
                        Ut enim
                        <span style="color: blue">
                          ad minim veniam, quis nostrud exercitation ullamco
                          laboris</span
                        >
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
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
                      <h5>Frameworks</h5>
                    </div>
                    <div id="urlTopics" class="flex spaceBetween truncate">
                      <h4>URL Topic:</h4>
                      <h5>Technology & Development</h5>
                    </div>
                    <div id="domainTopics" class="flex spaceBetween truncate">
                      <h4>Domain Topic:</h4>
                      <h5>Technology & Development</h5>
                    </div>
                    <div id="contentTopics" class="flex spaceBetween truncate">
                      <h4>Content Topic:</h4>
                      <h5>Components</h5>
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
                <p>11/05/21</p>
                <button class="RedBtn dispflexcenter shadow noDark">
                  <v-icon class="light">mdi-refresh</v-icon>
                </button>
              </div>
            </div>
            <div style="border-right: 1px solid black"></div>
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
        <div id="TESTcard" class="flexcol card corners shadow">
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
                <h3 class="truncate">
                  https://www.tabtimize.netlify.com/hs6SdHG6et7ksJhU1Ww2EE
                </h3>
              </div>
              <div id="title">
                <h3>Tabtimize - Link Building Made Easy!</h3>
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
                <p>97.33</p>
              </div>
              <div style="border-right: 1px solid black"></div>
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
                <p>39.58</p>
              </div>
              <div style="border-right: 1px solid black"></div>
              <div id="wordCount">
                <h3>
                  Word <br />
                  Count
                </h3>
                <p>666</p>
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
                        Lorem ipsum dolor sit amet,
                        <span style="color: blue">
                          consectetur adipiscing elit, sed do eiusmod
                          tempor</span
                        >
                        incididunt ut labore et dolore magna aliqua.
                      </li>
                      <li>
                        Ut enim
                        <span style="color: blue">
                          ad minim veniam, quis nostrud exercitation ullamco
                          laboris</span
                        >
                        nisi ut aliquip ex ea commodo consequat.
                      </li>
                      <li>
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
                      <h5>Frameworks</h5>
                    </div>
                    <div id="urlTopics" class="flex spaceBetween truncate">
                      <h4>URL Topic:</h4>
                      <h5>Technology & Development</h5>
                    </div>
                    <div id="domainTopics" class="flex spaceBetween truncate">
                      <h4>Domain Topic:</h4>
                      <h5>Technology & Development</h5>
                    </div>
                    <div id="contentTopics" class="flex spaceBetween truncate">
                      <h4>Content Topic:</h4>
                      <h5>Components</h5>
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
                <p>11/05/21</p>
                <button class="RedBtn dispflexcenter shadow noDark">
                  <v-icon class="light">mdi-refresh</v-icon>
                </button>
              </div>
            </div>
            <div style="border-right: 1px solid black"></div>
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
  margin-top: 100px;
  width: 90%;
  border-radius: 5px;
  #head {
    z-index: 3;
    padding: 10px;
    margin: 20px auto;
    width: 100%;
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
    .card {
      padding: 10px;
      margin-top: 20px;
      background-color: map-get($cs, white1);
    }
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
          transform: scale(1.8);
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