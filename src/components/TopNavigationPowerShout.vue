<!-- This component is for the top navigation with the arrow, page name etc -->
<template>
  <div class="flex items-center justify-between">
    <div class="w-1/5 flex justify-start items-center h-6">
      <div>
        <router-link to="/powershouthours">
          <svg
            class="w-6 inline-flex items-center"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </router-link>
      </div>
      <div>
        <router-link to="/powershouthours">
          <h3 class="inline-flex">
            Back
          </h3>
        </router-link>
      </div>
    </div>

    <div class="w-3/5 text-center">
      {{ title }}
    </div>


    <router-link
      to="/"
      class=" h-6 mr-4"
    >
      <h3 class="w-1/5 inline-flex">
        Cancel
      </h3>
    </router-link>


    <!-- 
    <Conversion v-if="showConversion == true" @update:Conversion="doSomething" class="nav-right" />
    <div v-if="showConversion != true" class="nav-right"></div> 
    -->
  </div>
</template>

<script>
import Conversion from "@/components/Conversion.vue";

export default {
  name: "TopNavigation",
  components: {
    //Conversion
  },
  props: ['chartOptions', 'series', 'title', 'conversionActive', 'link'],
  data: function() {
    return {
    };
  },
  
  computed: {
    showConversion(){
      if(this.conversionActive == "true"){
        return true;
      }else{
        return false;
      }
    }
  },
  methods: {
    clickHandler(event, chartContext, config){
       if(config.dataPointIndex === 4){
         this.$router.push('/usage/daily')
       }
    },
    doSomething(event){
      this.$emit('update:Conversion', event)
    }
  },
};
</script>