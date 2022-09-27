<template>
  <div class="example">
    <apexchart
      height="80"
      type="line"
      :options="chartOptions"
      :series="series"
    ></apexchart>
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
        grid: {
          show: false,
        },
        chart: {
          toolbar: {
            show: false,
          },
        },
        colors: ["#F58224"],
        yaxis: {
          show: false,
          axisTicks: {
            show: false,
          },
        },
        xaxis: {
          show: false,
          labels: {
            show: false,
          },
          categories: ['Wed', 'Thurs', 'Fri', 'Sat', 'Sun','Mon'],
          axisTicks: {
            show: false,
          },
        }
      },
      series: [
        {
          name: "Power Usage:",
          data: [30, 40, 45, 50, 49,51]
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