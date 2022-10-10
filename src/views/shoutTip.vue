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
          class="md:absolute fixed z-10 left-2 top-4"
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
          class="fixed"
          style="bottom: 2em;"
          :is-genesis="isGenesisCustomer"
        />

        <transition name="bounce">
          <div
            v-if="showSpeechBubble"
            class="mx-auto half-top bg-white bubble text-black shadow rounded-xl p-6 z-10"
            style="left: 12.5%;"
          >
            <div
              class="absolute -bottom-2 triangle-up"
              style="left: 47.5%"
            />
            <p class="text-sm text-center">
              Free hours when you need them most, with Power Shout.
            </p>
          </div>
        </transition>

        <div class="relative">
          <img
            class="object-cover background"
            :src="soup"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import gasbottle from "/src/assets/gasbottle.png";
import cctv from "/src/assets/cctv.png";
import soup from "/src/assets/soup.png";

import CtaCard from "@/components/ctaCard.vue";

export default {
  name: "PowerShoutTip",
  components: {
    CtaCard,
  },
  data() {
    return {
      showOverlay: true,
      isGenesisCustomer: true,
      displayInstant: true,
      showNotification: false,
      showSpeechBubble: false,
      gasbottle: gasbottle,
      soup: soup,
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

    this.$gtag.pageview({ page_title: 'Power Shout Hours Booking Confirmation', page_path: '/powershouthours/tip' })


    setTimeout(() => (this.showSpeechBubble = true), 500);

    let showMessage = sessionStorage.getItem("calendarNotification");
    if (showMessage === "true") {
      this.displayInstant = true;
      if (this.displayInstant === true) {
        this.showNotificationCalander();
      } else {
        setTimeout(() => this.showNotificationCalande(), 4000);
      }
    }

    if (showMessage === null) {
      setTimeout(() => this.showNotificationCalander(), 4000);
    }
  },
  methods: {
    showNotificationCalander() {
      this.showNotification = true;
      window.sessionStorage.setItem("calendarNotification", "true");
    },
    dismissNotificationCalander() {
      this.showNotification = false;
      window.sessionStorage.setItem("calendarNotification", "false");
    },
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
