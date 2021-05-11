<template>
  <div>
    <div class="main">
        <div class="top">

            <div class="info-box box">
                <div class="info-top">
                    <h4 class="info-title">ANALYSIS BALANCE</h4>
                </div>
                <div class="info-bot">
                    <div class="icon">
                        <v-icon class="balance text">mdi-scale-balance</v-icon>
                    </div>
                    <div class="amount">
                        <span>0 / 5 used</span>
                    </div>
                    <div class="more-button">
                        <button class="get-more textBox"><p class="text">Get more</p>
                            <v-icon class="moar text">mdi-menu-down</v-icon>
                        </button>
                    </div>
                </div>
            </div>

            <div class="info-box box">
                <div class="info-top">
                    <h4 class="info-title">REGISTERED PAGES</h4>
                </div>
                <div class="info-bot">
                    <div class="icon">
                        <v-icon class="clip text">mdi-clipboard-text</v-icon>
                    </div>
                    <div class="amount">
                        <span>0 / 8 registered</span>
                    </div>
                    <div class="more-button"></div>
                </div>
            </div>

            <div class="info-box box">
                <div class="info-top">
                    <h4 class="info-title">LINK REQUESTS</h4>
                </div>
                <div class="info-bot">
                    <div class="icon noDark">
                        <v-icon class="external">mdi-open-in-new</v-icon>
                    </div>
                    <div class="amount">
                        <span>0 / 8 reg.</span>
                    </div>
                    <div class="more-button">
                        <button class="get-more text">Get more
                            <v-icon class="moar text">mdi-menu-down</v-icon>
                        </button>
                    </div>
                </div>
            </div>
        </div>

      <div class="mid">
         <div class="big-box box">
             <div class="big-title">
                 <h3>SUBSCRIPTION PLAN</h3>
             </div>
             <div class="block-text">
                 <span>CURRENT PLAN</span>
                 <h5>Free user</h5>
                 <br>
                  <span>MONTHLY ANALYSES</span>
                 <h5>5</h5>
                 <br>
                  <span>MONTHLY PRICE</span>
                 <h5>USD 0.00</h5>
                 <br>
                 <span>NEXT PAYMENT</span>
                 <h5>2021 / 03 / 03</h5>
             </div>
             <div class="change-plan">
                <button class="plan-button text">Change Plan</button>
            </div>
         </div>

          <div class="big-box box">
             <div class="big-title">
                 <h3>BILLING INFORMATION</h3>
             </div>
         </div>
         
          <div class="big-box box">
             <div class="big-title">
                 <h3>PAYMENT METHOD</h3>
             </div>

             <div class="payment">
                <button class="payment-button text">Add Payment Method</button>
            </div>
         </div>
      </div>

      <div class="bot">
          <div class="invoices box">
              <div class="invoice-title">
                  <h4>Invoices</h4>
              </div>
              <hr>
              <div class="invoice-info">
                  <div class="date">
                      <span class="font-weight-medium">Date</span>
                      <span>27.10.2020</span>
                  </div>
                  <div class="number">
                      <span class="font-weight-medium">Invoice Number</span>
                      <span>666</span>
                  </div>
                  <div class="amount">
                      <span class="font-weight-medium">Amount</span>
                      <span>400DKK</span>
                  </div>
                  <div class="status">
                      <span class="font-weight-medium">Status</span>
                      <span>Owned</span>
                  </div>
              </div>
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
  height: auto;
  margin-top: 2em;
  @media (max-width: $sm){
      
  }

  .bot {
      .invoices {
          min-width: 300px;
          max-width: 1150px;
          margin: 2em auto 2em auto;
          height: auto;
          background-color: white;
          box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
          padding: 2em;
          border-radius: 10px;

         hr {
             margin: 2em 0em 2em;
         }

         .invoice-info {
             display: flex;
             justify-content: space-around;
             
             .date, .number, .amount, .status {
                 display: flex;
                 flex-direction: column;
             }
         }
      }
    @media (max-width: $md){
        .invoices{
            margin: 2em 1.4em 7em 1.4em;

            .invoice-info{
                flex-direction: column;

                .date, .number, .amount, .status {
                 margin: 0;
                 flex-direction: row;
                 justify-content: space-between;
             }
            }
        }
    }
    @media (max-width: $xl){
        .invoices{
            margin: 2em 1.4em 7em 1.4em;
        }
    }
    @media (min-width: 1440px) and (max-width:1580px){
        .invoices{
            margin: 2em 1.4em 7em 1.4em;
        }
    }
  }

  .mid {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .big-box {
          background-color: white;
          box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
          width: 360px;
          min-width: 280px;
          height: 400px;
          padding: 2em;
          margin: 2em 1% 0 1% ;
          border-radius: 10px;

          .block-text {
              margin-top: 2em;

              span {
                  color: map-get($cs, paragraph);
                  font-size: $medium;
              }
          }

          .big-title h3 {
              text-align: center;
              margin-bottom: 10px;
          }

          .payment {
              display: flex;
              justify-content: flex-end;

              .payment-button {
                  background-color: map-get($cs, button);
                  color: white;
                  height: 38px;
                  width: 160px;
                  border-radius: 30px;
                  font-size: $small;
              }
          }

          .change-plan{
              display: flex;
              justify-content: flex-end;
              .plan-button {
                  background-color: map-get($cs, button);
                  color: white;
                  height: 38px;
                  width: 106px;
                  border-radius: 30px;
                  font-size: $small;
              }
          }
      }

        @media (max-width: $xl){
            .big-box{
                width: 320px;

            }
        }
    }

    .top {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
      
        .info-box {
            min-width: 360px;
            max-width: 380px;
            height: 140px;
            margin: 2em 1% 0 1% ;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background-color: white;

            .info-title{
                margin-bottom: 1em;
            }
            button.get-more {
                background-color: map-get($cs, button);
                color: white;
                height: 38px;
                width: 98px;
                border-radius: 30px;
                font-size: $small;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .moar {
                color: white;
            }

            .amount {
                font-size: $medium;
                text-align: center;
                padding: 0 .3em;
                font-weight: bold;
            }

            .info-bot {
                display: flex;
                align-items: center;

                .amount, .more-button {
                    margin: 0 1em;
                }

                .icon {
                    margin: 0 1em;
                }

                .icon .balance {
                    background-color: map-get($cs, button);
                    color: white;
                    padding: .5em;
                    border-radius: 100%;
                }

                .icon .clip {
                    background-color: green;
                    color: white;
                    padding: .5em;
                    border-radius: 100%;
                }

                .icon .external {
                    background-color: blue;
                    color: white;
                    padding: .5em;
                    border-radius: 100%;
                }
            }
        }
        @media (max-width: $sm){
            flex-direction: column;

            .info-box{
                margin: 2em auto 0 auto ;
            }
        }

    }
}
</style>
