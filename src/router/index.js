import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => require("../views/Home.vue"),
  },
  {
    path: "/setup",
    name: "Setup",
    component: () => require("../views/Setup.vue"),
  },
  {
    path: "/usage/monthly",
    name: "Usage Monthly",
    component: () => require("../views/UsageMonthly.vue"),
  },
  {
    path: "/usage/daily",
    name: "Usage Daily",
    component: () => require("../views/UsageDaily.vue"),
  },
  {
    path: "/usage/hourly",
    name: "Usage Hourly",
    component: () => require("../views/UsageHourly.vue"),
  },
  {
    path: "/tips",
    name: "Tips",
    component: () => require("../views/Tips.vue"),
  },
  {
    path: "/forecast",
    name: "Electricity Forecast",
    component: () => require("../views/Forecast.vue"),
  },
  {
    path: "/powershouthours",
    name: "Power Shout Hours",
    component: () => require("../views/PowerShoutHours.vue"),
  },
  {
    path: "/powershouthours/booking",
    name: "Power Shout Hours Booking",
    component: () => require("../views/PowerShoutHoursBookings.vue"),
  },
  {
    // Order Gas
    path: "/bottledgas",
    name: "Bottled Gas",
    component: () => require("../views/GasBottle.vue"),
  },
  {
    // Delivered (Big Picture)
    path: "/bottledgas/order",
    name: "Bottled Gas Order",
    component: () => require("../views/GasBottleOrder.vue"),
  },
  {
    // 2 days later page...
    path: "/bottledgas/twodays",
    name: "Bottled Gas Confirm",
    component: () => require("../views/GasBottleConfirm.vue"),
  },
  {
    path: "/usage/breakdown",
    name: "Usage Beakdown",
    component: () => require("../views/UsageBreakdown.vue"),
  },
  {
    path: "/usage/tip",
    name: "Usage Tip",
    component: () => require("../views/UsageTip.vue"),
  },
  {
    path: "/powershouthours/tip",
    name: "Power Shout Tip",
    component: () => require("../views/shoutTip.vue"),
  },
  {
    path: "/404/date",
    name: "Date Not Found",
    component: () => require("../views/DateNotFound.vue"),
  },
  { path: "/.netlify/functions/getWeather" },
];

//history: createWebHashHistory(process.env.BASE_URL),

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
