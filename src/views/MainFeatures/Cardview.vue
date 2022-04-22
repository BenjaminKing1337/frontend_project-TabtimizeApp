<template>
  <div class="cardview_page">
    <div id="cardview">
      <div id="title">
        <h1 class="noDark">Link Opportunities</h1>
      </div>
      <div id="head" class="bglight corners shadow box">
        <div id="results">
          <h5>
            Showing 25 / 138 link opportunities for:
            www.[CurrentTargetPage].com/
          </h5>
        </div>
        <div id="filtersortcheck">
          <div class="flexcol flexend">
            <label class="checkmarkbox noDark">
              <h5 id="selectall">Select All</h5>
              <input type="checkbox" @click="selectAll" v-model="allSelected" />
              <span class="checkmark shadow"></span>
            </label>
          </div>
          <div id="filtersort" class="flex">
            <div id="filter">
              <v-btn id="filtersortBtn" @click="show = !show"
                >Add Filter<v-icon>mdi-plus</v-icon></v-btn
              >
            
              <div id="cats" v-if="show" class="box">
                <div class="cats_wrap">
                  <div id="cat1">

                    <div id="Metrics">
                      <h1>Metrics</h1>
                      <div v-for="(metric,index) in metrics" :key="metric">
                        <v-btn depressed @click="activateM(index)"><v-icon v-bind:class="{arrow:metric.active}">arrow_right</v-icon><h2>{{metric.name}}</h2></v-btn>
                        <div v-if="metric.active" class="content">Placeholder</div>
                      </div>
                      
                    </div>

                    <div id="Topics">
                      <h1>Topics</h1>
                      <div v-for="(topic,index) in topics" :key="topic">
                        <v-btn depressed @click="activateT(index)"><v-icon v-bind:class="{arrow:topic.active}">arrow_right</v-icon><h2>{{topic.name}}</h2></v-btn>
                        <div v-if="topic.active" class="content">Placeholder</div>
                      </div>
                    </div>

                  </div>

                  <div id="cat2">

                    <div id="Stats">
                      <h1>Stats</h1>
                      <div v-for="(stat,index) in stats" :key="stat">
                        <v-btn depressed @click="activateS(index)"><v-icon v-bind:class="{arrow:stat.active}">arrow_right</v-icon><h2>{{stat.name}}</h2></v-btn>
                        <div v-if="stat.active" class="content">Placeholder</div>
                      </div>
                    </div>

                  </div>
                </div>

                <v-btn class="button noDark" @click="show = !show" depressed>Apply Filter</v-btn>
              </div>
            </div>

            <div id="sort" class="text-center">
              <v-menu offset-y bottom left>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn id="filtersortBtn" v-bind="attrs" v-on="on"
                    >Sort By<v-icon>mdi-chevron-down</v-icon></v-btn
                  >
                </template>
                <v-list>
                  <div >LRS</div>
                  <div >SEO</div>
                  <div style="text-align: left" >
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
        <!-- Mobile version -->
        <div class="card_mobile flexcol corners shadow box"
          v-for="card in cards"
          v-bind:key="card"
        >
          <div id="checkmarkboxcontainer" class="noDark">
            <label class="checkmarkbox">
              <input
                type="checkbox"
                v-model="cardIds"
                @click="select"
                :value="card.id"
              />
              <span class="checkmark shadow"></span>
            </label>
          </div>
          <div id="cardcontent">
            <div id="headcontainer">
              <div id="pic">
                <img class="noDark" src="../../assets/logoT.svg" />
              </div>
              <div id="headline">
                <div id="url">
                  <h3>
                    {{ card.url }}
                  </h3>
                </div>
                <div id="title">
                  <h3>{{ card.title }}</h3>
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
                  <p>{{ card.seo }}</p>
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
                  <p>{{ card.lrs }}</p>
                </div>
                <div style="border-right: 1px solid #959794"></div>
                <div id="wordCount">
                  <h3>
                    Word <br />
                    Count
                  </h3>
                  <p>{{ card.words }}</p>
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
                        </li>
                        <li>
                          {{ card.anch2 }}
                        </li>
                        <li>
                          {{ card.anch3 }}
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
                        <h5>{{ card.key }}</h5>
                      </div>
                      <div id="urlTopics" class="flex spaceBetween truncate">
                        <h4>URL Topic:</h4>
                        <h5>{{ card.urltop }}</h5>
                      </div>
                      <div id="domainTopics" class="flex spaceBetween truncate">
                        <h4>Domain Topic:</h4>
                        <h5>{{ card.domtop }}</h5>
                      </div>
                      <div
                        id="contentTopics"
                        class="flex spaceBetween truncate"
                      >
                        <h4>Content Topic:</h4>
                        <h5>{{ card.contop }}</h5>
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
                  <p>{{ card.anal }}</p>
                  <v-btn class="RedBtn  dispflexcenter noDark" depressed>
                    <v-icon class="light">mdi-refresh</v-icon>
                  </v-btn>
                </div>
              </div>
              <div style="border-right: 1px solid #959794"></div>
              <div id="export" class="flexcol vcenter center noDark">
                <v-menu offset-x top left rounded :menu-props="{ contentClass: 'exportContent'}">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      class="RedBtn dispflexcenter"
                      depressed
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon class="light">mdi-chevron-left</v-icon>
                      <v-icon class="light">mdi-plus</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <div >Export</div>
                    <div >Add to List</div>
                    <div >Remove</div>
                  </v-list>
                </v-menu>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Desktop version -->
        <div class="card flexcol corners shadow box"
          v-for="card in cards"
          v-bind:key="card"
        >
          <div id="checkmarkboxcontainer" class="noDark">
            <label class="checkmarkbox">
              <input
                type="checkbox"
                v-model="cardIds"
                @click="select"
                :value="card.id"
              />
              <span class="checkmark shadow"></span>
            </label>
          </div>

          <div id="cardcontent">
            <div class="wrap_head">
              <div id="headcontainer">
                <div class="card_header">
                  <div id="pic">
                    <img class="noDark" src="../../assets/logoT.svg" />
                  </div>
                  <div id="headline">
                    <div id="url">
                      <h3>
                        {{ card.url }}
                      </h3>
                    </div>
                    <div id="title">
                      <h3>{{ card.title }}</h3>
                    </div>
                  </div>
                </div>

                <div id="metrics" class="flex">
                  <div id="SEOscore">
                    <h3>
                      SEO <br />
                      Score
                    </h3>
                    <p>{{ card.seo }}</p>
                  </div>
                  <div style="border-right: 1px solid #A6A6A6; height: 35px; margin: auto 0"></div>
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
                    <p>{{ card.lrs }}</p>
                  </div>
                  <div style="border-right: 1px solid #A6A6A6; height: 35px; margin: auto 0"></div>
                  <div id="wordCount">
                    <h3>
                      Word <br />
                      Count
                    </h3>
                    <p>{{ card.words }}</p>
                  </div>
                </div>
              </div>

              <div class="actions">
                <div id="export" class="noDark">
                  <v-menu offset-x top left rounded :menu-props="{ contentClass: 'exportContent'}">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn
                        depressed
                        v-bind="attrs"
                        v-on="on"
                      >
                        <v-icon class="light">mdi-chevron-left</v-icon>
                        <v-icon class="light">mdi-plus</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item link>Export</v-list-item>
                      <v-list-item link>Add to List</v-list-item>
                      <v-list-item link>Remove</v-list-item>
                      
                    </v-list>
                  </v-menu>
                </div>

                <div id="analyzed">
                  <div class="flex vcenter">
                    <h3>Analyzed:</h3>
                    <p>{{ card.anal }}</p>
                    <v-btn class="RedBtn noDark" depressed>
                      <v-icon class="light">mdi-refresh</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </div>

            <div id="midcontainer" class="box_light">
            
              <div id="anchorsugs">
                <v-expansion-panels inset multiple v-model="panel" class="expansionbtn box_light">
                  <v-expansion-panel class="expansionbtn">
                    <v-expansion-panel-header class="expansionbtn"
                      ><h3>Anchor Suggestions</h3></v-expansion-panel-header
                    >
                    <v-expansion-panel-content>
                      <ul>
                        <li>
                          {{ card.anch1 }}
                        </li>
                        <li>
                          {{ card.anch2 }}
                        </li>
                        <li>
                          {{ card.anch3 }}
                        </li>
                      </ul>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>

              <div id="keywords" class="box_light">
                <v-expansion-panels inset multiple v-model="panel" class="expansionbtn box_light">
                  <v-expansion-panel class="expansionbtn">
                    <v-expansion-panel-header class="expansionbtn"
                      ><h3>Keywords & Topics</h3></v-expansion-panel-header
                    >
                    <v-expansion-panel-content>
                      <div id="kwords" class="flex spaceBetween truncate">
                        <h4>Keywords:</h4>
                        <h5>{{ card.key }}</h5>
                      </div>
                      <div id="urlTopics" class="flex spaceBetween truncate">
                        <h4>URL Topic:</h4>
                        <h5>{{ card.urltop }}</h5>
                      </div>
                      <div id="domainTopics" class="flex spaceBetween truncate">
                        <h4>Domain Topic:</h4>
                        <h5>{{ card.domtop }}</h5>
                      </div>
                      <div
                        id="contentTopics"
                        class="flex spaceBetween truncate"
                      >
                        <h4>Content Topic:</h4>
                        <h5>{{ card.contop }}</h5>
                      </div>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
              <div class="line" />
            </div>
          </div>
        </div>

        <!--  <Card/> -->
      </div>
      
    </div>
  </div>
