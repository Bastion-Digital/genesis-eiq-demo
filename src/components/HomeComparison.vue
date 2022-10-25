<template>
  <div class="bg-white rounded-lg">
    <div class="flex pb-3">
      <div
        class="flex w-full text-left font-sm text-link pt-6 pb-1 px-6 text-genesis-orange text-lg"
      >
        Home comparison
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
    </div>
    <div class="flex-col flex px-6">
      <h3 class="text-3xl w-[90%]">
        You're using <span class="text-genesis-orange">13% more</span> power
        than other similar homes.
      </h3>
      <div class="flex w-full relative">
        <component
          style="width: 70%; margin-left: -5%"
          class="w-full h-auto z-10"
          :is="houseImg"
        ></component>

        <img
          style="min-width: 65%; margin-left: -30%; margin-top: 15%"
          src="../assets/graph.svg"
          class=""
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import { useHouseStore } from "@/stores/house";
export default {
  name: "HomeComparison",
  props: ["houseImg"],
  data: function () {
    return {};
  },
  setup() {},
  methods: {},
};
</script>
