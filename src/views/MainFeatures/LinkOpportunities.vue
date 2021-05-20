<template>
  <div id="backlinkEngine">
    <div id="title">
      <h1  class="noDark">Backlink Engine</h1>
      <p  class="noDark">Select a target page to view analyzed opportunities.</p>
    </div>

    <Balance/>
    <!-- <div id="pagelist" class="box">
      <div class="page">
        <div id="navigation">
          <div class="dispflexcenter circle shadow">
            <v-icon>mdi-bullseye-arrow</v-icon>
          </div>
        </div>

        <div id="pageNo">
          <h2 class="flex center">Target Page 1 / 4</h2>
        </div>

        <div id="pageInfo">
          <div id="pageName" class="flex spaceBetween">
            <h3>PAGE NAME</h3>
            <h3 class="thin">/</h3>
          </div>
          <div class="line" />
          <div id="number" class="flex spaceBetween">
            <h3>LINK OPPORTUNITIES</h3>
            <h3 class="thin">130</h3>
          </div>
          <div class="line" />
          <div id="topic" class="flex spaceBetween">
            <h3>URL TOPIC</h3>
            <h3 class="thin">Business & Industrial</h3>
          </div>
          <div class="line" />
          <div id="analyzed" class="flex spaceBetween">
            <h3>LAST ANALYZED</h3>
            <div class="flex">
              <button id="refresh" class="RedBtn dispflexcenter">
                <v-icon class="noDark">mdi-refresh</v-icon>
              </button>
              <h3 class="thin">25/01/2021</h3>
            </div>
          </div>
          <div class="line" />
        </div>

        <div id="viewPage" class="dispflexcenter">
          <router-link class="nodecor" to="/MainFeatures/Cardview"
            ><button id="view" class="RedBtn dispflexcenter">
              <h3 class="nodecor light noDark">VIEW</h3>
            </button></router-link
          >
        </div>
      </div>
      <div class="page">
        <div id="navigation">
          <div class="dispflexcenter circle shadow">
            <v-icon>mdi-bullseye-arrow</v-icon>
          </div>
        </div>

        <div id="pageNo">
          <h2 class="flex center">Target Page 2 / 4</h2>
        </div>

        <div id="pageInfo">
          <div id="pageName" class="flex spaceBetween">
            <h3>PAGE NAME</h3>
            <h3 class="thin">/sitemap.html</h3>
          </div>
          <div class="line" />
          <div id="number" class="flex spaceBetween">
            <h3>LINK OPPORTUNITIES</h3>
            <h3 class="thin">130</h3>
          </div>
          <div class="line" />
          <div id="topic" class="flex spaceBetween">
            <h3>URL TOPIC</h3>
            <h3 class="thin">Business & Industrial</h3>
          </div>
          <div class="line" />
          <div id="analyzed" class="flex spaceBetween">
            <h3>LAST ANALYZED</h3>
            <div class="flex">
              <button id="refresh" class="RedBtn dispflexcenter">
                <v-icon class="noDark">mdi-refresh</v-icon>
              </button>
              <h3 class="thin">25/01/2021</h3>
            </div>
          </div>
          <div class="line" />
        </div>

        <div id="viewPage" class="dispflexcenter">
          <router-link class="nodecor" to="/MainFeatures/Cardview"
            ><button id="view" class="RedBtn dispflexcenter">
              <h3 class="nodecor light noDark">VIEW</h3>
            </button></router-link
          >
        </div>
      </div>
      <div class="page">
        <div id="navigation">
          <div class="dispflexcenter circle shadow">
            <v-icon>mdi-bullseye-arrow</v-icon>
          </div>
        </div>

        <div id="pageNo">
          <h2 class="flex center">Target Page 3 / 4</h2>
        </div>

        <div id="pageInfo">
          <div id="pageName" class="flex spaceBetween">
            <h3>PAGE NAME</h3>
            <h3 class="thin">/about-us</h3>
          </div>
          <div class="line" />
          <div id="number" class="flex spaceBetween">
            <h3>LINK OPPORTUNITIES</h3>
            <h3 class="thin">130</h3>
          </div>
          <div class="line" />
          <div id="topic" class="flex spaceBetween">
            <h3>URL TOPIC</h3>
            <h3 class="thin">Business & Industrial</h3>
          </div>
          <div class="line" />
          <div id="analyzed" class="flex spaceBetween">
            <h3>LAST ANALYZED</h3>
            <div class="flex">
              <button id="refresh" class="RedBtn dispflexcenter">
                <v-icon class="noDark">mdi-refresh</v-icon>
              </button>
              <h3 class="thin">25/01/2021</h3>
            </div>
          </div>
          <div class="line" />
        </div>

        <div id="viewPage" class="dispflexcenter">
          <router-link class="nodecor" to="/MainFeatures/Cardview"
            ><button id="view" class="RedBtn dispflexcenter">
              <h3 class="nodecor light noDark">VIEW</h3>
            </button></router-link
          >
        </div>
      </div>
      <div class="page">
        <div id="navigation">
          <div class="dispflexcenter circle shadow">
            <v-icon>mdi-bullseye-arrow</v-icon>
          </div>
        </div>

        <div id="pageNo">
          <h2 class="flex center">Target Page 4 / 4</h2>
        </div>

        <div id="pageInfo">
          <div id="pageName" class="flex spaceBetween">
            <h3>PAGE NAME</h3>
            <h3 class="thin">/contact</h3>
          </div>
          <div class="line" />
          <div id="number" class="flex spaceBetween">
            <h3>LINK OPPORTUNITIES</h3>
            <h3 class="thin">130</h3>
          </div>
          <div class="line" />
          <div id="topic" class="flex spaceBetween">
            <h3>URL TOPIC</h3>
            <h3 class="thin">Business & Industrial</h3>
          </div>
          <div class="line" />
          <div id="analyzed" class="flex spaceBetween">
            <h3>LAST ANALYZED</h3>
            <div class="flex">
              <button id="refresh" class="RedBtn dispflexcenter">
                <v-icon class="noDark">mdi-refresh</v-icon>
              </button>
              <h3 class="thin">25/01/2021</h3>
            </div>
          </div>
          <div class="line" />
        </div>

        <div id="viewPage" class="dispflexcenter">
          <router-link class="nodecor" to="/MainFeatures/Cardview"
            ><button id="view" class="RedBtn dispflexcenter">
              <h3 class="nodecor light noDark">VIEW</h3>
            </button></router-link
          >
        </div>
      </div>
    </div> -->
    <!-- pagelistfull appear on desktopview only -->
    <div id="pagelistfull" class="dispflexcenter">
      <div class="page box">
        <div id="navigation">
          <div class="dispflexcenter circle shadow">
            <v-icon>mdi-bullseye-arrow</v-icon>
          </div>
        </div>

        <div id="pageNo">
          <h2 class="flex center">Target Pages</h2>
        </div>

        <div id="pageInfo">
          <div class="infoDescription">
            <div class="section"><span class="font-weight-bold">Pages</span></div>
            <div class="section"><span class="font-weight-bold">Url Topic</span></div>
            <div class="section"><span class="font-weight-bold">Link opp</span></div>
            <div class="section"><span class="font-weight-bold">Last analyzed</span></div>
          </div>

          <div class="data" v-for="data in pages" :key="data">
            <div class="section">
              <span>{{data.page}}</span>
            </div>
            <div class="section">
              <span>{{data.topic}}</span>
            </div>
            <div class="section flex">
              <span class="linkOpp">{{data.link}}</span>
              <v-btn class="noDark" depressed to="/MainFeatures/Cardview">
                View
              </v-btn>
            </div>
            <div class="section">
              <span>{{data.date}}</span>
              <v-btn class="noDark" depressed>
                <v-icon>refresh</v-icon>
              </v-btn>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div id="pagelistfull_mobile" class="box dispflexcenter" v-for="data in pages" :key="data">
      <div class="page">
        <div id="navigation">
          <div class="dispflexcenter circle shadow">
            <v-icon>mdi-bullseye-arrow</v-icon>
          </div>
        </div>

        <div id="pageInfo">
          <div class="infoDescription">
            <div class="section"><span class="font-weight-bold">Page</span></div>
            <div class="section"><span class="font-weight-bold">Url Topic</span></div>
            <div class="section"><span class="font-weight-bold">Link opp</span></div>
            <div class="section"><span class="font-weight-bold">Last analyzed</span></div>
          </div>

          <div class="data">
            <div class="section">
              <span>{{data.page}}</span>
            </div>
            <div class="section">
              <span>{{data.topic}}</span>
            </div>
            <div class="section flex">
              <span class="linkOpp">{{data.link}}</span>
            </div>
            <div class="section">
              <span>{{data.date}}</span>
              <v-btn depressed class="noDark">
                <v-icon >refresh</v-icon>
              </v-btn>
            </div>

          </div>
        </div>
        <v-btn class="noDark" depressed to="/MainFeatures/Cardview">
          View
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import Balance from "../../components/Containers/Balance.vue";

