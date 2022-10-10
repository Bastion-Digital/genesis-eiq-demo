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
          class="md:absolute fixed z-10 left-2 top-4 text-white"
        >
          <svg
            class="w-6 inline-flex rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <h3 class="inline-flex">
            Back
          </h3>
        </router-link>

        <CtaCard
          class="fixed bottom-6 md:absolute md:mt-32" 
          :is-genesis="isGenesisCustomer"
        />

        <transition name="bounce">
          <div
            v-if="showSpeechBubble"
            class="absolute half-top bg-white bubble text-black shadow rounded-xl p-6 z-10"
            style="left: 12.5%"
          >
            <div
              class="absolute -bottom-2 triangle-up"
              style="left: 47.5%"
            />
            <p class="text-sm text-center">
              What do you do on a Saturday afternoon?  Perhaps it’s when you’re washing the teams uniforms?
            </p>
          </div>
        </transition>

        <img
          class="object-cover background"
          :src="washing"
        >
      </div>
    </div>
  </div>
</template>

<script>
import gasbottle from "/src/assets/gasbottle.png";
import cctv from "/src/assets/cctv.png";
import washing from "/src/assets/washing.png";

import CtaCard from "@/components/ctaCard.vue";

export default {
  name: "UsageTip",
  components: { CtaCard },
  data() {
    return {
      isGenesisCustomer: false,
      showOverlay: true,
      showSpeechBubble: false,
      gasbottle: gasbottle,
      washing: washing,
      cctv: cctv,
      counter: 1,
    };
  },
  created() {
    if (sessionStorage.getItem("GC") === 'true') {
      this.isGenesisCustomer = true;
    } else {
      this.isGenesisCustomer = false;
    }
  },
  mounted() {
      this.$gtag.pageview({
        page_title: 'Power Usage Tips', 
        page_path: '/usage/tip'
      })

    setTimeout(() => (this.showSpeechBubble = true), 500);
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
