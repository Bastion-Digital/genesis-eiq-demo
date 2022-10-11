import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueApexCharts from "vue3-apexcharts";
import VueGtag from "vue-gtag";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

import "./styles/app.css";
import "./styles/speech-bubbles.css"; // Here
import "./registerServiceWorker";
import { polyfill } from "seamless-scroll-polyfill";

polyfill();

const pinia = createPinia();
const app = createApp(App);

pinia.use(piniaPluginPersistedstate);

app.use(router);
app.use(pinia);
app.use(VueApexCharts);

app.use(VueGtag, {
  config: {
    id: "UA-48100938-1",
    params: {
      send_page_view: true,
      appName: "EIQ Demo App",
      pageTrackerScreenviewEnabled: true,
    },
    router,
  },
});

app.mount("#app");
