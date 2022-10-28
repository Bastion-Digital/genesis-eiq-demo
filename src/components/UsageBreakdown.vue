<template>
  <div class="bg-white rounded-lg">
    <router-link to="/usage/breakdown" class="flex pb-3">
      <div
        class="flex w-full text-left font-sm text-link pt-6 pb-1 px-6 text-genesis-orange text-lg"
      >
        Usage Breakdown
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
        In roughly the last 30 days, usage from
        <span class="text-genesis-orange">Lights & appliances</span> was
        around...
      </h3>
      <img class="px-20 py-12" src="../assets/graphic-pie.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "UsageBreakdown",
  data: function () {
    return {};
  },
  setup() {},
  methods: {},
};
</script>
