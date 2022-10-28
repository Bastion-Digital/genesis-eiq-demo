<template>
  <router-link to="/" class="flex justify-between items-center w-full pt-4">
    <div class="px-1">
      <img class="my-auto" src="../assets/prev.svg" alt="" />
    </div>
    <div class="w-full text-center pl-2 text-white text-2xl mr-6">
      Usage Beakdown
    </div>
  </router-link>
  <div class="flex w-full text-lg md:text-xl text-white z-10 shadow-md">
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
  <div v-if="tab === 0" class="bg-white py-4">
    <h3 class="mx-auto text-center w-full text-light-black text-xl mt-2">
      {{
        sevenDaysAgo.getDate() +
        " " +
        sevenDaysAgo.toLocaleString("default", { month: "long" })
      }}
      -
      {{
        date.getDate() + " " + date.toLocaleString("default", { month: "long" })
      }}
    </h3>
    <p
      class="mx-auto text-center w-full text-off-black opacity-80 text-md mb-10"
    >
      Updated Weekly
    </p>
    <img class="px-10" src="../assets/circleGraph.png" alt="" />
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
    <div class="flex text-off-black items-center px-5">
      <div class="flex items-center">
        <img class="w-10 h-10" src="../assets/Home-icon.png" alt="" />
        <p class="ml-2 text-lg">Total usage</p>
      </div>
      <p class="ml-auto pr-2 text-lg">$387.73</p>
    </div>
  </div>
  <!-- Dashboard Heading -->
  <div class="bg-white pt-2">
    <p class="ml-6 uppercase text-off-black mb-2">Detailed Breakdown</p>
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
        <p class="ml-2 my-auto">${{ breakdown[tab][0] }}</p>
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
        <p class="ml-2 my-auto">${{ breakdown[tab][1] }}</p>
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
        <p class="ml-2 my-auto">${{ breakdown[tab][2] }}</p>
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
        <p class="ml-2 my-auto">${{ breakdown[tab][3] }}</p>
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
  <div class="bg-white p-6 text-off-black">
    <h4 class="font-semibold mb-1">How does this work?</h4>
    <p class="mb-3">
      We analyse your usage data from your smart meter, alongside with your
      <a href="#" class="underline font-semibold text-genesis-orange"
        >home profile</a
      >
      information and use an algorithm to estimate how energy has been used in
      your house. This estimation will be used to compare your home to similar
      homes. Make sure your
      <a href="#" class="underline font-semibold text-genesis-orange"
        >home profile</a
      >
      is up to date for a more accurate breakdown. This report is generated once
      a week, so changes you make will be reflected in your next report.
    </p>
    <p>
      <span class="font-semibold">Please note:</span>
      the usage balance shown does not include any prompt payment or other
      discounts or credits available to you. Your usage may also be estimated if
      actual meter reads were unavailable. Dollar values include GST.
    </p>
  </div>
</template>

<script>
export default {
  name: "Usage Breakdown",
  components: {},
  data() {
    const date = new Date();
    const monthIndex = date.getMonth() + 1;
    const sevenDaysAgo = new Date(date - 7 * 24 * 60 * 60 * 1000);
    return {
      tab: 0,
      date: date,
      sevenDaysAgo: sevenDaysAgo,
      breakdown: [
        [176.15, 112.71, 70.92, 61.01],
        [135.22, 111.21, 58.24, 60.99],
      ],
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
