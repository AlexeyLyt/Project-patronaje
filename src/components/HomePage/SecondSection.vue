<template>
  <div class="second-section">
    <div class="box-ribbon">
        <!-- <div class="background-container">
            <div class="grid"></div>
        </div> -->
        <div class="ribbon-container">
            <div class="grid">
                <div class="ribbon outline"></div>
                <div class="ribbon yellow6"></div>
                <div class="ribbon blue4"></div>
                <div class="ribbon slate2 outline"></div>
                
                <div class="ribbon slate8"></div>
                <div class="ribbon blue4"></div>
                <div class="ribbon blue6"></div>
                <div class="ribbon slate2"></div>
                <div class="ribbon slate2 outline shift-up"></div>
            </div>
        </div>
    </div>
    <b-container class="container-lg" lg>
        <header>
            <h2>A deep dive into the Payments stack</h2>
        </header>
        <div class="uslugi-table dark">
            <div class="column">
                <div class="header">
                    <h3>
                        <a href="">Accept</a>
                    </h3>
                </div>
                <ul class="content compressed">
                    <li class="group-header">
                        <h4>
                            <a href="">Customer interfaces</a>
                        </h4>
                    </li>
                    <li><a href="">Smart payment page</a></li>
                    <li><a href="">Custom UI toolkit</a></li>
                    <li><a href="">Clean canvas</a></li>
                    <li><a href="">In-person payments</a></li>
                    <li><a href="">Invoicing</a></li>
                    <li><a href="">Open-source plug-ins</a></li>
                    <li class="group-header">
                        <h4>
                            <a href="">Payment options</a>
                        </h4>
                    </li>
                    <li><a href="">Cards</a></li>
                    <li><a href="">Wallets</a></li>
                    <li><a href="">Local payment methods</a></li>
                    <li><a href="">Currencies</a></li>
                    <li><a href="">Subsidiary support</a></li>
                    <li class="group-header">
                        <h4>
                            <a href="">Mobile</a>
                        </h4>
                    </li>
                    <li><a href="">iOS & Android SDK</a></li>
                    <li><a href="">Mobile customer interfaces</a></li>
                    <li><a href="">Mobile web</a></li>
                </ul>
            </div>
            <div class="column">
                <div class="header">
                    <h3>
                        <a href="">Process</a>
                    </h3>
                </div>
                <ul class="content">
                     <li class="group-header">
                        <h4>
                            <a href="">Revenue optimization</a>
                        </h4>
                    </li>
                    <li><a href="">Authentication</a></li>
                    <li><a href="">Authorization</a></li>
                    <li class="group-header">
                        <h4>
                            <a href="">Fraud and disputes</a>
                        </h4>
                    </li>
                    <li><a href="">Stripe Radar</a></li>
                    <li><a href="">Dynamic 3D Secure</a></li>
                    <li><a href="">Dispute handling</a></li>
                </ul>
            </div>
            <div class="column">
                <div class="header">
                    <h3>
                        <a href="">Settle and Reconcile</a>
                    </h3>
                </div>
                <ul class="content">
                    <li class="group-header">
                        <h4>
                            <a href="">Reconciliation</a>
                        </h4>
                    </li>
                    <li><a href="">Financial reporting</a></li>
                    <li><a href="">Consolidated reports</a></li>
                    <li><a href="">Accounting support</a></li>
                    <li class="group-header">
                        <h4>
                            <a href="">Payouts</a>
                        </h4>
                    </li>
                    <li><a href="">Unified payouts</a></li>
                    <li><a href="">Multicurrency payouts</a></li>
                    <li><a href="">Payout management</a></li>
                    <li><a href="">Instant payouts</a></li>
                    <li><a href="">Connect payouts</a></li>
                </ul>
            </div>
            <div class="column">
                <div class="header">
                    <h3>
                        <a href="">MANAGE</a>
                    </h3>
                </div>
                <ul class="content">
                    <li class="group-header">
                        <h4>
                            <a href="">Reporting & insights</a>
                        </h4>
                    </li>
                    <li><a href="">Stripe Sigma</a></li>
                    <li><a href="">Stripe Dashboard</a></li>
                    <li><a href="">Dashboard mobile app</a></li>
                    <li class="group-header">
                        <h4>
                            <a href="">Business operations</a>
                        </h4>
                    </li>
                    <li><a href="">Roles and permissions</a></li>
                    <li><a href="">Account security</a></li>
                    <li><a href="">Collaboration notes</a></li>
                    <li class="group-header">
                        <h4>
                            <a href="">Third-party integrations & Support</a>
                        </h4>
                    </li>
                    <li><a href="">Works with Stripe</a></li>
                    <li><a href="">24×7 email, chat, and phone support</a></li>
                </ul>
            </div>
        </div>
        <footer>
            <p>
                <a href="" class="link-all-uslugi">See all features<i class="fas fa-arrow-right"></i></a>
            </p>
        </footer>
    </b-container>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  components: {},
  data() {
    return {

    };
  },
  methods: {
      
  },
  created() {
    //   setInterval(function(){ 
    //     console.log(1);
    // }, 1000);
  }
};
</script>

