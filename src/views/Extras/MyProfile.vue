<template>
  <div class="my_profile_page">
    <div class="hello">
      <h1>Hello User</h1>
      <p>
        This is your profile page you can view and change your information here.
      </p>
    </div>

    <div class="myProfile">
      <div class="editProfile">
        <div class="top">
          <h1>Edit profile</h1>
          <button>Save</button>
        </div>
        <hr />

        <h1>USER INFORMATION</h1>

        <div class="form"></div>
      </div>

      <div class="viewProfile">
        <div class="userInfo">
          <img
            src="https://i.pinimg.com/originals/83/7e/36/837e36aa503857cd3581bf726a5ba32e.jpg"
            alt="profile"
          />
          <div class="name">
            <h1>Jozko Stlp</h1>
            <p>Innovations IVS</p>
          </div>
          <v-icon large>mdi-linkedin</v-icon>
        </div>

        <div class="stats">
          <div class="site">
            <h2>4</h2>
            <p>site</p>
          </div>
          <div class="pages">
            <h2>0</h2>
            <p>Pages</p>
          </div>
          <div class="requests">
            <h2>0</h2>
            <p>Accepted requests</p>
          </div>
        </div>

        <div class="email">
          <h3>jozkostlp@gmail.com</h3>
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
.my_profile_page {
  padding: 45px;
  @media (max-width: $sm) {
    padding: 20px;
  }
}

.hello {
  margin-top: 40px;
  h1,
  p {
    color: map-get($cs, white1);
  }
}

.myProfile {
  width: 100%;
  height: auto;
  display: flex;
  margin-top: 40px;
  .editProfile {
    width: 900px;
    height: 400px;
    background-color: map-get($cs, white1);
    box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
    border-radius: 10px;
    margin-right: 30px;
    animation: bpprimary 25s infinite alternate-reverse;
    .top {
      display: flex;
      justify-content: space-between;
      padding: 30px;

      h1 {
        font-size: $medium2;
        font-weight: bold;
        padding: 0;
      }

      button {
        background-color: map-get($cs, button);
        color: map-get($cs, white1);
        font-size: $medium;
        height: 30px;
        width: 88px;
        border-radius: 30px;
      }
    }

    hr {
      border-top: 1px solid map-get($cs, white1);
    }

    h1 {
      font-size: $medium;
      padding: 30px;
    }

    .form {
      height: 200px;
      padding: 0 30px;
    }
  }
  .viewProfile {
    width: 500px;
    height: auto;
    max-height: 320px;
    background-color: map-get($cs, white1);
    box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
    border-radius: 10px;
    padding: 30px;
    animation: bpprimary 20s infinite alternate-reverse;

    .userInfo {
      display: flex;
      align-items: center;

      img {
        height: 80px;
        width: 80px;
        border-radius: 50px;
        background-color: map-get($cs, primary);
      }

      .name {
        margin: 0 20px;
        h1 {
          font-size: $medium2;
          font-weight: bold;
        }
        p {
          font-size: $medium;
          color: map-get($cs, paragraph);
          margin: -6px 0 0 0;
        }
      }

      .v-icon {
        color: #5e72e4;
        margin: -20px 0 0 -15px;
      }
    }

    .stats {
      margin-top: 20px;
      display: flex;
      justify-content: space-evenly;
      text-align: center;
      .pages {
        margin: 0 5px;
      }
      h2 {
        font-size: $medium2;
        font-weight: bold;
      }
      p {
        margin: 0;
      }
    }

    .email {
      margin-top: 40px;
      text-align: center;
      h3 {
        font-size: $medium;
      }
    }
  }

  @media (max-width: $md) {
    flex-direction: column-reverse;

    .editProfile {
      width: 100%;
      margin: 20px 0 70px 0;
    }
    .viewProfile {
      width: 100%;
      margin-top: 20px;
    }
  }
}
</style>