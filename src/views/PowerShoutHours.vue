<template class="overflow-y-hidden md:h-height-preview h-100vh" >
    


  <div class="bg-white h-full overflow-x-hidden overflow-y-hidden">
    

    
  
    <div>
      <!-- Top Bar -->
      <calandarNotification @click="dismissNotificationCalander()" v-if="showNotification" class="absolute top-3 z-50 w-11/12"/>

      <div class="flex-grow-0 text-left w-full top bottom gen-bg text-white">
          <TopNavigation title="Power Shout" conversionActive="false" link="/" />  
      </div>


      <div class="relative " > 
        <!-- Power Shout Heading -->
        <div class="flex flex-col grey-gradient  pt-8 pb-12 text-black">
          <span class="relative font-regular text-xs text-center pb-2">Power Shout Balance</span>
          <div class="-ml-2 text-8xl font-bold font-largecurrency flex justify-center md:w-internal w-100" >
            <img :src="powershout" class="inline-flex"/>
            <div class="inline-flex">
              <span class="">8</span>
              <span class="inline-flex text-4xl font-reg mt-1 ml-1">hrs</span>
            </div>
          </div>
        </div>

        <!-- Book a Shout and Curve -->
        <div class="relative">

              <!-- CTA -->
            
              <router-link to="/powershouthours/booking" class='w-full flex justify-center -mt-6'>
                <div class='font-light z-2 inline-block z-10 cursor:pointer text-center bg-background p-2 px-8 shadow-lg text-white rounded-3xl'>Book a Power Shout</div>
              </router-link>   
                
        </div>
        <transition name="bounce" >
          <div class="absolute mt-4 bubble above" v-if="showSpeechBubble">
          <div class="triangle-up upside absolute -mt-2" style="left: 47.5%;"></div>
          <div  class="bg-white  text-black shadow border p-6 above">
            
            <p class='text-sm text-center'>Let's explore how easy it is to book free power when you know your usage will be high.</p>
          </div>
          </div>
        </transition>
      </div>
      
      <div class="relative flex-grow flex flex-col justify-center  bg-white p-4 text-black py-12 z-0"> 
         <h3 class="font-medium"><b>Current Bookings</b> (0)</h3>
      </div>
      <div class="relative flex-grow flex flex-col waves-bg py-8 p-4 text-white z-10 h-80vh"> 
         <span class="font-regular text-xs pb-2">Accepted offer</span>
         <div
          ref="powerShout"
          id="powerShout"
          class="flex flex-col bg-white text-black w-full rounded-md shadow-lg"
        >
          
          <div class="flex items-center w-full ">
            <div class="inline-flex py-6 pr-8 border-r-2 border-dotted md:w-40">
                <div  class="pr-4 flex text-4xl font-bold text-left font-largecurrency">
                  <img :src="powershout" style="width: 1.25em;"/>
                  <div class="flex">
                    <span>4</span>
                    <span class="text-xl font-light pl-1">hrs</span>
                  </div>
                </div>
            </div>
            <div class="inline-flex">
                <div
                  class=" justify-center items-center px-4 py-4 text-sm text-left"
                >
                  <div class="text-xs font-bold text-left">
                    Outsmart Winter Power Shout
                  </div>
                  <div class="text-xs text-left line-1">
                    4 free hours have been added to your Power Shout Balance
                  </div>
                   <div class="text-xs text-left text-grey-500 mt-2 inline-flex">
                    <img :src="tick" style="width: 1.25em;" class="mr-2" /> Accepted
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import TopNavigation from "@/components/TopNavigation.vue";
import greyCurve from "/src/assets/greyCurve.svg";
import tick from "/src/assets/tick.png";
import powershout from "/src/assets/powershout.svg";

import iosbar from "/src/assets/iosBar.png";
import appstore from "/src/assets/appstore.png";
import playstore from "/src/assets/playstore.png";

import calandarNotification from '/src/components/CalendarMessage';

export default {
  name: "Usage",
  data() {
    return {
      showNotification: false,
      showSpeechBubble: false,
      displayInstant: false,
      greyCurve: greyCurve,
      powershout: powershout,
      tick: tick,
      isGenesisCustomer: false,
      iosbar: iosbar,
      joinStatus: false,
      appstore: appstore,
      playstore: playstore,
    };
  },
  created() {
    let GC = sessionStorage.getItem("GC")
    if (GC === 'true') {
      this.isGenesisCustomer = true;
    }
    if (GC === 'false') {
      this.isGenesisCustomer = false;
    }
  },
  methods: {
    showNotificationCalander() {
      this.showNotification = true
      window.sessionStorage.setItem('calendarNotification', 'true')
    },
    dismissNotificationCalander() {
      this.showNotification = false
      window.sessionStorage.setItem('calendarNotification', 'false')

    }
  },

  mounted() {
    this.$gtag.pageview({ page_title: 'Power Shout Hours', page_path: '/powershouthours' })

    setTimeout(() => (this.showSpeechBubble = true), 500);
    let showMessage = sessionStorage.getItem("calendarNotification")
    if (showMessage === 'true') {
      this.displayInstant = true
      if (this.displayInstant === true) {
        this.showNotificationCalander()
      } else {
        setTimeout(() => this.showNotificationCalande(), 4000);
      }
    }

    if (showMessage === null) {
        setTimeout(() => this.showNotificationCalander(), 4000);
    }


    let GC = sessionStorage.getItem("GC")
    if (GC === 'true') {
      this.isGenesisCustomer = true;
    }
    if (GC === 'false') {
      this.isGenesisCustomer = false;
    }

    if (sessionStorage.getItem("pagesViewed") === null) {
      const pages = {
        electricityUsage: false,
        orderGas: false,
        powerShoutHours: true,
        electricityForecast: false,
        usageBreakdown: false,
        energySavingTips: false,
      }

      window.sessionStorage.setItem('pagesViewed', JSON.stringify(pages));
    } else {
      let ls = JSON.parse(window.sessionStorage.getItem('pagesViewed'));
      ls.powerShoutHours = true
      window.sessionStorage.setItem('pagesViewed', JSON.stringify(ls));
    }

  },
  components: {
    TopNavigation,
    calandarNotification
  },
};
</script>
<style scoped>
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
