<template>
  <div v-if="question > 0" class="flex sides pt-8 -mb-6">
    <div class="flex items-center cursor-pointer" @click="this.question--">
      <img :src="require('../assets/prev.svg')" class="w-6 h-6 mr-2" alt="" />
      <p class="text-white text-xl">Change</p>
    </div>
  </div>
  <div v-if="question == 0" class="sides mt-14">
    <h1 class="text-white font-normal text-3xl px-8 pb-8">
      To begin, select a house to display on your dashboard
    </h1>
    <div class="flex flex-wrap justify-between w-full">
      <div
        v-for="house in houses"
        :key="house.name"
        @click="setHouse(house)"
        class="flex flex-col justify-between items-center w-1/2"
      >
        <div
          :key="house.name"
          style="background-color: #46495814"
          class="cursor-pointer flex flex-col justify-between items-center m-2 pb-6 pt-2 rounded-[24px]"
        >
          <div class="relative flex">
            <component class="w-full h-full" :is="house.img" />
          </div>
          <h4 class="text-white font-normal text-md md:text-lg lg:text-xl">
            {{ house.name }}
          </h4>
        </div>
      </div>
    </div>
  </div>

  <div
    v-if="question == 1"
    class="sides mt-14 flex justify-center flex-col items-center"
  >
    <h1 class="text-white text-center font-normal text-2xl px-8 pb-4">
      Do you have an electric vehicle?
    </h1>

    <div class="flex justify-center">
      <div class="cursor-pointer" @click="setQuestion(true)">
        <img v-if="questions[0] == true" :src="yes" alt="" />
        <img v-if="questions[0] == false" :src="no" alt="" />
        <p class="-mt-6 text-center text-white">Yes</p>
      </div>
      <div class="cursor-pointer" @click="setQuestion(false)">
        <img v-if="questions[0] == false" :src="yes" alt="" />
        <img v-if="questions[0] == true" :src="no" alt="" />
        <p class="-mt-6 text-center text-white">No</p>
      </div>
    </div>

    <div class="flex flex-wrap flex-col justify-between w-[120%] mb-16 -mt-8">
      <component class="w-full h-auto" :is="houseState.img" />
    </div>
    <p class="font-semibold text-2xl text-white -mt-16 mb-16">
      {{ houseState.name }}
    </p>

    <button
      class="mx-auto w-auto rounded-full px-12 py-6 bg-white shadow-lg"
      @click="answerQuestion()"
    >
      Use this house
    </button>
  </div>

  <div
    v-if="question == 2"
    class="sides mt-14 flex justify-center flex-col items-center"
  >
    <h1 class="text-white text-center font-normal text-2xl px-8 pb-4">
      Does your house have gas and/or solar?
    </h1>

    <div class="flex justify-center">
      <div class="cursor-pointer" @click="setQuestion(false, 1)">
        <img v-if="questions[1] == true" :src="yes" alt="" />
        <img v-else :src="no" alt="" />
        <p class="-mt-6 text-center text-white">Gas</p>
      </div>
      <div class="cursor-pointer" @click="setQuestion(false, 2)">
        <img v-if="questions[2] == true" :src="yes" alt="" />
        <img v-else :src="no" alt="" />
        <p class="-mt-6 text-center text-white">Solar</p>
      </div>
    </div>

    <div class="flex flex-wrap flex-col justify-between w-[120%] mb-16 -mt-8">
      <component class="w-full h-auto" :is="houseState.img" />
    </div>
    <p class="font-semibold text-2xl text-white -mt-16 mb-16">
      {{ houseState.name }}
    </p>
    <button
      class="mx-auto w-auto rounded-full px-12 py-6 bg-white shadow-lg"
      @click="router.push('/')"
    >
      Use this house
    </button>
  </div>
</template>

<script>
import { useHouseStore } from "@/stores/house";
import { defineAsyncComponent } from "vue";
import router from "../router/index";

const houseState = useHouseStore();

export default {
  name: "SetupInit",

  setup() {
    const houses = [
      {
        filename: "Villa",
        name: "Villa / Bungalow",
      },
      { filename: "Townhouse", name: "Townhouse" },
      { filename: "Apartment", name: "Apartment" },
      { filename: "Rural", name: "Rural" },
      { filename: "Modern", name: "Modern" },
      { filename: "Suburban", name: "Suburban" },
    ];

    houses.map((el) => {
      el.img = defineAsyncComponent(() =>
        import(`../components/houses/${el.filename}.vue`)
      );
    });

    return { houseState, houses };
  },
  data() {
    return {
      yes: require("../assets/yes.svg"),
      no: require("../assets/no.svg"),
      question: 0,
      router: router,
      questions: [false, false, false],
    };
  },
  methods: {
    setQuestion(val, toggle) {
      const house = { ...this.houseState };

      if (this.question === 1) {
        this.questions[0] = val;
        house.car = this.questions[0];
      }
      if (this.question === 2) {
        this.questions[toggle] = !this.questions[toggle];
        house.gas = this.questions[1];
        house.solar = this.questions[2];
      }
      this.setHouse(house, true);
    },

    answerQuestion() {
      console.log("Answering question");
      const house = { ...this.houseState };

      if (this.question === 1) {
        house.car = this.questions[0];
      }
      if (this.question === 2) {
        house.gas = this.questions[1];
        house.solar = this.questions[2];
      }
      this.setHouse(house);
    },

    setHouse(obj, preview) {
      if (!preview) this.question++;
      this.$forceUpdate();
      this.houseState.set(obj);
      //    router.push("/");
    },
  },
};
</script>
