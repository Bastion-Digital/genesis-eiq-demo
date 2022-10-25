<template>
  <div class="bg-dark-orange pt-8 flex flex-col text-light-black">
    <div class="flex items-center sides">
      <img src="../assets/prev.svg" class="w-8 h-8" alt="" />
      <h2 class="text-white text-3xl ml-6">EV</h2>
    </div>
    <div class="flex w-full text-xl text-white mt-4">
      <router-link
        to="/ev/insights"
        class="w-1/2 flex justify-center items-center py-5 border-b-[3px] border-white"
        >Plan insights</router-link
      >
      <router-link
        to="/ev/everywhere"
        class="w-1/2 flex justify-center opacity-80 items-center py-5"
        >EVerywhere</router-link
      >
    </div>
  </div>
  <div class="flex justify-center items-center flex-col mb-12">
    <div class="bg-light-gray w-full flex justify-center items-center flex-col">
      <h2 class="text-3xl pt-12 pb-3">
        Your <span class="text-genesis-orange">Tesla Model 3</span> gets you
      </h2>
      <p class="text-xl mb-20">50% lower rates every night 9pm - 7am</p>
    </div>

    <div class="relative w-full">
      <img
        src="../assets/car-chargenet.png"
        class="mx-auto z-10 w-1/2 drop-shadow-lg relative"
        alt=""
      />
      <div
        class="absolute z-[7] top-[50%] -mt-8 mr-6 right-0 w-16 h-16 bg-white shadow-md rounded-full flex justify-center items-center"
      >
        <img src="../assets/more.svg" class="w-8" alt="" />
      </div>
      <div class="bg-light-gray h-1/2 w-full top-0 z-0 absolute"></div>
    </div>
  </div>
  <div class="sides text-light-black mb-8">
    <div
      class="bg-white rounded-[24px] flex flex-col justify-center items-center py-8"
    >
      <div class="text-orange rounded-full bg-pale-orange p-2 w-4/5 flex mb-4">
        <div
          @click="timeframe = 0"
          :class="{ 'bg-orange text-white': timeframe === 0 }"
          class="transition cursor-pointer rounded-full py-4 px-6 text-xl w-1/2 flex justify-center"
        >
          September
        </div>
        <div
          @click="timeframe = 1"
          :class="{ 'bg-orange text-white': timeframe === 1 }"
          class="transition cursor-pointer rounded-full py-4 px-6 text-xl w-1/2 flex justify-center"
        >
          Last 7 days
        </div>
      </div>
      <div
        class="flex flex-col justify-center items-center"
        v-if="timeframe === 0"
      >
        <p class="text-xl">Your household night usage so far is</p>
        <div class="flex">
          <span class="h-full flex text-6xl pt-2 text-orange font-extrabold"
            >$</span
          >
          <h2 class="ml-1 text-orange text-8xl font-extrabold">31</h2>
          <div>
            <span
              class="h-full flex text-5xl pt-5 ml-2 text-orange font-extrabold"
              >.49</span
            >
          </div>
        </div>
        <p class="text-lg text-light-black">
          <span class="line-through">$62.98</span>
          <span class="text-green ml-[0.33rem]">50% lower rate</span> with your
          EV Plan
        </p>
        <div class="w-16 mt-8 border-b-2 border-off-black opacity-30"></div>
        <div class="flex justify-between items-center sides">
          <div class="w-1/4">
            <apexchart
              :options="chartOptions"
              :series="[24]"
              height="140px"
              width="100%"
              type="radialBar"
            />
          </div>
          <p class="w-auto ml-5">
            of your home's electricity use is at night time.
          </p>
        </div>
        <div class="flex justify-between items-center sides">
          <div class="w-1/4">
            <apexchart
              :options="chartOptions"
              :series="[51]"
              height="140px"
              width="100%"
              type="radialBar"
            />
          </div>
          <p class="w-auto ml-5">
            of the night was low carbon for New Zealand.
          </p>
        </div>
      </div>
      <div
        class="flex flex-col justify-center items-center"
        v-if="timeframe === 1"
      >
        <p class="text-xl">Your household night usage so far is</p>
        <div class="flex">
          <span class="h-full flex text-6xl pt-2 text-orange font-extrabold"
            >$</span
          >
          <h2 class="ml-1 text-orange text-8xl font-extrabold">10</h2>
          <div>
            <span
              class="h-full flex text-5xl pt-5 ml-2 text-orange font-extrabold"
              >.08</span
            >
          </div>
        </div>
        <p class="text-lg text-light-black">
          <span class="line-through">$20.16</span>
          <span class="text-green ml-[0.33rem]">50% lower rate</span> with your
          EV Plan
        </p>
        <div class="w-16 mt-8 border-b-2 border-off-black opacity-30"></div>
        <div class="flex justify-between items-center sides">
          <div class="w-1/4">
            <apexchart
              :options="chartOptions"
              :series="[22]"
              height="140px"
              width="100%"
              type="radialBar"
            />
          </div>
          <p class="w-auto ml-5">
            of your home's electricity use is at night time.
          </p>
        </div>
        <div class="flex justify-between items-center sides">
          <div class="w-1/4">
            <apexchart
              :options="chartOptions"
              :series="[53]"
              height="140px"
              width="100%"
              type="radialBar"
            />
          </div>
          <p class="w-auto ml-5">
            of the night was low carbon for New Zealand.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="sides flex flex-col justify-center">
    <h2 class="text-[1.66rem] text-center text-white">
      Day/night split for last 30 days
    </h2>
    <div class="rounded-full bg-[#f3c39c] p-2 flex mb-4">
      <div
        @click="graph = 0"
        :class="{ 'bg-white text-orange': graph === 0 }"
        class="transition cursor-pointer text-white rounded-full py-4 px-6 text-xl w-1/2 flex justify-center"
      >
        Electricity use
      </div>
      <div
        @click="graph = 1"
        :class="{ 'bg-white text-orange': graph === 1 }"
        class="transition cursor-pointer text-white rounded-full py-4 px-6 text-xl w-1/2 flex justify-center"
      >
        NZ low carbon
      </div>
    </div>
  </div>
  <div class="sides mb-8">
    <div class="flex flex-col justify-center bg-white rounded-[24px] py-6 px-6">
      <div class="w-full text-orange text-xl mb-1">EV Insights</div>
      <h2 class="text-3xl text-light-black">
        Right now it's a 50% lower rate to charge your
        <span class="text-orange">Tesla Model 3</span> until 7am
      </h2>
      <img src="../assets/placeholder.png" class="pb-2" alt="" />
      <p class="text-off-black text-center text-lg mb-4">
        Take advantage of reduced rates at reduced rates at night by using other
        appliances.
      </p>
      <div class="flex w-3/4 mx-auto justify-between">
        <div class="w-20 h-20 bg-pale-orange rounded-full">
          <img src="../assets/placeholder.png" class="" alt="" />
        </div>
        <div class="w-20 h-20 bg-pale-orange rounded-full">
          <img src="../assets/placeholder.png" class="" alt="" />
        </div>
        <div class="w-20 h-20 bg-pale-orange rounded-full">
          <img src="../assets/placeholder.png" class="" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div class="sides mb-8">
    <div class="flex flex-col justify-center bg-white rounded-[24px] py-6 px-6">
      <div class="w-full flex justify-between text-orange text-xl mb-1">
        <p>Eco Tracker</p>
        <svg
          class="mr-1"
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
      <h2 class="text-3xl text-light-black mb-4">
        NZ's electricity generation is relatively...
      </h2>
      <div class="flex">
        <img src="../assets/placeholder.png" class="mr-4 w-16 h-16" alt="" />
        <p class="text-off-black text-lg w-3/5">
          Low carbon right now. It's a good time to charge your Tesla Model
          3<span class="font-semibold"> until 6am. </span>
        </p>
      </div>
    </div>
  </div>
  <div class="sides mb-8">
    <div class="flex flex-col justify-center bg-white rounded-[24px] py-6 px-6">
      <div class="w-full flex justify-between text-orange text-xl mb-1">
        <p>EV tips</p>
        <svg
          class="mr-1"
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
      <h2 class="text-3xl text-light-black mb-4">Re-gen whenever you can</h2>
      <div class="flex">
        <img
          src="../assets/placeholder.png"
          class="mr-4 w-20 object-contain"
          alt=""
        />
        <p class="text-off-black text-lg w-full mr-2">
          Keep a good following distance to make use of re-gen braking - you'll
          get more distance out of your EV!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Insights",
  data: function () {
    return {
      timeframe: 0,
      graph: 0,
      chartOptions: {
        chart: {
          type: "radialBar",
        },
        colors: ["#F26526"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "50%",
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
              value: {
                color: "#F26526",
                fontSize: "18px",
                fontWeight: "600",
                offsetY: "-10",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "solid",
        },
        stroke: {
          lineCap: "round",
        },
        labels: [""],
      },
    };
  },
};
</script>
