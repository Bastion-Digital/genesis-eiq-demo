<template>
  <div class="px-1">
    <apexchart
      width="200%"
      height="350px"
      type="bar"
      :options="chartOptions"
      :series="series"
      v-on:data-point-mouse-enter="updateChartIndex"
    ></apexchart>
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
    updateChartIndex(event, chartContext, config){
      let output = {
        index: config.dataPointIndex,
        x: config.w.globals.clientX,
        y: config.w.globals.clientY,
      }

      if(config.w.globals.clientX && config.w.globals.clientY){
        this.$emit('currentIndex', output);
      }
    },
  }
};
</script>