<template>
  <div class="frontpage">
    <div class="welcome">
      <h1 class="text">Welcome, User!</h1>
    </div>

    <div class="manual">
      <img src="@/assets/manual_left.png" alt="manual_left" />
      <img class="arrow" src="@/assets/arrow.png" alt="arrow" />
      <img src="@/assets/manual_center.png" alt="manual_center" />
      <img class="arrow" src="@/assets/arrow.png" alt="arrow" />
      <img src="@/assets/manual_right.png" alt="manual_right" />
    </div>

    <div class="helpGuides">
      <h1>Welcome to the Tabtimize beta</h1>
      <p>
        You can find help guides or learn more about our metrices by clicking
        the buttons below.
      </p>

      <div class="buttons">
        <v-btn class="help_button box">Help guides</v-btn>
        <v-btn class="learn_button box">Learn about our metrics</v-btn>
      </div>
    </div>

    <div class="news">
      <Changelog />
      <Roadmap />
    </div>
  </div>
</template>

<script>
import Changelog from "../components/Containers/Changelog";
import Roadmap from "../components/Containers/Roadmap";

export default {
  name: "Frontpage",

  components: {
    Changelog,
    Roadmap,
  },
};
</script>
<style lang="scss">
@import "./src/styles/styles.scss";
.frontpage{
  padding: 45px;
  @media (max-width: $sm) {
    padding: 20px;
  }
}

.welcome {
  color: map-get($cs, white1);
  display: flex;
  justify-content: center;
  padding-top: 80px;
  h1 {
    font-size: $biggest;
    @media (max-width: $md) {
      font-size: $bigger;
    }
  }
}

.manual {
  height: 250px;
  width: auto;
  max-width: 1000px;
  margin: 160px auto 76px auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: $sm) {
    flex-direction: column;
    height: auto;
    margin: 100px auto 38px auto;
    img {
      margin-bottom: 3em;
    }

    .arrow {
      display: none;
    }
  }
  @media (min-width: $sm) and (max-width: $md) {
    margin: 100px auto 38px auto;
    img {
      height: 180px;
    }

    .arrow {
      height: 8px;
    }
  }

  @media (min-width: $md) and (max-width: $lg) {
    img {
      height: 200px;
    }

    .arrow {
      height: 12px;
    }
  }
}

.helpGuides {
  width: 100%;
  max-width: 1590px;
  margin: 0 auto;
  h1 {
    font-size: $big2;
  }

  p {
    font-size: $medium;
    padding: 14px 0;
  }
  .buttons {
    width: 390px;
    margin-bottom: 34px;
    display: flex;
    justify-content: flex-start;
    .help_button,
    .learn_button {
      font-size: $medium;
      color: map-get($cs, hLink);
      font-weight: 500;
      background-color: map-get($cs, white1);
      padding: 14px 20px;
      border-radius: 27px;
      box-shadow: 2px 5px 14px hsla(0, 0%, 0%, 0.16);
      text-transform: capitalize;
    }
    .learn_button {
      margin-left: 10px;
    }
  }

  @media (max-width: $md) {
    padding: 0 25px;

    .buttons {
      flex-wrap: wrap;
      width: auto;
      max-width: 390px;
      .help_button,
      .learn_button {
        margin-bottom: 10px;
        margin-right: 10px;
        margin-left: 0;
      }
    }
  }
  @media (min-width: $md) and (max-width: $lg) {
    padding: 0 40px;
  }
}

.news {
  display: flex;
  width: 100%;
  max-width: 1590px;
  margin: 0 auto 100px auto; 


  @media (max-width: $md) {
    flex-wrap: wrap;
  }
}
</style>