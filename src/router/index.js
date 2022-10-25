import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/ev/",
    name: "EV Home",
    component: () => import("../views/EV-Insights.vue"),
  },
  {
    path: "/ev/insights",
    name: "EV Insights",
    component: () => import("../views/EV-Insights.vue"),
  },
  {
    path: "/ev/everywhere",
    name: "EV Everywhere",
    component: () => import("../views/EV-Everywhere.vue"),
  },
  {
    path: "/setup",
    name: "Setup",
    component: () => import("../views/Setup.vue"),
  },
  {
    path: "/usage/monthly",
    name: "Usage Monthly",
    component: () => import("../views/UsageMonthly.vue"),
  },
  {
    path: "/usage/daily",
    name: "Usage Daily",
    component: () => import("../views/UsageDaily.vue"),
  },
  {
    path: "/usage/hourly",
    name: "Usage Hourly",
    component: () => import("../views/UsageHourly.vue"),
  },
  {
    path: "/tips",
    name: "Tips",
    component: () => import("../views/Tips.vue"),
  },
  {
    path: "/forecast",
    name: "Electricity Forecast",
    component: () => import("../views/Forecast.vue"),
  },
  {
    path: "/powershouthours",
    name: "Power Shout Hours",
    component: () => import("../views/PowerShoutHours.vue"),
  },
  {
    path: "/powershouthours/booking",
    name: "Power Shout Hours Booking",
    component: () => import("../views/PowerShoutHoursBookings.vue"),
  },
  {
    // Order Gas
    path: "/bottledgas",
    name: "Bottled Gas",
    component: () => import("../views/GasBottle.vue"),
  },
  {
    // Delivered (Big Picture)
    path: "/bottledgas/order",
    name: "Bottled Gas Order",
    component: () => import("../views/GasBottleOrder.vue"),
  },
  {
    // 2 days later page...
    path: "/bottledgas/twodays",
    name: "Bottled Gas Confirm",
    component: () => import("../views/GasBottleConfirm.vue"),
  },
  {
    path: "/usage/breakdown/",
    name: "Usage Breakdown",
    component: () => import("../views/UsageBreakdown.vue"),
  },

  {
    path: "/usage/tip",
    name: "Usage Tip",
    component: () => import("../views/UsageTip.vue"),
  },
  {
    path: "/powershouthours/tip",
    name: "Power Shout Tip",
    component: () => import("../views/shoutTip.vue"),
  },
  {
    path: "/404/date",
    name: "Date Not Found",
    component: () => import("../views/DateNotFound.vue"),
  },
  { path: "/.netlify/functions/getWeather" },
];

//history: createWebHashHistory(process.env.BASE_URL),

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
