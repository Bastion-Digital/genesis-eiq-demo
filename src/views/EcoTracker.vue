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
          class="w-1/3 flex justify-center items-center py-5 border-b-[3px] border-white"
          >Real-time</router-link
        >
        <router-link
          to="/ecotracker/forecast"
          class="w-1/3 flex justify-center opacity-80 items-center py-5"
          >Forecast</router-link
        >
        <router-link
          to="/ecotracker/impact"
          class="w-1/3 flex justify-center opacity-80 items-center py-5"
          >Your Impact</router-link
        >
      </div>
    </div>
    <div class="relative">
      <img src="../assets/eco-tracker-bg.png" alt="" />
      <div class="absolute top-0 w-full">
        <h3 class="text-center text-xl p-6">
          New Zealand's electricity generation is relatively
          <span class="font-semibold">low-carbon</span>
        </h3>
      </div>
      <div class="absolute bottom-0 w-full">
        <h4 class="text-center text-lg p-4 font-semibold">
          Now is a good time to use electricity
        </h4>
        <p class="text-center text-md px-4 pb-6">
          Compared to the last seven days, less high-carbon sources, like coal &
          gas is being used to generate electricity.
        </p>
        <p class="text-center opacity-60 pb-3">Updates in 5 minutes</p>
      </div>
    </div>
    <div class="bg-white">
      <h3 class="text-center text-lg p-6 pt-10">
        What sources are generating New Zealand's electricity right now?
      </h3>
      <div class="flex justify-center items-center px-10">
        <div class="relative mr-auto flex justify-center items-center w-1/3">
          <apexchart
            class="relative z-0"
            :options="chartOptions"
            :series="[source]"
            height="180px"
            width="100%"
            type="radialBar"
          />
          <img
            class="absolute top-1/4 w-12 object-contain z-[7]"
            src="../assets/nz.png"
            alt=""
          />
        </div>
        <div class="w-2/3">
          <div class="ml-4 flex justify-start w-full mb-2">
            <div class="rounded-full bg-[#68BD36] w-6 h-6 mr-3" />
            <p class="font-semibold">Zero/low-carbon</p>
            <p class="ml-auto mr-2">{{ source }}%</p>
          </div>
          <div class="ml-4 flex justify-start w-full">
            <div class="rounded-full bg-[#C29900] w-6 h-6 mr-3" />
            <p class="font-semibold">High-carbon</p>
            <p class="ml-auto mr-2">{{ 100 - source }}%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Eco Tracker",
  data: function () {
    return {
      source: 0,
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