export default {
  name: "LinkOpportunities",

  components: {
    Balance,
  },
  data() {
    return {
      pages: [
        {page: "/", topic: "Business & Industrial", link: "130", date:"25/01/2021" },
        {page: "/about-us", topic: "Business & Industrial", link: "58", date:"25/01/2021" },
        {page: "/contact", topic: "Business & Industrial", link: "666", date:"25/01/2021" },
        {page: "/projects", topic: "Business & Industrial", link: "951", date:"25/01/2021" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";

/* PAGE */
#backlinkEngine {
  padding: 45px;
  @media (max-width: $sm) {
    padding: 20px;
  }
  #title{
    width: 100%;
    max-width: 1590px;
    margin: 40px auto 60px auto;
    h1,
    p {
      color: map-get($cs, white1);
      margin: 0;
    }
  }
  #pagelist {
    @media (min-width: $md) {
      display: none;
    }
    .page {
      border-radius: 5px;
      background-color: map-get($cs, white1);
      animation: bppurple 25s infinite alternate-reverse;
      margin-top: 5%;
      h3 {
        font-size: $small;
      }
      #navigation {
        display: flex;
        float: right;

        .circle {
          transform: scale(1.2);
          background: linear-gradient(
            map-get($cs, purple1),
            map-get($cs, white1) 99%
          );
          .v-icon {
            //color: map-get($cs, purple1);
            font-size: $big;
          }
        }
      }
      #pageNo {
      }
      
      #viewPage {
        #view {
          width: 100%;
        }
      }
    }
  }
  #pagelistfull {
    width: 100%;
    max-width: 1590px;
    margin: 0 auto;
    @media (max-width: 1100px) {
      display: none;
    }
    h2 {
      margin: 0 2% 5% 2%;
    }
    .page {
      width: 100%;
      border-radius: 5px;
      background-color: map-get($cs, white1);
      animation: bppurple 25s infinite alternate-reverse;
      margin-top: 5%;
      padding: 5% 40px;

      #navigation {
        position: relative;
        transform: scale(2);
        left: 42%;
        margin-top: -5%;
        .circle {
          background: linear-gradient(
            map-get($cs, purple1),
            map-get($cs, white1) 99%
          );
        }
      }

      

      #pageInfo{
        .infoDescription{
          display: flex;
          justify-content: flex-start;
          width: 100%;
          margin-bottom: 15px;

          .section{
            width: 25%;
            font-size: $medium;
          }
        
        }

        .data{
          display: flex;
          padding: 10px;
          border-radius: 10px;
          background-color: rgb(233, 231, 231);
          margin-bottom: 10px;
          .section{
            width: 25%;
            span{
              margin-left: 5px;
            }
            .linkOpp{
              display: block;
              width: 34px;
            }
            .v-btn{
              background-color: map-get($cs, button );
              color: map-get($cs, white1 );
              height: 30px;
              width: 50px;
              border-radius: 30px;
              margin-left: 10px;
            }
          }
        }
      }
     
    }
  }

  #pagelistfull_mobile{
    @media (min-width: 1101px) {
      display: none;
    }
    width: 100%;
    background-color: map-get($cs, white1);
    box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
    border-radius: 10px;
    margin-top: 20px;

    .page{
      width: 100%;
      padding: 30px 20px 20px 20px;
      .v-btn{
        background-color: map-get($cs, button );
        color: map-get($cs, white1 );
        height: 40px;
        width: 100%;
        border-radius: 30px;
      }
    }

    #navigation {
      position: absolute;
      transform: scale(1.3);
      left: 40px;
      margin-top: -45px;
      @media (max-width: $sm) {
        left: 20px;
      }

      .circle {
        background: linear-gradient(
          map-get($cs, purple1),
          map-get($cs, white1) 99%
        );
      }
    }

    #pageInfo{
      display: flex;
        .infoDescription{
          display: flex;
          flex-direction: column;
          width: 50%;
          margin-bottom: 15px;

          .section{
            font-size: $medium;
            margin-bottom: 10px;
          }
        
        }
        .data{
          width: 50%;
          .section{
            margin-bottom: 10px;
            display: flex;
            justify-content: flex-end;
            span{
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .linkOpp{
              display: block;
              width: 34px;
            }
            .v-btn{
              background-color: map-get($cs, button );
              color: map-get($cs, white1 );
              height: 25px;
              width: 35px;
              border-radius: 30px;
              margin-left: 5px;
              text-transform: capitalize;
            }
          }
        }

      }
  }
  #pagelistfull_mobile:last-child{
    margin-bottom: 75px;
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

// @media only screen and (min-width: 910px) {
//   .balancedivs{
//     h3{
//       padding: 0 !important;
//     }
//   }
// }
</style>