</template>


<script>
//import Card from "../../components/Cards/Card.vue";
import axios from "axios";

const baseURL = "https://my-json-server.typicode.com/danysko5/project-data/cards";

export default {
  name: "Cardview",

  components: {
    // Card,
  },

  data: () => ({
    cards: [],
    selected: [],
    allSelected: false,
    cardIds: [],
    panel: [0,0],
    show:false,
    metrics:[
      {name:'LRS', active:false},
      {name:'Keyword', active:false},
      {name:'Authority', active:false}
    ],
    topics:[
      {name:'URL Topic', active:false},
      {name:'Content Topic', active:false},
      {name:'Domain Topic', active:false}
    ],
    stats:[
      {name:'Word Count', active:false},
      {name:'Anchor Text', active:false},
      {name:'Analyzed Date', active:false},
      {name:'Front Page', active:false},
      {name:'Languages', active:false},
      {name:'TLD', active:false}
    ],
  }),

  async created() {
    try {
      const res = await axios.get(baseURL);

      this.cards = res.data;
    } catch (e) {
      console.error(e);
    }
  },
  

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
    activateM(index){
      this.metrics[index].active=!this.metrics[index].active;

    },
    activateT(index){
      this.topics[index].active=!this.topics[index].active;
    },
    activateS(index){
      this.stats[index].active=!this.stats[index].active;
    },
    
  },
};
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";
@import "./src/styles/card.scss";

