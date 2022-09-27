<template>
  <!-- Dashboard Heading -->
  <div class="flex-grow-0 text-left w-full">
    <h1 class="font-semibold text-4xl">Tips</h1>
  </div>
  <div class="flex-grow flex flex-col space-y-4">
    <!-- Content -->

    <div v-for="tip in tips" :key="tip.message" class="chat-message">
      <div>
        <div class="flex justify-between">
          <div class="w-1/5">
            <img class="w-12 h-12 object-cover" :src="robot">
          </div>
            <div class="w-4/5">
            <span class="px-4 py-2 text-xs rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
              {{ tip.message }}
            </span>
          </div>
        </div>
      </div>
    </div>


    <transition name="fade">
      <div v-if="calendar" class='flex flex-col w-full bg-gray-200 shadow-lg border border-gray-300'>
        <div class="flex justify-between items-center p-2"> 
          <div class="text-sms">CALENDAR</div>
          <button @click="calendar = false">
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          </button>
        </div>
        <div class="flex flex-col mt-2 pb-4 p-2">
          <div class="text-sms">Family Reunion</div>
          <div class="text-xs">Our house, Saturday 5pm</div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import robot from "/src/assets/robot.png";

export default {
  name: "Usage",
  data() {
    return {
      robot: robot,
      calendar: true,
      tips: [
        {message: 'Energy use this month is up compared to normal. Tap below to find out why.'},
        {message: 'When gas is low, the indicator on the meter goes from green to red. See how easy it is to order new bottles by tapping here.'},
        {message: 'Let’s explore how easy it is to book free power when you know usage will be high.'},
        {message: 'We can predict how much energy you’ll use based on the weather. Tap below to view this week’s electricity forecast.'}
      ]
    };
  },
  components: {  },
    mounted() {
    if (sessionStorage.getItem("pagesViewed") === null) {
      const pages = {
        electricityUsage: false,
        orderGas: false,
        powerShoutHours: false,
        electricityForecast: false,
        usageBreakdown: false,
        energySavingTips: true,
      }

      window.sessionStorage.setItem('pagesViewed', JSON.stringify(pages));
    } else {
      let ls = JSON.parse(window.sessionStorage.getItem('pagesViewed'));
      ls.energySavingTips = true
      window.sessionStorage.setItem('pagesViewed', JSON.stringify(ls));
    }
  },
};
</script>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>