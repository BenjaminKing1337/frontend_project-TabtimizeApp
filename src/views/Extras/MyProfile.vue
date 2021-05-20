<template>
  <div class="my_profile_page">
    <div class="hello">
      <h1  class="noDark">Hello User</h1>
      <p  class="noDark">
        This is your profile page you can view and change your information here.
      </p>
    </div>

    <div class="myProfile">

      <div class="settingsProfile">
        <div class="editProfile box">

          <div class="top">
            <h1>Edit profile</h1>
            <v-btn class="noDark" depressed>Save</v-btn>
          </div>

          <hr />

          <h1>USER INFORMATION</h1>

          <div class="form">
            <v-form>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-text-field
                      label="Company name"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-text-field
                      label="Email address"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-text-field
                      label="First name"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-text-field
                      label="Last name"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-text-field
                      label="Business type"
                      outlined
                      dense
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                  >
                    <v-text-field
                      label="LinkedIn"
                      outlined
                      dense
                    ></v-text-field>

                  </v-col>

                  <hr width="100%">

                  <v-col
                    cols="12"
                    sm="12"
                  >
                    <v-textarea
                      label="About me"
                      auto-grow
                      rows="3"
                      outlined
                    ></v-textarea>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </div>
        </div>

        <div class="viewProfile box">

          <div class="userInfo">
            <img class="noDark"
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

      <div class="deleteProfile box">
        <div class="top">
          <h1>Delete profile</h1>
          <v-btn class="noDark" depressed>Delete</v-btn>
        </div>
        <hr>
        <v-form>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="12"
              >
                <v-text-field
                  label="Confirm your email"
                  outlined
                  dense
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>  
        </v-form>
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
  width: 100%;
  max-width: 1590px;
  margin: 40px auto 0 auto;
  h1,
  p {
    color: map-get($cs, white1);
    margin: 0;
  }
}
hr {
    border-top: 1px solid map-get($cs, white1);
  }

.myProfile {
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  .settingsProfile{
    display: flex;
  
    .editProfile {
      width: 60%;
      max-width: 1240px;
      height: auto;
      background-color: map-get($cs, white1);
      box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
      border-radius: 10px;
      margin-right: 30px;

      .top {
        display: flex;
        justify-content: space-between;
        padding: 30px;

        h1 {
          font-size: $medium2;
          font-weight: bold;
          padding: 0;
        }

        .v-btn {
          background-color: map-get($cs, button);
          color: map-get($cs, white1);
          font-size: $medium;
          height: 30px;
          width: 88px;
          border-radius: 30px;
          text-transform: capitalize;
        }
      }

      h1 {
        font-size: $medium;
        padding: 30px;
      }

      .form {
        height: auto;
        padding: 0 30px;
        display: flex;

        hr{
          margin-bottom: 17px;
        }
      }
    }
    .viewProfile {
      width: 40%;
      max-width: 825px;
      height: auto;
      max-height: 320px;
      background-color: map-get($cs, white1);
      box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
      border-radius: 10px;
      padding: 30px;

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
    @media (max-width: 1100px) {
      flex-direction: column-reverse;

      .editProfile {
        width: 100%;
        margin: 20px 0 20px 0;

        .top{
          padding: 20px;
        }
        .form{
          padding: 0 20px;
        }
      }
      .viewProfile {
        width: 100%;
        margin-top: 20px;
        padding: 15px;
      }
    }
    @media (max-width: $xl) {
      .editProfile {

        .top{
          padding: 20px;
        }
        .form{
          padding: 0 20px;
        }
      }
      .viewProfile {
        padding: 15px;
      }
    }
  }

  .deleteProfile{
    width: 100%;
    max-width: 1590px;
    height: 140px;
    background-color: map-get($cs, white1 );
    box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
    border-radius: 10px;
    padding: 30px;
    margin: 40px 0 0 0;
    .top {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;

      h1 {
        font-size: $medium2;
        font-weight: bold;
        padding: 0;
      }

      .v-btn {
        background-color: map-get($cs, button);
        color: map-get($cs, white1);
        font-size: $medium;
        height: 30px;
        width: 88px;
        border-radius: 30px;
        text-transform: capitalize;
      }
    }


    @media (max-width: 1100px){
      margin: 0 0 75px 0;
      padding: 20px;
      
    }
    @media (max-width: $xl){
      padding: 20px;
      
    }
  }
}


</style>