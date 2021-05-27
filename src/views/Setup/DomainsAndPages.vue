<template>
  <div class="wrap">
    <h1 class="noDark">Domains and Pages</h1>
    <div id="accounts" class="smallbox shadow box">
      <h3>Google Accounts</h3>
      <hr />
      <div class="mail">
        <h4>EMAIL</h4>
        <span>someone@gmail.com</span>
      </div>
    </div>

    <div class="buttons">
      <v-dialog v-model="dialog" width="300" hide-overlay
        ><template v-slot:activator="{ on, attrs }">
          <v-btn class="RedBtn shadow noDark" v-bind="attrs" v-on="on"
            >Manage Domains</v-btn
          >
        </template>
        <v-card>
          <v-card-title class="bgtab light noDark">
            Manage Domains
          </v-card-title>

          <v-card-text>
            List of current urls, with option to delete <br> Add domain text box +
            button
          </v-card-text>

          <div class="line"></div>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <div id="domains" class="smallbox shadow box">
      <h3>Domains</h3>
      <hr />
      <div class="mail">
        <h4>DOMAIN</h4>
        <span>someone.com</span>
      </div>
    </div>

    <div class="buttons">
      <v-dialog v-model="dialog" width="300" hide-overlay
        ><template v-slot:activator="{ on, attrs }">
          <v-btn class="RedBtn shadow noDark" v-bind="attrs" v-on="on"
            >Add Sitemap</v-btn
          >
        </template>
        <v-card>
          <v-card-title class="bgtab light noDark">
            Add Sitemap
          </v-card-title>

          <v-card-text>
            inputfield for sitemap url <br>
            fetch sitemap from google search console + button
          </v-card-text>

          <div class="line"></div>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="dialog" width="300" overlay-opacity="0.1" class="box"
        ><template v-slot:activator="{ on, attrs }">
          <v-btn class="RedBtn shadow noDark" v-bind="attrs" v-on="on"
            >Add Page</v-btn
          >
        </template>
        <v-card >
          <v-card-title class="bgtab light noDark">
            Add Page
          </v-card-title>

          <v-card-text>
            Field to add page + submit button
          </v-card-text>

          <div class="line"></div>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" text @click="dialog = false"> Close </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>

    <div id="pages" class="pages shadow box">
      <div class="top">
        <div class="left">
          <h3>Target Pages</h3>
        </div>
        <div class="right">
          <v-btn class="RedBtn noDark">Verify</v-btn>
        </div>
      </div>
      <div class="search">
        <div class="left">
          <label for="show">Show: </label>
          <select name="values" id="va">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
          pages
        </div>
        <div class="right">
          <label for="Search">Search: </label>
          <input type="search" name="search" id="src" />
        </div>
      </div>
      <div class="table">
        <div class="panel-body">
          <table id="data-table" width="100%">
            <thead>
              <tr>
                <th>CHOOSE</th>
                <th>PAGES</th>
              </tr>
            </thead>
            <br />
            <tbody>
              <tr>
                <th style="padding: 8px">
                  <input
                    type="checkbox"
                    @click="selectAll"
                    v-model="allSelected"
                  />
                  Select All
                </th>
              </tr>
              <tr v-for="page in pages" v-bind:key="page">
                <td>
                  <input
                    type="checkbox"
                    v-model="pageIds"
                    @click="select"
                    :value="page.id"
                  />
                </td>
                <td>{{ page.name }}</td>
                <td>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <span v-bind="attrs" v-on="on"
                        ><v-icon class="icon delete">mdi-delete</v-icon></span
                      >
                    </template>
                    <span>Delete Page</span>
                  </v-tooltip>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const baseURL = "https://my-json-server.typicode.com/danysko5/project-data/pages";

export default {
  data: () => ({
    pages: [],
    selected: [],
    allSelected: false,
    pageIds: [],
    dialog: false,
  }),

async created() {
    try {
      const res = await axios.get(baseURL);

      this.pages = res.data;
    } catch (e) {
      console.error(e);
    }
  },

  methods: {
    selectAll: function () {
      this.pageIds = [];

      if (!this.allSelected) {
        for (const page in this.pages) {
          this.pageIds.push(this.pages[page].id.toString());
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

h1 {
  color: map-get($cs, white1);
  text-align: start;
  width: 100%;
  max-width: 1590px;
  margin: 40px auto 0 auto;
}

.wrap {
  padding: 45px;
  @media (max-width: $sm) {
    padding: 20px;
  }
  #accounts {
    margin-top: 4em;
  }
  #domains {
    margin-top: 2em;
  }
}

.smallbox {
  // margin-top: 4em !important;
  width: 100%;
  max-width: 1590px;
  background-color: map-get($cs, white1);
  padding: 2em;
  border-radius: 10px;
  margin: 0 auto;
  animation: bpprimary 25s infinite alternate-reverse;
  h3 {
    padding-bottom: 0.5em;
  }

  .mail {
    padding-top: 0.5em;

    h4,
    span {
      color: map-get($cs, text);
    }
  }
}

.buttons {
  display: flex;
  justify-content: center;
  margin-top: 1em;

  button {
    margin: 1em;
    padding-bottom: 2em;
  }
}

.pages {
  margin-top: 4em !important;
  width: 100%;
  max-width: 1590px;
  background-color: map-get($cs, white1);
  padding: 2em;
  border-radius: 10px;
  margin: 0 auto;
  margin-bottom: 6em;
  animation: bpprimary 25s infinite alternate-reverse;

  .table {
    margin-top: 3em;

    table {
      border-collapse: collapse;
    }

    th,
    td {
      text-align: left;
    }

    td {
      border-bottom: 1px solid lightgray;
      padding: 8px;
    }

    .delete {
      color: map-get($cs, button);
    }
  }

  .top {
    display: flex;

    .left {
      flex-grow: 1;
      justify-content: flex-start;
    }

    .right {
      justify-content: flex-end;
    }
  }

  .search {
    display: flex;
    margin-top: 2em;
    flex-wrap: wrap;
    .left {
      flex-grow: 1;
      justify-content: flex-start;

      select {
        border: 1px solid black;
        padding: 0.5em;
        appearance: menulist;
        border-radius: 5px;
      }
    }

    .right {
      justify-content: flex-end;

      input[type="search"] {
        border: 1px solid black;
        padding: 0.5em;
        border-radius: 10px;
      }
    }
  }
}
</style>
