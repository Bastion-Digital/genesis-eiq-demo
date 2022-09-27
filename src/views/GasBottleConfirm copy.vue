<template >
        <div class="bg-white">
         
              <div>
                <div class="push ">
                  <h2 class="text-center text-white text-xl font-semibold p-4 duration-500">Two days later...</h2>
                  <img v-if="showSecurity" :src="security" class="w-full"/>  
                  <div v-if="showMessage" class="pt-4">
                    <img :src="message" class="w-full"/>  
                  </div>
                  <div v-if="showNext" class="w-full mt-4 bg-white text-black shadow border p-4 z-10">
                    <p class="text-sm text-center w-full">
                      With Energy IQ, you can order new gas bottles via the app for fast delivery.
                    </p>
                  </div>
                  <div class="w-full flex align-center justify-center opacity-70 mt-4">
                    <button v-if="showDismiss" type='button' @click="Continue()" class='z-10 cursor-pointer text-center p-2 mt-2 text-white'>
                      <div class='text-gray-200 border-2 rounded-full px-4 py-1'>Dismiss</div>
                    </button>
                  </div>


                </div>
              </div>
             
        </div>
        <div class="overlay blur md:rounded-xl z-10 bg-white"></div>
        <orderView />
         <CtaCard
          class="fixed"
          style="bottom: 2em"
          :isGenesis="isGenesisCustomer"
        />

</template>

<script>
import gasbottle from "/src/assets/gasbottle.png";
import security from "/src/assets/securitycam.png";
import message from "/src/assets/imessage.png";
import orderView from "../views/GasBottle.vue";
import CtaCard from "@/components/ctaCard.vue";



export default {
  name: "Usage",
  components: {
    'orderView': orderView
  },
  data() {
    return {
      isGenesisCustomer: false,
      showSecurity: false,
      showMessage: false,
      showNext: false,
      showDismiss: false,
      gasbottle: gasbottle,
      security: security,
      message: message,
      counter: 1,
    };
  },
  created() {
    if (sessionStorage.getItem("GC") === true) {
        this.isGenesisCustomer = true;
    } else {
        this.isGenesisCustomer = false;
    }
  },
  mounted() {
        this.$gtag.pageview({page_title: 'Gas Bottle Booking', page_path: '/bottledgas/twodays' })

      setTimeout(() => this.showSecurity = true, 1000);
      setTimeout(() => this.showMessage = true, 3000);
      setTimeout(() => this.showNext = true, 5000);
      setTimeout(() => this.showDismiss = true, 6000);
      

    if (sessionStorage.getItem("pagesViewed") === null) {
      const pages = {
        electricityUsage: false,
        orderGas: true,
        powerShoutHours: false,
        electricityForecast: false,
        usageBreakdown: false,
        energySavingTips: false,
      }

      window.sessionStorage.setItem('pagesViewed', JSON.stringify(pages));
    } else {
      let ls = JSON.parse(window.sessionStorage.getItem('pagesViewed'));
      ls.orderGas = true
      window.sessionStorage.setItem('pagesViewed', JSON.stringify(ls));
    }

  },
  components: { CtaCard },
  methods: {
    Continue() {
      this.$router.push({ path: '/'});
    },
  }
};
</script>
