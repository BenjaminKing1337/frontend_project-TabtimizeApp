<template>
  <div class="lists_page">
    <h2 class="noDark">Compiled Lists</h2>
    <div class="list-box box">
      <div class="top flex spaceBetween">
        <h3>Your Lists:</h3>
        <!-- <input type="text" v-model="listName" @keyup.enter="addList"> -->
        <v-btn class="RedBtn noDark">Create New List</v-btn>
      </div>
      <!-- <div class="message">
        <h4>You don't have any lists!</h4>
        <br />
        <h4>
          Create one in Link opportunities or Relevance Comparison by clicking
          on the plus icon button and select the "add to list" option.
        </h4>
      </div> -->
      <hr />
      <div class="lists">
        <div class="list_info">
          <div class="name">
            <span class="font-weight-bold">Name</span>
          </div>
          <div class="created">
            <span class="font-weight-bold">Created</span>
          </div>
          <div class="links">
            <span class="font-weight-bold">Link opp</span>
          </div>
          <div class="options">
            <span class="font-weight-bold">Options</span>
          </div>
        </div>

        <div class="created_lists box_small">
          <div class="list" v-for="list in lists" :key="list">
            <div class="name">
              <span>{{ list.name }}</span>
            </div>
            <div class="created">
              <span>{{ list.date }}</span>
            </div>
            <div class="links">
              <span>{{ list.links }}</span>
            </div>
            <div class="options">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on"
                    ><v-icon class="icon">visibility</v-icon></span
                  >
                </template>
                <span>View more</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on"
                    ><v-icon class="icon">edit</v-icon></span
                  >
                </template>
                <span>Edit List</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <span v-bind="attrs" v-on="on"
                    ><v-icon class="icon">mdi-delete</v-icon></span
                  >
                </template>
                <span>Delete List</span>
              </v-tooltip>
            </div>
          </div>
        </div>
      </div>

      <div class="lists_mobile" v-for="list in lists" :key="list">
        <div class="list_info">
          <div class="name">
            <span class="font-weight-medium">NAME</span>
          </div>
          <div class="created">
            <span class="font-weight-medium">CREATED</span>
          </div>
          <div class="links">
            <span class="font-weight-medium">LINK OPP</span>
          </div>
          <div class="options">
            <span class="font-weight-medium">OPTIONS</span>
          </div>
        </div>

        <div class="created_lists box_small">
          <div class="list">
            <div class="name">
              <span>{{ list.name }}</span>
            </div>
            <div class="created">
              <span>{{ list.date }}</span>
            </div>
            <div class="links">
              <span>{{ list.links }}</span>
            </div>
            <div class="options">
              <v-icon class="icon">visibility</v-icon>
              <v-icon class="icon">edit</v-icon>
              <v-icon class="icon">mdi-delete</v-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HTTP client
import axios from "axios";
// save JSON server URL as constant variable, so its easier to re-use
const baseURL = "https://my-json-server.typicode.com/danysko5/project-data/lists"

export default {
  name: "lists",
  data() {
    return {
      // data array
      lists: [],
    };
  },
  // life-cycle hook
  async created() {
    try {
      const res = await axios.get(baseURL);
      this.lists = res.data;
    } 
    // check errors 
    catch (e) {
      console.error(e);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";
.lists_page {
  padding: 45px;
  @media (max-width: $sm) {
    padding: 20px;
  }
}

h2 {
  color: map-get($cs, white1);
  font-size: $big2;
  text-align: start;
  width: 100%;
  max-width: 1590px;
  margin: 40px auto 0 auto;
}
.list-box {
  width: 100%;
  max-width: 1590px;
  margin: 60px auto 100px auto;
  height: auto;
  background-color: map-get($cs, white1);
  box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
  padding: 30px;
  border-radius: 10px;
  animation: bpprimary 25s infinite alternate-reverse;
  @media (max-width: $lg) {
    padding: 15px;
  }

  .message {
    margin-top: 1em;

    h4 {
      margin-bottom: 2em;
    }
  }

  hr {
    margin: 2em 0em 20px 0;
    @media (max-width: $md) {
      margin-bottom: 10px;
    }
  }

  .lists,
  .lists_mobile {
    display: flex;
    flex-direction: column;
    .list_info {
      display: flex;
      margin: 1em;
      .name,
      .created,
      .links,
      .options {
        width: 25%;
      }
    }
    .created_lists {
      border-radius: 10px;
      .list {
        display: flex;
        margin: 10px;
        .v-icon {
          color: map-get($cs, button);
          margin-right: 12px;
        }
        .name,
        .created,
        .links,
        .options {
          width: 25%;
        }
      }
    }

    span {
      color: map-get($cs, text);
      font-size: $medium;
    }
  }
  .lists {
    .list {
      background-color: rgb(233, 231, 231);
      padding: 10px;
      border-radius: 10px;
    }
    @media (max-width: $md) {
      display: none;
    }
  }
  .lists_mobile {
    @media (min-width: $md) {
      display: none;
    }
  }
  @media (max-width: $md) {
    .lists_mobile {
      flex-direction: row;
      justify-content: space-between;
      border-radius: 10px;
      margin-bottom: 10px;
      background-color: rgb(233, 231, 231);
      .list_info {
        flex-direction: column;
        .name,
        .created,
        .links,
        .options {
          width: 100%;
        }
      }
      .created_lists {
        .list {
          flex-direction: column;
          .name,
          .created,
          .links,
          .options {
            width: 100%;
            text-align: end;
            .v-icon {
              margin-right: 0;
            }
          }
        }
      }
      span {
        font-size: 12px;
      }
    }
  }
}
</style>
