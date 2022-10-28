<template>
  <div style="min-height: 100%" class="bg-white">
    <div class="bg-genesis-orange pt-8 flex flex-col text-light-black">
      <router-link to="/">
        <div class="flex items-center sides">
          <div class="flex w-1/3 items-center">
            <img src="../assets/prev.svg" class="w-6 h-6" alt="" />
            <p class="text-lg text-white ml-1">Dashboard</p>
          </div>
          <h2 class="text-white text-xl md:text-2xl text-center w-1/3">
            Eco Tracker
          </h2>
        </div></router-link
      >
      <div class="flex w-full text-lg md:text-xl text-white mt-4">
        <router-link
          to="/ecotracker/realtime"
          class="w-1/3 flex justify-center opacity-80 items-center py-5"
          >Real-time</router-link
        >
        <router-link
          to="/ecotracker/forecast"
          class="w-1/3 flex justify-center items-center py-5 border-b-[3px] border-white"
          >Forecast</router-link
        >
        <router-link
          to="/ecotracker/impact"
          class="w-1/3 flex justify-center opacity-80 items-center py-5"
          >Your Impact</router-link
        >
      </div>
    </div>
    <div class="relative p-6">
      <h3 class="text-left text-md font-semibold mb-1">
        Carbon forecast for the next seven days
      </h3>
      <p>
        Plan your usage ahead with predicted times of lower-carbon electricity
        generation.
      </p>
    </div>
    <div>
      <div class="flex w-full">
        <div
          v-bind:key="day"
          :class="{
            'border-b-genesis-orange border-b-2 text-genesis-orange ': i == 0,
          }"
          class="w-1/5 text-center text-md py-3"
          v-for="(day, i) in forecast"
        >
          {{ day }}
        </div>
      </div>
      <img src="../assets/ecotracker-forecast.png" alt="" />
    </div>
    <div class="flex justify-between p-6 text-lg">
      <p>2PM-2:59PM</p>
      <p class="text-green">Low-carbon</p>
    </div>
    <p class="px-6 mb-6">
      Electricity is likely to be relatively low-carbon at this time. It is a
      good time to use electricity. Remember this is just a forecast, please
      check the real time screen for the actual status at the time.
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Eco Tracker",
  data: function () {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const date = new Date();
    const dayIndex = date.getDay();
    const forecast = ["Today", "Tomorrow"];

    for (let i = 1; i <= 3; i++) {
      forecast.push(days.at(dayIndex + i));
    }

    return {
      source: 0,
      forecast: forecast,
      chartOptions: {
        chart: {
          type: "radialBar",
        },
        colors: ["#68BD36"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "60%",
              background: "#fff",
            },
            track: {
              background: "#C29900",
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
                color: "#C29900",
                fontSize: "18px",
                fontWeight: "600",
                offsetY: "-10",
                show: false,
              },
            },
          },
        },
        fill: {
          type: "solid",
        },
        stroke: {
          lineCap: "",
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
          this.source = res.data.data[0].toFixed(0);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
