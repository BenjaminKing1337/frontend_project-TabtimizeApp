<template>
    <div class="my_profile_page">
        <div class="hello">
            <h1>Hello User</h1>
            <p>This is your profile page you can view and change your information here.</p>
        </div>

        <div class="myProfile">
            <div class="editProfile"></div>
            <div class="viewProfile"></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";
.my_profile_page{
    padding: 45px;
    @media (max-width: $sm){
      padding: 20px;
    }
}

.hello{
    margin-top: 40px;
    h1,p{
        color: map-get($cs , white1 );
    }
}

.myProfile{
    width: 100%;
    height: auto;
    display: flex;
    .editProfile{
        width: 900px;
        height: 300px;
        background-color: map-get($cs, white1 );
        box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
        border-radius: 10px;
        margin-right: 30px;
    }
    .viewProfile{
        width: 500px;
        height: 300px;
        background-color: map-get($cs, white1 );
        box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
        border-radius: 10px;
    }

    @media (max-width: $md){
      flex-direction: column-reverse;

      .editProfile{
          width: 100%;
          margin: 20px 0;
      }
      .viewProfile{
          width: 100%;
      }
    }
}

</style>