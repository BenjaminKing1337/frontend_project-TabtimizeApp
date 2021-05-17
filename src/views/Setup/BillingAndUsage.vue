<template>
  <div class="main flexcol vcenter">
    <div id="top" class="flex spaceBetween">
      <div id="box1" class="topbox flexcol shadow">
        <div class="topboxtop dispflexcenter">
          <h2>Analysis Balance</h2>
        </div>
        <div class="topboxbot flex spaceAround">
          <div id="analysisicon" class="icon dispflexcenter shadow">
            <v-icon>mdi-scale-balance</v-icon>
          </div>
          <div class="value">
            <h3>0 / 5</h3>
            <h4>Registered</h4>
          </div>
          <div class="topBtn">
            <button class="RedBtn flex vcenter shadow">
              <h5>Get More</h5>
              <v-icon>mdi-menu-down</v-icon>
            </button>
          </div>
        </div>
      </div>
      <div id="box2" class="topbox flexcol shadow">
        <div class="topboxtop dispflexcenter">
          <h2>Registered Pages</h2>
        </div>
        <div class="topboxbot flex spaceAround">
          <div id="registeredicon" class="icon dispflexcenter shadow">
            <v-icon>mdi-clipboard-text</v-icon>
          </div>
          <div class="value">
            <h3>0 / 8</h3>
            <h4>Registered</h4>
          </div>
          <div class="topBtn">
            <button class="RedBtn flex vcenter shadow">
              <h5>Get More</h5>
              <v-icon>mdi-menu-down</v-icon>
            </button>
          </div>
        </div>
      </div>
      <div id="box3" class="topbox flexcol shadow">
        <div class="topboxtop dispflexcenter">
          <h2>Link Requests</h2>
        </div>
        <div class="topboxbot flex spaceAround">
          <div id="linkicon" class="icon dispflexcenter shadow">
            <v-icon>mdi-open-in-new</v-icon>
          </div>
          <div class="value">
            <h3>0 / 8</h3>
            <h4>Registered</h4>
          </div>
          <div class="topBtn">
            <button class="RedBtn flex vcenter shadow">
              <h5>Get More</h5>
              <v-icon>mdi-menu-down</v-icon>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div id="mid" class="flexcol vcenter">
      <div id="Subscription" class="midbox flexcol shadow">
        <div id="title">
          <h2>Subscription Plan</h2>
        </div>
        <div id="textbox">
          <div class="section">
            <h3>Current Plan</h3>
            <h4>Free User</h4>
          </div>
          <div class="section">
            <h3>Monthly Analysis</h3>
            <h4>5</h4>
          </div>
          <div class="section">
            <h3>Monthly Price</h3>
            <h4>USD 0.00</h4>
          </div>
          <div class="section">
            <h3>Next Payment</h3>
            <h4>2021 / 03 / 03</h4>
          </div>
        </div>
        <div class="botBtn">
          <button class="RedBtn">
            <h5>Change Plan</h5>
          </button>
        </div>
      </div>
      <div id="Billing" class="midbox flexcol shadow">
        <div id="title">
          <h2>Billing Information</h2>
        </div>
        <div id="textbox"></div>
        <div class="botBtn">
          <button>
            <h5 class="RedBtn">Change Info</h5>
          </button>
        </div>
      </div>
      <div id="Payment" class="midbox flexcol shadow">
        <div id="title">
          <h2>Payment Method</h2>
        </div>
        <div id="textbox"></div>
        <div class="botBtn">
          <button>
            <h5 class="RedBtn">Add Payment Method</h5>
          </button>
        </div>
      </div>
    </div>
    <div id="bot" class="flex center">
      <div id="invoicebox" class="flexcol vcenter shadow">
        <div id="title" class="flex center">
          <h2>Invoices</h2>
        </div>
        <div class="line" />
        <div id="table">
          <div class="invoice flexcol shadow">
            <div class="section">
              <h3>Date</h3>
              <h4>27.10.2020</h4>
            </div>
            <div class="section">
              <h3>Invoice Number</h3>
              <h4>666</h4>
            </div>
            <div class="section">
              <h3>Amount</h3>
              <h4>400DKK</h4>
            </div>
            <div class="section">
              <h3>Status</h3>
              <h4>Owned</h4>
            </div>
          </div>
          <div class="invoice flexcol shadow">
            <div class="section">
              <h3>Date</h3>
              <h4>27.10.2020</h4>
            </div>
            <div class="section">
              <h3>Invoice Number</h3>
              <h4>666</h4>
            </div>
            <div class="section">
              <h3>Amount</h3>
              <h4>400DKK</h4>
            </div>
            <div class="section">
              <h3>Status</h3>
              <h4>Owned</h4>
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
  margin-top: 50px;
  padding-top: 50px;
  margin-bottom: 100px;
  min-height: 100vh;
  box-sizing: border-box;
  padding-left: 5%;
  padding-right: 5%;

  #top {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    h2 {
      font-size: $small;
    }
    h3 {
      font-size: $small;
    }
    h4 {
      font-size: $smaller;
    }
    h5 {
      font-size: $smaller;
    }
    #box1 {
      border-bottom: 2px solid map-get($cs, button);
      #analysisicon {
        background: linear-gradient(
          map-get($cs, button),
          map-get($cs, white1) 99%
        );
      }
    }
    #box2 {
      border-bottom: 2px solid map-get($cs, accept);
      #registeredicon {
        background: linear-gradient(
          map-get($cs, accept),
          map-get($cs, white1) 99%
        );
      }
    }
    #box3 {
      border-bottom: 2px solid map-get($cs, primary);
      #linkicon {
        background: linear-gradient(
          map-get($cs, primary),
          map-get($cs, white1) 99%
        );
      }
    }
    .topbox {
      flex-grow: 1 !important;
      min-width: 100%;
      max-width: 100%;
      margin: 2%;
      margin-left: 0px;
      padding: 15px;
      border-radius: 5px;
      background-color: map-get($cs, white1);
      .topboxtop {
        margin: 10px;
      }
      .topboxbot {
        position: relative;

        .icon {
          top: -70px;
          left: -20px;
          position: absolute;
          height: 60px;
          width: 60px;
          border-radius: 100%;
          @media (min-width: $sm) {
            left: -30px;
          }
        }
        .topBtn {
          position: absolute;
          right: 0 !important;
          .v-icon {
            color: map-get($cs, white1);
          }
        }
      }
    }
  }
  #mid {
    width: 100%;
    h2 {
      font-size: $big;
    }
    h3 {
      font-size: $medium;
    }
    h4 {
      font-size: $smaller;
    }
    h5 {
      font-size: $small;
    }
    .midbox {
      flex-grow: 1;
      min-width: 100%;
      max-width: 100%;
      min-height: 350px;
      margin: 2%;
      padding: 15px;
      border-radius: 5px;
      background-color: map-get($cs, white1);
      position: relative;
      justify-content: space-between;

      #title {
        display: flex;
        justify-content: center;
      }
      #textbox {
        padding: 10px;
        .section {
          margin: 10px 0;
        }
      }
      .botBtn {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
  #bot {
    width: 100%;

    #invoicebox {
      min-width: 100%;
      max-width: 100%;
      border-radius: 5px;
      background-color: map-get($cs, white1);
      padding: 15px;
      margin-left: 20%;
      margin-right: 20%;

      .line {
        width: 90%;
      }
      #table {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;

        .invoice {
          justify-content: space-between;
          border-radius: 5px;
          .section {
            margin: 10px;
            h3 {
              font-size: $small;
            }
            h4 {
              font-size: $smaller;
            }
          }
          @media (min-width: $md) {
            display: flex;
            flex-direction: row;
          }
        }
      }
    }
  }
  @media (min-width: $sm) {
    padding-left: 15%;
    padding-right: 15%;
    #bot {
      #invoicebox {
        #table {
          .invoice {
            flex-direction: row;
            flex-wrap: nowrap;
            width: 100%;
          }
        }
      }
    }
  }
  @media (min-width: $md) {
    padding-left: 5%;
    padding-right: 5%;
    #top {
      justify-content: space-between !important;
      flex-wrap: nowrap !important;
      .topbox {
        max-width: unset;
        min-width: unset;
        white-space: nowrap;
        margin-left: 2% !important;
        h2 {
          margin-left: 10px;
          margin-top: 20px;
        }
        .topboxbot {
          justify-content: space-between;
          .icon {
            top: -90px !important;
          }
        }
      }
    }
    #mid {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      h2 {
        font-size: $medium2;
      }
      h3 {
        font-size: $small;
      }
      h4 {
        font-size: $smallest;
      }
      h5 {
        font-size: $smaller;
      }
      .midbox {
        min-width: auto;
      }
    }
    #bot {
      padding: 2%;
      #invoicebox {
        #table {
          flex-direction: column;
          flex-wrap: nowrap;
        }
      }
    }
    .RedBtn {
      transform: scale(0.8);
    }
  }
}
</style>
