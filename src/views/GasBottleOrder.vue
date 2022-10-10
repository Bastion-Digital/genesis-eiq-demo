<template>
  <div clss="flex flex-col justify-start">
    <div class="relative bg-green-500 h-auto flex-grow">
      <!-- Overlay Image -->
      <div
        v-if="showOverlay"
        class="absolute inset-0"
      >
        <!-- X Icon -->
        <router-link
          to="/"
          class="md:absolute fixed z-10 right-4 top-4"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="22.5343"
              y1="1.06066"
              x2="1.06061"
              y2="22.5343"
              stroke="white"
              stroke-width="3"
            />
            <line
              x1="1.06066"
              y1="1.46571"
              x2="22.5343"
              y2="22.9394"
              stroke="white"
              stroke-width="3"
            />
          </svg>
        </router-link>

        <CtaCard
          class="fixed"
          style="bottom: 2em"
          :is-genesis="isGenesisCustomer"
        />

        <transition name="bounce">
          <div
            v-if="showSpeechBubble"
            class="absolute half-top mx-auto bg-white bubble text-black shadow rounded-xl p-6 z-10"
            style="left: 12.5%"
          >
            <div
              class="absolute -bottom-2 triangle-up"
              style="left: 47.5%"
            />
            <p class="text-sm text-center">
              With Genesis LPG Bottled Gas delivery, you can order new bottles
              via the app for fast delivery and install.
            </p>
          </div>
        </transition>

        <img
          class="object-cover background"
          :src="gasdelivered"
        >
      </div>
    </div>
  </div>
</template>

<script>
import gasbottle from "/src/assets/gasbottle.png";
import cctv from "/src/assets/cctv.png";
import gasdelivered from "/src/assets/gas-delivered.png";

import CtaCard from "@/components/ctaCard.vue";

export default {
  name: "Usage",
  components: { CtaCard },
  data() {
    return {
      isGenesisCustomer: false,
      showOverlay: true,
      showSpeechBubble: false,
      gasbottle: gasbottle,
      gasdelivered: gasdelivered,
      cctv: cctv,
      counter: 1,
    };
  },
  mounted() {
    this.$gtag.pageview({
      page_title: "Gas Booking Confirm",
      page_path: "/bottledgas/order",
    });

    setTimeout(() => (this.showSpeechBubble = true), 500);
  },
  created() {
    if (sessionStorage.getItem("GC") === "true") {
      this.isGenesisCustomer = true;
    } else {
      this.isGenesisCustomer = false;
    }
  },
  methods: {
    counterUp() {
      if (this.counter < 10) {
        this.counter++;
      }
    },
    counterDown() {
      if (this.counter >= 2) {
        this.counter--;
      }
    },
  },
};
</script>

<style scoped>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
