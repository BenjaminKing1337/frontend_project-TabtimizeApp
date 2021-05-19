<template>
  <div class="main">
    <h1>Billing and Usage</h1>
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
            <v-btn class="RedBtn flex vcenter shadow">
              <h5>Get More</h5>
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
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
            <v-btn class="RedBtn flex vcenter shadow">
              <h5>Get More</h5>
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </div>
        </div>
      </div>
      <!-- <div id="box3" class="topbox flexcol shadow">
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
            <v-btn class="RedBtn flex vcenter shadow">
              <h5>Get More</h5>
              <v-icon>mdi-menu-down</v-icon>
            </v-btn>
          </div>
        </div>
      </div> -->
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
          <v-btn class="RedBtn">
            <h5>Change Plan</h5>
          </v-btn>
        </div>
      </div>
      <div id="Billing" class="midbox flexcol shadow">
        <div id="title">
          <h2>Billing Information</h2>
        </div>
        <div id="textbox">
          <div class="section">
            <h3>Billing Email</h3>
            <h4>jbs@tabtimize.com</h4>
          </div>
          <div class="section">
            <h3>Company</h3>
            <h4>JJS Innovations IVS</h4>
          </div>
          <div class="section">
            <h3>ADDRESS</h3>
            <h4>JJS Innovations IVS</h4>
          </div>
        </div>
        <div class="botBtn">
          <v-btn class="RedBtn">
            <h5>Change Info</h5>
          </v-btn>
        </div>
      </div>
      <div id="Payment" class="midbox flexcol shadow">
        <div id="title">
          <h2>Payment Method</h2>
        </div>
        <div id="textbox">
          <div class="creditCard">
            <div class="section">
              <h3>Card Number</h3>
              <h4>visa - 4242</h4>
            </div>
            <div class="section">
              <h3>Expiration Date</h3>
              <h4>4/2069</h4>
            </div>
            <div class="section">
              <span class="activeCard">active</span>
            </div>
          </div>
        </div>
        <div class="botBtn">
          <v-btn class="RedBtn">
            <h5>Add Payment Method</h5>
          </v-btn>
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
          <div class="titles">
            <div class="section"><span class="font-weight-bold">Date</span></div>
            <div class="section"><span class="font-weight-bold">Invoice Nr.</span></div>
            <div class="section"><span class="font-weight-bold">Amount</span></div>
            <div class="section"><span class="font-weight-bold">Status</span></div>
          </div>
          <div class="invoice flexcol" v-for="invoice in invoices" :key="invoice">
            <div class="section">
              <span>{{invoice.date}}</span>
            </div>
            <div class="section">
              <span>{{invoice.number}}</span>
            </div>
            <div class="section">
              <span>{{invoice.amount}}</span>
            </div>
            <div class="section">
              <span>{{invoice.status}}</span>
            </div>
          </div>
        </div>

        <div class="table_mobile">
          <div class="invoice" v-for="invoice in invoices" :key="invoice">
            <div class="section">
              <span class="font-weight-medium">Date</span>
              <span>{{invoice.date}}</span>
            </div>
            <div class="section">
              <span class="font-weight-medium">Invoice Nr.</span>
              <span>{{invoice.number}}</span>
            </div>
            <div class="section">
              <span class="font-weight-medium">Amount</span>
              <span>{{invoice.amount}}</span>
            </div>
            <div class="section">
              <span class="font-weight-medium">Status</span>
              <span>{{invoice.status}}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      invoices: [
        {date: "10.5.2021", number: "2519", amount: "400DKK", status:"Owned" },
        {date: "11.5.2021", number: "2520", amount: "400DKK", status:"Owned" },
        {date: "15.5.2021", number: "2521", amount: "600DKK", status:"Owned" },
        {date: "20.5.2021", number: "2522", amount: "400DKK", status:"Owned" },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./src/styles/styles.scss";

.main {
  padding: 45px;
  @media (max-width: $sm) {
    padding: 20px;
  }

  h1 {
    color: map-get($cs, white1);
    text-align: start;
    width: 100%;
    max-width: 1590px;
    margin: 40px auto 0 auto;
  }
  #top {
    width: 100%;
    max-width: 1590px;
    margin: 2% auto;
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
      animation: bpbutton 23s infinite alternate-reverse;
      #analysisicon {
        background: linear-gradient(
          map-get($cs, button),
          map-get($cs, white1) 99%
        );
      }
    }
    #box2 {
      margin-left: 2%;
      animation: bpaccept 18s infinite alternate-reverse;
      #registeredicon {
        background: linear-gradient(
          map-get($cs, accept),
          map-get($cs, white1) 99%
        );
      }
      @media (max-width: $md) {
        margin-left: 0;
      }
    }
    #box3 {
      animation: bppurple 29s infinite alternate-reverse;
      #linkicon {
        background: linear-gradient(
          map-get($cs, purple1),
          map-get($cs, white1) 99%
        );
      }
    }
    .topbox {
      flex-grow: 1;
      min-width: 100%;
      max-width: 100%;
      max-height: 50%;
      padding: 15px;
      border-radius: 5px;
      background-color: map-get($cs, white1);
      @media (max-width: $md) {
        margin: 2% 0;
      }
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
    max-width: 1590px;
    margin: 0 auto 2% auto;
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
    #Subscription {
      animation: bpprimary 26s infinite alternate-reverse;
    }
    #Billing {
      animation: bpprimary 31s infinite alternate-reverse;
      margin: 0 2%;
    }
    #Payment {
      animation: bpprimary 19s infinite alternate-reverse;
    }
    .midbox {
      flex-grow: 1;
      min-width: 100%;
      max-width: 100%;
      min-height: 350px;
      padding: 15px;
      border-radius: 5px;
      background-color: map-get($cs, white1);
      position: relative;
      justify-content: space-between;
      @media (max-width: $md) {
        margin: 4% 0;
      }
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
    max-width: 1590px;
    margin: 0 auto 75px auto;
    #invoicebox {
      min-width: 100%;
      max-width: 100%;
      border-radius: 5px;
      background-color: map-get($cs, white1);
      padding-top: 30px;
      margin-left: 20%;
      margin-right: 20%;
      animation: bpprimary 20s infinite alternate-reverse;

      .line {
        width: 90%;
        margin: 3%;
        background-color: lightgray !important;
      }
      #table {
        width: 100%;
        padding: 0 40px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        @media (max-width: 699px) {
            display: none;
        }

        .titles{
          display: flex;
          justify-content: flex-start;
          width: 100%;

          .section{
            width: 25%;
            margin: 0 10px;
            font-size: $medium;
          }
        }

        .invoice {
          justify-content: flex-start;
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 10px;
          background-color: rgb(233, 231, 231);
          .section {
            margin: 0 10px;
            width: 25%;
            font-size: $medium;
          }
          @media (min-width: $md) {
            display: flex;
            flex-direction: row;
          }
        }
      }

      .table_mobile{
        @media (min-width: 700px) {
            display: none;
        }
        width: 100%;
        padding: 0 15px;

        .invoice {
          padding: 10px;
          margin-bottom: 10px;
          border-radius: 10px;
          background-color: rgb(233, 231, 231);
          .section {
            margin: 0 10px;
            display: flex;
            justify-content: space-between;
            font-size: $small;
          }
        }
        
      }
    }
  }
  @media (min-width: $sm) {
    #bot {
      #invoicebox {
        #table {
          .invoice {
            flex-direction: row;
            width: 100%;
          }
        }
      }
    }
  }
  @media (min-width: $md) {
    .maxw {
      max-width: 250px;
    }
    #top {
      justify-content: space-between !important;
      flex-wrap: nowrap !important;
      .topbox {
        max-width: unset;
        min-width: unset;
        white-space: nowrap;
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

.creditCard {
  width: 80%;
  box-shadow: 0 0 10px rgba($color: #000000, $alpha: .2);
  padding: 1em;
  border-radius: 15px;
  
  .activeCard {
    background-color: rgba($color: #bbffaa, $alpha: 1.0);
    padding-left: .5em;
     padding-right: .5em;
     padding-top: .3em;
     padding-bottom: .3em;
    border-radius: 15px;
  }
}
</style>
