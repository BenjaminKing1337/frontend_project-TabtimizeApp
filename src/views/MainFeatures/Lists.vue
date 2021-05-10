<template>
  <div>
    <div class="list-box">
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
            <span class="font-weight-medium">DAY CREATED</span>
          </div>
          <div class="links">
            <span class="font-weight-medium">LINK OPPORTUNITIES</span>
          </div>
          <div class="options">
            <span class="font-weight-medium">OPTIONS</span>
          </div>
        </div>

        <div class="created_lists">
          <div class="list">
            <div class="name">
              <span>My list</span>
            </div>
            <div class="created">
              <span>10.5.2021</span>
            </div>
            <div class="links">
              <span>2485</span>
            </div>
            <div class="options">
              <span>Need to make options</span>
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

.list-box {
  width: 90%;
  margin: 0 auto;
  height: auto;
  background-color: white;
  margin-top: 4em;
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
  }

  .lists {
    display: flex;
    flex-direction: column;
    .list_info{
      display: flex;
      .name, .created, .links, .options{
        width: 25%;
      }
    }
    .created_lists{
      background-color: rgb(214, 209, 209);
      .list{
        display: flex;
        .name, .created, .links, .options{
          width: 25%;
        }
      }
      
    }

      span {
        color: map-get($cs, paragraph);
        font-size: 14px;
      }
    @media (max-width: $md){
      flex-direction: row;
      justify-content: space-between;
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
