<template>
  <div class="bg-white rounded-lg">
    <router-link to="/ecotracker" class="flex pb-3">
      <div
        class="flex w-full text-left font-sm text-link pt-6 pb-1 px-6 text-genesis-orange text-lg"
      >
        Carbon Emissions
      </div>
      <div class="pr-6 pt-6 flex justify-center items-center">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_501_1458)">
            <mask
              id="mask0_501_1458"
              style="mask-type: alpha"
              maskUnits="userSpaceOnUse"
              x="5"
              y="2"
              width="9"
              height="14"
            >
              <path
                d="M6 3L11.704 8.2652C12.1329 8.66116 12.1329 9.33884 11.704 9.7348L6 15"
                stroke="#F58025"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </mask>
            <g mask="url(#mask0_501_1458)">
              <rect x="-16" y="-16" width="50" height="50" fill="#F58025" />
            </g>
          </g>
          <defs>
            <clipPath id="clip0_501_1458">
              <rect width="18" height="18" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </router-link>
    <div class="flex-col flex px-6">
      <h3 class="text-3xl w-[90%]">
        Right now, NZ's electricity generation from
        <span class="text-genesis-orange">hydro</span> is...
      </h3>
      <div class="relative flex justify-center items-center min-h-[320px]">
        <img
          class="left-1/2 top-1/2 z-[5] w-1/5 mb-10"
          src="../assets/wind.svg"
          alt=""
        />
        <apexchart
          class="absolute"
          :options="chartOptions"
          :series="[hydroPercentage]"
          height="300px"
          width="100%"
          type="radialBar"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "UsageBreakdown",
  data: function () {
    return {
      hydroPercentage: 68,
      chartOptions: {
        chart: {
          type: "radialBar",
        },
        colors: ["#F26526"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",
            },
            track: {
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 4,
                opacity: 0.15,
              },
            },
            dataLabels: {
              name: {
                color: "#fff",
                fontSize: "13px",
              },
              value: {
                color: "#F26526",
                fontSize: "30px",
                fontWeight: "600",
                offsetY: 40,
                show: true,
              },
            },
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "vertical",
            gradientToColors: ["#FFCD00"],
            stops: [0, 100],
          },
        },
        stroke: {
          lineCap: "round",
        },
        labels: [""],
      },
    };
  },
  created() {
    this.getHydroPercent();
  },
  methods: {
    getHydroPercent() {
      axios
        .get("/.netlify/functions/getEnergy")
        .then((res) => {
          const hydro = res.data.data["New Zealand"].Hydro;
          this.hydroPercentage = Number(
            ((hydro.generation / hydro.capacity) * 100).toFixed(0)
          );
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
