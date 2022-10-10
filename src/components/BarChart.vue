<template>
  <div class="px-1">
    <apexchart
      height="150px"
      width="180%"
      type="bar"
      :options="chartOptions"
      :series="series"
      @data-point-mouse-enter="updateChartIndex"
    />
  </div>
</template>

<script>
/* eslint-disable */
import apexchart from "vue3-apexcharts";

export default {
  name: "BarExample",
  props: ["chartOptions", "series"],
  data: function() {
    return {};
  },
  created() {
    var x = document.getElementsByClassName("apexcharts-xaxis-label");
  },
  methods: {
    updateChartIndex(event, chartContext, config) {
      this.$emit("currentIndex", config.dataPointIndex);
    },
  },
};
</script>

<style></style>
