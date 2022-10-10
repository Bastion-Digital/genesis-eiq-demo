<template>
  <div class="bg-white h-full">
    <div
      v-if="showSpeechBubble"
      class="overlay absolute"
    />
  
    <!-- Dashboard Heading -->
    <div>
      <div class="flex-grow-0 text-left w-full top bottom gen-bg text-white">
        <div v-if="showSpeechBubble">
          <div class="absolute mt-32 bg-white bubble text-black shadow rounded-xl p-6 way-above">
            <div
              class="absolute -bottom-2 triangle-up "
              style="left: 47.5%;"
            />
            <p class="text-sm text-center">
              It looks like your energy use peaked every Saturday during July. Tap below to see what time.
            </p>
          </div>
        </div>
        <TopNavigation
          title="Total Usage"
          conversion-active="false"
          link="/"
        />
        <!-- Header -->
        <div class="sides pt-6">
          <div class="text-sm font-light">
            Total Daily Usage
          </div>
          <div class="flex mt-1">
            <div class="tracking-wide text-left text-2xl font-semibold font-largecurrency">
              $
            </div>
            <div class="tracking-wide text-left text-5xl font-semibold font-largecurrency">
              14
            </div>
            <div class="tracking-wide text-left text-2xl font-semibold font-largecurrency">
              .07
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-around w-full text-gray-400 text-sm shadow-md">
        <router-link
          to="/usage/monthly"
          class="focus:outline-none tab"
        >
          Monthly
        </router-link>
        <router-link
          to="/usage/daily"
          class="focus:outline-none font-bold text-genesis-orange tab active-tab"
        >
          Daily
        </router-link>
        <router-link
          to="/usage/hourly"
          class="focus:outline-none tab"
        >
          Hourly
        </router-link>
      </div>
      <div class="overflow-x-scroll relative flex-grow flex flex-col justify-center space-y-4 bg-white">
        <!-- <img :src="hair" class="front absolute" style="width: 40px; left: 47.5%; margin-top: -2em;" /> -->
        <div class="absolute z-10 top-5 right-5 flex text-xs font-light align-center justify-center">
          <div
            class="rounded-50 half-gradient w-3 h-3 mr-2 "
            style="margin-top: 2px;"
          />
          Electricity
        </div>
        <router-link
          to="/usage/hourly"
          class="w-full usage pt-8 pb-32 above"
        >
          <BarChart
            :chart-options="chartOptions"
            :series="series"
            class="internal-usage pr-16"
          />
        </router-link>

      <!-- Speech Bubble -->
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/BarChartLargeDaily.vue";
import TopNavigation from "@/components/TopNavigation.vue";
// import hair from "/src/assets/hair.png";

import iosbar from "/src/assets/iosBar.png";
import appstore from "/src/assets/appstore.png";
import playstore from "/src/assets/playstore.png";


export default {
  name: "Usage",
  components: {
    BarChart,
    TopNavigation
  },
  data() {
    return {
      // hair: hair,
      showSpeechBubble: false,
      isGenesisCustomer: false,
      iosbar: iosbar,
      joinStatus: false,
      appstore: appstore,
      playstore: playstore,

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
              ["Fri","01/07"],
              ["Sat","02/07"],
              ["Sun","03/07"],
              ["Mon","04/07"],
              ["Tue","05/07"],
              ["Wed","06/07"],
              ["Thu","07/07"],
              ["Fri","08/07"],
              ["Sat","09/07"],
              ["Sun","10/07"],
              ["Mon","11/07"],
              ["Tue","12/07"],
              ["Wed","13/07"],
              ["Thu","14/07"],
              ["Fri","15/07"],
              ["Sat","16/07"],
              ["Sun","17/07"],
              ["Mon","18/07"],
              ["Tue","19/07"],
              ["Wed","20/07"],
              ["Thu","21/07"],
              ["Fri","22/07"],
              ["Sat","23/07"],
              ["Sun","24/07"],
              ["Mon","25/07"],
              ["Tue","26/07"],
              ["Wed","27/07"],
              ["Thu","28/07"],
              ["Fri","29/07"],
              ["Sat","30/07"],
              ["Sun","31/07"],
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
        data: [16.21,21.29,19.42,14.73,15.92,17.11,16.90,15.75,24.11,23.92,13.11,16.95,17.09,18.11,10.12,25.91,22.11,18.43,15.52,17.63,17.86,19.11,24.21,22.74,18.11,16.32, 14.11, 15.32, 17.93, 25.11, 23.12],
        
      }, ],
      
    };
  },
  computed: {

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
  mounted() {

    this.$gtag.pageview({ page_title: 'Power Usage Daily', page_path: '/usage/daily' })


        let GC = sessionStorage.getItem("GC")
    if (GC === 'true') {
      this.isGenesisCustomer = true;
    }
    if (GC === 'false') {
      this.isGenesisCustomer = false;
    }

    setTimeout(() => this.showSpeechBubble = true, 3000);
  },

  methods: {
  },
};
</script>

<style>
.speechfade-enter-active, .speechfade-leave-active {
  transition: opacity 2s;
}
.speechfade-enter, .speechfade-leave-to {
  opacity: 0;
}
</style>