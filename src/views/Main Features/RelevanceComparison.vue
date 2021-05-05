<template>
  <div>
    <div class="main">
      <div class="top">
        <h2>Relevance Comparison</h2>
        <br />
        <span
          >Insert two URLs and see how relevant the two pages are to each
          other.</span
        >
      </div>
      <div class="mid">
        <div class="input">
          <label for="linkOne"><v-icon class="ico">mdi-link-variant</v-icon></label>
          <input type="text" id="linkone" name="linkone" />
        </div>
        <div class="vs">
            <span class="rc">VS</span> <br>
            <button class="compare">Compare</button>
        </div>
         <div class="input">
          <label for="linkTwo"><v-icon class="ico">mdi-link-variant</v-icon></label>
          <input type="text" id="linktwo" name="linktwo" />
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

.main {
  width: 1400px;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 4em;
  justify-content: center;

  .top {
    text-align: center;

    h2 {
      color: map-get($ColorScheme, white);
      font-size: 32px;
    }

    span {
      color: map-get($ColorScheme, white);
      font-size: 16px;
    }
  }

  .mid {
      width: 1200px;
      margin-top: -20em;
      height: 100px;
      display: flex;
      justify-content: center;
      text-align: center;     

      .vs {
          justify-content: center;
          text-align: center;          
          width: 30%;
          
          .rc {
              color: white;
              font-size: 24px;
              text-align: center;
          }

          button.compare {
              color: white;
              background-color: map-get($ColorScheme, button);
              padding: .5em 2em;
              border-radius: 20px;
              margin-top: 2em;
          }
      }

      .input {

          label {
              padding: 1em;
              
              .ico {
                  color: white;
              }
          }

          input[type=text] {
              border: 1px solid white;
              border-radius: 30px;
              padding: .5em 2em;
              color: white;
              text-align: center;
          }

          input[type=text]:focus {
              outline: none;
              font-size: 16px;
              color: white;
          }
      }
  }
}
</style>
