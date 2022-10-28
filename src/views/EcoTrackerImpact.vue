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
          class="w-1/3 flex justify-center opacity-80 items-center py-5"
          >Forecast</router-link
        >
        <router-link
          to="/ecotracker/impact"
          class="w-1/3 flex justify-center items-center py-5 border-b-[3px] border-white"
          >Your Impact</router-link
        >
      </div>
    </div>
    <div class="w-full text-center px-10 my-12 mb-20">
      <h2 class="text-xl md:text-2xl mb-1">
        <span class="font-semibold">94% of your usage</span>
        was during
        <span class="font-semibold">zero or low-carbon</span> generation times
      </h2>
      <p>this month</p>
    </div>
    <img src="../assets/forecast-impact-bg.png" alt="" />
    <div
      class="flex justify-between items-center border-off-black border-b-1 p-6 opacity-70"
    >
      <h4 class="uppercase">How does it work?</h4>
      <img
        class="w-6 h-6 object-contain"
        src="../assets/questionmark.png"
        alt=""
      />
    </div>
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
