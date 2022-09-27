<template>
  <calandarNotification
    class="fixed md:absolute top-5 z-50"
    @click="dismissNotificationCalander()"
    v-if="showNotification"
    id="overlay"
  />

  <div 
    @click="resetPagesViews()"
    class="overlay absolute"
    id="overlay"
    v-if="viewed.electricityUsage != true">
  </div>
  <div
    @click="resetPagesViews()"
    class="overlay absolute"
    v-if="viewed.electricityUsage == true && viewed.orderGas != true"
></div>
  <div
    @click="resetPagesViews()"
    id="overlay"
    class="overlay absolute"
    v-if="
      viewed.electricityUsage == true &&
      viewed.orderGas == true &&
      viewed.powerShoutHours != true
    "
  ></div>
  <div
    @click="resetPagesViews()"
    class="overlay absolute"
    id="overlay"
    v-if="
      viewed.electricityUsage == true &&
      viewed.orderGas == true &&
      viewed.powerShoutHours == true &&
      viewed.electricityForecast != true
    "
  ></div>

  <Reset v-if="
            viewed.electricityUsage != true ||
            viewed.orderGas != true ||
            viewed.powerShoutHours != true ||
            viewed.electricityForecast != true
          " />

  <div ref="device_frame" class="waves-bg pb-6 text-off-black" id="page">
    <div
      class="bottled-top"
      v-if="
        viewed.electricityUsage == true &&
        viewed.orderGas != true &&
        viewed.powerShoutHours != true &&
        viewed.electricityForecast != true
      "
    ></div>
    <div
      class="ps-top"
      v-if="
        viewed.electricityUsage == true &&
        viewed.orderGas == true &&
        viewed.powerShoutHours != true &&
        viewed.electricityForecast != true
      "
    ></div>
    <div
      class="electricity-top"
      v-if="
        viewed.electricityUsage == true &&
        viewed.orderGas == true &&
        viewed.powerShoutHours == true &&
        viewed.electricityForecast != true
      "
    ></div>

    <!-- Dashboard Heading -->
    <div class="relative flex-grow flex flex-col space-y-2">
      <div class="flex justify-between items-center w-full">
        <!-- Genesis Logo -->

        <!-- Avatar -->
        <div class="sides top">
          <img class="w-8 h-8 object-cover rounded-full" :src="avatar" />
        </div>
      </div>
      <div class="w-full sides"><h1 class="text-white">Dashboard</h1></div>

      <div class="bg-black bg-opacity-10 p-2 sides">
        <div class="flex justify-between items-end">
          <div class="text-white text-lg font-semibold">Jo</div>
          <div class="text-white text-xs opacity-70">Cust No: 999 090 1223</div>
        </div>

        <div class="flex justify-between items-end pt-2">
          <div class="flex items-center">
            <svg
              class="relative align-middle h-3 w-3 text-white mr-1"
              fill="#fff"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <div class="relative text-white text-xs font-medium align-middle">
              123 Genesis Way, Auckland
            </div>
          </div>
        </div>
      </div>
      <!-- Contents -->

      <!-- Dashboard -->
      <div class="bg-contain bg-top flex flex-col space-y-6 sides top">




        <button
          @click="clearPagesViews()"
          class="px-4 py-2 border bg-white rounded-lg shadow-lg"
        >
          Start guided tour
        </button>















        <!-- Electricity Usage -->
        <div v-if="viewed.electricityUsage != true">
          <transition name="bounce">
            <div
              v-if="showUsageSpeechBubble"
              class="absolute -mt-32 bg-white bubble text-black shadow border p-6 z-10"
            >
              <div
                class="absolute -bottom-2 triangle-up"
                style="left: 47.5%"
              ></div>
              <p class="text-sm text-center">
                Energy use during July was up compared to previous months. Tap below to find out why.
              </p>
            </div>
          </transition>

          <router-link to="/usage/monthly">
            <div
              ref="electricityUsage"
              id="electricityUsage"
              class="z-10 relative focus:outline-none block bg-white flex flex-col w-full h-auto border shadow-lg"
            >
              <div
                class="flex justify-between items-center cursor:pointer w-full text-off-black border-b border-gray-300"
              >
                <div class="flex w-full text-left font-sm text-link p-3">
                  ELECTRICITY - CURRENT BILL USAGE
                </div>
                <div class="px-1">
                  <svg
                    class="h-5 w5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              <div class="flex flex-col">
                <div class="flex justify-between w-full h-full pt-4">
                  <div class="w-3/5">
                    <div>
                      <div
                        class="pl-3 text-xs font-light pb-2 text-left text-gray-500"
                      >
                        Energy Used
                      </div>
                    </div>
                    <div class="flex">
                      <div
                        class="pl-3 text-left text-5xl font-bold text-off-black font-largecurrency"
                      >
                        $224
                      </div>
                      <div
                        class="text-left text-2xl font-bold text-off-black font-largecurrency"
                      >
                        .08
                      </div>
                    </div>
                    <div>
                      <div
                        class="pl-3 text-xs font-light pt-2 text-left text-gray-500"
                      >
                        As at {{ currentDateTime() }}
                      </div>
                    </div>
                  </div>
                  <div class="w-2/5">
                    <div>
                      <div
                        class="text-xs text-left pr-1 font-light pb-3 text-left text-gray-500"
                      >
                        Monthly Average
                      </div>
                    </div>
                    <div class="flex">
                      <div
                        class="text-left text-off-black text-5xl font-bold font-largecurrency"
                      >
                        $177
                      </div>
                      <div
                        class="text-left text-2xl text-off-black font-bold font-largecurrency "
                      >
                        .08
                      </div>
                      <div></div>
                    </div>
                    <div
                      class="text-xs font-light pt-3 text-left text-gray-500"
                    >
                      17 days to go
                    </div>
                  </div>
                </div>
                <div class="w-full usage">
                  <BarChart
                    :chartOptions="this.chartOptions"
                    :series="this.series"
                    class="internal-usage"
                  />
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div v-if="viewed.electricityUsage == true">
          <div
            ref="electricityUsage"
            id="electricityUsage"
            class="relative focus:outline-none block bg-white flex flex-col w-full h-auto border shadow-lg"
          >
            <router-link to="/usage/monthly">
              <div
                class="flex justify-between items-center cursor:pointer w-full text-off-black border-b border-gray-300"
              >
                <div class="flex w-full text-left font-sm text-link pt-3 p-3">
                  ELECTRICITY - CURRENT BILL USAGE
                </div>
                <div class="px-1">
                  <svg
                    class="h-5 w5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              <div class="flex flex-col">
                <div class="flex justify-between w-full h-full pt-4">
                  <div class="w-3/5">
                    <div>
                      <div
                        class="pl-3 text-xs font-light pb-2 text-left text-gray-500"
                      >
                        Energy Used
                      </div>
                    </div>
                    <div class="flex">
                      <div
                        class="pl-3 text-off-black text-left text-5xl font-bold font-largecurrency"
                      >
                        $224
                      </div>
                      <div
                        class="text-left text-off-black text-2xl font-bold font-largecurrency"
                      >
                        .08
                      </div>
                    </div>
                    <div>
                      <div
                        class="pl-3 text-xs font-light pt-2 text-left text-gray-500"
                      >
                        As at {{ currentDateTime() }}
                      </div>
                    </div>
                  </div>
                  <div class="w-2/5">
                    <div>
                      <div
                        class="text-xs text-left pr-1 font-light pb-2 text-left text-gray-500"
                      >
                        Monthly Average
                      </div>
                    </div>
                    <div class="flex">
                      <div
                        class="text-left text-5xl text-off-black font-bold font-largecurrency"
                      >
                        $177
                      </div>
                      <div
                        class="text-left text-off-black text-2xl font-bold font-largecurrency"
                      >
                        .08
                      </div>
                      <div></div>
                    </div>
                    <div
                      class="text-xs font-light pt-3 text-left text-gray-500"
                    >
                      17 days to go
                    </div>
                  </div>
                </div>
                <div class="w-full usage">
                  <BarChart
                    :chartOptions="this.chartOptions"
                    :series="this.series"
                    class="internal-usage"
                    v-on:current-index="newIndex"
                  />
                </div>
              </div>
            </router-link>
          </div>
        </div>

        <!-- End USAGE -->























        <!-- Order Bottled Gas -->

        <div
          v-if="viewed.electricityUsage == true && viewed.orderGas != true"
          class="z-10"
        >
          <transition name="bounce">
            <div
              v-if="showGasBottleSpeechBubble"
              class="absolute -mt-40 bg-white bubble text-black shadow border p-6 z-10"
            >
              <div
                class="absolute -bottom-2 triangle-up"
                style="left: 47.5%"
              ></div>
              <p class="text-sm text-center">
                When gas is low, the indicator on the meter goes from green to
                red. See how easy it is to order new bottles by tapping here.
              </p>
            </div>
          </transition>

          <router-link to="/bottledgas">
            <div
              ref="bottledGas"
              id="bottledGas"
              class="flex flex-col bg-white w-full h-auto border shadow-lg"
            >
              <div
                class="flex justify-between items-center cursor:pointer w-full text-off-black border-b border-gray-300 px-3"
              >
                <div
                  class="flex-grow w-full text-left font-sm text-link pl-3 py-3"
                >
                  ORDER BOTTLED GAS
                </div>
                <div class="flex-none w-5">
                  <svg
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              <div class="inline-flex align-center justify-center pb-3 pt-3">
                <div class="w-2/3 pr-2 flex align-center justify-center">
                  <div class="pl-3 text-xs font-normal text-left">
                    Order your bottled gas refill now, and it will be scheduled
                    for dispatch on the next available delivery date in your
                    area.
                  </div>
                </div>
                <div class="flex w-1/3 pl-1 pr-3">
                  <img :src="bottle" />
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <div v-if="
            viewed.orderGas == true ||
            viewed.electricityUsage != true
            ">
          <router-link to="/bottledgas">
            <div
              ref="bottledGas"
              id="bottledGas"
              class="flex flex-col bg-white w-full h-auto border shadow-lg"
            >
              <div
                class="flex justify-between items-center cursor:pointer w-full text-off-black border-b border-gray-300 px-3"
              >
                <div class="flex-grow text-left font-sm text-link py-3">
                  ORDER BOTTLED GAS
                </div>
                <div class="flex-none w-5">
                  <svg
                    class="h-5 w-5 mr-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              <div class="flex pb-3 pt-3 align-center justify-center">
                <div class="w-2/3 pr-2 flex">
                  <div
                    class="pl-3 text-xs font-normal text-left align-center justify-center"
                  >
                    Order your bottled gas refill now, and it will be scheduled
                    for dispatch on the next available delivery date in your
                    area.
                  </div>
                </div>
                <div class="w-1/3 pl-1 pr-3">
                  <div>
                    <img :src="bottle" />
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>
      <!-- End Bottled Gas -->












        <!-- Power Shout -->
        <div
          v-if="
            viewed.electricityUsage == true &&
            viewed.orderGas == true &&
            viewed.powerShoutHours != true
          "
          class="z-10"
        >
          <transition name="bounce">
            <div
              v-if="showPowerShoutSpeechBubble"
              class="absolute -mt-32 bg-white bubble text-black shadow border p-6 z-10"
            >
              <div
                class="absolute -bottom-2 triangle-up"
                style="left: 47.5%"
              ></div>
              <p class="text-sm text-center">
                Let’s explore how easy it is to book free power when you know
                usage will be high.
              </p>
            </div>
          </transition>

          <router-link to="/powershouthours">
            <div
              ref="powerShout"
              id="powerShout"
              class="flex flex-col bg-white w-full h-auto border shadow-lg"
            >
              <div
                class="flex justify-between items-center cursor:pointer w-full text-off-black border-b border-gray-300"
              >
                <div
                  class="flex w-full text-left font-sm text-link pl-3 pt-3 p-2"
                >
                  POWER SHOUT
                </div>
                <div class="px-1">
                  <svg
                    class="h-5 w5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              <div class="flex py-6">
                <div class="w-1/2">
                  <div class="flex flex-col">
                    <div
                      class="pl-3 font-semibold text-off-black text-xs text-left"
                    >
                      Power Shout Balance
                    </div>
                    <div
                      class="pl-3 inline-flex align-top text-4xl text-off-black font-semibold text-left font-largecurrency"
                    >
                      <img :src="powershout" class="-ml-3" />
                      <span>8</span>
                      <span class="text-xl font-md pl-1">hrs</span>
                    </div>
                  </div>
                </div>
                <div class="w-1/2">
                  <div>
                    <div
                      class="w-full h-full flex justify-center items-center pl-1 text-sm text-left"
                    >
                      <div class="pl-3 pr-3 text-xs text-left">
                        You have free power available to book.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Power Shout -->
        <div v-if="viewed.powerShoutHours == true || viewed.bottledGas == false">
          <router-link to="/powershouthours">
            <div
              ref="powerShout"
              id="powerShout"
              class="flex flex-col bg-white w-full h-auto border shadow-lg"
            >
              <div
                class="flex justify-between items-center cursor:pointer w-full text-off-black border-b border-gray-300"
              >
                <div
                  class="flex w-full text-left font-sm text-link pl-3 pt-3 p-2"
                >
                  POWER SHOUT
                </div>
                <div class="px-1">
                  <svg
                    class="h-5 w5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
              <div class="flex py-6">
                <div class="w-1/2">
                  <div class="flex flex-col">
                    <div
                      class="pl-3 text-off-black font-semibold text-xs text-left"
                    >
                      Power Shout Balance
                    </div>
                    <div
                      class="pl-3 inline-flex align-top text-4xl text-off-black font-semibold text-left font-largecurrency"
                    >
                      <img :src="powershout" class="-ml-3" />
                      <span>8</span>
                      <span class="text-xl font-md pl-1">hrs</span>
                    </div>
                  </div>
                </div>
                <div class="w-1/2">
                  <div>
                    <div
                      class="w-full h-full flex justify-center items-center pl-1 text-sm text-left"
                    >
                      <div class="pl-3 pr-3 text-xs text-left">
                        You have free power available to book.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <!-- Electricity Forecast-->
        <div
          v-if="
            viewed.electricityUsage == true &&
            viewed.orderGas == true &&
            viewed.powerShoutHours == true &&
            viewed.electricityForecast != true
          "
          class="mb-24 z-10"
        >
          <transition name="bounce">
            <div
              v-if="showElectricityForecastSpeechBubble"
              class="absolute -mt-36 bg-white bubble text-black shadow border p-6 z-10"
            >
              <div
                class="absolute -bottom-2 triangle-up"
                style="left: 47.5%"
              ></div>
              <p class="text-sm text-center">
                We can predict how much energy you’ll use based on the weather.
                Tap below to view this week’s electricity forecast.
              </p>
            </div>
          </transition>
          <router-link to="/forecast">
            <div
              ref="electricityForecast"
              id="electricityForecast"
              class="bg-white flex flex-col w-full h-auto border shadow-lg"
            >
              <div
                class="flex justify-between items-center cursor:pointer w-full text-off-black border-b border-gray-300"
              >
                <div
                  class="flex w-full text-left font-sm text-link pl-3 p-2 pt-3 text-off-black"
                >
                  ELECTRICITY FORECAST
                </div>
                <div class="px-1">
                  <svg
                    class="h-5 w5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="off-black"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              <div class="flex justify-end items-center px-2">
                <p
                  class="text-xs text-gray-500"
                  v-show="description.length > 0"
                >
                  {{ description }}
                </p>
                <img v-if="icon.length > 42" :src="icon" class="h-14 pt-2 pl-2" />
              </div>

