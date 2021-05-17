<template>
  <div class="wrap">
    <div id="accounts" class="smallbox shadow box">
      <h3>Google Accounts</h3>
      <hr />
      <div class="mail">
        <h4>EMAIL</h4>
        <span>someone@gmail.com</span>
      </div>
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
      <v-btn class="RedBtn shadow noDark">Fetch Sitemap</v-btn>
      <v-btn class="RedBtn shadow noDark">Add Page</v-btn>
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
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>/</td>
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
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>/sitemap.html</td>
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
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>/about-us</td>
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
              <tr>
                <td>
                  <input type="checkbox" name="" id="" />
                </td>
                <td>/contact</td>
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
export default {};
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";

.wrap {
  margin-top: 50px;
  padding-top: 50px;
  height: 100vh;
}

.smallbox {
  margin-top: 4em !important;
  width: 80%;
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
  width: 80%;
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
