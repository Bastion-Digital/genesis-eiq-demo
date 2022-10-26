<template>
  <div class="bg-dark-orange pt-8 flex flex-col text-light-black">
    <router-link to="/">
      <div class="flex items-center sides">
        <img src="../assets/prev.svg" class="w-8 h-8" alt="" />
        <h2 class="text-white text-3xl ml-6">EV</h2>
      </div></router-link
    >
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
  <div class="gradient-alt">
    <div class="flex justify-center items-center flex-col mb-12">
      <div
        class="bg-light-gray w-full flex justify-center items-center flex-col px-3 md:px-0"
      >
        <h2 class="text-2xl md:text-3xl pt-12 pb-3 text-center">
          Your
          <span class="text-genesis-orange">Electric Vehicle</span> gets you
        </h2>
        <p class="text-md md:text-xl mb-20">
          50% lower rates every night 9pm - 7am
        </p>
      </div>

      <div class="relative w-full">
        <img
          src="../assets/car-chargenet.png"
          class="mx-auto z-10 w-1/2 drop-shadow-lg relative"
          alt=""
        />

        <div class="bg-light-gray h-1/2 w-full top-0 z-0 absolute"></div>
      </div>
    </div>
    <div class="px-3 sides text-light-black mb-8">
      <div
        class="bg-white rounded-[24px] flex flex-col justify-center items-center py-8 px-3 md:px-0"
      >
        <div
          class="text-orange rounded-full bg-pale-orange p-2 w-4/5 flex mb-4"
        >
          <div
            @click="timeframe = 0"
            :class="{ 'bg-orange text-white': timeframe === 0 }"
            class="transition cursor-pointer rounded-full py-4 px-3 md:px-6 text-md md:text-xl w-1/2 flex justify-center"
          >
            {{ currMonth }}
          </div>
          <div
            @click="timeframe = 1"
            :class="{ 'bg-orange text-white': timeframe === 1 }"
            class="transition cursor-pointer rounded-full py-4 px-3 md:px-6 text-md md:text-xl w-1/2 flex justify-center"
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
            <span class="text-green ml-[0.33rem]">50% lower rate</span> with
            your EV Plan
          </p>
          <div class="w-16 mt-8 border-b-2 border-off-black opacity-30"></div>
          <div class="flex justify-between items-center px-0 md:px-4">
            <div class="w-1/4">
              <apexchart
                :options="chartOptions"
                :series="[24]"
                height="140px"
                width="80px"
                type="radialBar"
              />
            </div>
            <p class="w-auto ml-5">
              of your home's electricity use is at night time.
            </p>
          </div>
          <div class="flex justify-between items-center px-0 md:px-4">
            <div class="w-1/4">
              <apexchart
                :options="chartOptions"
                :series="[51]"
                height="140px"
                width="80px"
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
            <span class="text-green ml-[0.33rem]">50% lower rate</span> with
            your EV Plan
          </p>
          <div class="w-16 mt-8 border-b-2 border-off-black opacity-30"></div>
          <div class="flex justify-between items-center px-0 md:px-4">
            <div class="w-1/4">
              <apexchart
                :options="chartOptions"
                :series="[22]"
                height="140px"
                width="80px"
                type="radialBar"
              />
            </div>
            <p class="w-auto ml-5">
              of your home's electricity use is at night time.
            </p>
          </div>
          <div class="flex justify-between items-center px-0 md:px-4">
            <div class="w-1/4">
              <apexchart
                :options="chartOptions"
                :series="[53]"
                height="140px"
                width="80px"
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
          class="transition cursor-pointer text-white rounded-full py-4 px-3 md:px-6 text-md md:text-xl w-1/2 flex justify-center"
        >
          Electricity use
        </div>
        <div
          @click="graph = 1"
          :class="{ 'bg-white text-orange': graph === 1 }"
          class="transition cursor-pointer text-white rounded-full py-4 px-3 md:px-6 text-md md:text-xl w-1/2 flex justify-center"
        >
          NZ low carbon
        </div>
      </div>
    </div>
    <div
      v-if="graph === 0"
      class="mx-8 bg-white rounded-2xl w-auto p-6 text-light-black relative"
    >
      <h3 class="text-xl mb-4">
        {{ dayString }}, {{ currDate }} {{ shortMonth }} {{ currYear }}
      </h3>
      <div class="flex justify-between w-full text-genesis-orange text-lg mb-1">
        <span>Day usage</span>
        <span>45kWh for $4.50</span>
      </div>
      <div class="flex justify-between w-full text-lg mb-4">
        <span>Night usage</span>
        <span>96kWh for $5.00*</span>
      </div>
      <span class="text-lg"
        >*compared to <span class="font-semibold">$10.00</span> if this was
        during the day!</span
      >
      <div
        class="w-6 h-6 bg-white left-[46.5%] -bottom-2 rotate-45 absolute"
      ></div>
    </div>
    <div
      v-else
      class="mx-8 bg-white rounded-2xl w-auto p-6 text-light-black relative"
    >
      <h3 class="text-xl">
        {{ dayString }}, {{ currDate }} {{ shortMonth }} {{ currYear }}
      </h3>
      <p class="text-lg mb-4">New Zealand's carbon generation</p>
      <p class="text-lg text-genesis-orange">7% of the day was low carbon</p>
      <p class="text-lg text-light-black mb-2">
        90% of the night was low carbon
      </p>

      <div
        class="w-6 h-6 bg-white left-[46.5%] -bottom-2 rotate-45 absolute"
      ></div>
    </div>
    <div class="relative w-full">
      <img
        v-if="graph === 0"
        class="mx-auto relative w-full z-[7]"
        src="../assets/insightGraph.svg"
        alt=""
      />
      <img
        v-else
        class="mx-auto relative w-full z-[7]"
        src="../assets/carbonGraph.svg"
        alt=""
      />
      <div
        class="w-full h-[51%] absolute top-[44.5%] text-xl flex z-[8] justify-between px-[3.25rem] text-white"
      >
        <div class="flex flex-col" :key="date.day" v-for="date in dates">
          <p>{{ date.day }}</p>
          <p>{{ date.date }}</p>
        </div>
      </div>
      <p
        class="absolute uppercase font-semibold text-md text-center top-[47.5%] -rotate-90 z-[8] text-white"
      >
        {{ shortMonth }}
      </p>
      <div
        class="w-full brown-gradient h-[54%] absolute top-[49%] rounded-b-3xl"
      ></div>
    </div>
  </div>
  <div class="bg-light-gray pt-8">
    <div class="sides mb-8">
      <div
        class="flex flex-col justify-center bg-white rounded-[24px] py-6 px-6"
      >
        <div class="w-full text-orange text-xl mb-1">EV Insights</div>
        <h2 class="text-3xl text-light-black">
          Right now it's a 50% lower rate to charge your
          <span class="text-orange">Electric Vehicle</span> until 7am
        </h2>
        <img
          src="../assets/car-charging.svg"
          class="pb-2 w-3/5 my-8 mx-auto"
          alt=""
        />
        <p class="text-off-black text-center text-lg mb-4">
          Take advantage of reduced rates at reduced rates at night by using
          other appliances.
        </p>
        <div class="flex w-4/5 md:w-3/4 mx-auto justify-between">
          <div
            class="w-16 h-16 bg-pale-orange rounded-full flex justify-center items-center"
          >
            <img src="../assets/games.svg" class="m-auto w-3/5" alt="" />
          </div>
          <div
            class="w-16 h-16 bg-pale-orange rounded-full flex justify-center items-center"
          >
            <img src="../assets/aircon.svg" class="m-auto w-3/5" alt="" />
          </div>
          <div
            class="w-16 h-16 bg-pale-orange rounded-full flex justify-center items-center"
          >
            <img src="../assets/laundry.svg" class="m-auto w-1/2" alt="" />
          </div>
        </div>
      </div>
    </div>
    <div class="sides mb-8">
      <div
        class="flex flex-col justify-center bg-white rounded-[24px] py-6 px-6"
      >
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
        <div class="flex" v-if="goodTimeToCharge">
          <div class="mr-4 w-16 h-16 rounded-full eco-low mt-2"></div>

          <p class="text-off-black text-lg w-3/5">
            Low carbon right now. It's a good time to charge your EV<span
              class="font-semibold"
            >
              until 6am.
            </span>
          </p>
        </div>
        <div class="flex" v-else>
          <div class="mr-4 w-16 h-16 rounded-full eco-high mt-2"></div>
          <p class="text-off-black text-lg w-3/5">
            High carbon right now. It's not a good time to charge your EV.
          </p>
        </div>
      </div>
    </div>
    <div class="sides mb-8">
      <div
        class="flex flex-col justify-center bg-white rounded-[24px] py-6 px-6"
      >
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
        <h2 class="text-3xl text-light-black mb-4">
          Avoid plugging in your EV to charge as soon as you get home
        </h2>
        <div class="flex">
          <img
            src="../assets/coal.svg"
            class="mr-4 w-20 object-contain"
            alt=""
          />
          <p class="text-off-black text-lg w-full mr-2">
            This is because from 5pm - 8pm the carbon generation is at its
            highest in NZ.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Insights",
  data: function () {
    // Creating a date object
    const today = new Date();

    // Getting full month name (e.g. "June")
    const month = today.toLocaleString("default", { month: "long" });
    const shortMonth = today.toLocaleString("default", { month: "short" });

    const days = ["M", "T", "W", "Th", "F", "S", "S"];
    const date = today.getDate();
    const day = today.getDay();
    const year = today.getFullYear();
    const dayString = today
      .toLocaleString("en-us", { weekday: "long" })
      .slice(0, 3);
    const dates = [];

    //get 3 dates on either side of current date
    for (let i = -3; i <= 3; i++) {
      dates.push({ day: days.at(day + i - 1), date: date + i });
    }

    return {
      dates: dates,
      currDate: date,
      currYear: year,
      dayString: dayString,
      shortMonth: shortMonth,
      currMonth: month,
      goodTimeToCharge: false,
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
  created() {
    this.getGoodTimeToCharge();
  },
  methods: {
    getGoodTimeToCharge() {
      axios
        .get("/.netlify/functions/getRenewables")
        .then((res) => {
          console.log(res);
          this.goodTimeToCharge = res.data.data[0] > 90;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