.cardview_page {
  padding: 45px;
  @media (max-width: $sm) {
    padding: 20px;
  }
  @media (max-width: $md) {
    padding-bottom: 70px;
  }
}

#cardview {
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  #title {
    width: 100%;
    max-width: 1590px;
    margin: 40px auto 60px auto;
    h1,
    p {
      color: map-get($cs, white1);
      margin: 0;
    }
  }
  #head {
    z-index: 3;
    padding: 10px;
    margin: 20px auto;
    width: 100%;
    max-width: 1590px;
    animation: bpprimary 20s infinite alternate-reverse;

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
  .card_mobile:last-child, .card:last-child{
    margin-bottom: 200px;
  }
  #cats {
    height: auto;
    width: 400px;
    background-color: map-get($cs, white1 );
    box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    padding: 10px 30px;
    position: absolute;
    margin-left: -300px;
    margin-top: 10px;
    transition: 1s;
    .cats_wrap{
      display: flex;
      justify-content: space-between;
    }

    .content{
      padding-left: 20px;
      overflow: hidden;
      transition: max-height 0.2s ease-out;
    }

    .button{
      background-color: map-get($cs, button);
      color: map-get($cs, white1);
      font-size: $medium;
      height: 30px;
      width: 115px;
      border-radius: 30px;
      text-transform: capitalize;
      float: right;
    }
    .v-btn{
      text-transform: capitalize;
    }
    h1{
      color: map-get($cs , button );
      font-size: $medium2;
    }
    h2{
      font-size: $medium;
    }
  }
  .arrow{
    transform: rotate(90deg);
  }
  .show{
    visibility: visible;
    opacity: 1;
  }
}
</style>