<template>
  <div class="example">
    <apexchart
      height="150"
      type="line"
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
  data: function() {
    return {
      chartOptions: {
        chart: {
          toolbar: {
            show: false,
          }
        },
        colors: ["#F58224"],
        xaxis: {
          categories: ['Jan', 'Feb', 'March', 'April', 'May']
        }
      },
      series: [
        {
          name: "Power Usage:",
          data: [30, 40, 45, 50, 49]
        }
      ]
    };
  },
  methods: {
    updateChart() {
      const max = 90;
      const min = 20;
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      });

      // In the same way, update the series option
      this.series = [
        {
          data: newData
        }
      ];
    }
  }
};
</script>