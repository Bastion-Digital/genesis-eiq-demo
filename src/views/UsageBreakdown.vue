<template>
        <router-link to="/" class="flex justify-between items-center cursor:pointer w-full border-b  border-gray-500">
          <div class='px-1'>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div class="w-full text-center font-semibold pl-2 p-2">
            Usage Beakdown
          </div>
        </router-link>
        <!-- Dashboard Heading -->
        <div class='relative flex flex-col p-2'>


        </div>
</template>

<script>

export default {
  name: "Usage Breakdown",
  data() {
    return {
      isGenesisCustomer: false,
      showSpeechBubble: false,
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
    this.$gtag.pageview({ page_title: 'Power Usage Breakdown', page_path: '/usage/breakdown' })


      setTimeout(() => this.showSpeechBubble = true, 2000);

    if (sessionStorage.getItem("pagesViewed") === null) {
      const pages = {
        electricityUsage: false,
        orderGas: false,
        powerShoutHours: false,
        electricityForecast: false,
        usageBreakdown: true,
        energySavingTips: false,
      }

      window.sessionStorage.setItem('pagesViewed', JSON.stringify(pages));
    } else {
      let ls = JSON.parse(window.sessionStorage.getItem('pagesViewed'));
      ls.usageBreakdown = true
      window.sessionStorage.setItem('pagesViewed', JSON.stringify(ls));
    }

  },
  components: {  },
  methods: {

  }
};
</script>
