<template>
    <div class="changelog">
        <h1>Roadmap </h1>

        <hr>

        <div class="log">
            <div class="iconDate">
                <v-icon>thumb_up</v-icon>
                <h2>Q2 2021</h2>
            </div>
            <h1>Speed Improvements</h1>
            <p>Significant improvements to the loading speed of the app in general, but especially with the Link Opportunities feature.</p>
            <div class="category">UX</div>
        </div>

        <div class="button">
            <button class="viewOlder">View Older</button>
        </div>
        

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";
.changelog{
    height: auto;
    width: 634px;
    background-color: map-get($ColorScheme , white );
    margin: 0 90px;
    border-radius: 9px;
    box-shadow: 2px 2px 26px hsla(0, 0%, 0%, 0.16);

    h1{
        font-size: 26px;
        font-weight: 300;
        padding: 30px 48px 8px 48px;
    }

    hr{
        width: 96%;
        margin: 0 auto;
    }

    .log{
        .iconDate{
            display: flex;
            margin-left: -20px;
            margin-top: 58px;
            .v-icon{
                padding: 7px;
                border-radius: 100%;
                background-color: #C3F2FB;
                color: #03ACCA;
            }

            h2{
                font-weight: 300;
                padding: 0 15px;
                font-size: 18px;
            }
        }

        h1{
            padding: 0 30px;
            font-size: 22px;
            font-weight: 700;
            margin-top: -10px;
        }

        p{
            padding: 8px 30px 0 30px;
            margin-bottom: 10px;
            color: map-get($ColorScheme , paragraph );
        }

        .category{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 28px;
            width: 50px;
            border-radius: 14px;
            margin: 0 30px;
            background-color: #C3F2FB;
            color: #03ACCA;
        }
    }

    .button{
        display: flex;
        justify-content: flex-end;
        .viewOlder{
            margin: 0 28px 10px 0;
            height: 34px;
            width: 104px;
            font-size: 18px;
            color: map-get($ColorScheme , white );
            background-color: map-get($ColorScheme , button );
            border-radius: 25px;
        }
    }
}
</style>