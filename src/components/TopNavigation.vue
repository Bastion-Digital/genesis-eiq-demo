<!-- This component is for the top navigation with the arrow, page name etc -->
<template>
  <div class="navigation">
  
      <router-link :to="link" class="nav-left h-6">
          <svg class="w-6 inline-flex" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          <h3 class="inline-flex">Dash..</h3>
      </router-link>
      <div class="nav-middle">
        {{title}}
      </div>
      <Conversion v-if="showConversion == true" @update:Conversion="doSomething" class="nav-right" />
      <div v-if="showConversion != true" class="nav-right"></div>

</div>
    
</template>

<script>
import Conversion from "@/components/Conversion.vue";

export default {
  name: "TopNavigation",
  props: ['chartOptions', 'series', 'title', 'conversionActive', 'link'],
  data: function() {
    return {
    };
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
  
  computed: {
    showConversion(){
      if(this.conversionActive == "true"){
        return true;
      }else{
        return false;
      }
    }
  },
  components: {
    Conversion
  },
};
</script>