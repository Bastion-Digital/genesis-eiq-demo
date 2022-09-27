<template>
      <!-- Reset Button -->
    <div 
          class="way-above">

        <div  class="z-10 pt-6 top-4 right-6 mob:fixed desk:hidden" >
          <!-- Mobile -->
            <button @click="resetPagesViews()" target="_BLANK" >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="22.5343"
                    y1="1.06066"
                    x2="1.06061"
                    y2="22.5343"
                    stroke="white"
                    stroke-width="3"
                  />
                  <line
                    x1="1.06066"
                    y1="1.46571"
                    x2="22.5343"
                    y2="22.9394"
                    stroke="white"
                    stroke-width="3"
                  />
                </svg>
              </button> 

          
                    
        </div>

        <!-- Desktop -->

        <div  class="z-10 pt-6 top-4 right-12 mob:hidden desk:fixed text-white underline" >
          <!-- Mobile -->
            <button @click="resetPagesViews()" target="_BLANK" >
                <span class="underline">Reset guided tour</span>
              </button> 

          
                    
        </div>

    </div>


    <!-- END RESET -->


</template>

<script>

export default {
  name: "Reset",
  data: function() {
    return {
        showCta: false,

    };
  },

  methods: {
      resetPagesViews() {
        this.$gtag.event("click", {
            event_category: "eiq-demo",
            event_label: "Reset Guided Journey",
        });
        const pages = {
            electricityUsage: true,
            orderGas: true,
            powerShoutHours: true,
            electricityForecast: true,
            usageBreakdown: true,
            energySavingTips: true,
        };
        window.sessionStorage.setItem("pagesViewed", JSON.stringify(pages));
        this.viewed = JSON.parse(window.sessionStorage.getItem("pagesViewed"));

        this.showUsageSpeechBubble = true;
        location.href = "/";
    },
      ctaToggle() {
      this.showCta = false;
    },
  },
  mounted() {
    setTimeout(() => (this.showCta = true), 2000);
  },

};
</script>