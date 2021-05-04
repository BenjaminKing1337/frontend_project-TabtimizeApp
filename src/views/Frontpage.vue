<template>
  <div>

    <div class="welcome">
      <h1>Welcome, User!</h1>
    </div>

    <div class="manual">
      <img src="@/assets/manual_left.png" alt="manual_left" />
      <img src="@/assets/arrow.png" alt="arrow" />
      <img src="@/assets/manual_center.png" alt="manual_center" />
      <img src="@/assets/arrow.png" alt="arrow" />
      <img src="@/assets/manual_right.png" alt="manual_right" />
    </div>

    <div class="helpGuides">
      <h1>Welcome to the Tabtimize beta</h1>
      <p>You can find help guides or learn more about our metrices by clicking the buttons below.</p>

      <div class="buttons">
        <button class="help_button">Help guides</button>
        <button class="learn_button"> Learn about our metrics</button>
      </div>
    </div>

    <div class="news">
      <Changelog/>
      <Roadmap/>
    </div>

  </div>
</template>

<script>
import Changelog from '../components/Containers/Changelog'
import Roadmap from '../components/Containers/Roadmap'

  export default {
    name: 'Frontpage',

    components: {
    Changelog,
    Roadmap
  },
  }
</script>
<style lang="scss">
  @import "./src/styles/styles.scss";
  .welcome{
    color: map-get($ColorScheme , white );
    display: flex;
    justify-content: center;
    padding-top: 80px;
    h1{
      font-size: 92px;
    }
  }

  .manual{
    height: 250px;
    width: 900px;
    margin: 160px auto 76px auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .helpGuides{
    padding: 0 110px;

    h1{
      font-size: 36px;
    }

    p{
      font-size: 16px;
      padding: 14px 0;
    }
    .buttons{
      .help_button, .learn_button{
        font-size: 18px;
        color: map-get($ColorScheme , hLink );
        font-weight: 500;
        background-color: map-get($ColorScheme , white );
        padding: 14px 20px;
        border-radius: 27px;
        box-shadow: 2px 5px 14px hsla(0, 0%, 0%, 0.16);
      }
      .learn_button{
        margin: 0 0 34px 18px;
      }
    }
  }

  .news{
    display: flex;
    margin-bottom: 100px;
  }

</style>