<style lang="scss">
.second-section {
    position: relative;
    padding: 130px 0 100px;
    background: linear-gradient(180deg,transparent 50%,#32325d 0);
    z-index: 1;
      &::before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 0;
      top: 0;
      right: 0;
      bottom: 325px;
      background: #32325d;
      transform: skewY(-12deg);
    }
    .box-ribbon {
        --stripe-height: 48px;
        --content-columns: 12;
        --gutter-columns: 4;
        position: absolute;
        width: 100%;
        top: calc(var(--stripe-height) * -3);
        // top: 0;
        bottom: 0;
        z-index: -1;
        pointer-events: none;
        @media (min-width: 670px) {
            --stripe-height: 64px;
        }
        // .background-container {
        //     display: -webkit-box;
        //     display: -ms-flexbox;
        //     display: flex;
        //     -webkit-box-orient: vertical;
        //     -webkit-box-direction: normal;
        //     -ms-flex-direction: column;
        //     flex-direction: column;
        //     -webkit-box-align: center;
        //     -ms-flex-align: center;
        //     align-items: center;
        //     position: absolute;
        //     width: 100%;
        //     height: 100%;
        //     -webkit-transform: skewY(-12deg);
        //     transform: skewY(-12deg);
        // }
        .ribbon-container {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            -ms-flex-direction: column;
            flex-direction: column;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
            position: absolute;
            width: 100%;
            height: 100%;
            -webkit-transform: skewY(-12deg);
            transform: skewY(-12deg);
            overflow: hidden;
            .grid {
                --content-column-width: minmax(0,calc(1040px / var(--content-columns)));
                --gutter-column-width: 1fr;
                position: absolute;
                width: 100%;
                height: 100%;
                display: grid;
                grid-template-rows: repeat(auto-fill,var(--stripe-height));
                grid-template-columns: [viewport-start] 1fr [left-gutter-start] repeat(var(--gutter-columns),var(--gutter-column-width)) [left-gutter-end content-start] repeat(var(--content-columns),var(--content-column-width)) [content-end right-gutter-start] repeat(var(--gutter-columns),var(--gutter-column-width)) [right-gutter-end] 1fr [viewport-end];
                height: auto;
                grid-template-rows: repeat(7,var(--stripe-height));
                @media (min-width: 1040px) {
                    --gutter-column-width: var(--content-column-width);
                    min-width: calc(1040px / var(--content-columns) * (var(--gutter-columns) * 2 + var(--content-columns)));
                }
                .ribbon:first-child {
                    grid-row-start: 1;
                    grid-column: 3/5;
                }
                .ribbon:nth-child(2) {
                    grid-row-start: 3;
                    grid-column: left-gutter/content-start;
                    background: #fcd669;
                }
                .ribbon:nth-child(3) {
                    grid-row-start: 4;
                    grid-column: viewport-start/5;
                    background: #6772e5;
                }
                .ribbon:nth-child(4) {
                    grid-row-start: 6;
                    grid-column: left-gutter/4;
                    background: #6772e5;
                }
                .ribbon:nth-child(5) {
                    grid-row-start: 3;
                    grid-column: -6/-3;
                    background: #e6ebf1;
                }
                .ribbon:nth-child(6) {
                    grid-row-start: 4;
                    grid-column: -8/-5;
                    background: #6772e5;
                }
                .ribbon:nth-child(7) {
                    grid-row-start: 4;
                    grid-column: -5/viewport-end;
                    background: #87bbfd;
                }
                .ribbon:nth-child(8) {
                    grid-row-start: 6;
                    grid-column: -5/-3;
                    background: #525f7f;
                }
                .ribbon:nth-child(9) {
                    grid-row-start: 7;
                    grid-column: -4/right-gutter;
                    transform: translateY(-2px);
                }
                .ribbon.outline {
                    background: none!important;
                    box-shadow: inset 0 0 0 2px #e6ebf1;
                    z-index: -1;
                    margin: 0 -2px;
                    @media (min-width: 670px) {
                        margin: 0;
                    }
                }
                .ribbon.outline.slate2 {
                    box-shadow: inset 0 0 0 2px #424770;
                }
            }
        }
        
    }
    .container-lg {
        header {
            margin-bottom: 60px;
            max-width: 450px;
            margin-left: auto;
            h2 {
                color: #fff;
                font-size: 34px;
                line-height: 44px;
                @media (min-width: 670px) {
                    font-size: 42px;
                    line-height: 52px;
                }
            }
            @media (min-width: 670px) {
                text-align: right;
            }
        }
        .uslugi-table {
            display: grid;
            grid-gap: 10px;
            padding: 10px;
            margin: 0 -10px;
            border-radius: 8px;
            background: #e6ebf1;
            text-align: center;
            @media (min-width: 420px) {
                grid-template-columns: repeat(2,1fr);
            }
            @media (min-width: 670px) {
                grid-template-columns: repeat(4,1fr);
            }
            .column:first-child .header {
                background-color: #43458b;
                &:before {
                    background: #43458b !important;
                }
            }
            .column:nth-child(2) .header {
                background-color: #555abf;
                &:before {
                    background: #555abf !important;
                }
            }
            .column:nth-child(3) .header {
                background-color: #6772e5;
                &:before {
                    background: #6772e5 !important;
                }
            }
            .column:nth-child(4) .header {
                background-color: #7795f8;
            }
            .column:not(:first-child) .header {
                // background: black !important;
                &:after {
                    content: "";
                    position: absolute;
                    left: -7px;
                    /* top: calc(50% - 8px); */
                    top: 3px;
                    bottom: 0;
                    margin: auto;
                    transform: rotate(45deg);
                    width: 15px;
                    height: 15px;
                    background: #2d2d54;
                }
            }
            .column:not(:last-child) .header {
                &:before {
                    content: "";
                    position: absolute;
                    /* left: -17px; */
                    right: -7px;
                    z-index: 1;
                    /* top: calc(50% - 8px); */
                    top: 3px;
                    bottom: 0;
                    margin: auto;
                    -webkit-transform: rotate(45deg);
                    transform: rotate(45deg);
                    width: 15px;
                    height: 15px;
                    background: #7795f8;
                }
            }
            .column {
                .header {
                    border-radius: 4px;
                    box-shadow: 0 6px 12px -2px rgba(50,50,93,.25), 0 3px 7px -3px rgba(0,0,0,.3);
                    margin-bottom: 10px;
                    position: relative;
                    h3 {
                        line-height: 22px;
                        color: #fff;
                        font-size: 17px;
                        font-weight: 600;
                        text-transform: uppercase;
                        letter-spacing: .025em;
                        a {
                            height: 70px;
                            font-size: 16px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            padding: 15px;
                            color: #fff;
                            transition: color .15s;
                            text-decoration: none;
                            @media (min-width: 880px) {
                                padding: 0 40px;
                            }
                            &:hover {
                                color: #c4f0ff;
                            }
                        }
                    }
                }
                .content {
                    border-radius: 4px;
                    // box-shadow: 0 2px 5px -1px rgba(50,50,93,.25), 0 1px 3px -1px rgba(0,0,0,.3);
                    // background: #fff;
                    padding: 4px 0 12px;
                    font-size: 15px;
                    line-height: 22px;
                    // color: #6772e5;
                    box-shadow: 0 1px 3px rgba(0,0,0,.2), 0 1px 0 rgba(0,0,0,.04);
                    background: #3a3c66;
                    color: #aab7c4;
                    margin-bottom: 0;
                    .group-header {
                        padding-top: 8px;
                        border-color: #32325d;
                        color: #fff;
                        h4 {
                            font-size: 17px;
                            font-weight: 500;
                            margin-bottom: 0;
                            // text-decoration: underline;
                        }
                    }
                    a {
                        display: block;
                        padding: 4px 10px;
                        color: inherit;
                        transition: color .15s;
                        &:hover {
                            color: #fff;
                            text-decoration: none;
                        }
                    }
                }
                .content.compressed li:not(.group-header) a {
                    padding: 2px 10px;
                }
                .content .group-header:not(:first-child) {
                    border-top: 2px solid #32325d;
                    margin-top: 8px;
                }
            }
        }
        .uslugi-table.dark {
            background: #2d2d54;
        }
    }
    footer {
        text-align: center;
        margin-top: 40px;
        p {
            .link-all-uslugi {
                font-size: 20px;
                line-height: 32px;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: .025em;
                color: #fff;
                transition: color .1s ease;
                &:hover {
                    text-decoration: none;
                    color: #c4f0ff;
                }
                // position: relative;
                i {
                    position: relative;
                    top: -2px;
                    margin-left: 5px;
                    font-size: 15px;
                }
            }
        }
        @media (min-width: 670px) {
            text-align: right;
        }
    }
}
</style>
