<template>
  <div class="wrap">
    <div class="smallbox box">
      <h3>Google Accounts</h3>
      <hr />
      <div class="mail">
        <h4>EMAIL</h4>
        <span>someone@gmail.com</span>
      </div>
    </div>
    <div class="smallbox box">
      <h3>Domains</h3>
      <hr />
      <div class="mail">
        <h4>DOMAIN</h4>
        <span>someone.com</span>
      </div>
    </div>

    <div class="buttons">
      <button class="RedBtn noDark">Fetch Sitemap</button>
      <button class="RedBtn noDark">Add Page</button>
    </div>

    <div class="pages box">
      <div class="top">
        <div class="left">
          <h3>Registered Pages</h3>
        </div>
        <div class="right">
          <button class="RedBtn noDark">Verify</button>
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
          <table
            id="data-table"
            width="100%"
          >
            <thead>
              <tr>
                <th>CHOOSE</th>
                <th>PAGES</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                    <input type="checkbox" name="" id="">
                </td>
                <td>/</td>
                <td>
                    <v-icon class="delete">mdi-delete</v-icon>
                </td>
              </tr>
              <tr>
                <td>
                     <input type="checkbox" name="" id="">
                </td>
                <td>/sitemap.html</td>
                <td>
                    <v-icon class="delete">mdi-delete</v-icon>
                </td>
              </tr>
              <tr>
                 <td>
                     <input type="checkbox" name="" id="">
                </td>
                <td>/about-us</td>
                <td>
                    <v-icon class="delete">mdi-delete</v-icon>
                </td>
              </tr>
              <tr>
                 <td>
                     <input type="checkbox" name="" id="">
                </td>
                <td>/contact</td>
                <td>
                    <v-icon class="delete">mdi-delete</v-icon>
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
    height: 100vh;
}

.smallbox {
  margin-top: 4em !important;
  width: 80%;
  background-color: map-get($cs, bg);
  padding: 2em;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);

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
  }
}

.pages {
  margin-top: 4em !important;
  width: 80%;
  background-color: map-get($cs, bg);
  padding: 2em;
  border-radius: 10px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba($color: #000000, $alpha: 0.2);
  margin-bottom: 6em;

  .table {
      margin-top: 3em;

      table {
        border-collapse: collapse;
      }

      th, td {
          text-align:left;
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
