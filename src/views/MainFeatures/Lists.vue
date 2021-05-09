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
      <div class="list-info">
        <div class="name">
          <span>NAME</span>
        </div>
        <div class="created">
          <span>DAY CREATED</span>
        </div>
        <div class="links">
          <span>LINK OPPORTUNITIES</span>
        </div>
        <div class="options">
          <span>OPTIONS</span>
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
  width: 80%;
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

  .list-info {
    display: flex;
    justify-content: center;

    .name,
    .created,
    .links,
    .options {
      margin: 0em 6em;

      span {
        color: map-get($ColorScheme, paragraph);
        font-size: 14px;
      }
    }
  }
}
</style>
