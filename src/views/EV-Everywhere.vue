<template>
  <div class="bg-dark-orange pt-8 flex flex-col text-light-black">
    <router-link to="/">
      <div class="flex items-center sides">
        <img src="../assets/prev.svg" class="w-8 h-8" alt="" />
        <h2 class="text-white text-3xl ml-6">EV</h2>
      </div></router-link
    >
    <div class="flex w-full text-xl text-white mt-4">
      <router-link
        to="/ev/insights"
        class="w-1/2 flex justify-center opacity-80 items-center py-5"
        >Plan insights</router-link
      >
      <router-link
        to="/ev/everywhere"
        class="w-1/2 flex justify-center items-center py-5 border-b-[3px] border-white"
        >EVerywhere</router-link
      >
    </div>
  </div>
  <div class="waves-bg h-100 relative pt-16">
    <img
      src="../assets/car-chargenet.svg"
      class="relative mx-auto -top-10 h-52"
      alt=""
    />
  </div>
  <div class="bg-white sides">
    <h3 class="text-3xl text-light-black mb-4">
      Take your Energy EV Plan with you
      <span class="text-orange">EV</span>erywhere you go
    </h3>
    <p class="text-light-black text-xl mb-6">
      Feel the freedom to go EVerywhere and save up to 70% at ChargeNet charging
      stations - Aotearoa's largest EV charging network.
    </p>
    <div class="flex text-lg mb-10">
      <div
        class="flex w-1/2 p-3 px-4 bg-pale-orange text-genesis-orange mr-3 rounded-3xl"
      >
        <img class="w-10 mr-2 md:mr-4" src="../assets/day.svg" alt="" />
        <div class="text-sm md:text-lg">
          <p class="">Day rate</p>
          <p class=""><span class="font-semibold">$0.31</span> /kWh</p>
        </div>
      </div>
      <div
        class="flex w-1/2 p-3 px-4 bg-gray-200 text-light-blackml-3 rounded-3xl"
      >
        <img class="w-10 mr-2 md:mr-4" src="../assets/night.svg" alt="" />
        <div class="text-sm md:text-lg">
          <p class="">Night rate</p>
          <p class=""><span class="font-semibold">$0.15</span> /kWh</p>
        </div>
      </div>
    </div>
    <div class="mb-6">
      <h4 class="text-light-black text-2xl">What is EVerywhere?</h4>
      <p class="text-gray-500 font-light text-lg">
        Enjoy roaming fast charging with your home energy rates at ChargeNet
        public charging stations across Aotrearoa. EVerywhere is an add-on to
        your Energy EV plan that means you pay your home charging rates at
        ChargeNet charging stations.
      </p>
    </div>
    <div class="mb-6">
      <h4 class="text-light-black text-2xl">What happens after I join?</h4>
      <p class="text-gray-500 font-light text-lg">
        Once you've joined EVerywhere, your ChargeNet EV charging sessions will
        show on your Genesis bill. While subscribed to EVerywhere you can easily
        view your charging history, savings and transactions from Energy IQ. To
        start a charging session you can do this like you usually would - via
        the ChargeNet App, QR code, or RFID fob.
      </p>
    </div>
    <div class="mb-6">
      <h4 class="text-light-black text-2xl">
        What if I'm not a ChargeNet customer?
      </h4>
      <p class="text-gray-500 font-light text-lg">
        To complete your EVerywhere set up, you'll need to be a ChargeNet
        customer and provide us with your ChargeNet ID. It's easy to get started
        - just head to their website and sign-up.
      </p>
    </div>
    <p class="text-gray-500 mr-4 mb-12">
      <span class="text-orange underline">Terms and Conditions apply</span>.
      Average savings are based on a pilot run in Auckland Wellington, the
      individual savings on ChargeNet public charging may differ. Idle fees on
      selected ChargeNet chargers and any RFID fob costs still apply. ChargeNet
      chargers are located at Giltrat Audi (Grey Lynn) are excluded from
      EVerywhere. Customers are advised to view the ChargeNet charger map for
      stations within range of their planned journey.
    </p>

    <div
      class="rounded-full w-auto py-5 mb-12 text-white text-lg text-center mx-6 bg-genesis-orange"
    >
      Join EVerywhere
    </div>
  </div>
</template>

<script>
export default {
  name: "EVerywhere",
  data: function () {
    return {
      chartOptions: {
        chart: {
          type: "radialBar",
        },
        colors: ["#F26526"],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 0,
              size: "50%",
              background: "#fff",
            },
            track: {
              dropShadow: {
                enabled: true,
                top: 2,
                left: 0,
                blur: 4,
                opacity: 0.15,
              },
            },
            dataLabels: {
              value: {
                color: "#F26526",
                fontSize: "18px",
                fontWeight: "600",
                offsetY: "-10",
                show: true,
              },
            },
          },
        },
        fill: {
          type: "solid",
        },
        stroke: {
          lineCap: "round",
        },
        labels: [""],
      },
    };
  },
};
</script>
