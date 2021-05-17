<template>
  <div class="changelog box">
    <h1>Changelog</h1>

    <hr />

    <div class="log">
      <div class="iconDate">
        <v-icon>thumb_up</v-icon>
        <h2>05 apr.2021</h2>
      </div>
      <h1>Better sign up flow</h1>
      <p>
        A much cleaner and simpler sign up flow which makes it easy for you to
        create an account without having to verify with a Google Search Console
        account
      </p>
      <div class="category">UX</div>
    </div>

    <div class="button">
      <button class="viewOlder noDark">View Older</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";
.changelog {
  height: auto;
  width: 634px;
  background-color: map-get($cs, white1);
  margin-left: 90px;
  border-radius: 9px;
  box-shadow: 2px 2px 26px hsla(0, 0%, 0%, 0.16);
  position: relative;
  animation: bpprimary 25s infinite alternate-reverse;

  h1 {
    font-size: $big;
    font-weight: 300;
    padding: 30px 48px 8px 48px;
  }

  hr {
    width: 96%;
    margin: 0 auto;
  }

  .log {
    .iconDate {
      display: flex;
      margin-left: -20px;
      margin-top: 58px;
      .v-icon {
        padding: 7px;
        border-radius: 100%;
        background-color: #c3f2fb;
        color: #03acca;
      }

      h2 {
        font-weight: 300;
        padding: 0 15px;
        font-size: $medium2;
      }
    }

    h1 {
      padding: 0 30px;
      font-size: $medium2;
      font-weight: 700;
      margin-top: -10px;
    }

    p {
      padding: 8px 30px 0 30px;
      margin-bottom: 10px;
      color: map-get($cs, paragraph);
    }

    .category {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 28px;
      width: 50px;
      border-radius: 14px;
      margin: 0 30px 44px 30px;
      background-color: #c3f2fb;
      color: #03acca;
    }
  }

  .button {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    .viewOlder {
      margin: 0 28px 10px 0;
      height: 34px;
      width: 104px;
      font-size: $medium2;
      color: map-get($cs, white1);
      background-color: map-get($cs, button);
      border-radius: 25px;
    }
  }

  @media (max-width: $md) {
    margin: 0 14px 1em 14px;
    width: 310px;

    h1 {
      padding: 26px 24px 8px 24px;
    }

    .log {
      .iconDate {
        margin-top: 29px;
      }

      .category {
        margin: 0 30px 60px 30px;
      }
    }

    .button {
      width: 100%;
      .viewOlder {
        width: 100%;
        margin: 10px 28px;
      }
    }
  }

  @media (min-width: $md) and (max-width: $lg) {
    margin: 0 10px 0 25px;
  }
}
</style>