<svg
                    class="mt-4 chart"
                    style="width: 100%"
                    id="svg"
                    preserveAspectRatio="xMinYMin meet"
                  >
                  <defs>
                  <linearGradient id="lgrad" x1="50%" y1="0%" x2="50%" y2="100%" >
                    
                          <stop offset="0%" style="stop-color:rgb(246,127,36);stop-opacity:0.80" />
                          <stop offset="100%" style="stop-color:rgb(246,127,36);stop-opacity:0.10" />

                    </linearGradient>
                  </defs>

                    <polyline
                      id="polyline"
                      fill="green"
                      stroke="#F58025"
                      stroke-width="3"
                      points="
        "
                    />

                    <polygon stroke="red" stroke-opacity="0%" fill-opacity="50%" stroke-width="3" :points="polyLine" fill="url(#lgrad)"/>




                    <circle
                      v-if="dayOne.point > 0"
                      :cx="colTwo"
                      :cy="dayTwo.point"
                      r="5"
                      stroke="#F58025"
                      stroke-width="3"
                      fill="#F58025"
                    />
                                        <line
                      x1="0"
                      v-if="dayOne.point > 0"
                      :y1="dayOne.point"
                      :x2="colOne - 40"
                      :y2="dayOne.point"
                      stroke-width="3"
                      stroke="#F58025"
                    />
                    <line
                      :x1="colOne - 40"
                      v-if="dayOne.point > 0"
                      :y1="dayOne.point"
                      :x2="colOne"
                      :y2="dayOne.point"
                      stroke-width="3"
                      stroke="#F58025"
                    />

                    <line
                      :x1="colOne"
                      v-if="dayOne.point > 0"
                      :y1="dayOne.point"
                      :x2="colTwo"
                      :y2="dayTwo.point"
                      stroke-width="3"
                      stroke="#F58025"
                    />
                    <line
                      :x1="colTwo"
                      v-if="dayTwo.point > 0"
                      :y1="dayTwo.point"
                      :x2="colThree"
                      :y2="dayThree.point"
                      stroke-width="3"
                      stroke="#F58025"
                    />
                    <line
                      :x1="colThree"
                      v-if="dayThree.point > 0"
                      :y1="dayThree.point"
                      :x2="colFour"
                      :y2="dayFour.point"
                      stroke-width="3"
                      stroke="#F58025"
                    />
                    <line
                      :x1="colFour"
                      v-if="dayFour.point > 0"
                      :y1="dayFour.point"
                      :x2="colFive"
                      :y2="dayFive.point"
                      stroke-width="3"
                      stroke="#F58025"
                    />
                    <line
                      :x1="colFive"
                      v-if="dayFive.point > 0"
                      :y1="dayFive.point"
                      :x2="colSix"
                      :y2="daySix.point"
                      stroke-width="3"
                      stroke="#F58025"
                    />

                    <line
                      :x1="colSix"
                      v-if="daySix.point > 0"
                      :y1="daySix.point"
                      :x2="colSix + 40"
                      :y2="daySix.point"
                      stroke-width="3"
                      stroke="#F58025"
                    />
                     <line
                      :x1="colSix + 40"
                      v-if="daySix.point > 0"
                      :y1="daySix.point"
                      :x2="colSix + 40"
                      :y2="0"
                      stroke-width="3"
                      stroke="#F58025"
                    />
                  </svg>
            </div>
          </router-link>
        </div>
        
        <div
          v-if="
            viewed.electricityForecast == true || viewed.powerShoutHours != true
          "
        >
          <router-link to="/forecast">
            <div
              ref="electricityForecast"
              id="electricityForecast"
              class="bg-white flex flex-col w-full h-auto border shadow-lg overflow-x-hidden"
            >
              <div
                class="flex justify-between items-center cursor:pointer w-full text-light-black border-b border-gray-300"
              >
                <div
                  class="flex w-full text-left font-sm text-link pl-3 p-2 pt-3 text-off-black"
                >
                  ELECTRICITY FORECAST
                </div>
                <div class="px-1">
                  <svg
                    class="h-5 w5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>

              <div class="flex justify-end items-center px-2">
                <p
                  class="mr-2 text-xs text-gray-500"
                  v-show="description.length > 0"
                >
                  {{ description }}
                </p>
                <img v-if="icon.length > 42" :src="icon" class="h-14 pt-2 pl-2" />
              </div>

              <div class="relative">
                <div class="grid grid-cols-6 gap-2 h-1">
                  <div class="flex flex-col w-full" ref="colone">&nbsp;</div>
                  <div class="flex flex-col w-full" ref="coltwo">&nbsp;</div>
                  <div class="flex flex-col w-full" ref="colthree">&nbsp;</div>
                  <div class="flex flex-col w-full" ref="colfour">&nbsp;</div>
                  <div class="flex flex-col w-full" ref="colfive">&nbsp;</div>
                  <div class="flex flex-col w-full" ref="colsix">&nbsp;</div>
                </div>
                <div class="max-w-full w-full" id="chart_id">
                  <p
                    if="dayOne.generated > 0"
                    class="font-largecurrency text-lg font-semibold mb-4 absolute left-14 pl-1 -top-2"
                  >
                    {{ formatMoney(dayOne.generated) }}
                  </p>
                  <svg
                    class="mt-4 chart"
                    style="width: 100%"
                    id="svg"
                    preserveAspectRatio="xMinYMin meet"
                  >
                  <defs>
                  <linearGradient id="lgrad" x1="50%" y1="0%" x2="50%" y2="100%" >
                    
                          <stop offset="0%" style="stop-color:rgb(246,127,36);stop-opacity:0.80" />
                          <stop offset="100%" style="stop-color:rgb(246,127,36);stop-opacity:0.10" />

                    </linearGradient>
                  </defs>

                    <polyline
                      id="polyline"
                      fill="green"
                      stroke="#F58025"
                      stroke-width="3"
                      points="
        "
                    />

                    <polygon stroke="red" stroke-opacity="0%" fill-opacity="50%" stroke-width="3" :points="polyLine" fill="url(#lgrad)"/>




                    <circle
                      v-if="dayOne.point > 0"
                      :cx="colTwo"
                      :cy="dayTwo.point"
                      r="5"
                      stroke="#F58025"
                      stroke-width="3"
                      fill="#F58025"
                    />
                                        <line
                      x1="0"
                      v-if="dayOne.point > 0"
                      :y1="dayOne.point"
                      :x2="colOne - 40"
                      :y2="dayOne.point"
                      stroke-width="3"
                      stroke="#F58025"
                    />
                    <line
                      :x1="colOne - 40"
                      v-if="dayOne.point > 0"
                      :y1="dayOne.point"
                      :x2="colOne"
                      :y2="dayOne.point"
                      stroke-width="3"
                      stroke="#F58025"
                    />

                    <line
                      :x1="colOne"
                      v-if="dayOne.point > 0"
                      :y1="dayOne.point"
                      :x2="colTwo"
                      :y2="dayTwo.point"
                      stroke-width="3"
                      stroke="#F58025"
                    />
                    <line
                      :x1="colTwo"
                      v-if="dayTwo.point > 0"
                      :y1="dayTwo.point"
                      :x2="colThree"
                      :y2="dayThree.point"
                      stroke-width="3"
                      stroke="#F58025"
                    />
                    <line
                      :x1="colThree"
                      v-if="dayThree.point > 0"
                      :y1="dayThree.point"
                      :x2="colFour"
                      :y2="dayFour.point"
                      stroke-width="3"
                      stroke="#F58025"
                    />
                    <line
                      :x1="colFour"
                      v-if="dayFour.point > 0"
                      :y1="dayFour.point"
                      :x2="colFive"
                      :y2="dayFive.point"
                      stroke-width="3"
                      stroke="#F58025"
                    />
                    <line
                      :x1="colFive"
                      v-if="dayFive.point > 0"
                      :y1="dayFive.point"
                      :x2="colSix"
                      :y2="daySix.point"
                      stroke-width="3"
                      stroke="#F58025"
                    />

                    <line
                      :x1="colSix"
                      v-if="daySix.point > 0"
                      :y1="daySix.point"
                      :x2="colSix + 40"
                      :y2="daySix.point"
                      stroke-width="3"
                      stroke="#F58025"
                    />
                     <line
                      :x1="colSix + 40"
                      v-if="daySix.point > 0"
                      :y1="daySix.point"
                      :x2="colSix + 40"
                      :y2="0"
                      stroke-width="3"
                      stroke="#F58025"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </router-link>
        </div>

        <CtaCard :isGenesis="isGenesisCustomer" class="pb-2" />
        <div class="pb-16 flex w-full text-center pl-3 pr-2 text-gray-100" style="font-size: 8px;">
                This is a guided demonstration of the Genesis Energy IQ app only.
                All data and details in this demo are generic examples only and details do not reflect your home's usage or billing.
                Eligibility criteria and Ts and Cs apply to the Energy IQ app.
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
const options = {
  root: null,
  threshold: 1,
};

