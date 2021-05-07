<template>
  <div>
    <div class="main">
      <div class="top">
        <div class="info-box">
          <div class="info-top">
            <h4 class="info-title">ANALYSIS BALANCE</h4>
          </div>
          <div class="info-bot">
            <div class="icon">
              <v-icon class="balance">mdi-scale-balance</v-icon>
            </div>
            <div class="amount">
              <span>0 / 5 used</span>
            </div>
            <div class="more-button">
              <button class="get-more">Get more
                  <v-icon class="moar">mdi-menu-down</v-icon>
              </button>
            </div>
          </div>
        </div>
        <div class="info-box">
          <div class="info-top">
            <h4 class="info-title">REGISTERED PAGES</h4>
          </div>
          <div class="info-bot">
            <div class="icon">
              <v-icon class="clip">mdi-clipboard-text</v-icon>
            </div>
            <div class="amount">
              <span>0 / 8 registered</span>
            </div>
            <div class="more-button"></div>
          </div>
        </div>
        <div class="info-box">
          <div class="info-top">
            <h4 class="info-title">LINK REQUESTS</h4>
          </div>
          <div class="info-bot">
            <div class="icon">
              <v-icon class="external">mdi-open-in-new</v-icon>
            </div>
            <div class="amount">
              <span>0 / 8 reg.</span>
            </div>
            <div class="more-button">
                <button class="get-more">Get more
                    <v-icon class="moar">mdi-menu-down</v-icon>
                </button>
            </div>
          </div>
        </div>
      </div>

      <div class="mid">
         <div class="big-box">
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
                <button class="plan-button">Change Plan</button>
            </div>
         </div>
          <div class="big-box">
             <div class="big-title">
                 <h3>BILLING INFORMATION</h3>
             </div>
         </div>
          <div class="big-box">
             <div class="big-title">
                 <h3>PAYMENT METHOD</h3>
             </div>

             <div class="payment">
                <button class="payment-button">Add Payment Method</button>
            </div>
         </div>
      </div>

      <div class="bot">
          <div class="invoices">
              <div class="invoice-title">
                  <h4>Invoices</h4>
              </div>
              <hr>
              <div class="invoice-info">
                  <div class="date">
                      <span>Date</span>
                  </div>
                  <div class="number">
                      <span>Invoice Number</span>
                  </div>
                  <div class="amount">
                      <span>Amount</span>
                  </div>
                  <div class="status">
                      <span>Status</span>
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
  width: 80%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 2em;

  .bot {
      display: flex;
      margin: 0 auto;

      .invoices {
          width: 1200px;
           margin: -2em 2em 2em;
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
             justify-content: center;
             
             .date, .number, .amount, .status {
                 margin: 0em 6em;
             }
         }
      }
  }

  .mid {
      display: flex;
      margin: 0 auto;

      .big-box {
          background-color: white;
          box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
          width: 360px;
          height: 400px;
          padding: 2em;
          margin: -2em 2em 2em;
          border-radius: 10px;

          .block-text {
              margin-top: 2em;

              span {
                  color: map-get($ColorScheme, paragraph);
                  font-size: 14px;
              }
          }

          .big-title h3 {
              text-align: center;
          }

          .payment {
              margin-left: 8em;

              .payment-button {
                  background-color: map-get($ColorScheme, button);
                  color: white;
                  padding: .5em 1em;
                  border-radius: 30px;
                  font-size: 14px;
              }
          }

          .change-plan{
              margin-left: 11.5em;

              .plan-button {
                  background-color: map-get($ColorScheme, button);
                  color: white;
                  padding: .5em 1em;
                  border-radius: 30px;
                  font-size: 14px;
              }
          }
      }
  }

  .top {
      display: flex;
      margin: 0 auto;
      
      .info-box {
          width: 360px;
          padding: 2em;
          margin: 2em;
          border-radius: 10px;
          box-shadow: 0 0 20px rgba($color: #000000, $alpha: 0.2);
          flex-grow: 1;
          justify-content: center;
          height: 140px;
          background-color: white;

          button.get-more {
              background-color: map-get($ColorScheme, button);
              color: white;
              padding: .5em;
              border-radius: 30px;
              font-size: 14px;
          }

          .moar {
              color: white;
          }

          .amount {
              font-size: 12px;
              text-align: center;
              padding: .3em;
              font-weight: bold;
          }

          .info-top {
              display: flex;
              justify-content: center;
          }

          .info-bot {
              display: flex;
              justify-content: center;
              margin-top: -0.8em;

              .amount, .more-button {
                  margin: 2.5em 1em;
              }

              .icon {
                  margin: 2em 1em;
              }

              .icon .balance {
                  background-color: map-get($ColorScheme, button);
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
  }
}
</style>
