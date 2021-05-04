<template>
  <div>
    <div class="sideBar">
      <div class="top">
        <div class="logo">
          <img src="@/assets/logo.png" alt="logo" />
        </div>
        <div class="tabtimize">
          <span>Tabtimize</span>
        </div>
      </div>

      <div class="mail">
        <span class="email">someone@something.com</span>
      </div>

      <div class="list">
        <h3>MAIN FEATURES</h3>
        <ul>
          <li>
            <a href="#">
              <v-icon>mdi-link-variant</v-icon>
              <router-link to="/Main Features/LinkOpportunities">Link Opportunities</router-link> 
            </a>
          </li>
          <li>
            <a href="#">
              <v-icon>mdi-view-list</v-icon>
              <router-link to="/Main Features/Lists">Lists</router-link> 
            </a>
          </li>
          <li>
            <a href="#">
              <v-icon>mdi-dice-3</v-icon>
              <router-link to="/Main Features/RelevanceComparison">Relevance Comparison</router-link> 
            </a>
          </li>
        </ul>
        <hr />
        <h3>SETUP</h3>
        <ul>
          <li>
            <a href="#">
              <v-icon>mdi-cog</v-icon>
              <router-link to="/Setup/DomainsAndPages">Domains and Pages</router-link> 

            </a>
          </li>
          <li>
            <a href="#">
              <v-icon>mdi-file-document-multiple</v-icon>
              <router-link to="/Setup/BillingAndUsage">Billing and Usage</router-link>
            </a>
          </li>
        </ul>
        <hr />
        <h3>EXTRAS</h3>
        <ul>
          <li>
            <a href="#">
              <v-icon>mdi-face-profile</v-icon>
             <router-link to="/Extras/MyProfile">My Profile</router-link> 
            </a>
          </li>
          <li>
            <a href="#">
              <v-icon>mdi-help-circle</v-icon>
              <router-link to="">Help Tips</router-link> 
            </a>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss">
@import "./src/styles/styles.scss";
/*NAVIGATION*/
.sideBar {
    z-index: 1;
    width: 350px;
    height: 100vh;
    background-color: map-get($ColorScheme, white);
    box-shadow: 6px 0 30px 10px rgba($color: #000000, $alpha: .1);
    position: fixed;

    .top {
        display: flex;
        justify-content: center;
        padding-top: 4em;

        .logo img {
            width: 60%;
        }

        .tabtimize span {
            font-size: 42px;
            color: map-get($ColorScheme, headline);
        }
    }

    .mail {
        display: flex;
        justify-content: center;
        margin-top: 1.5em;

        span.email {
            color:map-get($ColorScheme, text);
            font-size: 16px;
            font-weight: bold;
            text-transform: uppercase;
        }
    }

    .list {

        ul li {
            list-style-type: none;
            margin-top: 1em;
            line-height: 100%;
            margin-left: 2em;

            a {
                margin-left: .5em;
                text-decoration: none;
                color: map-get($ColorScheme, text);

                .v-icon {
                    color: map-get($ColorScheme, text);
                }
            }
        }

        h3 {
            margin-left: 3.5em;
            margin-top: 2em;
        }

        hr {
            margin-top: 2em;
        }
    }
}

.switch {
  position: relative;
  display: inline-block;
  width: 54px;
  height: 28px;
  margin-left: 1em;
  bottom: 5px;
}

.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #00ff90;
}

input:focus + .slider {
  box-shadow: 0 0 1px #00ff90;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 30px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>