import iosbar from "/src/assets/iosBar.png";
import appstore from "/src/assets/appstore.png";
import playstore from "/src/assets/playstore.png";
import calandarNotification from "/src/components/CalendarMessage";

import axios from "axios";
import gasbottlewhite from "/src/assets/gasbottle-white.png";
import circlearrow from "/src/assets/circlearrow.png";
import avatar from "/src/assets/User.png";
import bottle from "/src/assets/low-bottle.png";
import forecast from "/src/assets/forecast.png";
import ub from "/src/assets/ub.png";
import tips from "/src/assets/tips.png";
import powershout from "/src/assets/powershout.png";
import blank from "/src/assets/blank.png";
import BarChart from "@/components/BarChart.vue";
import CtaCard from "@/components/ctaCardInline.vue";
import Reset from "@/components/reset.vue";
// import LineChart from "@/components/LineChart.vue";


// URL
    let origin = window.location.origin;
    const domain = origin + "/img/forecast/";


export default {
  

  
  name: "Home",
  data() {
    return {
      customData: false,
      polyStart: 0,
      points: [],
      output: null,
      colOne: "0",
      colTwo: "0",
      colThree: "0",
      colFour: "0",
      colFive: "0",
      colSix: "0",

      startDay: "",
      endDay: "",
      weekMin: null,
      weekMax: null,
      weekGenerated: null,
      weekGeneratedDollars: "",
      weekGeneratedCents: "",
      currentDate: {
        day: "",
        date: "",
        description: "",
        icon: domain + "01d@2x.png",
        min: "",
        max: "",
        generated: "",
        point: "",
        generatedDollar: "",
        generatedCents: "",
      },
      dayOne: {
        day: "",
        date: "",
        description: "",
        icon: domain + "01d@2x.png",
        min: "",
        max: "",
        generated: "",
        point: "",
        generatedDollar: "",
        generatedCents: "",
      },
      dayTwo: {
        day: "",
        date: "",
        description: "",
        icon: domain + "01d@2x.png",
        min: "",
        max: "",
        generated: "",
        point: "",
        generatedDollar: "",
        generatedCents: "",
      },
      dayThree: {
        day: "",
        date: "",
        description: "",
        icon: domain + "01d@2x.png",
        min: "",
        max: "",
        generated: "",
        point: "",
        generatedDollar: "",
        generatedCents: "",
      },
      dayFour: {
        day: "",
        date: "",
        description: "",
        icon: domain + "01d@2x.png",
        min: "",
        max: "",
        generated: "",
        point: "",
        generatedDollar: "",
        generatedCents: "",
      },
      dayFive: {
        day: "",
        date: "",
        description: "",
        icon: domain + "01d@2x.png",
        min: "",
        max: "",
        generated: "",
        point: "",
        generatedDollar: "",
        generatedCents: "",
      },
      daySix: {
        day: "",
        date: "",
        description: "",
        icon: domain + "01d@2x.png",
        min: "",
        max: "",
        generated: "",
        point: "",
        generatedDollar: "",
        generatedCents: "",
      },
      days: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
      months: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec",
      ],
      showNotification: false,
      showMessage: false,
      displayInstant: true,
      isGenesisCustomer: true,
      iosbar: iosbar,
      joinStatus: false,
      appstore: appstore,
      playstore: playstore,
      location: null,
      gettingLocation: false,
      geoError: false,
      weatherIcon: null,
      weatherDescription: "",
      viewed: {},
      observer: null,

      showUsageSpeechBubble: false,
      showGasBottleSpeechBubble: false,
      showPowerShoutSpeechBubble: false,
      showElectricityForecastSpeechBubble: false,

      bottledGasVisible: false,
      menuShow: false,
      avatar: avatar,
      bottle: bottle,
      circlearrow: circlearrow,
      gasbottlewhite: gasbottlewhite,
      forecast: forecast,
      tips: tips,
      powershout: powershout,
      ub: ub,

      chartOptions: {
        chart: {
          toolbar: {
            show: false,
          },
          textColor: "#373d3f",
        },
        grid: {
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "95%",
            borderRadius: 5,
            startingShape: "rounded",
            linecap: "round",
            color: "#fff",
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 1,
            // gradientToColors: 'green',
            inverseColors: true,
            opacityFrom: 0,
            opacityTo: 1,
            colorStops: [
              {
                offset: 0,
                color: "#F26526",
                opacity: 1,
              },
              {
                offset: 50,
                color: "#F57F25",
                opacity: 1,
              },
              {
                offset: 100,
                color: "#FDBA0A",
                opacity: 1,
              },
            ],
          },
        },
        colors: ["#F58224"],
        xaxis: {
          categories: [
            ["Sep", "2020"],
            ["Oct", "2020"],
            ["Nov", "2020"],
            ["Dec", "2020"],
            ["Jan", "2021"],
            ["Feb", "2021"],
            ["Mar", "2021"],
            ["Apr", "2021"],
            ["May", "2021"],
            ["Jun", "2021"],
            ["Jul", "2021"],
            ["Aug", "2021"],
          ],
          labels: {
            formatter: function (value) {
              return value;
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          labels: {
            formatter: function (value) {
              return "$" + value;
            },
          },
        },
      },

      series: [
        {
          name: "Power Usage",
          data: [
            270.12,
            215.53,
            195.05,
            185.92,
            174.16,
            160.74,
            190.23,
            215.84,
            240.25,
            297.12,
            345.91,
            312.08,
          ],
        },
      ],
    };
  },
  components: {
    BarChart,
    calandarNotification,
    CtaCard,
    Reset,
  },
  created() {

    this.getGeoLoc()
    this.customData = true;

    let showMessage = sessionStorage.getItem("calendarNotification");
    if (showMessage === "true") {
      this.displayInstant = true;
      if (this.displayInstant === true) {
        this.showNotificationCalander();
      }
    }

    if (sessionStorage.getItem("GC") === null) {
      window.sessionStorage.setItem("GC", "false");
    }

    if (sessionStorage.getItem("GC") != "true") {
      if (this.$route.query.q == "email") {
        window.sessionStorage.setItem("GC", "true");
        this.isGenesisCustomer = true;
      } else {
        window.sessionStorage.setItem("GC", "false");
        this.isGenesisCustomer = false;
      }
    }

    let GC = sessionStorage.getItem("GC");
    if (GC === "true") {
      this.isGenesisCustomer = true;
    }
    if (GC === "false") {
      this.isGenesisCustomer = false;
    }

    if (!("geolocation" in navigator)) {
      this.geoError = true;
      this.getGeoLoc()
      this.customData = true;
      return;
    }

    this.gettingLocation = true;
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        this.gettingLocation = false;
        this.location = pos;
        this.geoError = false;
        this.customData = false;

        axios
          .get(
            "/.netlify/functions/getForecast?lat=" +
              this.location.coords.latitude +
              "&long=" +
              this.location.coords.longitude
          )
          .then((response) => {
            
            this.weatherResponse = response.data;
            this.weatherIcon = response.data.current.weather[0].icon;
            this.weatherDescription =
              response.data.current.weather[0].description;

            if (response.data.current) {
              let date = new Date(response.data.current.dt * 1000);

              (this.currentDate.icon =
                domain +
                response.data.current.weather[0].icon +
                "@2x.png"),
                (this.currentDate.description =
                  response.data.current.weather[0].main);
              this.currentDate.min_temp = response.data.current.temp.toFixed(1);
              this.currentDate.max_temp = response.data.current.temp.toFixed(1);
              this.currentDate.min = this.getMinCost(
                response.data.current.weather[0].main
              );
              this.currentDate.max = this.getMaxCost(
                response.data.current.weather[0].main
              );
              this.currentDate.generated = this.getGeneratedCost(
                response.data.current.weather[0].main
              );

              let splitCost = String(this.currentDate.generated).split(".");
              this.currentDate.generatedDollar = splitCost[0];
              this.currentDate.generatedCents = splitCost[1];
            }

            for (let i = 0; i < response.data.daily.length; i++) {
              if (i == 0) {
                let dailydata = response.data.daily[0];
                let date = new Date(dailydata.dt * 1000);
                this.dayOne.day = this.days[date.getDay()];
                this.dayOne.date =
                  date.getDate() + " " + this.months[date.getMonth()];
                this.startDay = this.days[date.getDay()];
                this.dayOne.icon =
                  domain +
                  dailydata.weather[0].icon +
                  "@2x.png";
                this.dayOne.min = this.getMinCost(dailydata.weather[0].main);
                this.dayOne.max = this.getMaxCost(dailydata.weather[0].main);
                this.dayOne.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );
                this.dayOne.point = this.getPixels(
                  this.dayOne.min,
                  this.dayOne.max,
                  this.dayOne.generated
                );

                let splitCost = String(this.dayOne.generated).split(".");
                this.dayOne.generatedDollar = splitCost[0];
                this.dayOne.generatedCents = splitCost[1];

                dailydata = null;
                date = null;
              }

              if (i == 1) {
                let dailydata = response.data.daily[1];
                let date = new Date(dailydata.dt * 1000);
                this.dayTwo.min = this.getMinCost(dailydata.weather[0].main);
                this.dayTwo.max = this.getMaxCost(dailydata.weather[0].main);
                this.dayTwo.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );
                this.dayTwo.point = this.getPixels(
                  this.dayTwo.min,
                  this.dayTwo.max,
                  this.dayTwo.generated
                );

                let splitCost = String(this.dayTwo.generated).split(".");
                this.dayTwo.generatedDollar = splitCost[0];
                this.dayTwo.generatedCents = splitCost[1];

                dailydata = null;
                date = null;
              }
              if (i == 2) {
                let dailydata = response.data.daily[2];
                let date = new Date(dailydata.dt * 1000);
                this.dayThree.min = this.getMinCost(dailydata.weather[0].main);
                this.dayThree.max = this.getMaxCost(dailydata.weather[0].main);
                this.dayThree.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );
                this.dayThree.point = this.getPixels(
                  this.dayThree.min,
                  this.dayThree.max,
                  this.dayThree.generated
                );

                let splitCost = String(this.dayThree.generated).split(".");
                this.dayThree.generatedDollar = splitCost[0];
                this.dayThree.generatedCents = splitCost[1];
              }
              if (i == 3) {
                let dailydata = response.data.daily[3];
                let date = new Date(dailydata.dt * 1000);
                this.dayFour.min = this.getMinCost(dailydata.weather[0].main);
                this.dayFour.max = this.getMaxCost(dailydata.weather[0].main);
                this.dayFour.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );
                this.dayFour.point = this.getPixels(
                  this.dayFour.min,
                  this.dayFour.max,
                  this.dayFour.generated
                );

                let splitCost = String(this.dayFour.generated).split(".");
                this.dayFour.generatedDollar = splitCost[0];
                this.dayFour.generatedCents = splitCost[1];
              }
              if (i == 4) {
                let dailydata = response.data.daily[4];
                let date = new Date(dailydata.dt * 1000);
                this.dayFive.min = this.getMinCost(dailydata.weather[0].main);
                this.dayFive.max = this.getMaxCost(dailydata.weather[0].main);
                this.dayFive.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );
                this.dayFive.point = this.getPixels(
                  this.dayFive.min,
                  this.dayFive.max,
                  this.dayFive.generated
                );

                let splitCost = String(this.dayFive.generated).split(".");
                this.dayFive.generatedDollar = splitCost[0];
                this.dayFive.generatedCents = splitCost[1];
              }
              if (i == 5) {
                let dailydata = response.data.daily[5];
                let date = new Date(dailydata.dt * 1000);
                this.daySix.min = this.getMinCost(dailydata.weather[0].main);
                this.daySix.max = this.getMaxCost(dailydata.weather[0].main);
                this.daySix.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );
                this.daySix.point = this.getPixels(
                  this.daySix.min,
                  this.daySix.max,
                  this.daySix.generated
                );

                let splitCost = String(this.daySix.generated).split(".");
                this.daySix.generatedDollar = splitCost[0];
                this.daySix.generatedCents = splitCost[1];
              }

              this.weekMin =
                this.dayOne.min +
                this.dayTwo.min +
                this.dayThree.min +
                this.dayFour.min +
                this.dayFive.min +
                this.daySix.min;
              this.weekMax =
                this.dayOne.max +
                this.dayTwo.max +
                this.dayThree.max +
                this.dayFour.max +
                this.dayFive.max +
                this.dayFive.max;

              let minWeek = Math.min(this.dayOne.min*100, this.dayTwo.min*100, this.dayThree.min*100, this.dayFour.min*100, this.dayFive.min*100, this.daySix.min*100)
              let maxWeek = Math.max(this.dayOne.max*100, this.dayTwo.max*100, this.dayThree.max*100, this.dayFour.max*100, this.dayFive.max*100, this.daySix.max*100);

                if(i == 0){
                  this.dayOne.point = this.getPixels(minWeek ,maxWeek, this.dayOne.generated)
                }
                if(i == 1){
                  this.dayTwo.point = this.getPixels(minWeek ,maxWeek,  this.dayTwo.generated)
                }
                if(i == 2){
                  this.dayThree.point = this.getPixels(minWeek ,maxWeek, this.dayThree.generated)
                }
                if(i == 3){
                  this.dayFour.point = this.getPixels(minWeek ,maxWeek, this.dayFour.generated)
                }
                if(i == 4){
                  this.dayFive.point = this.getPixels(minWeek ,maxWeek, this.dayFive.generated)
                }
                if(i == 5){
                  this.daySix.point = this.getPixels(minWeek ,maxWeek, this.daySix.generated)
                }

              let splitCost = String(this.weekGenerated).split(".");

              this.weekGeneratedDollars = Math.round(splitCost[0]);
              this.weekGeneratedCents = Math.round(splitCost[1]);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
      (err) => {
        this.gettingLocation = false;
        this.geoError = true;
        this.getGeoLoc()
        this.customData = true
      }
    );
  },

  computed: {
    polyLine: function(){
      let points = [];
      if(this.dayOne.point > 0){
            points[0] = 0;
            points[1] = this.dayOne.point
            points[2] = this.colOne;
            points[3] = this.dayOne.point
            points[4] = this.colTwo;
            points[5] = this.dayTwo.point
            points[6] = this.colThree;
            points[7] = this.dayThree.point
            points[8] = this.colFour;
            points[9] = this.dayFour.point
            points[10] = this.colFive;
            points[11] = this.dayFive.point
            points[12] = this.colSix;
            points[13] = this.daySix.point
            points[14] = this.colSix + 40;
            points[15] = this.daySix.point
            points[16] = this.colSix + 40;
            points[17] = 150
            points[18] =0;
            points[19] = 150
      } else {
            points[0] = 0;
            points[1] = 0;
            points[2] = 0;
            points[3] = 0;
            points[4] = 0;
            points[5] = 0;
            points[6] = 0;
            points[7] = 0;
            points[8] = 0;
            points[9] = 0;
            points[10] = 0;
            points[11] = 0;
            points[12] = 0;
            points[13] = 0;
            points[14] = 0;
            points[15] = 0;
            points[16] = 0;
            points[17] = 0;
            points[18] = 0;
            points[19] = 0;
      }

      return points;
    },
    icon: function () {
      if (this.weatherDescription.length > 2) {
        return (
          domain + this.weatherIcon + "@2x.png"
        );
      } else {
        return domain + "02d@2x.png";
      }
    },
    description: function () {
      if (!this.geoError && this.weatherDescription.length > 2) {
        var words = this.weatherDescription.split(" ");
        var CapitalizedWords = [];
        words.forEach((element) => {
          CapitalizedWords.push(
            element[0].toUpperCase() + element.slice(1, element.length)
          );
        });
        return CapitalizedWords.join(" ");
      } else {
        return "Partly Cloudy";
      }
    },
  },
  beforeCreate() {
    let showMessage = sessionStorage.getItem("calendarNotification");
    if (showMessage === "true") {
      if (this.displayInstant === "true") {
        this.showNotificationCalander();
      } else {
        setTimeout(() => this.showNotificationCalander(), 4000);
      }
    }
  },
  mounted() {

    
    let device =
      this.$refs.device_frame.getBoundingClientRect().right -
      this.$refs.device_frame.getBoundingClientRect().left;
    let screen_width = window.innerWidth;
    let half = (screen_width - device) / 2 + 20;

    this.colOne =
      Math.round(
        (this.$refs.colone.getBoundingClientRect().right -
          this.$refs.colone.getBoundingClientRect().left) /
          2 +
          this.$refs.colone.getBoundingClientRect().left,
        2
      ) - half;
    this.colTwo =
      Math.round(
        (this.$refs.coltwo.getBoundingClientRect().right -
          this.$refs.coltwo.getBoundingClientRect().left) /
          2 +
          this.$refs.coltwo.getBoundingClientRect().left,
        2
      ) - half;
    this.colThree =
      Math.round(
        (this.$refs.colthree.getBoundingClientRect().right -
          this.$refs.colthree.getBoundingClientRect().left) /
          2 +
          this.$refs.colthree.getBoundingClientRect().left,
        2
      ) - half;
    this.colFour =
      Math.round(
        (this.$refs.colfour.getBoundingClientRect().right -
          this.$refs.colfour.getBoundingClientRect().left) /
          2 +
          this.$refs.colfour.getBoundingClientRect().left,
        2
      ) - half;
    this.colFive =
      Math.round(
        (this.$refs.colfive.getBoundingClientRect().right -
          this.$refs.colfive.getBoundingClientRect().left) /
          2 +
          this.$refs.colfive.getBoundingClientRect().left,
        2
      ) - half;
    this.colSix =
      Math.round(
        (this.$refs.colsix.getBoundingClientRect().right -
          this.$refs.colsix.getBoundingClientRect().left) /
          2 +
          this.$refs.colsix.getBoundingClientRect().left,
        2
      ) - half;

    window.onResize = this.onResize = () => {
      let device =
        this.$refs.device_frame.getBoundingClientRect().right -
        this.$refs.device_frame.getBoundingClientRect().left;
      let screen_width = window.innerWidth;
      let half = (screen_width - device) / 2 + 20;

      this.colOne =
        Math.round(
          (this.$refs.colone.getBoundingClientRect().right -
            this.$refs.colone.getBoundingClientRect().left) /
            2 +
            this.$refs.colone.getBoundingClientRect().left,
          2
        ) - half;
      this.colTwo =
        Math.round(
          (this.$refs.coltwo.getBoundingClientRect().right -
            this.$refs.coltwo.getBoundingClientRect().left) /
            2 +
            this.$refs.coltwo.getBoundingClientRect().left,
          2
        ) - half;
      this.colThree =
        Math.round(
          (this.$refs.colthree.getBoundingClientRect().right -
            this.$refs.colthree.getBoundingClientRect().left) /
            2 +
            this.$refs.colthree.getBoundingClientRect().left,
          2
        ) - half;
      this.colFour =
        Math.round(
          (this.$refs.colfour.getBoundingClientRect().right -
            this.$refs.colfour.getBoundingClientRect().left) /
            2 +
            this.$refs.colfour.getBoundingClientRect().left,
          2
        ) - half;
      this.colFive =
        Math.round(
          (this.$refs.colfive.getBoundingClientRect().right -
            this.$refs.colfive.getBoundingClientRect().left) /
            2 +
            this.$refs.colfive.getBoundingClientRect().left,
          2
        ) - half;
      this.colSix =
        Math.round(
          (this.$refs.colsix.getBoundingClientRect().right -
            this.$refs.colsix.getBoundingClientRect().left) /
            2 +
            this.$refs.colsix.getBoundingClientRect().left,
          2
        ) - half;
    };

    let GC = sessionStorage.getItem("GC");
    if (GC === "true") {
      this.$gtag.event("visit", {
        event_category: "eiq-demo",
        event_label: "Visited by Genesis User",
      });

      this.isGenesisCustomer = true;
    }
    if (GC === "false") {
      this.isGenesisCustomer = false;
      this.$gtag.event("visit", {
        event_category: "eiq-demo",
        event_label: "Visited by Non-Genesis User",
      });
    }

    if (sessionStorage.getItem("pagesViewed") === null) {
      const pages = {
        electricityUsage: true,
        orderGas: true,
        powerShoutHours: true,
        electricityForecast: true,
        usageBreakdown: true,
        energySavingTips: true,
      };
      window.sessionStorage.setItem("pagesViewed", JSON.stringify(pages));
      this.viewed = JSON.parse(window.sessionStorage.getItem("pagesViewed"));
    } else {
      this.viewed = JSON.parse(window.sessionStorage.getItem("pagesViewed"));
    }

    if (this.viewed.electricityUsage != true) {
      //setTimeout(() => this.showUsageSpeechBubble = true, 4000);
      this.showUsageSpeechBubble = true;
    }

    if (this.viewed.electricityUsage == true && this.viewed.orderGas != true) {
      //setTimeout(() => (this.showGasBottleSpeechBubble = true), 2000);
      this.showGasBottleSpeechBubble = true;
    }

    if (
      this.viewed.electricityUsage == true &&
      this.viewed.orderGas == true &&
      this.viewed.powerShoutHours != true
    ) {
      setTimeout(() => (this.showNotification = true), 1000);
      //setTimeout(() => (this.showPowerShoutSpeechBubble = true), 3000);
      this.showPowerShoutSpeechBubble = true;
      window.sessionStorage.setItem("calendarNotification", "true");
    }

    if (
      this.viewed.electricityUsage == true &&
      this.viewed.orderGas == true &&
      this.viewed.powerShoutHours == true &&
      this.viewed.electricityForecast != true
    ) {
      //setTimeout(() => (this.showElectricityForecastSpeechBubble = true), 2000);
      this.showElectricityForecastSpeechBubble = true;
    }
  },
  methods: {
      getGeoLoc() {
        console.log('Geo Loc')
          axios
          .get(
            "/.netlify/functions/getForecast?lat=36.8509&long=174.7645"
          )
          .then((response) => {
            
            this.weatherResponse = response.data;
            this.weatherIcon = response.data.current.weather[0].icon;
            this.weatherDescription =
              response.data.current.weather[0].description;

            if (response.data.current) {
              let date = new Date(response.data.current.dt * 1000);

              (this.currentDate.icon =
                domain +
                response.data.current.weather[0].icon +
                "@2x.png"),
                (this.currentDate.description =
                  response.data.current.weather[0].main);
              this.currentDate.min_temp = response.data.current.temp.toFixed(1);
              this.currentDate.max_temp = response.data.current.temp.toFixed(1);
              this.currentDate.min = this.getMinCost(
                response.data.current.weather[0].main
              );
              this.currentDate.max = this.getMaxCost(
                response.data.current.weather[0].main
              );
              this.currentDate.generated = this.getGeneratedCost(
                response.data.current.weather[0].main
              );

              let splitCost = String(this.currentDate.generated).split(".");
              this.currentDate.generatedDollar = splitCost[0];
              this.currentDate.generatedCents = splitCost[1];
            }

            for (let i = 0; i < response.data.daily.length; i++) {
              if (i == 0) {
                let dailydata = response.data.daily[0];
                let date = new Date(dailydata.dt * 1000);
                this.dayOne.day = this.days[date.getDay()];
                this.dayOne.date =
                  date.getDate() + " " + this.months[date.getMonth()];
                this.startDay = this.days[date.getDay()];
                this.dayOne.icon =
                  domain +
                  dailydata.weather[0].icon +
                  "@2x.png";
                this.dayOne.min = this.getMinCost(dailydata.weather[0].main);
                this.dayOne.max = this.getMaxCost(dailydata.weather[0].main);
                this.dayOne.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );
                this.dayOne.point = this.getPixels(
                  this.dayOne.min,
                  this.dayOne.max,
                  this.dayOne.generated
                );

                let splitCost = String(this.dayOne.generated).split(".");
                this.dayOne.generatedDollar = splitCost[0];
                this.dayOne.generatedCents = splitCost[1];

                dailydata = null;
                date = null;
              }

              if (i == 1) {
                let dailydata = response.data.daily[1];
                let date = new Date(dailydata.dt * 1000);
                this.dayTwo.min = this.getMinCost(dailydata.weather[0].main);
                this.dayTwo.max = this.getMaxCost(dailydata.weather[0].main);
                this.dayTwo.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );
                this.dayTwo.point = this.getPixels(
                  this.dayTwo.min,
                  this.dayTwo.max,
                  this.dayTwo.generated
                );

                let splitCost = String(this.dayTwo.generated).split(".");
                this.dayTwo.generatedDollar = splitCost[0];
                this.dayTwo.generatedCents = splitCost[1];

                dailydata = null;
                date = null;
              }
              if (i == 2) {
                let dailydata = response.data.daily[2];
                let date = new Date(dailydata.dt * 1000);
                this.dayThree.min = this.getMinCost(dailydata.weather[0].main);
                this.dayThree.max = this.getMaxCost(dailydata.weather[0].main);
                this.dayThree.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );
                this.dayThree.point = this.getPixels(
                  this.dayThree.min,
                  this.dayThree.max,
                  this.dayThree.generated
                );

                let splitCost = String(this.dayThree.generated).split(".");
                this.dayThree.generatedDollar = splitCost[0];
                this.dayThree.generatedCents = splitCost[1];
              }
              if (i == 3) {
                let dailydata = response.data.daily[3];
                let date = new Date(dailydata.dt * 1000);
                this.dayFour.min = this.getMinCost(dailydata.weather[0].main);
                this.dayFour.max = this.getMaxCost(dailydata.weather[0].main);
                this.dayFour.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );
                this.dayFour.point = this.getPixels(
                  this.dayFour.min,
                  this.dayFour.max,
                  this.dayFour.generated
                );

                let splitCost = String(this.dayFour.generated).split(".");
                this.dayFour.generatedDollar = splitCost[0];
                this.dayFour.generatedCents = splitCost[1];
              }
              if (i == 4) {
                let dailydata = response.data.daily[4];
                let date = new Date(dailydata.dt * 1000);
                this.dayFive.min = this.getMinCost(dailydata.weather[0].main);
                this.dayFive.max = this.getMaxCost(dailydata.weather[0].main);
                this.dayFive.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );
                this.dayFive.point = this.getPixels(
                  this.dayFive.min,
                  this.dayFive.max,
                  this.dayFive.generated
                );

                let splitCost = String(this.dayFive.generated).split(".");
                this.dayFive.generatedDollar = splitCost[0];
                this.dayFive.generatedCents = splitCost[1];
              }
              if (i == 5) {
                let dailydata = response.data.daily[5];
                let date = new Date(dailydata.dt * 1000);
                this.daySix.min = this.getMinCost(dailydata.weather[0].main);
                this.daySix.max = this.getMaxCost(dailydata.weather[0].main);
                this.daySix.generated = this.getGeneratedCost(
                  dailydata.weather[0].main
                );
                this.daySix.point = this.getPixels(
                  this.daySix.min,
                  this.daySix.max,
                  this.daySix.generated
                );

                let splitCost = String(this.daySix.generated).split(".");
                this.daySix.generatedDollar = splitCost[0];
                this.daySix.generatedCents = splitCost[1];
              }

              this.weekMin =
                this.dayOne.min +
                this.dayTwo.min +
                this.dayThree.min +
                this.dayFour.min +
                this.dayFive.min +
                this.daySix.min;
              this.weekMax =
                this.dayOne.max +
                this.dayTwo.max +
                this.dayThree.max +
                this.dayFour.max +
                this.dayFive.max +
                this.dayFive.max;

              let minWeek = Math.min(this.dayOne.min*100, this.dayTwo.min*100, this.dayThree.min*100, this.dayFour.min*100, this.dayFive.min*100, this.daySix.min*100)
              let maxWeek = Math.max(this.dayOne.max*100, this.dayTwo.max*100, this.dayThree.max*100, this.dayFour.max*100, this.dayFive.max*100, this.daySix.max*100);

                if(i == 0){
                  this.dayOne.point = this.getPixels(minWeek ,maxWeek, this.dayOne.generated)
                }
                if(i == 1){
                  this.dayTwo.point = this.getPixels(minWeek ,maxWeek,  this.dayTwo.generated)
                }
                if(i == 2){
                  this.dayThree.point = this.getPixels(minWeek ,maxWeek, this.dayThree.generated)
                }
                if(i == 3){
                  this.dayFour.point = this.getPixels(minWeek ,maxWeek, this.dayFour.generated)
                }
                if(i == 4){
                  this.dayFive.point = this.getPixels(minWeek ,maxWeek, this.dayFive.generated)
                }
                if(i == 5){
                  this.daySix.point = this.getPixels(minWeek ,maxWeek, this.daySix.generated)
                }

              let splitCost = String(this.weekGenerated).split(".");

              this.weekGeneratedDollars = Math.round(splitCost[0]);
              this.weekGeneratedCents = Math.round(splitCost[1]);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
        myscale (num, in_min, in_max, out_min, out_max, factor) {
      // number map
      var scale = Math.max(0.0, num - in_min) / (in_max - in_min);

      // calculate easing curve
      var r = out_min + (Math.pow(scale, factor) * (out_max - out_min));

      // 64-bit floating point representation fix
      r = parseFloat(r.toFixed(10));

      // return mapped scale number
      return r;
    },
    formatMoney(n) {
      let num = parseFloat(n);
      if (num > 0) {
        return (
          "$ " +
          num.toLocaleString().split(".")[0] +
          "." +
          num.toFixed(2).split(".")[1]
        );
      }
    },
    getPixels(min, max, generated) {
      var mappedValue = Math.round(this.myscale(generated* 100, 504, 778, 80, 20, .2),1);
      return mappedValue
    },
    
    getMinCost(condition) {
      if (
        condition == "Mist" ||
        condition == "Smoke" ||
        condition == "Haze" ||
        condition == "Dust" ||
        condition == "Fog" ||
        condition == "Sand" ||
        condition == "Ash" ||
        condition == "Squall" ||
        condition == "Tornado"
      ) {
        condition = "Atmosphere";
      }

      let min = 0;
      switch (condition) {
        case "Thunderstorm":
          min = 5.81;
          break;
        case "Drizzle":
          min = 5.15;
          break;
        case "Rain":
          min = 5.04;
          break;
        case "Snow":
          min = 7.04;
          break;
        case "Atmosphere":
          min = 5.58;
          break;
        case "Clear":
          min = 5.24;
          break;
        case "Clouds":
          min = 6.98;
          break;
      }
      return min;
    },
    getMaxCost(condition) {
      if (
        condition == "Mist" ||
        condition == "Smoke" ||
        condition == "Haze" ||
        condition == "Dust" ||
        condition == "Fog" ||
        condition == "Sand" ||
        condition == "Ash" ||
        condition == "Squall" ||
        condition == "Tornado"
      ) {
        condition = "Atmosphere";
      }

      let max = 0;
      switch (condition) {
        case "Thunderstorm":
          max = 6.43;
          break;
        case "Drizzle":
          max = 5.69;
          break;
        case "Rain":
          max = 5.58;
          break;
        case "Snow":
          max = 7.78;
          break;
        case "Atmosphere":
          max = 6.16;
          break;
        case "Clear":
          max = 5.80;
          break;
        case "Clouds":
          max = 7.72;
          break;
      }
      return max;
    },
    getGeneratedCost(condition) {
      if (
        condition == "Mist" ||
        condition == "Smoke" ||
        condition == "Haze" ||
        condition == "Dust" ||
        condition == "Fog" ||
        condition == "Sand" ||
        condition == "Ash" ||
        condition == "Squall" ||
        condition == "Tornado"
      ) {
        condition = "Atmosphere";
      }

      let generated = 0;
      switch (condition) {
        case "Thunderstorm":
          generated = String(this.genRand(5.81, 6.43, 2));
          break;
        case "Drizzle":
          generated = String(this.genRand(5.15, 5.69, 2));
          break;
        case "Rain":
          generated = String(this.genRand(5.04, 5.58, 2));
          break;
        case "Snow":
          generated = String(this.genRand(7.04, 7.78, 2));
          break;
        case "Atmosphere":
          generated = String(this.genRand(5.58, 6.16, 2));
          break;
        case "Clear":
          generated = String(this.genRand(5.24, 5.8, 2));
          break;
        case "Clouds":
          generated = String(this.genRand(6.98, 7.72, 2));
          break;
      }
      return generated;
    },
    dateOrdinal(dom) {
      if (dom == 31 || dom == 21 || dom == 1) return dom + "st";
      else if (dom == 22 || dom == 2) return dom + "nd";
      else if (dom == 23 || dom == 3) return dom + "rd";
      else return dom + "th";
    },
    genRand(min, max, decimalPlaces) {
      var rand =
        Math.random() < 0.5
          ? (1 - Math.random()) * (max - min) + min
          : Math.random() * (max - min) + min; // could be min or max or anything in between
      var power = Math.pow(10, decimalPlaces);
      return Math.floor(rand * power) / power;
    },

    showNotificationCalander() {
      this.showNotification = true;
      this.$gtag.event("showed_clendar_notification", { method: "Google" });
      window.sessionStorage.setItem("calendarNotification", "true");
    },
    dismissNotificationCalander() {
      this.showNotification = false;
      this.$gtag.event("dismissed_clendar_notification", { method: "Google" });
      window.sessionStorage.setItem("calendarNotification", "false");
    },
  
    resetPagesViews() {
      this.$gtag.event("click", {
        event_category: "eiq-demo",
        event_label: "Reset Guided Journey",
      });

      const pages = {
        electricityUsage: true,
        orderGas: true,
        powerShoutHours: true,
        electricityForecast: true,
        usageBreakdown: true,
        energySavingTips: true,
      };
      window.sessionStorage.setItem("pagesViewed", JSON.stringify(pages));
      this.viewed = JSON.parse(window.sessionStorage.getItem("pagesViewed"));

      this.showUsageSpeechBubble = true;
    },

    clearPagesViews() {
      this.$gtag.event("click", {
        event_category: "eiq-demo",
        event_label: "Started Guided Journey",
      });

      const pages = {
        electricityUsage: false,
        orderGas: false,
        powerShoutHours: false,
        electricityForecast: false,
        usageBreakdown: false,
        energySavingTips: false,
      };
      window.sessionStorage.setItem("pagesViewed", JSON.stringify(pages));
      this.viewed = JSON.parse(window.sessionStorage.getItem("pagesViewed"));

      this.showUsageSpeechBubble = true;
    },

    currentDateTime() {
      const current = new Date();
      var months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const date =
        current.getDate() +
        " " +
        months[current.getMonth()] +
        " " +
        current.getFullYear();
      return date;
    },

    newIndex(event, chartContext, config) {
      var output = {};

      output.index = event.index;
      output.x = event.x;
      output.y = event.y;
    },
  },
};
</script>


<style>
.slide-enter,
.slide-leave-to {
  transform: scaleY(0);
}
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