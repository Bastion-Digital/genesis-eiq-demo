<template class="bg-white">
  <div ref="device_frame" class="bg-white fullScreen">
    <!-- Dashboard Heading -->

    <div>
      <div class="flex-grow-0 text-left w-full top bottom gen-bg text-white">
        <TopNavigation
          title="Electricity Forecast"
          conversionActive="false"
          link="/"
        />
      </div>
      <div v-if="showSpeechBubble">
        <div
          class="forecast-top bg-white bubble text-black shadow rounded-xl p-6 z-10"
        >
          <div class="absolute -bottom-2 triangle-up" style="left: 47.5%"></div>
          <p class="text-sm text-center">
            We analyse the live weather forecast, customer's usage patterns and
            days of the week to estimate the energy forecast for each customer
            by day over the coming week.
          </p>
        </div>
      </div>

      <div
        class="relative focus:outline-none block bg-white flex flex-col w-full h-auto rounded-md p-6 text-off-black"
      >
        <router-link
          to="/usage/monthly"
          class="flex justify-between items-center cursor:pointer w-full color-light-black border-b border-gray-300 py-2"
        >
          <div class="flex text-left text-sm">Today's Forecast</div>
          <div class="discount">
            <p>Incl. discount</p>
          </div>
        </router-link>

        <div class="flex flex-col">
          <div class="flex w-full pt-4 bg-white">
            <div class="w-3/5">
              <div>
                <div class="text-xs font-light pb- text-left">
                  Electricity usage
                </div>
              </div>
              <div class="flex">
                <div
                  class="text-left text-xl font-semibold font-largecurrency tracking-wide"
                >
                  $
                </div>
                <div
                  class="text-left text-4xl font-semibold font-largecurrency tracking-wide"
                >
                  {{ this.currentDate.generatedDollar }}
                </div>
                <div
                  class="text-left text-xl font-semibold font-largecurrency tracking-wide"
                >
                  .{{  (Math.round(this.currentDate.generatedCents * 100) / 100) }}
                </div>
              </div>
              <div class="flex pt-1">
                <div class="text-xs font-light text-left">
                  ${{ this.currentDate.min }}
                </div>
                <div class="text-xs">
                  <svg
                    style="height: 1em; width: 1em"
                    class="pl-1"
                    viewBox="0 0 10 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.21825 4.05261H4.39915V8.72533C4.39915 8.87613 4.52302 9 4.67993 9H5.51949C5.67364 9 5.80027 8.87613 5.80027 8.72533V4.05261H6.98117C7.17661 4.05261 7.27295 3.82103 7.13532 3.68639L5.25248 2.06261C5.16715 1.97913 5.02952 1.97913 4.94418 2.06261L3.0641 3.68639C2.92647 3.82103 3.02556 4.05261 3.21825 4.05261Z"
                      fill="#464958"
                    />
                    <rect width="10" height="1" fill="#464958" />
                  </svg>
                </div>
                <div class="ml-2 text-xs font-light text-left">
                  ${{ this.currentDate.max }}
                </div>
                <div class="text-xs">
                  <svg
                    style="height: 1em; width: 1em; margin-top: 1px"
                    class="pl-1"
                    viewBox="0 0 10 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.78175 4.94739L5.60085 4.94739L5.60085 0.274672C5.60085 0.123874 5.47698 3.20471e-06 5.32007 3.191e-06L4.48051 3.1176e-06C4.32636 3.10412e-06 4.19973 0.123873 4.19973 0.274672L4.19973 4.94739L3.01883 4.94739C2.82339 4.94739 2.72705 5.17897 2.86468 5.31361L4.74752 6.93739C4.83285 7.02087 4.97048 7.02087 5.05582 6.93739L6.9359 5.31361C7.07353 5.17897 6.97444 4.94739 6.78175 4.94739Z"
                      fill="#464958"
                    />
                    <rect
                      x="10"
                      y="9"
                      width="10"
                      height="1"
                      transform="rotate(-180 10 9)"
                      fill="#464958"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="w-2/5">
              <div>
                <div
                  v-show="this.currentDate.description.length > 0"
                  class="text-xs font-light pb- text-center w-full"
                >
                  {{ this.currentDate.description }}
                </div>
              </div>
              <div class="flex justify-center items-center px-2 pb-2 w-full">
                <img
                  v-if="this.currentDate.icon.length > 42"
                  :src="this.currentDate.icon"
                  class="h-12"
                />
              </div>
              <div class="flex pt-1 w-full align-center justify-center">
                <div class="text-xs font-light text-left">
                  {{ this.currentDate.min_temp }} ºC
                </div>
                <div class="text-xs">
                  <svg
                    style="height: 1em; width: 1em"
                    class="pl-1"
                    viewBox="0 0 10 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.21825 4.05261H4.39915V8.72533C4.39915 8.87613 4.52302 9 4.67993 9H5.51949C5.67364 9 5.80027 8.87613 5.80027 8.72533V4.05261H6.98117C7.17661 4.05261 7.27295 3.82103 7.13532 3.68639L5.25248 2.06261C5.16715 1.97913 5.02952 1.97913 4.94418 2.06261L3.0641 3.68639C2.92647 3.82103 3.02556 4.05261 3.21825 4.05261Z"
                      fill="#464958"
                    />
                    <rect width="10" height="1" fill="#464958" />
                  </svg>
                </div>
                <div class="ml-2 text-xs font-light text-left">
                  {{ this.currentDate.max_temp }} ºC
                </div>
                <div class="text-xs">
                  <svg
                    style="height: 1em; width: 1em; margin-top: 1px"
                    class="pl-1"
                    viewBox="0 0 10 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.78175 4.94739L5.60085 4.94739L5.60085 0.274672C5.60085 0.123874 5.47698 3.20471e-06 5.32007 3.191e-06L4.48051 3.1176e-06C4.32636 3.10412e-06 4.19973 0.123873 4.19973 0.274672L4.19973 4.94739L3.01883 4.94739C2.82339 4.94739 2.72705 5.17897 2.86468 5.31361L4.74752 6.93739C4.83285 7.02087 4.97048 7.02087 5.05582 6.93739L6.9359 5.31361C7.07353 5.17897 6.97444 4.94739 6.78175 4.94739Z"
                      fill="#464958"
                    />
                    <rect
                      x="10"
                      y="9"
                      width="10"
                      height="1"
                      transform="rotate(-180 10 9)"
                      fill="#464958"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- ROW 2 -->

          <router-link
            to="/usage/daily"
            class="flex justify-between items-center cursor:pointer w-full color-light-black border-b border-gray-300 py-2 pt-8"
          >
            <div class="flex text-left text-sm">Next 6 days forecast</div>
            <div class="text-grey-300 text-xs">
              <p v-if="startDay.length > 0">{{ startDay }} - {{ endDay }}</p>
            </div>
          </router-link>

          <div class="flex flex-col pb-4 border-b border-gray-300">
            <div class="flex justify-between w-full h-full pt-4">
              <div class="w-3/5">
                <div>
                  <div class="text-xs font-light text-left">
                    Electricity usage
                  </div>
                </div>
                <div class="flex">
                  <div
                    class="text-left text-xl font-semibold font-largecurrency tracking-wide"
                  >
                    $
                  </div>
                  <div
                    v-if="getWeekGenerated.dollar > 0"
                    class="text-left text-4xl font-semibold font-largecurrency tracking-wide"
                  >
                    {{ getWeekGenerated.dollar }}
                  </div>
                  <div
                    v-if="getWeekGenerated.cents > 0"
                    class="text-left text-xl font-semibold font-largecurrency tracking-wide"
                  >
                    .{{ (Math.round(getWeekGenerated.cents * 100) / 100) }}
                  </div>
                </div>
                <div class="flex pt-1">
                  <div class="text-xs font-light text-left">${{ weekMax }}</div>
                  <div class="text-xs">
                    <svg
                      style="height: 1em; width: 1em"
                      class="pl-1"
                      viewBox="0 0 10 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.21825 4.05261H4.39915V8.72533C4.39915 8.87613 4.52302 9 4.67993 9H5.51949C5.67364 9 5.80027 8.87613 5.80027 8.72533V4.05261H6.98117C7.17661 4.05261 7.27295 3.82103 7.13532 3.68639L5.25248 2.06261C5.16715 1.97913 5.02952 1.97913 4.94418 2.06261L3.0641 3.68639C2.92647 3.82103 3.02556 4.05261 3.21825 4.05261Z"
                        fill="#464958"
                      />
                      <rect width="10" height="1" fill="#464958" />
                    </svg>
                  </div>
                  <div class="ml-2 text-xs font-light text-left">
                    ${{ weekMin }}
                  </div>
                  <div class="text-xs">
                    <svg
                      style="height: 1em; width: 1em; margin-top: 1px"
                      class="pl-1"
                      viewBox="0 0 10 9"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.78175 4.94739L5.60085 4.94739L5.60085 0.274672C5.60085 0.123874 5.47698 3.20471e-06 5.32007 3.191e-06L4.48051 3.1176e-06C4.32636 3.10412e-06 4.19973 0.123873 4.19973 0.274672L4.19973 4.94739L3.01883 4.94739C2.82339 4.94739 2.72705 5.17897 2.86468 5.31361L4.74752 6.93739C4.83285 7.02087 4.97048 7.02087 5.05582 6.93739L6.9359 5.31361C7.07353 5.17897 6.97444 4.94739 6.78175 4.94739Z"
                        fill="#464958"
                      />
                      <rect
                        x="10"
                        y="9"
                        width="10"
                        height="1"
                        transform="rotate(-180 10 9)"
                        fill="#464958"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- <div class='text-sm'><pre>{{screenWidthPoints}}</pre></div> -->
      <div class="relative">
        <div class="px-6 py-2 grid grid-cols-6 gap-2">
          <div class="flex flex-col" ref="colone">
            <div class="text-center text-sm">{{ dayOne.day }}</div>
            <div class="text-center text-xxs font-bold mb-2">
              {{ dayOne.date }}
            </div>
            <div
              class="text-center flex justify-center align-center w-full pb-2"
            >
              <img
                v-if="dayOne.icon.length > 42"
                :src="dayOne.icon"
                class="h-8"
              />
            </div>
            <div
              class="h-32 bg-forecast-gray flex flex-col justify-between py-2"
            >
              <div class="text-center text-xs text-gray-500">
                ${{ toFixed(dayOne.max, 2) }}
              </div>
              <div class="text-center text-xs text-gray-500">
                ${{ toFixed(dayOne.min, 2) }}
              </div>
            </div>
          </div>

          <div class="flex flex-col" ref="coltwo">
            <div class="text-center text-sm">{{ dayTwo.day }}</div>
            <div class="text-center text-xxs font-bold mb-2">
              {{ dayTwo.date }}
            </div>
            <div
              class="text-center flex justify-center align-center w-full pb-2"
            >
              <img
                v-if="dayTwo.icon.length > 42"
                :src="dayTwo.icon"
                class="h-8"
              />
            </div>
            <div
              class="h-32 bg-forecast-gray flex flex-col justify-between py-2"
            >
              <div class="text-center text-xs text-gray-500">
                ${{ toFixed(dayTwo.max, 2) }}
              </div>
              <div class="text-center text-xs text-gray-500">
                ${{ toFixed(dayTwo.min, 2) }}
              </div>
            </div>
          </div>

          <div class="flex flex-col" ref="colthree">
            <div class="text-center text-sm">{{ dayThree.day }}</div>
            <div class="text-center text-xxs font-bold mb-2">
              {{ dayThree.date }}
            </div>
            <div
              class="text-center flex justify-center align-center w-full pb-2"
            >
              <img
                v-if="dayThree.icon.length > 42"
                :src="dayThree.icon"
                class="h-8"
              />
            </div>
            <div
              class="h-32 bg-forecast-gray flex flex-col justify-between py-2"
            >
              <div class="text-center text-xs text-gray-500">
                ${{ toFixed(dayThree.max, 2) }}
              </div>
              <div class="text-center text-xs text-gray-500">
                ${{ toFixed(dayThree.min, 2) }}
              </div>
            </div>
          </div>

          <div class="flex flex-col" ref="colfour">
            <div class="text-center text-sm">{{ dayFour.day }}</div>
            <div class="text-center text-xxs font-bold mb-2">
              {{ dayFour.date }}
            </div>
            <div
              class="text-center flex justify-center align-center w-full pb-2"
            >
              <img
                v-if="dayFour.icon.length > 42"
                :src="dayFour.icon"
                class="h-8"
              />
            </div>
            <div
              class="h-32 bg-forecast-gray flex flex-col justify-between py-2"
            >
              <div class="text-center text-xs text-gray-500">
                ${{ toFixed(dayFour.max, 2) }}
              </div>
              <div class="text-center text-xs text-gray-500">
                ${{ toFixed(dayFour.min, 2) }}
              </div>
            </div>
          </div>

          <div class="flex flex-col" ref="colfive">
            <div class="text-center text-sm">{{ dayFive.day }}</div>
            <div class="text-center text-xxs font-bold mb-2">
              {{ dayFive.date }}
            </div>
            <div
              class="text-center flex justify-center align-center w-full pb-2"
            >
              <img
                v-if="dayFive.icon.length > 42"
                :src="dayFive.icon"
                class="h-8"
              />
            </div>
            <div
              class="h-32 bg-forecast-gray flex flex-col justify-between py-2"
            >
              <div class="text-center text-xs text-gray-500">
                ${{ toFixed(dayFive.max, 2) }}
              </div>
              <div class="text-center text-xs text-gray-500">
                ${{ toFixed(dayFive.min, 2) }}
              </div>
            </div>
          </div>

          <div class="flex flex-col" ref="colsix">
            <div class="text-center text-sm">{{ daySix.day }}</div>
            <div class="text-center text-xxs font-bold mb-2">
              {{ daySix.date }}
            </div>
            <div
              class="text-center flex justify-center align-center w-full pb-2"
            >
              <img
                v-if="daySix.icon.length > 42"
                :src="daySix.icon"
                class="h-8"
              />
            </div>
            <div
              class="h-32 bg-forecast-gray flex flex-col justify-between py-2"
            >
              <div class="text-center text-xs text-gray-500">
                ${{ toFixed(daySix.max, 2) }}
              </div>
              <div class="text-center text-xs text-gray-500">
                ${{ toFixed(daySix.min, 2) }}
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-full w-full absolute top-1/2 h-128" id="chart_id">
          <svg class="chart" style="width: 100%" id="svg">
            <polyline
              id="polyline"
              fill="none"
              stroke="#F58025"
              stroke-width="3"
              points=""
            />

            <!-- <circle
              cx="100"
              cy=20
              r="5"
              stroke="green"
              stroke-width="3"
              fill="#F58025"
            /> -->

            <circle
              :cx="colOne"
              v-if="dayOne.point > 0"
              :cy="dayOne.point"
              r="5"
              stroke="#F58025"
              stroke-width="3"
              fill="#F58025"
            />
            <circle
              :cx="colTwo"
              v-if="dayTwo.point > 0"
              :cy="dayTwo.point"
              r="5"
              stroke="#F58025"
              stroke-width="3"
              fill="#F58025"
            />
            <circle
              :cx="colThree"
              v-if="dayThree.point > 0"
              :cy="dayThree.point"
              r="5"
              stroke="#F58025"
              stroke-width="3"
              fill="#F58025"
            />
            <circle
              :cx="colFour"
              v-if="dayFour.point > 0"
              :cy="dayFour.point"
              r="5"
              stroke="#F58025"
              stroke-width="3"
              fill="#F58025"
            />
            <circle
              :cx="colFive"
              v-if="dayFive.point > 0"
              :cy="dayFive.point"
              r="5"
              stroke="#F58025"
              stroke-width="3"
              fill="#F58025"
            />
            <circle
              :cx="colSix"
              v-if="daySix.point > 0"
              :cy="daySix.point"
              r="5"
              stroke="#F58025"
              stroke-width="3"
              fill="#F58025"
            />

            <line
              :x1="colOne"
              v-if="dayOne.point > 0"
              :y1="dayOne.point"
              :x2="colTwo"
              :y2="dayTwo.point"
              stroke-width="3"
              stroke="#F58025"
            />
            <line
              :x1="colTwo"
              v-if="dayTwo.point > 0"
              :y1="dayTwo.point"
              :x2="colThree"
              :y2="dayThree.point"
              stroke-width="3"
              stroke="#F58025"
            />
            <line
              :x1="colThree"
              v-if="dayThree.point > 0"
              :y1="dayThree.point"
              :x2="colFour"
              :y2="dayFour.point"
              stroke-width="3"
              stroke="#F58025"
            />
            <line
              :x1="colFour"
              v-if="dayFour.point > 0"
              :y1="dayFour.point"
              :x2="colFive"
              :y2="dayFive.point"
              stroke-width="3"
              stroke="#F58025"
            />
            <line
              :x1="colFive"
              v-if="dayFive.point > 0"
              :y1="dayFive.point"
              :x2="colSix"
              :y2="daySix.point"
              stroke-width="3"
              stroke="#F58025"
            />
          </svg>
        </div>
      </div>
      <div
        class="pb-2 pt-4 flex w-full text-center pl-3 pr-2 text-gray-500 bg-white"
      >
        <div
          v-if="customData"
          class="mx-4 px-4 text-xs py-2 border border-orange rounded-lg shadow-lg"
        >
          <div class="flex justify-start items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div>We’re currently displaying forecast data for Auckland.</div>
          </div>
        </div>
      </div>
      <div
        class="pb-2 pt-2 flex w-full text-center pl-3 pr-2 text-gray-500 bg-white"
        style="font-size: 10px"
      >
        This is a guided demonstration of the Genesis Energy IQ app only. All
        data and details in this demo are generic examples only and details do
        not reflect your home's usage or billing. Eligibility criteria and Ts
        and Cs apply to the Energy IQ app.
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TopNavigation from "@/components/TopNavigation.vue";
import clearSkyDay from "@/assets/forecast/01d@2x.png";
// import fewCloudsDay from "@/assets/forecast/02d@2x.png";
// import scatteredCloudsDay from "@/assets/forecast/03d@2x.png";
// import brokenCloudsDay from "@/assets/forecast/04d@2x.png";
// import showerRainDay from "@/assets/forecast/09d@2x.png";
// import rainDay from "@/assets/forecast/10d@2x.png";
// import stormDay from "@/assets/forecast/11d@2x.png";
// import snowDay from "@/assets/forecast/13d@2x.png";
// import mistwindDay from "@/assets/forecast/50d@2x.png";

