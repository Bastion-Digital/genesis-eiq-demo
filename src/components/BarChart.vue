<template>
  <div class="px-1">
    <apexchart
      height="150px"
      width="250%"
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
  created() {

  var x = document.getElementsByClassName("apexcharts-xaxis-label");
  },
  methods: {
    updateChartIndex(event, chartContext, config){
       this.$emit('currentIndex', config.dataPointIndex)
    },
  }
};
</script>

<style>

</style>