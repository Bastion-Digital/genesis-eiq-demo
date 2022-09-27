<template >

<div class="bg-white h-full">
  <div class="overlay absolute" v-if="showSpeechBubble" > </div>
  
  
  <!-- Dashboard Heading -->
  <div>
    <!-- Speech Bubble -->
        
    <div class="flex-grow-0 text-left w-full top bottom left-1/2 gen-bg text-white">
      <div v-if="showSpeechBubble"  >
        
          <div class="absolute mt-32 bg-white bubble text-black shadow rounded-xl p-6 way-above cursor-pointer">
              <div class="absolute -bottom-2 triangle-up " style="left: 47.5%;"></div>
              <p class='text-sm text-center'>Monthly view shows seasonal usage trends. Click on July's bar to view this day by day.</p>
          </div>
          
        </div>
      
        <TopNavigation title="Total Usage" @update:Conversion="doSomething" conversionActive="false" link="/" />
      
      <!-- Header -->
      <div class="sides pt-6">
        <div class="text-sm font-light">Total Usage</div>
        <div class='flex mt-1'>
          <div class="tracking-wide text-left text-2xl font-semibold font-largecurrency">$</div>
          <div class="tracking-wide text-left text-5xl font-semibold font-largecurrency">224</div>
          <div class="tracking-wide text-left text-2xl font-semibold font-largecurrency">.08</div>
        </div>
      </div>
      
    </div>
    <div class='flex justify-around w-full text-gray-400 text-sm'>
      <router-link to="/usage/monthly" class='focus:outline-none font-bold text-genesis-orange tab active-tab'>Monthly</router-link>
      <router-link to="/usage/daily" class='focus:outline-none tab'>Daily</router-link>
      <router-link to="/usage/hourly" class='focus:outline-none tab'>Hourly</router-link>
    </div>
    <div class="overflow-x-scroll relative flex-grow flex flex-col justify-center space-y-4 bg-white">
      <!-- <img :src="hair" class="absolute front" style="width: 40px; left: 47.5%; margin-top: -2em; " /> -->
      <div class="absolute z-10 top-5 right-5 flex text-xs font-light align-center justify-center">
        <div class="rounded-50 half-gradient w-3 h-3 mr-2 " style="margin-top: 2px;"></div>
        Electricity
      </div>
       <router-link to="/usage/daily" class="w-full usage pt-8 pb-32 above">
        <BarChart :chartOptions="this.chartOptions" :series="this.series" class="internal-usage pr-16" v-on:current-index="newIndex"/>
       </router-link>
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
import BarChart from "@/components/BarChartLargeMonthly.vue";
import TopNavigation from "@/components/TopNavigation.vue";
// import hair from "/src/assets/hair.png";

import iosbar from "/src/assets/iosBar.png";
import appstore from "/src/assets/appstore.png";
import playstore from "/src/assets/playstore.png";

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
      activeConversion: 'percent',
      showSpeechBubble: false,
      month: this.$route.params.month,
      currentMonthString: null,
      currentYearString: null,
      
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
              ["Sep","2020"],
              ["Oct","2020"],
              ["Nov","2020"],
              ["Dec","2020"],
              ["Jan","2021"],
              ["Feb","2021"],
              ["Mar","2021"],
              ["Apr","2021"],
              ["May","2021"],
              ["Jun","2021"],
              ["Jul","2021"],
              ["Aug","2021"],
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
        data: [270.12,215.53,195.05,185.92,174.16,160.74,190.23, 215.84, 240.25, 297.12, 345.91, 312.08],
      }, ],
    };
  },
  methods: {
    newIndex(event, chartContext, config){
      var output = {};

      output.index = event.index;
      output.x = event.x;
      output.y = event.y;
      output.mouseX = window.event.clientX

    },

    formattype: function (value, opts) {
      const sum = opts.series[0].reduce((a, b) => a + b, 0);
      const percent = (value / sum) * 100;

      if (this.activeConversion === 'dollar') {
        return value.toFixed(0) + 'kWh';

      } else if (this.activeConversion === 'percent') {
        return percent.toFixed(0) + '%'

      }
    },
    doSomething(event) {
      this.activeConversion = event

      // if (event == 'dollar') {
      //   this.series[0].data = [317, 129, 312, 291, 199]
      // } else if (event == 'percent') {
      //   this.series[0].data = ['37%', '29%', '56%', '29%', '99%']
      // }
    }
  },
  mounted() {
      this.$gtag.pageview({
        page_title: 'Power Usage Monthly', 
        page_path: '/usage/monthly'
      })

    let GC = sessionStorage.getItem("GC")
    if (GC === 'true') {
      this.isGenesisCustomer = true;
    }
    if (GC === 'false') {
      this.isGenesisCustomer = false;
    }

    setTimeout(() => this.showSpeechBubble = true, 3000);

    if (sessionStorage.getItem("pagesViewed") === null) {
      const pages = {
        electricityUsage: true,
        orderGas: false,
        powerShoutHours: false,
        electricityForecast: false,
        usageBreakdown: false,
        energySavingTips: false,
      }

      window.sessionStorage.setItem('pagesViewed', JSON.stringify(pages));
    } else {
      let ls = JSON.parse(window.sessionStorage.getItem('pagesViewed'));
      ls.electricityUsage = true
      window.sessionStorage.setItem('pagesViewed', JSON.stringify(ls));
    }
  },
  
  created(){
    let GC = sessionStorage.getItem("GC")
    if (GC === 'true') {
      this.isGenesisCustomer = true;
    }
    if (GC === 'false') {
      this.isGenesisCustomer = false;
    }
  },
  components: {
    BarChart,
    TopNavigation
  },
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>