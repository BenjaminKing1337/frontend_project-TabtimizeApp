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
        <div class="comparison">
          <div class="input">
            <label for="linkOne"><v-icon class="ico">mdi-link-variant</v-icon></label>
            <input type="text" id="linkone" name="linkone">
          </div>
          <div class="vs">
              <span class="rc">VS</span> <br>
          </div>
          <div class="input">
            <label for="linkTwo"><v-icon class="ico">mdi-link-variant</v-icon></label>
            <input type="text" id="linktwo" name="linktwo" />
          </div>
        </div>
        <button class="compare">Compare</button>
      </div>
      
      <div class="bot">
        <h3>Comparison History</h3>
        <hr>
        
        <div class="lin">
          <div class="my">
            <span class="font-weight-medium">MY LINK</span>
            <span>www.pornhub.com</span>
          </div>
          <div class="comp">
            <span class="font-weight-medium">COMPARED LINK</span>
            <span>hahafunnylink.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    

};
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";

.main {
  margin: 0 auto;
  margin-top: 4em;

  .bot {
    min-width: 300px;
    max-width: 1200px;
    height: auto;
    background-color: white;
    margin: 140px auto 0 auto;
    box-shadow: 0 0 10px rgba($color: #000000, $alpha: .2);
    border-radius: 10px;

    .lin {
      display: flex;
      justify-content: space-evenly;
      
      .my, .comp {
        color: map-get($cs, paragraph);
        font-size: 14px;
        padding: 30px 0;
        display: flex;
        flex-direction: column;
        text-align: center;
      }
    }

    h3 {
      padding: 2em;
    }
    @media (max-width: $md){
      margin: 70px 1.4em 100px 1.4em;
        .lin{
          flex-direction: column;

          .my, .comp{
            padding: 15px 0;
          }
        }
    }
    @media (min-width: $md) and (max-width: $xl){
        margin: 140px 1.4em 100px 1.4em;
    }
    @media (min-width: 1440px) and (max-width:1580px){
        margin: 140px 1.4em 0 1.4em;
    }
  }

  .top {
    text-align: center;

    h2 {
      color: map-get($cs, white1);
      font-size: 32px;
    }

    span {
      color: map-get($cs, white1);
      font-size: 16px;
    }
  }

  .mid {
    margin-top: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;     
    .comparison{
      width: 900px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      padding: 0 20px;
      .vs {
          text-align: center;          
          width: 30%;
          
          .rc {
              color: map-get($cs, primary);
              font-size: 24px;
              text-align: center;
          }

      }

        .input {
           display: flex;
           align-items: center;
           position: relative;
            label {
                .ico {
                    color: map-get($cs, primary);
                    position: absolute;
                    left: 8px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }

            input[type=text] {
                border: 2px solid map-get($cs, primary);
                border-radius: 30px;
                padding: .5em 2em;
                color: white;
                text-align: center;
            }

            input[type=text]:focus {
                outline: none;
                font-size: 16px;
                color: map-get($cs, primary);
            }
        }
    }
    button.compare {
      color: white;
      background-color: map-get($cs, button);
      height: 35px;
      width: 100px;
      border-radius: 20px;
      margin-top: 2em;
    }
    @media (max-width: $md){
      margin-top: 70px;
      .comparison{
        flex-direction: column;
      }
    }
    @media (max-width: $lg){
      .comparison{
        width: 700px;
      }
    }
  }
}
</style>
