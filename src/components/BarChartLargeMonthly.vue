<template>
  <div class="px-1">
    <apexchart
      width="285%"
      height="350px"
      type="bar"
      :options="chartOptions"
      :series="series"
    />
  </div>
</template>

<script>
/* eslint-disable */
import apexchart from 'vue3-apexcharts'

export default {
  name: "BarExample",
  props: ['chartOptions', 'series'],
  data: function() {
    return {
    };
  },
  methods: {
    clickHandler(event, chartContext, config){
       if(config.dataPointIndex === 4){
         alert('Clicked Last');
       }
    },
  }
};
</script>