// URL
let origin = window.location.origin;
const domain = origin + "/img/forecast/";

export default {
  name: "forecast",
  data() {
    return {
      customData: false,
      output: null,
      colOne: "0",
      colTwo: "0",
      colThree: "0",
      colFour: "0",
      colFive: "0",
      colSix: "0",

      startDay: "",
      endDay: "",
      weekMin: null,
      weekMax: null,
      weekGenerated: null,
      weekGeneratedDollars: "",
      weekGeneratedCents: "",
      currentDate: {
        day: "",
        date: "",
        description: "",
        icon: clearSkyDay,
        min: "",
        max: "",
        generated: "",
        point: "",
        generatedDollar: "",
        generatedCents: "",
      },
      dayOne: {
        day: "",
        date: "",
        description: "",
        icon: clearSkyDay,
        min: "",
        max: "",
        generated: "",
        point: "",
        generatedDollar: "",
        generatedCents: "",
      },
      dayTwo: {
        day: "",
        date: "",
        description: "",
        icon: clearSkyDay,
        min: "",
        max: "",
        generated: "",
        point: "",
        generatedDollar: "",
        generatedCents: "",
      },
      dayThree: {
        day: "",
        date: "",
        description: "",
        icon: clearSkyDay,
        min: "",
        max: "",
        generated: "",
        point: "",
        generatedDollar: "",
        generatedCents: "",
      },
      dayFour: {
        day: "",
        date: "",
        description: "",
        icon: clearSkyDay,
        min: "",
        max: "",
        generated: "",
        point: "",
        generatedDollar: "",
        generatedCents: "",
      },
      dayFive: {
        day: "",
        date: "",
        description: "",
        icon: clearSkyDay,
        min: "",
        max: "",
        generated: "",
        point: "",
        generatedDollar: "",
        generatedCents: "",
      },
      daySix: {
        day: "",
        date: "",
        description: "",
        icon: clearSkyDay,
        min: "",
        max: "",
        generated: "",
        point: "",
        generatedDollar: "",
        generatedCents: "",
      },
      days: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      isGenesisCustomer: false,
      geoError: "",
      weatherResponse: "",
      gettingLocation: false,
      location: "",
      weatherIcon: null,
      weatherDescription: "",
      dailyData: [],
      showSpeechBubble: false,
      date: null,
      currentMonthString: null,
      currentYearString: null,
    };
  },
  created() {
    this.getGeoLoc();
    this.customData = true;

    //Check if Genesis Customer
    if (sessionStorage.getItem("GC") === true) {
      this.isGenesisCustomer = true;
    } else {
      this.isGenesisCustomer = false;
    }

    //Geolocation Check
    if (!("geolocation" in navigator)) {
      this.geoError = true;
      this.getGeoLoc();
      this.customData = true;
      return;
    }

    //Geolocation
    this.gettingLocation = true;
    this.customData = true;

    // get position
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.gettingLocation = false;
        this.location = pos;
        this.geoError = false;
        this.customData = false;

        //Serverless Scripts Call
        axios
          .get(
            "/.netlify/functions/getForecast?lat=" +
              this.location.coords.latitude +
              "&long=" +
              this.location.coords.longitude
          )
          .then((response) => {
            this.dailyData = response.data.daily;

            if (response.data.current) {
              let date = new Date(
                (response.data.current.dt + 13 * 3600) * 1000
              );

              (this.currentDate.icon =
                domain + response.data.current.weather[0].icon + "@2x.png"),
                (this.currentDate.description =
                  response.data.current.weather[0].main);
              this.currentDate.min_temp = response.data.current.temp.toFixed(2);

              this.currentDate.max_temp = response.data.current.temp.toFixed(2);
              this.currentDate.min = this.getMinCost(
                response.data.current.weather[0].main
              );
              this.currentDate.max = this.getMaxCost(
                response.data.current.weather[0].main
              );
              this.currentDate.generated = this.getGeneratedCost(
                response.data.current.weather[0].main
              );

              let splitCost = String(this.currentDate.generated).split(".");
              this.currentDate.generatedDollar = splitCost[0];
              this.currentDate.generatedCents = splitCost[1];
            }

            for (let i = 0; i < response.data.daily.length; i++) {
              if (i == 0) {
                let dailydata = response.data.daily[0];
                let date = new Date(dailydata.dt * 1000);
                this.dayOne.day = this.days[date.getDay()];
                this.dayOne.date =
                  date.getDate() + 1 + " " + this.months[date.getMonth()];
                this.startDay = this.days[date.getDay()];
                this.dayOne.icon =
                  domain + dailydata.weather[0].icon + "@2x.png";
                this.dayOne.min = this.getMinCost(dailydata.weather[0].main);
                this.dayOne.max = this.getMaxCost(dailydata.weather[0].main);
                this.dayOne.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );

                let splitCost = String(this.dayOne.generated).split(".");
                this.dayOne.generatedDollar = splitCost[0];
                this.dayOne.generatedCents = splitCost[1];

                dailydata = null;
                date = null;
              }

              if (i == 1) {
                let dailydata = response.data.daily[1];
                let date = new Date(dailydata.dt * 1000);
                this.dayTwo.day = this.days[date.getDay()];
                this.dayTwo.date =
                  date.getDate() + 1 + " " + this.months[date.getMonth()];
                this.dayTwo.icon =
                  domain + dailydata.weather[0].icon + "@2x.png";
                this.dayTwo.min = this.getMinCost(dailydata.weather[0].main);
                this.dayTwo.max = this.getMaxCost(dailydata.weather[0].main);
                this.dayTwo.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );

                let splitCost = String(this.dayTwo.generated).split(".");
                this.dayTwo.generatedDollar = splitCost[0];
                this.dayTwo.generatedCents = splitCost[1];

                dailydata = null;
                date = null;
              }
              if (i == 2) {
                let dailydata = response.data.daily[2];
                let date = new Date(dailydata.dt * 1000);
                this.dayThree.day = this.days[date.getDay()];
                this.dayThree.date =
                  date.getDate() + 1 + " " + this.months[date.getMonth()];
                this.dayThree.icon =
                  domain + dailydata.weather[0].icon + "@2x.png";
                this.dayThree.min = this.getMinCost(dailydata.weather[0].main);
                this.dayThree.max = this.getMaxCost(dailydata.weather[0].main);
                this.dayThree.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );

                let splitCost = String(this.dayThree.generated).split(".");
                this.dayThree.generatedDollar = splitCost[0];
                this.dayThree.generatedCents = splitCost[1];
              }
              if (i == 3) {
                let dailydata = response.data.daily[3];
                let date = new Date(dailydata.dt * 1000);
                this.dayFour.day = this.days[date.getDay()];
                this.dayFour.date =
                  date.getDate() + 1 + " " + this.months[date.getMonth()];
                this.dayFour.icon =
                  domain + dailydata.weather[0].icon + "@2x.png";
                this.dayFour.min = this.getMinCost(dailydata.weather[0].main);
                this.dayFour.max = this.getMaxCost(dailydata.weather[0].main);
                this.dayFour.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );

                let splitCost = String(this.dayFour.generated).split(".");
                this.dayFour.generatedDollar = splitCost[0];
                this.dayFour.generatedCents = splitCost[1];
              }
              if (i == 4) {
                let dailydata = response.data.daily[4];
                let date = new Date(dailydata.dt * 1000);
                this.dayFive.day = this.days[date.getDay()];
                this.dayFive.date =
                  date.getDate() + 1 + " " + this.months[date.getMonth()];
                this.dayFive.icon =
                  domain + dailydata.weather[0].icon + "@2x.png";
                this.dayFive.min = this.getMinCost(dailydata.weather[0].main);
                this.dayFive.max = this.getMaxCost(dailydata.weather[0].main);
                this.dayFive.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );

                let splitCost = String(this.dayFive.generated).split(".");
                this.dayFive.generatedDollar = splitCost[0];
                this.dayFive.generatedCents = splitCost[1];
              }
              if (i == 5) {
                let dailydata = response.data.daily[5];
                let date = new Date(dailydata.dt * 1000);
                this.daySix.day = this.days[date.getDay()];

                this.daySix.date =
                  date.getDate() + 1 + " " + this.months[date.getMonth()];
                this.endDay = this.days[date.getDay() + 1];
                this.daySix.icon =
                  domain + dailydata.weather[0].icon + "@2x.png";

                this.daySix.min = this.getMinCost(dailydata.weather[0].main);
                this.daySix.max = this.getMaxCost(dailydata.weather[0].main);
                this.daySix.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );

                let splitCost = String(this.daySix.generated).split(".");
                this.daySix.generatedDollar = splitCost[0];
                this.daySix.generatedCents = splitCost[1];
              }


            //(Math.round(num * 100) / 100).toFixed(2);
              this.weekMin = Math.round(((
                this.dayOne.min +
                  this.dayTwo.min +
                  this.dayThree.min +
                  this.dayFour.min +
                  this.dayFive.min +
                  this.daySix.min) * 100) / 100).toFixed(2);

              this.weekMax = Math.round(((
                this.dayOne.max +
                  this.dayTwo.max +
                  this.dayThree.max +
                  this.dayFour.max +
                  this.dayFive.max +
                  this.dayFive.max) * 100) / 100).toFixed(2);

              // Find the lowest cost over the entire week
              let minArray = [
                this.dayOne.min,
                this.dayTwo.min,
                this.dayThree.min,
                this.dayFour.min,
                this.dayFive.min,
                this.daySix.min,
              ];
              let minWeek = Math.min(
                this.dayOne.min * 100,
                this.dayTwo.min * 100,
                this.dayThree.min * 100,
                this.dayFour.min * 100,
                this.dayFive.min * 100,
                this.daySix.min * 100
              );

              // Find the highest cost over the entire week
              let maxArray = [
                this.dayOne.max,
                this.dayTwo.max,
                this.dayThree.max,
                this.dayFour.max,
                this.dayFive.max,
                this.daySix.max,
              ];
              let maxWeek = Math.max(
                this.dayOne.max * 100,
                this.dayTwo.max * 100,
                this.dayThree.max * 100,
                this.dayFour.max * 100,
                this.dayFive.max * 100,
                this.daySix.max * 100
              );

              if (i == 0) {
                this.dayOne.point = this.getPixels(
                  minWeek,
                  maxWeek,
                  this.dayOne.generated
                );
              }
              if (i == 1) {
                this.dayTwo.point = this.getPixels(
                  minWeek,
                  maxWeek,
                  this.dayTwo.generated
                );
              }
              if (i == 2) {
                this.dayThree.point = this.getPixels(
                  minWeek,
                  maxWeek,
                  this.dayThree.generated
                );
              }
              if (i == 3) {
                this.dayFour.point = this.getPixels(
                  minWeek,
                  maxWeek,
                  this.dayFour.generated
                );
              }
              if (i == 4) {
                this.dayFive.point = this.getPixels(
                  minWeek,
                  maxWeek,
                  this.dayFive.generated
                );
              }
              if (i == 5) {
                this.daySix.point = this.getPixels(
                  minWeek,
                  maxWeek,
                  this.daySix.generated
                );
              }

              let splitCost = String(this.weekGenerated).split(".");

              this.weekGeneratedDollars = Math.round(splitCost[0]);
              this.weekGeneratedCents = Math.round(splitCost[1]);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
      (err) => {
        this.gettingLocation = false;
        this.geoError = true;
        this.getGeoLoc();
        this.customData = true;
      }
    );
  },

  mounted() {
    this.$gtag.pageview({
      page_title: "Electricity Forecast",
      page_path: "/forecast",
    });

    let device =
      this.$refs.device_frame.getBoundingClientRect().right -
      this.$refs.device_frame.getBoundingClientRect().left;
    let screen_width = window.innerWidth;
    let half = (screen_width - device) / 2;

    this.colOne =
      Math.round(
        (this.$refs.colone.getBoundingClientRect().right -
          this.$refs.colone.getBoundingClientRect().left) /
          2 +
          this.$refs.colone.getBoundingClientRect().left,
        2
      ) - half;
    this.colTwo =
      Math.round(
        (this.$refs.coltwo.getBoundingClientRect().right -
          this.$refs.coltwo.getBoundingClientRect().left) /
          2 +
          this.$refs.coltwo.getBoundingClientRect().left,
        2
      ) - half;
    this.colThree =
      Math.round(
        (this.$refs.colthree.getBoundingClientRect().right -
          this.$refs.colthree.getBoundingClientRect().left) /
          2 +
          this.$refs.colthree.getBoundingClientRect().left,
        2
      ) - half;
    this.colFour =
      Math.round(
        (this.$refs.colfour.getBoundingClientRect().right -
          this.$refs.colfour.getBoundingClientRect().left) /
          2 +
          this.$refs.colfour.getBoundingClientRect().left,
        2
      ) - half;
    this.colFive =
      Math.round(
        (this.$refs.colfive.getBoundingClientRect().right -
          this.$refs.colfive.getBoundingClientRect().left) /
          2 +
          this.$refs.colfive.getBoundingClientRect().left,
        2
      ) - half;
    this.colSix =
      Math.round(
        (this.$refs.colsix.getBoundingClientRect().right -
          this.$refs.colsix.getBoundingClientRect().left) /
          2 +
          this.$refs.colsix.getBoundingClientRect().left,
        2
      ) - half;

    window.onResize = this.onResize = () => {
      let device =
        this.$refs.device_frame.getBoundingClientRect().right -
        this.$refs.device_frame.getBoundingClientRect().left;
      let screen_width = window.innerWidth;
      let half = (screen_width - device) / 2;

      this.colOne =
        Math.round(
          (this.$refs.colone.getBoundingClientRect().right -
            this.$refs.colone.getBoundingClientRect().left) /
            2 +
            this.$refs.colone.getBoundingClientRect().left,
          2
        ) - half;
      this.colTwo =
        Math.round(
          (this.$refs.coltwo.getBoundingClientRect().right -
            this.$refs.coltwo.getBoundingClientRect().left) /
            2 +
            this.$refs.coltwo.getBoundingClientRect().left,
          2
        ) - half;
      this.colThree =
        Math.round(
          (this.$refs.colthree.getBoundingClientRect().right -
            this.$refs.colthree.getBoundingClientRect().left) /
            2 +
            this.$refs.colthree.getBoundingClientRect().left,
          2
        ) - half;
      this.colFour =
        Math.round(
          (this.$refs.colfour.getBoundingClientRect().right -
            this.$refs.colfour.getBoundingClientRect().left) /
            2 +
            this.$refs.colfour.getBoundingClientRect().left,
          2
        ) - half;
      this.colFive =
        Math.round(
          (this.$refs.colfive.getBoundingClientRect().right -
            this.$refs.colfive.getBoundingClientRect().left) /
            2 +
            this.$refs.colfive.getBoundingClientRect().left,
          2
        ) - half;
      this.colSix =
        Math.round(
          (this.$refs.colsix.getBoundingClientRect().right -
            this.$refs.colsix.getBoundingClientRect().left) /
            2 +
            this.$refs.colsix.getBoundingClientRect().left,
          2
        ) - half;
    };

    //Timeouts or Speech Bubbles
    setTimeout(() => (this.showSpeechBubble = true), 2000);
    setTimeout(() => (this.showSpeechBubble = false), 12000);

    //Handle Vieweed Pages
    if (sessionStorage.getItem("pagesViewed") === null) {
      const pages = {
        electricityUsage: false,
        orderGas: false,
        powerShoutHours: false,
        electricityForecast: true,
        usageBreakdown: false,
        energySavingTips: false,
      };

      window.sessionStorage.setItem("pagesViewed", JSON.stringify(pages));
    } else {
      let ls = JSON.parse(window.sessionStorage.getItem("pagesViewed"));
      ls.electricityForecast = true;
      window.sessionStorage.setItem("pagesViewed", JSON.stringify(ls));
    }
  },
  computed: {
    getWeekGenerated: function () {
      let val =
        parseFloat(this.dayOne.generated) +
        parseFloat(this.dayTwo.generated) +
        parseFloat(this.dayThree.generated) +
        parseFloat(this.dayFour.generated) +
        parseFloat(this.dayFive.generated) +
        parseFloat(this.daySix.generated);

      let total = String(Math.round(val * 100) / 100);
      let totalSplit = total.split(".");

      let output = {
        dollar: totalSplit[0],
        cents: totalSplit[1],
      };

      return output;
    },
    icon: function () {
      if (this.weatherDescription.length > 2) {
        return domain + this.weatherIcon + "@2x.png";
      } else {
        return "/img//02d@2x.png";
      }
    },

    description: function () {
      if (!this.geoError && this.weatherDescription.length > 2) {
        var words = this.weatherDescription.split(" ");
        var CapitalizedWords = [];
        words.forEach((element) => {
          CapitalizedWords.push(
            element[0].toUpperCase() + element.slice(1, element.length)
          );
        });
        return CapitalizedWords.join(" ");
      } else {
        return "Partly Cloudy";
      }
    },
  },

  methods: {
    toFixed(num, fixed) {
      fixed = fixed || 0;
      fixed = Math.pow(10, fixed);

      //return Math.floor(num * fixed) / fixed;
      return (Math.round(num * 100) / 100).toFixed(2);


    },
    getGeoLoc() {
      axios
        .get("/.netlify/functions/getForecast?lat=36.8509&long=174.7645")
        .then((response) => {
          this.dailyData = response.data.daily;

          if (response.data.current) {
            let date = new Date(response.data.current.dt * 1000);

            (this.currentDate.icon =
              domain + response.data.current.weather[0].icon + "@2x.png"),
              (this.currentDate.description =
                response.data.current.weather[0].main);
            this.currentDate.min_temp = response.data.current.temp.toFixed(2);

            this.currentDate.max_temp = response.data.current.temp.toFixed(2);
            this.currentDate.min = this.getMinCost(
              response.data.current.weather[0].main
            );
            this.currentDate.max = this.getMaxCost(
              response.data.current.weather[0].main
            );
            this.currentDate.generated = this.getGeneratedCost(
              response.data.current.weather[0].main
            );

            let splitCost = String(this.currentDate.generated).split(".");
            this.currentDate.generatedDollar = splitCost[0];
            this.currentDate.generatedCents = splitCost[1];
          }

          for (let i = 0; i < response.data.daily.length; i++) {
            if (i == 0) {
              let dailydata = response.data.daily[0];
              let date = new Date(dailydata.dt * 1000);
              this.dayOne.day = this.days[date.getDay()];
              this.dayOne.date =
                date.getDate() + 1 + " " + this.months[date.getMonth()];
              this.startDay = this.days[date.getDay()];
              this.dayOne.icon = domain + dailydata.weather[0].icon + "@2x.png";
              this.dayOne.min = this.getMinCost(dailydata.weather[0].main);
              this.dayOne.max = this.getMaxCost(dailydata.weather[0].main);
              this.dayOne.generated = this.getGeneratedCost(
                dailydata.weather[0].main
              );

              let splitCost = String(this.dayOne.generated).split(".");
              this.dayOne.generatedDollar = splitCost[0];
              this.dayOne.generatedCents = splitCost[1];

              dailydata = null;
              date = null;
            }

            if (i == 1) {
              let dailydata = response.data.daily[1];
              let date = new Date(dailydata.dt * 1000);
              this.dayTwo.day = this.days[date.getDay()];
              this.dayTwo.date =
                date.getDate() + 1 + " " + this.months[date.getMonth()];
              this.dayTwo.icon = domain + dailydata.weather[0].icon + "@2x.png";
              this.dayTwo.min = this.getMinCost(dailydata.weather[0].main);
              this.dayTwo.max = this.getMaxCost(dailydata.weather[0].main);
              this.dayTwo.generated = this.getGeneratedCost(
                dailydata.weather[0].main
              );

              let splitCost = String(this.dayTwo.generated).split(".");
              this.dayTwo.generatedDollar = splitCost[0];
              this.dayTwo.generatedCents = splitCost[1];

              dailydata = null;
              date = null;
            }
            if (i == 2) {
              let dailydata = response.data.daily[2];
              let date = new Date(dailydata.dt * 1000);
              this.dayThree.day = this.days[date.getDay()];
              this.dayThree.date =
                date.getDate() + 1 + " " + this.months[date.getMonth()];
              this.dayThree.icon =
                domain + dailydata.weather[0].icon + "@2x.png";
              this.dayThree.min = this.getMinCost(dailydata.weather[0].main);
              this.dayThree.max = this.getMaxCost(dailydata.weather[0].main);
              this.dayThree.generated = this.getGeneratedCost(
                dailydata.weather[0].main
              );

              let splitCost = String(this.dayThree.generated).split(".");
              this.dayThree.generatedDollar = splitCost[0];
              this.dayThree.generatedCents = splitCost[1];
            }
            if (i == 3) {
              let dailydata = response.data.daily[3];
              let date = new Date(dailydata.dt * 1000);
              this.dayFour.day = this.days[date.getDay()];
              this.dayFour.date =
                date.getDate() + 1 + " " + this.months[date.getMonth()];
              this.dayFour.icon =
                domain + dailydata.weather[0].icon + "@2x.png";
              this.dayFour.min = this.getMinCost(dailydata.weather[0].main);
              this.dayFour.max = this.getMaxCost(dailydata.weather[0].main);
              this.dayFour.generated = this.getGeneratedCost(
                dailydata.weather[0].main
              );

              let splitCost = String(this.dayFour.generated).split(".");
              this.dayFour.generatedDollar = splitCost[0];
              this.dayFour.generatedCents = splitCost[1];
            }
            if (i == 4) {
              let dailydata = response.data.daily[4];
              let date = new Date(dailydata.dt * 1000);
              this.dayFive.day = this.days[date.getDay()];
              this.dayFive.date =
                date.getDate() + 1 + " " + this.months[date.getMonth()];
              this.dayFive.icon =
                domain + dailydata.weather[0].icon + "@2x.png";
              this.dayFive.min = this.getMinCost(dailydata.weather[0].main);
              this.dayFive.max = this.getMaxCost(dailydata.weather[0].main);
              this.dayFive.generated = this.getGeneratedCost(
                dailydata.weather[0].main
              );

              let splitCost = String(this.dayFive.generated).split(".");
              this.dayFive.generatedDollar = splitCost[0];
              this.dayFive.generatedCents = splitCost[1];
            }
            if (i == 5) {
              let dailydata = response.data.daily[5];
              let date = new Date(dailydata.dt * 1000);
              this.daySix.day = this.days[date.getDay()];
              this.daySix.date =
                date.getDate() + 1 + " " + this.months[date.getMonth()];
              this.endDay = this.days[date.getDay()];
              this.daySix.icon = domain + dailydata.weather[0].icon + "@2x.png";

              this.daySix.min = this.getMinCost(dailydata.weather[0].main);
              this.daySix.max = this.getMaxCost(dailydata.weather[0].main);
              this.daySix.generated = this.getGeneratedCost(
                dailydata.weather[0].main
              );

              let splitCost = String(this.daySix.generated).split(".");
              this.daySix.generatedDollar = splitCost[0];
              this.daySix.generatedCents = splitCost[1];
            }

            this.weekMin = Math.round(
              this.dayOne.min +
                this.dayTwo.min +
                this.dayThree.min +
                this.dayFour.min +
                this.dayFive.min +
                this.daySix.min,
              2
            );
            this.weekMax = Math.round(
              this.dayOne.max +
                this.dayTwo.max +
                this.dayThree.max +
                this.dayFour.max +
                this.dayFive.max +
                this.dayFive.max,
              2
            );

            // Find the lowest cost over the entire week
            let minArray = [
              this.dayOne.min,
              this.dayTwo.min,
              this.dayThree.min,
              this.dayFour.min,
              this.dayFive.min,
              this.daySix.min,
            ];
            let minWeek = Math.min(
              this.dayOne.min * 100,
              this.dayTwo.min * 100,
              this.dayThree.min * 100,
              this.dayFour.min * 100,
              this.dayFive.min * 100,
              this.daySix.min * 100
            );

            // Find the highest cost over the entire week
            let maxArray = [
              this.dayOne.max,
              this.dayTwo.max,
              this.dayThree.max,
              this.dayFour.max,
              this.dayFive.max,
              this.daySix.max,
            ];
            let maxWeek = Math.max(
              this.dayOne.max * 100,
              this.dayTwo.max * 100,
              this.dayThree.max * 100,
              this.dayFour.max * 100,
              this.dayFive.max * 100,
              this.daySix.max * 100
            );

            if (i == 0) {
              this.dayOne.point = this.getPixels(
                minWeek,
                maxWeek,
                this.dayOne.generated
              );
            }
            if (i == 1) {
              this.dayTwo.point = this.getPixels(
                minWeek,
                maxWeek,
                this.dayTwo.generated
              );
            }
            if (i == 2) {
              this.dayThree.point = this.getPixels(
                minWeek,
                maxWeek,
                this.dayThree.generated
              );
            }
            if (i == 3) {
              this.dayFour.point = this.getPixels(
                minWeek,
                maxWeek,
                this.dayFour.generated
              );
            }
            if (i == 4) {
              this.dayFive.point = this.getPixels(
                minWeek,
                maxWeek,
                this.dayFive.generated
              );
            }
            if (i == 5) {
              this.daySix.point = this.getPixels(
                minWeek,
                maxWeek,
                this.daySix.generated
              );
            }

            let splitCost = String(this.weekGenerated).split(".");

            this.weekGeneratedDollars = Math.round(splitCost[0]);
            this.weekGeneratedCents = Math.round(splitCost[1]);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    myscale(num, in_min, in_max, out_min, out_max, factor) {
      // number map
      var scale = Math.max(0.0, num - in_min) / (in_max - in_min);

      // calculate easing curve
      var r = out_min + Math.pow(scale, factor) * (out_max - out_min);

      // 64-bit floating point representation fix
      r = parseFloat(r.toFixed(10));

      // return mapped scale number
      return r;
    },
    hovered() {
      alert("Booo");
    },
    getPixels(min, max, generated) {
      var mappedValue = Math.round(
        this.myscale(generated * 100, 504, 778, 80, 20, 0.2),
        1
      );
      return mappedValue;
    },
    getMinCost(condition) {
      if (
        condition == "Mist" ||
        condition == "Smoke" ||
        condition == "Haze" ||
        condition == "Dust" ||
        condition == "Fog" ||
        condition == "Sand" ||
        condition == "Ash" ||
        condition == "Squall" ||
        condition == "Tornado"
      ) {
        condition = "Atmosphere";
      }

      let min = 0;
      switch (condition) {
        case "Thunderstorm":
          min = 5.81;
          break;
        case "Drizzle":
          min = 5.15;
          break;
        case "Rain":
          min = 5.04;
          break;
        case "Snow":
          min = 7.04;
          break;
        case "Atmosphere":
          min = 5.58;
          break;
        case "Clear":
          min = 5.24;
          break;
        case "Clouds":
          min = 6.98;
          break;
      }
      return min;
    },
    getMaxCost(condition) {
      if (
        condition == "Mist" ||
        condition == "Smoke" ||
        condition == "Haze" ||
        condition == "Dust" ||
        condition == "Fog" ||
        condition == "Sand" ||
        condition == "Ash" ||
        condition == "Squall" ||
        condition == "Tornado"
      ) {
        condition = "Atmosphere";
      }

      let max = 0;
      switch (condition) {
        case "Thunderstorm":
          max = 6.43;
          break;
        case "Drizzle":
          max = 5.69;
          break;
        case "Rain":
          max = 5.58;
          break;
        case "Snow":
          max = 7.78;
          break;
        case "Atmosphere":
          max = 6.16;
          break;
        case "Clear":
          max = 5.80;
          break;
        case "Clouds":
          max = 7.72;
          break;
      }
      return max;
    },
    getGeneratedCost(condition) {
      if (
        condition == "Mist" ||
        condition == "Smoke" ||
        condition == "Haze" ||
        condition == "Dust" ||
        condition == "Fog" ||
        condition == "Sand" ||
        condition == "Ash" ||
        condition == "Squall" ||
        condition == "Tornado"
      ) {
        condition = "Atmosphere";
      }

      let generated = 0;
      switch (condition) {
        case "Thunderstorm":
          generated = String(this.genRand(5.81, 6.43, 2));
          break;
        case "Drizzle":
          generated = String(this.genRand(5.15, 5.69, 2));
          break;
        case "Rain":
          generated = String(this.genRand(5.04, 5.58, 2));
          break;
        case "Snow":
          generated = String(this.genRand(7.04, 7.78, 2));
          break;
        case "Atmosphere":
          generated = String(this.genRand(5.58, 6.16, 2));
          break;
        case "Clear":
          generated = String(this.genRand(5.24, 5.8, 2));
          break;
        case "Clouds":
          generated = String(this.genRand(6.98, 7.72, 2));
          break;
      }
      return generated;
    },
    dateOrdinal(dom) {
      if (dom == 31 || dom == 21 || dom == 1) return dom + "st";
      else if (dom == 22 || dom == 2) return dom + "nd";
      else if (dom == 23 || dom == 3) return dom + "rd";
      else return dom + "th";
    },
    genRand(min, max, decimalPlaces) {
      var rand =
        Math.random() < 0.5
          ? (1 - Math.random()) * (max - min) + min
          : Math.random() * (max - min) + min; // could be min or max or anything in between
      var power = Math.pow(10, decimalPlaces);
      return Math.floor(rand * power) / power;
    },
    checkImage(url) {
      var request = new XMLHttpRequest();
      request.open("GET", url, true);
      request.send();
      request.onload = function () {
        var status = request.status;
        if (request.status == 200) {
          //if(statusText == OK)
          console.log("Image Valid");
          return true;
        } else {
          console.log("Image Invalid");
          return false;
        }
      };
    },
  },
  components: {
    TopNavigation,
  },
};
</script>

<style>
.speechfade-enter-active,
.speechfade-leave-active {
  transition: opacity 2s;
}
.speechfade-enter,
.speechfade-leave-to {
  opacity: 0;
}
</style>