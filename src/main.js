import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from "vue3-apexcharts"
import VueGtag from "vue-gtag";


import './styles/app.css';
import './styles/speech-bubbles.css'; // Here
import './registerServiceWorker'


const app = createApp(App);
app.use(router);
app.use(VueApexCharts);


app.use(VueGtag, {
  config: { 
    id: "UA-48100938-1",
    params: {
      send_page_view: true,
      appName: 'EIQ Demo App',
      pageTrackerScreenviewEnabled: true
    }, router
  }
});

app.mount('#app')
