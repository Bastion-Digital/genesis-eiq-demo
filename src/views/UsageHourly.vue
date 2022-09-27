<template >
<div class="bg-white h-full">
    <div class="overlay absolute" v-if="showSpeechBubble"> </div>
  
  <!-- Dashboard Heading -->
  <div>
    <div class="flex-grow-0 text-left w-full top bottom gen-bg text-white">
      <div v-if="showSpeechBubble" >
          <div class="absolute left-1/2 mt-32 bg-white bubble text-black shadow rounded-xl p-6 way-above">
              <div class="absolute -bottom-2 triangle-up " style="left: 47.5%;"></div>
              <p class='text-sm text-center'>Energy Usage helps you pinpoint the times when you use the most power. Scroll across and tap below to continue. </p>
          </div>
        </div>
      <TopNavigation title="Total Usage" conversionActive="false" link="/" />
      <!-- Header -->
      <div class="sides pt-6">
        <div class="text-sm font-light">Average Hourly Usage</div>
        <div class='flex mt-1'>
          <div class="tracking-wide text-left text-2xl font-semibold font-largecurrency">$</div>
          <div class="tracking-wide text-left text-5xl font-semibold font-largecurrency">2</div>
          <div class="tracking-wide text-left text-2xl font-semibold font-largecurrency">.97</div>
        </div>
      </div>
      
    </div>
    <div class='flex justify-around w-full text-gray-400 text-sm'>
      <router-link to="/usage/monthly" class='focus:outline-none tab'>Monthly</router-link>
      <router-link to="/usage/daily" class='focus:outline-none tab'>Daily</router-link>
      <router-link to="/usage/hourly" class='focus:outline-none font-bold text-genesis-orange tab active-tab'>Hourly</router-link>
    </div>
    <div class="overflow-x-scroll relative flex-grow flex flex-col justify-center space-y-4 bg-white">
      <!-- <img :src="hair" class="absolute front" style="width: 40px; left: 47.5%; margin-top: -2em; " /> -->
      <div class="absolute z-10 top-5 right-5 flex text-xs font-light align-center justify-center">
        <div class="rounded-50 half-gradient w-3 h-3 mr-2 " style="margin-top: 2px;"></div>
        Electricity
      </div>
      <div class="w-full usage pt-8 pb-32 above" >
         <router-link to="/usage/tip" >
          <BarChart :chartOptions="this.chartOptions" :series="this.series" class="internal-usage pr-16" id="chart" />
         </router-link>
      </div>

      <!-- Speech Bubble
        <div v-if="showSpeechBubble"  class="absolute left-16 top-24 w-3/4 h-16">
          <div class="relative bg-gray-300 shadow rounded-sm p-2">
            <div class="absolute -bottom-2 right-4 triangle-up"></div>
            <p class='text-xs'>Monthly view shows seasonal usage trends. Click on June's bar to view this day by day.</p>
            </div>
        </div> -->
    </div>
  </div>
  </div>
</template>

<script>
import BarChart from "@/components/BarChartLargeHourly.vue";
import TopNavigation from "@/components/TopNavigation.vue";
// import hair from "/src/assets/hair.png";

import iosbar from "/src/assets/iosBar.png";
import appstore from "/src/assets/appstore.png";
import playstore from "/src/assets/playstore.png";
// import scrollTo from "jquery.scrollto";



export default {
  name: "Usage",
  data() {
    return {
      // hair: hair,
      isGenesisCustomer: false,
      iosbar: iosbar,
      joinStatus: false,
      appstore: appstore,
      playstore: playstore,
      showSpeechBubble: false,
      chartOptions: {
        chart: {
          toolbar: {
            show: false,
          },
          textColor: '#373d3f'
        },
        grid: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }, 
        },
        plotOptions: {
          bar: {
            columnWidth: '95%',
            borderRadius: 5,
            startingShape: 'rounded',
            linecap: 'round',
            color: '#fff'
          },
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: "vertical",
            shadeIntensity: 1,
            // gradientToColors: 'green',
            inverseColors: true,
            opacityFrom: 0,
            opacityTo: 1,
            colorStops: [{
                offset: 0,
                color: "#F26526",
                opacity: 1
              },
              {
                offset: 50,
                color: "#F57F25",
                opacity: 1
              },
              {
                offset: 100,
                color: "#FDBA0A",
                opacity: 1
              }
            ]
          }
        },
        colors: ["#F58224"],
        yaxis: {
          labels: {
            formatter: function (value) {
              return "$" + value;
            }
          }
        },
        xaxis: {
          categories: [
              ["12am","01/07"],
              ["1am","01/07"],
              ["2am","01/07"],
              ["3am","01/07"],
              ["4am","01/07"],
              ["5am","01/07"],
              ["6am","01/07"],
              ["7am","01/07"],
              ["8am","01/07"],
              ["9am","01/07"],
              ["10am","01/07"],
              ["11am","01/07"],
              ["12pm","01/07"],
              ["1pm","01/07"],
              ["2pm","01/07"],
              ["3pm","01/07"],
              ["4pm","01/07"],
              ["5pm","01/07"],
              ["6pm","01/07"],
              ["7pm","01/07"],
              ["8pm","01/07"],
              ["9pm","01/07"],
              ["10pm","01/07"],
              ["11pm","01/07"],
            ],
            labels: {
            formatter: function (value) {
              return value;
            }
          }
        },
        dataLabels: {
          enabled: false
        },
      },

      series: [{
        name: "Power Usage",
        data: [0.30,0.20,0.21, 0.20, 0.30, 0.70, 1.64, 1.60, 1.55, 1.40, 1.83, 1.82, 2.45, 3.12, 2.37, 1.64, 1.91, 2.10, 2.25, 2.71, 2.09, 1.74, 1.15, 0.45]
      }, ],
      
    };
  },
  methods: {},
    created(){
    let GC = sessionStorage.getItem("GC")
    if (GC === 'true') {
      this.isGenesisCustomer = true;
    }
    if (GC === 'false') {
      this.isGenesisCustomer = false;
    }
  },
  mounted() {
    this.$gtag.pageview({ page_title: 'Power Usage Hourly',  page_path: '/usage/hourly' })


        let GC = sessionStorage.getItem("GC")
    if (GC === 'true') {
      this.isGenesisCustomer = true;
    }
    if (GC === 'false') {
      this.isGenesisCustomer = false;
    }
    setTimeout(() => this.showSpeechBubble = true, 3000);
  },
  components: {
    BarChart,
    TopNavigation
  },

};
</script>