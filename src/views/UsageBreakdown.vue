<template>
  <router-link to="/" class="flex justify-between items-center w-full">
    <div class="px-1">
      <img src="../assets/prev.svg" alt="" />
    </div>
    <div class="w-full text-center pl-2 p-2 text-white text-2xl">
      Usage Beakdown
    </div>
  </router-link>
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
        <p class="ml-2 my-auto">$175.23</p>
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
        <p class="ml-2 my-auto">$114.91</p>
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
        <p class="ml-2 my-auto">$68.76</p>
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
        <p class="ml-2 my-auto">$63.20</p>
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
    return {
      electric: false,
      lights: false,
      gas: false,
      alwaysOn: false,
    };
  },
};
</script>
