<template>
  <div class="px-1">
    <apexchart
      width="500%"
      height="350px"
      type="bar"
      :options="chartOptions"
      :series="series"
      @data-point-mouse-enter="updateChartIndex"
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
    updateChartIndex(event, chartContext, config){
       //console.log(config.dataPointIndex)
       this.$emit('currentIndex', config.dataPointIndex)
    },
  }
};
</script>