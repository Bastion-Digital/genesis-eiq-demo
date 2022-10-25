<template>
  <router-link to="/" class="flex justify-between items-center w-full pt-4">
    <div class="px-1">
      <img class="my-auto" src="../assets/prev.svg" alt="" />
    </div>
    <div class="w-full text-center pl-2 text-white text-2xl">
      Usage Beakdown
    </div>
  </router-link>
  <div class="flex w-full text-xl text-white z-10 shadow-md">
    <a
      @click="tab = 0"
      :class="{ 'border-b-[3px] border-white opacity-100': tab === 0 }"
      class="cursor-pointer w-1/2 flex justify-center opacity-80 items-center py-5"
      >Weekly Update</a
    >
    <a
      @click="tab = 1"
      :class="{ 'border-b-[3px] border-white opacity-100': tab === 1 }"
      class="cursor-pointer w-1/2 flex justify-center opacity-80 items-center py-5"
      >Historic Trend</a
    >
  </div>
  <div v-if="tab === 1" class="bg-white py-4">
    <apexchart
      height="300"
      width="100%"
      type="line"
      :options="chartOptions"
      :series="series"
      @data-point-mouse-enter="updateChartIndex"
    />
  </div>
  <!-- Dashboard Heading -->
  <div class="bg-white">
    <div
      @click="electric = !electric"
      :class="{ 'bg-forecast-gray': electric }"
      class="border-b-2 py-3 transition cursor-pointer flex flex-col justify-center text-off-black px-6"
    >
      <h4 class="text-xl">Electric Heating</h4>
      <div class="flex items-center">
        <div
          style="width: 33%; background-color: #ed6d79"
          class="h-3 rounded-full"
        />
        <p class="ml-2 my-auto">${{ breakdown[0] }}</p>
        <img
          class="invert opacity-60 w-6 -mt-6 ml-auto transform transition"
          :class="{ 'rotate-90': electric, '-rotate-90': !electric }"
          src="../assets/prev.svg"
          alt=""
        />
      </div>

      <div v-if="electric">
        <p class="text-lg font-light">
          This includes your space or panel heaters, radiators, heat pumps,
          portable heaters, underfloor heating, etc.
        </p>
      </div>
    </div>
    <div
      @click="lights = !lights"
      :class="{ 'bg-forecast-gray': lights }"
      class="border-b-2 py-3 transition cursor-pointer flex flex-col justify-center text-off-black px-6"
    >
      <h4 class="text-xl">Lights & Appliances</h4>
      <div class="flex items-center">
        <div
          style="width: 25%; background-color: #fecd00"
          class="h-3 rounded-full"
        />
        <p class="ml-2 my-auto">${{ breakdown[1] }}</p>
        <img
          class="invert opacity-60 w-6 -mt-6 ml-auto transform transition"
          :class="{ 'rotate-90': lights, '-rotate-90': !lights }"
          src="../assets/prev.svg"
          alt=""
        />
      </div>
      <div v-if="lights">
        <p class="text-lg font-light">
          This includes your space or panel heaters, radiators, heat pumps,
          portable heaters, underfloor heating, etc.
        </p>
      </div>
    </div>
    <div
      @click="gas = !gas"
      :class="{ 'bg-forecast-gray': gas }"
      class="border-b-2 py-3 transition cursor-pointer flex flex-col justify-center text-off-black px-6"
    >
      <h4 class="text-xl">Gas</h4>
      <div class="flex items-center">
        <div
          style="width: 17%; background-color: #9674cf"
          class="h-3 rounded-full"
        />
        <p class="ml-2 my-auto">${{ breakdown[2] }}</p>
        <img
          class="invert opacity-60 w-6 -mt-6 ml-auto transform transition"
          :class="{ 'rotate-90': gas, '-rotate-90': !gas }"
          src="../assets/prev.svg"
          alt=""
        />
      </div>
      <div v-if="gas">
        <p class="text-lg font-light">
          This includes your space or panel heaters, radiators, heat pumps,
          portable heaters, underfloor heating, etc.
        </p>
      </div>
    </div>
    <div
      @click="alwaysOn = !alwaysOn"
      :class="{ 'bg-forecast-gray': alwaysOn }"
      class="border-b-2 py-3 transition cursor-pointer flex flex-col justify-center text-off-black px-6"
    >
      <h4 class="text-xl">Always On</h4>
      <div class="flex items-center">
        <div
          style="width: 15%; background-color: #8dc08c"
          class="h-3 rounded-full"
        />
        <p class="ml-2 my-auto">${{ breakdown[3] }}</p>
        <img
          class="invert opacity-60 w-6 -mt-6 ml-auto transform transition"
          :class="{ 'rotate-90': alwaysOn, '-rotate-90': !alwaysOn }"
          src="../assets/prev.svg"
          alt=""
        />
      </div>
      <div v-if="alwaysOn">
        <p class="text-lg font-light">
          This includes your space or panel heaters, radiators, heat pumps,
          portable heaters, underfloor heating, etc.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Usage Breakdown",
  components: {},
  data() {
    const date = new Date();
    const monthIndex = date.getMonth() + 1;
    return {
      tab: 0,
      breakdown: [176.15, 112.71, 70.92, 61.01],
      electric: false,
      lights: false,
      gas: false,
      alwaysOn: false,
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#ed6d79", "#fecd00", "#9674cf", "#8dc08c", "#ffffff00"],
        tooltip: {
          enabled: true,
          x: {
            show: true,
            format: "dd MMM",
            formatter: undefined,
          },
          y: {
            formatter: undefined,
            title: {
              formatter: (seriesName) => seriesName,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: date.getFullYear(),
          align: "center",
        },
        markers: {
          strokeWidth: 0,
          size: 5,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
        },
      },

      series: [
        {
          name: "Electric Heating",
          data: [90, 75, 82, 93, 86, 76, 87, 95, 86, 82, 87, 95].slice(
            0,
            monthIndex
          ),
        },
        {
          name: "Lights",
          data: [50, 69, 70, 52, 54, 68, 53, 61, 54, 68, 69, 61].slice(
            0,
            monthIndex
          ),
        },
        {
          name: "Gas",
          data: [80, 77, 87, 84, 75, 82, 86, 83, 77, 87, 84, 75].slice(
            0,
            monthIndex
          ),
        },
        {
          name: "Always On",
          data: [47, 48, 54, 50, 52, 46, 60, 51, 47, 48, 54, 50].slice(
            0,
            monthIndex
          ),
        },
        {
          name: " ",
          data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        },
      ],
    };
  },
};
</script>
