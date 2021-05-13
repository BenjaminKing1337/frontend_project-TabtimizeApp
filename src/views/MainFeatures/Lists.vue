<template>
  <div>
    <div class="list-box box">
      <div class="top">
        <h3>Your Lists:</h3>
      </div>
      <div class="message">
        <h4>You don't have any lists!</h4>
        <br />
        <h4>
          Create one in Link opportunities or Relevance Comparison by clicking
          on the plus icon button and select the "add to list" option.
        </h4>
      </div>
      <hr />
      <div class="lists">
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
          <div class="list" v-for="list in lists" :key="list">
            <div class="name">
              <span>{{list.name}}</span>
            </div>
            <div class="created">
              <span>{{list.date}}</span>
            </div>
            <div class="links">
              <span>{{list.links}}</span>
            </div>
            <div class="options">
              <v-icon class="icon">visibility</v-icon>
              <v-icon class="icon">edit</v-icon>
              <v-icon class="icon">mdi-delete</v-icon>
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
                <span>{{list.name}}</span>
              </div>
              <div class="created">
                <span>{{list.date}}</span>
              </div>
              <div class="links">
                <span>{{list.links}}</span>
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
export default {
  data(){
    return{
      lists:[
        {name: 'My list', date: '10.5.2021', links: '2519'},
        {name: 'Your list', date: '12.5.2021', links: '748'}
      ]
    }
    

    
  }
};
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";

.list-box {
  width: 90%;
  margin: 0 auto 100px auto;
  height: auto;
  background-color: map-get($cs , white1 );
  margin-top: 6em;
  box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
  padding: 2em;
  border-radius: 10px;

  .message {
    margin-top: 1em;

    h4 {
      margin-bottom: 2em;
    }
  }

  hr {
    margin: 2em 0em 2em;
    @media (max-width: $md){
      margin-bottom: 0;
    }
  }

  .lists, .lists_mobile {
    display: flex;
    flex-direction: column;
    .list_info{
      display: flex;
      margin: 1em;
      .name, .created, .links, .options{
        width: 25%;
      }
    }
    .created_lists{
      border-radius: 10px;
      .list{
        display: flex;
        margin: 1em;
        .v-icon{
          color: map-get($cs , button);
          margin-right: 12px;
        }
        .name, .created, .links, .options{
          width: 25%;
        }
      }
      
    }

      span {
        color: map-get($cs, paragraph);
        font-size: 14px;
      }
  }
  .lists{
    .list{
      background-color: rgb(233, 231, 231);
      padding: 10px;
      border-radius: 10px;
    }
    @media (max-width: $md){
      display: none;
    }
  }
  .lists_mobile{
    @media (min-width: $md){
      display: none;
    }
  }
  @media (max-width: $md){
    .lists_mobile{
      flex-direction: row;
      justify-content: space-between;
      border-bottom: 1px solid black;
      .list_info{
        flex-direction: column;
        .name, .created, .links, .options{
          width: 100%;
        }
      }
      .created_lists{
        background-color: transparent;
        .list{
          flex-direction: column;
          .name, .created, .links, .options{
            width: 100%;
            text-align: end;
            .v-icon{
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
