<template>
  <div>
    <calandarNotification
      v-if="showNotification"
      id="overlay"
      class="fixed md:absolute top-5 z-50"
      @click="dismissNotificationCalander()"
    />

    <div
      v-if="viewed.electricityUsage != true"
      id="overlay"
      class="overlay absolute"
      @click="resetPagesViews()"
    />
    <div
      v-if="viewed.electricityUsage == true && viewed.orderGas != true"
      class="overlay absolute"
      @click="resetPagesViews()"
    />
    <div
      v-if="
        viewed.electricityUsage == true &&
        viewed.orderGas == true &&
        viewed.powerShoutHours != true
      "
      id="overlay"
      class="overlay absolute"
      @click="resetPagesViews()"
    />
    <div
      v-if="
        viewed.electricityUsage == true &&
        viewed.orderGas == true &&
        viewed.powerShoutHours == true &&
        viewed.electricityForecast != true
      "
      id="overlay"
      class="overlay absolute"
      @click="resetPagesViews()"
    />

    <Reset
      v-if="
        viewed.electricityUsage != true ||
        viewed.orderGas != true ||
        viewed.powerShoutHours != true ||
        viewed.electricityForecast != true
      "
    />

    <div id="page" ref="device_frame" class="pb-6 text-off-black">
      <!-- <div
        v-if="
          viewed.electricityUsage == true &&
          viewed.orderGas != true &&
          viewed.powerShoutHours != true &&
          viewed.electricityForecast != true
        "
        class="bottled-top"
      /> -->
      <!-- <div
        v-if="
          viewed.electricityUsage == true &&
          viewed.orderGas == true &&
          viewed.powerShoutHours != true &&
          viewed.electricityForecast != true
        "
        class="ps-top"
      /> -->

      <!-- Dashboard Heading -->
      <div class="relative flex-grow flex flex-col bg-[#e5e5e5]">
        <div class="bg-white rounded-b-[24px]">
          <!-- BG -->

          <div class="bg-white waves-bg">
            <!-- Toolbar -->
            <div class="">
              <div class="sides top flex w-full justify-between items-center">
                <div class="flex">
                  <img
                    class="w-8 h-8 object-cover rounded-full mr-2 self-start"
                    :src="avatar"
                  />
                  <div class="text-white text-lg font-semibold self-start">
                    Alex Smith
                  </div>
                </div>
                <div class="flex">
                  <img
                    class="w-14 h-14 object-cover rounded-full mr-2 self-start"
                    src="../assets/power-shout-logo.svg"
                  />
                  <img
                    class="w-14 h-14 object-cover rounded-full mr-2 self-start"
                    src="../assets/Notification.svg"
                  />
                </div>
              </div>
              <!-- Banner -->
              <router-link to="/powershouthours">
                <div
                  class="bg-white absolute left-[12.5%] w-3/4 py-4 px-6 mt-6 rounded-[24px] bg-opacity-[0.85] backdrop-blur-md flex justify-center items-center mx-auto"
                >
                  <img class="pr-4 w-20" src="../assets/party.svg" alt="" />
                  <p class="font-semibold text-xl">
                    You have 8 hours of FREE power!
                  </p>
                  <img class="pl-2 w-14" src="../assets/more.svg" alt="" />
                </div>
              </router-link>

              <!-- Home Image -->
              <component class="w-full h-auto" :is="houseImg"></component>

              <!-- Bottom Buttons -->
              <div class="flex">
                <div class="w-1/4 flex flex-col justify-center items-center" />
                <div class="w-full flex flex-col justify-center items-center">
                  <p class="font-bold text-white pb-2">Nothing due 👍</p>
                  <button
                    class="mx-auto rounded-full px-12 py-6 bg-white shadow-lg"
                    @click="clearPagesViews()"
                  >
                    Start guided tour
                  </button>
                </div>

                <transition v-if="showForecastSpeechBubble" name="bounce">
                  <div
                    id="forecastSpeech"
                    class="absolute -mt-40 bg-white bubble-icon text-black shadow border p-6 z-10"
                  >
                    <div
                      class="absolute -bottom-2 triangle-up"
                      style="left: 90%"
                    />
                    <p class="text-sm text-center">
                      We can predict how much energy you’ll use based on the
                      weather. Tap below to view this week’s electricity
                      forecast.
                    </p>
                  </div>
                </transition>

                <div
                  :class="showForecastSpeechBubble && 'z-10'"
                  class="w-1/4 flex flex-col justify-center items-center space-y-4 relative transform -translate-y-8"
                >
                  <div
                    class="relative"
                    v-if="
                      viewed.electricityUsage == true &&
                      viewed.orderGas == true &&
                      viewed.powerShoutHours == true &&
                      viewed.electricityForecast != true
                    "
                  >
                    <router-link to="/forecast">
                      <div
                        id="electricityForecast"
                        ref="electricityForecast"
                        class=""
                      >
                        <button
                          :class="showForecastSpeechBubble && 'z-10'"
                          class="shadow-lg rounded-full bg-white w-12 h-12 flex justify-center items-center"
                        >
                          <img class="w-10 h-10 mt-2" :src="cloud" alt="" />
                        </button>
                      </div>
                    </router-link>
                  </div>
                  <div
                    class="relative"
                    v-if="
                      viewed.electricityForecast == true ||
                      viewed.powerShoutHours != true
                    "
                  >
                    <router-link to="/forecast">
                      <div
                        id="electricityForecast"
                        ref="electricityForecast"
                        class=""
                      >
                        <button
                          :class="showForecastSpeechBubble && 'z-10'"
                          class="shadow-lg rounded-full bg-white w-12 h-12 flex justify-center items-center"
                        >
                          <img class="w-10 h-10 mt-2" :src="cloud" alt="" />
                        </button>
                      </div>
                    </router-link>
                  </div>
                  <router-link to="/setup">
                    <button
                      class="shadow-lg rounded-full bg-white w-12 h-12 flex justify-center items-center"
                    >
                      <img class="w-6" :src="more" alt="" />
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col mt-2 space-y-4 justify-center items-center">
            <h3 class="font-semibold text-xl">This month so far you've used</h3>
            <div class="flex justify-start items-start">
              <div>
                <span
                  class="h-full flex text-6xl pt-2 text-orange font-extrabold"
                  >$</span
                >
              </div>
              <h2 class="text-orange text-8xl font-extrabold">49</h2>
              <div>
                <span
                  class="h-full flex text-6xl pt-2 text-orange font-extrabold"
                  >.12</span
                >
              </div>
            </div>
            <div class="flex w-full justify-center space-x-8 items-center">
              <div class="min-w-1/2 flex justify-center items-center space-x-2">
                <img
                  src="../assets/lightning.svg"
                  class="bg-orange w-10 h-10 rounded-full p-1"
                  alt=""
                />
                <div>
                  <h4 class="text-xl font-semibold">Electricity</h4>
                  <p class="text-orange text-xl font-semibold">$38.20</p>
                </div>
              </div>
              <div class="min-w-1/2 flex justify-center items-center space-x-2">
                <img
                  src="../assets/fire.svg"
                  class="bg-orange w-10 h-10 rounded-full p-2"
                  alt=""
                />
                <div>
                  <h4 class="text-xl font-semibold">Gas</h4>
                  <p class="text-orange text-xl font-semibold">$10.92</p>
                </div>
              </div>
            </div>
            <img class="py-2" src="../assets/divider.svg" alt="" />

            <div class="flex flex-col justify-center items-center pb-12">
              <div class="flex pb-3">
                <h3 class="font-semibold text-lg">Estimated bill $182.70</h3>
                <img class="pl-1" src="../assets/Info.svg" alt="" />
              </div>
              <div class="w-full">
                <img class="w-full" src="../assets/progress.svg" alt="" />
                <div class="flex w-full justify-between pt-2 font-semibold">
                  <p>16 Jan to 17 Feb</p>
                  <p>23 days left</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="flex flex-col waves-bg overflow-visible ">
          <div class="flex justify-between items-center w-full">
            <div class="sides top flex">
              <img
                class="w-8 h-8 object-cover rounded-full mr-2"
                :src="avatar"
              />
              <div class="text-white text-lg font-semibold">Alex Smith</div>
            </div>
          </div>
          <div>
            <img class="object-cover w-full" :src="home" alt="" />
          </div>
          <p class="mx-auto text-white mt-2 mb-4">Nothing due 👍</p>
          <button
            @click="clearPagesViews()"
            class="mx-auto rounded-full px-12 py-6 bg-white shadow-lg"
          >
            Start guided tour
          </button>
        </div> -->

        <!-- Dashboard -->
        <div class="bg-contain bg-top flex flex-col space-y-6 sides top">
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
                />
                <p class="text-sm text-center">
                  Energy use during July was up compared to previous months. Tap
                  below to find out why.
                </p>
              </div>
            </transition>

            <router-link to="/usage/monthly">
              <div
                id="electricityUsage"
                ref="electricityUsage"
                class="z-10 relative focus:outline-none block bg-white flex flex-col w-full h-auto border shadow-lg"
              >
                <router-link to="/usage/monthly">
                  <div
                    class="flex justify-between items-center cursor:pointer w-full text-off-black"
                  >
                    <div
                      class="flex w-full text-left font-sm text-link pt-6 pb-1 px-6 text-genesis-orange text-lg"
                    >
                      Usage
                    </div>

                    <div class="pr-6 pt-6">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_501_1458)">
                          <mask
                            id="mask0_501_1458"
                            style="mask-type: alpha"
                            maskUnits="userSpaceOnUse"
                            x="5"
                            y="2"
                            width="9"
                            height="14"
                          >
                            <path
                              d="M6 3L11.704 8.2652C12.1329 8.66116 12.1329 9.33884 11.704 9.7348L6 15"
                              stroke="#F58025"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </mask>
                          <g mask="url(#mask0_501_1458)">
                            <rect
                              x="-16"
                              y="-16"
                              width="50"
                              height="50"
                              fill="#F58025"
                            />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_501_1458">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <h2 class="px-6 text-3xl">Recent usage</h2>
                  <p class="m-auto w-full text-center py-5">
                    Avg. monthly usage <span class="font-bold">$160.13</span>
                  </p>
                  <div class="flex flex-col">
                    <div class="flex justify-between w-full h-full pt-4"></div>
                    <div class="w-full usage">
                      <BarChart
                        :chart-options="chartOptions"
                        :series="series"
                        class="internal-usage"
                        @current-index="newIndex"
                      />
                    </div>
                  </div>
                </router-link>
              </div>
            </router-link>
          </div>

          <div v-if="viewed.electricityUsage == true">
            <div
              id="electricityUsage"
              ref="electricityUsage"
              class="relative focus:outline-none block bg-white flex flex-col w-full h-auto border shadow-lg"
            >
              <div
                style="position: absolute; top: 170%; left: 0"
                id="electricity-anchor"
              ></div>
              <router-link to="/usage/monthly">
                <div
                  class="flex justify-between items-center cursor:pointer w-full text-off-black"
                >
                  <div
                    class="flex w-full text-left font-sm text-link pt-6 pb-1 px-6 text-genesis-orange text-lg"
                  >
                    Usage
                  </div>

                  <div class="pr-6 pt-6">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_501_1458)">
                        <mask
                          id="mask0_501_1458"
                          style="mask-type: alpha"
                          maskUnits="userSpaceOnUse"
                          x="5"
                          y="2"
                          width="9"
                          height="14"
                        >
                          <path
                            d="M6 3L11.704 8.2652C12.1329 8.66116 12.1329 9.33884 11.704 9.7348L6 15"
                            stroke="#F58025"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </mask>
                        <g mask="url(#mask0_501_1458)">
                          <rect
                            x="-16"
                            y="-16"
                            width="50"
                            height="50"
                            fill="#F58025"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_501_1458">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <h2 class="px-6 text-3xl">Recent usage</h2>
                <p class="m-auto w-full text-center py-5">
                  Avg. monthly usage <span class="font-bold">$160.13</span>
                </p>
                <div class="flex flex-col">
                  <div class="flex justify-between w-full h-full pt-4"></div>
                  <div class="w-full usage">
                    <BarChart
                      :chart-options="chartOptions"
                      :series="series"
                      class="internal-usage"
                      @current-index="newIndex"
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
                />
                <p class="text-sm text-center">
                  When gas is low, the indicator on the meter goes from green to
                  red. See how easy it is to order new bottles by tapping here.
                </p>
              </div>
            </transition>

            <router-link to="/bottledgas">
              <div
                id="bottledGas"
                ref="bottledGas"
                class="flex flex-col bg-white w-full h-auto border shadow-lg"
              >
                <div
                  class="flex justify-between items-center cursor:pointer w-full text-off-black"
                >
                  <!-- LPGLIVE -->
                  <div
                    class="flex justify-between items-center cursor:pointer w-full text-off-black"
                  >
                    <div
                      class="flex w-full text-left font-sm text-link pt-6 pb-1 px-6 text-genesis-orange text-lg"
                    >
                      LPG Bottles
                    </div>

                    <div class="pr-6 pt-6">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_501_1458)">
                          <mask
                            id="mask0_501_1458"
                            style="mask-type: alpha"
                            maskUnits="userSpaceOnUse"
                            x="5"
                            y="2"
                            width="9"
                            height="14"
                          >
                            <path
                              d="M6 3L11.704 8.2652C12.1329 8.66116 12.1329 9.33884 11.704 9.7348L6 15"
                              stroke="#F58025"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </mask>
                          <g mask="url(#mask0_501_1458)">
                            <rect
                              x="-16"
                              y="-16"
                              width="50"
                              height="50"
                              fill="#F58025"
                            />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_501_1458">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-col py-3 px-6 align-center justify-center"
                >
                  <h3 class="text-3xl pb-10">
                    Need to order more LPG bottles?
                  </h3>
                  <div class="flex justify-center items-center">
                    <div class="w-1/4 flex">
                      <img class="w-full" src="../assets/BottledGas.svg" />
                    </div>
                    <div
                      class="pl-6 text-lg font-normal text-left align-center justify-center"
                    >
                      Easy. Place an order in under a minute.
                    </div>
                  </div>
                </div>

                <a
                  class="mx-6 mt-6 mb-10 w-auto items-center flex justify-center py-6 drop-shadow-lg rounded-full bg-white z-10"
                  href="#"
                  >Order LPG bottles</a
                >
              </div>
            </router-link>
          </div>

          <div
            v-if="viewed.orderGas == true || viewed.electricityUsage != true"
          >
            <router-link to="/bottledgas">
              <div
                id="bottledGas"
                ref="bottledGas"
                class="flex flex-col bg-white w-full h-auto border shadow-lg"
              >
                <div
                  class="flex justify-between items-center cursor:pointer w-full text-off-black"
                >
                  <div
                    class="flex justify-between items-center cursor:pointer w-full text-off-black"
                  >
                    <div
                      class="flex w-full text-left font-sm text-link pt-6 pb-1 px-6 text-genesis-orange text-lg"
                    >
                      LPG Bottles
                    </div>

                    <div class="pr-6 pt-6">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_501_1458)">
                          <mask
                            id="mask0_501_1458"
                            style="mask-type: alpha"
                            maskUnits="userSpaceOnUse"
                            x="5"
                            y="2"
                            width="9"
                            height="14"
                          >
                            <path
                              d="M6 3L11.704 8.2652C12.1329 8.66116 12.1329 9.33884 11.704 9.7348L6 15"
                              stroke="#F58025"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </mask>
                          <g mask="url(#mask0_501_1458)">
                            <rect
                              x="-16"
                              y="-16"
                              width="50"
                              height="50"
                              fill="#F58025"
                            />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_501_1458">
                            <rect width="18" height="18" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
                <div
                  class="flex flex-col py-3 px-6 align-center justify-center"
                >
                  <h3 class="text-3xl pb-10">
                    Need to order more LPG bottles?
                  </h3>
                  <div class="flex justify-center items-center">
                    <div class="w-1/4 flex">
                      <img class="w-full" src="../assets/BottledGas.svg" />
                    </div>
                    <div
                      class="pl-6 text-lg font-normal text-left align-center justify-center"
                    >
                      Easy. Place an order in under a minute.
                    </div>
                  </div>
                </div>

                <a
                  class="mx-6 mt-6 mb-10 w-auto items-center flex justify-center py-6 drop-shadow-lg rounded-full bg-white"
                  href="#"
                  >Order LPG bottles</a
                >
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
                id="powerShoutMessage"
                v-if="showPowerShoutSpeechBubble"
                class="absolute -mt-32 bg-white bubble text-black shadow border p-6 z-10"
              >
                <div
                  class="absolute -bottom-2 triangle-up"
                  style="left: 47.5%"
                />
                <p class="text-sm text-center">
                  Let’s explore how easy it is to book free power when you know
                  usage will be high.
                </p>
              </div>
            </transition>
            <router-link to="/powershouthours">
              <div
                id="powerShout"
                ref="powerShout"
                class="flex flex-col bg-white w-full h-auto border shadow-lg"
              >
                <div
                  class="flex justify-between items-center cursor:pointer w-full text-off-black"
                >
                  <div
                    class="flex w-full text-left font-sm text-link pt-6 pb-1 px-6 text-genesis-orange text-lg"
                  >
                    Power Shout
                  </div>

                  <div class="pr-6 pt-6">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_501_1458)">
                        <mask
                          id="mask0_501_1458"
                          style="mask-type: alpha"
                          maskUnits="userSpaceOnUse"
                          x="5"
                          y="2"
                          width="9"
                          height="14"
                        >
                          <path
                            d="M6 3L11.704 8.2652C12.1329 8.66116 12.1329 9.33884 11.704 9.7348L6 15"
                            stroke="#F58025"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </mask>
                        <g mask="url(#mask0_501_1458)">
                          <rect
                            x="-16"
                            y="-16"
                            width="50"
                            height="50"
                            fill="#F58025"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_501_1458">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <h3 class="px-6 text-3xl">
                  You have <span class="text-genesis-orange">8 hours</span> of
                  free power
                </h3>
                <div class="flex py-6 pb-12 justify-center items-center">
                  <div class="w-[35%]">
                    <div class="flex flex-col">
                      <div class="pl-3">
                        <img src="../assets/powershout.svg" class="w-full" />
                      </div>
                    </div>
                  </div>
                  <div class="w-[65%]">
                    <div>
                      <div
                        class="w-full h-full flex justify-center items-center pl-1 text-sm text-left"
                      >
                        <div class="pl-3 pr-6 text-lg text-left">
                          You have free power available to book.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div id="powerShoutAnchor" class="relative h-0 translate-y-64"></div>
          <div
            v-if="viewed.powerShoutHours == true || viewed.bottledGas == false"
          >
            <router-link to="/powershouthours">
              <div
                id="powerShout"
                ref="powerShout"
                class="-mb-6 -mt-6 flex flex-col bg-white w-full h-auto border shadow-lg"
              >
                <div
                  class="flex justify-between items-center cursor:pointer w-full text-off-black"
                >
                  <div
                    class="flex w-full text-left font-sm text-link pt-6 pb-1 px-6 text-genesis-orange text-lg"
                  >
                    Power Shout
                  </div>

                  <div class="pr-6 pt-6">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_501_1458)">
                        <mask
                          id="mask0_501_1458"
                          style="mask-type: alpha"
                          maskUnits="userSpaceOnUse"
                          x="5"
                          y="2"
                          width="9"
                          height="14"
                        >
                          <path
                            d="M6 3L11.704 8.2652C12.1329 8.66116 12.1329 9.33884 11.704 9.7348L6 15"
                            stroke="#F58025"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </mask>
                        <g mask="url(#mask0_501_1458)">
                          <rect
                            x="-16"
                            y="-16"
                            width="50"
                            height="50"
                            fill="#F58025"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_501_1458">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
                <h3 class="px-6 text-3xl">
                  You have <span class="text-genesis-orange">8 hours</span> of
                  free power
                </h3>
                <div class="flex py-6 pb-12 justify-center items-center">
                  <div class="w-[35%]">
                    <div class="flex flex-col">
                      <div class="pl-3">
                        <img src="../assets/powershout.svg" class="w-full" />
                      </div>
                    </div>
                  </div>
                  <div class="w-[65%]">
                    <div>
                      <div
                        class="w-full h-full flex justify-center items-center pl-1 text-sm text-left"
                      >
                        <div class="pl-3 pr-6 text-lg text-left">
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
            <router-link to="/forecast">
              <div
                id="electricityForecast"
                ref="electricityForecast"
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
                    v-show="description.length > 0"
                    class="text-xs text-gray-500"
                  >
                    {{ description }}
                  </p>
                  <img
                    v-if="icon.length > 42"
                    :src="icon"
                    class="h-14 pt-2 pl-2"
                  />
                </div>

                <svg
                  id="svg"
                  class="mt-4 chart"
                  style="width: 100%"
                  preserveAspectRatio="xMinYMin meet"
                >
                  <defs>
                    <linearGradient
                      id="lgrad"
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style="stop-color: rgb(246, 127, 36); stop-opacity: 0.8"
                      />
                      <stop
                        offset="100%"
                        style="stop-color: rgb(246, 127, 36); stop-opacity: 0.1"
                      />
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

                  <polygon
                    stroke="red"
                    stroke-opacity="0%"
                    fill-opacity="50%"
                    stroke-width="3"
                    :points="polyLine"
                    fill="url(#lgrad)"
                  />

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
                    v-if="dayOne.point > 0"
                    x1="0"
                    :y1="dayOne.point"
                    :x2="colOne - 40"
                    :y2="dayOne.point"
                    stroke-width="3"
                    stroke="#F58025"
                  />
                  <line
                    v-if="dayOne.point > 0"
                    :x1="colOne - 40"
                    :y1="dayOne.point"
                    :x2="colOne"
                    :y2="dayOne.point"
                    stroke-width="3"
                    stroke="#F58025"
                  />

                  <line
                    v-if="dayOne.point > 0"
                    :x1="colOne"
                    :y1="dayOne.point"
                    :x2="colTwo"
                    :y2="dayTwo.point"
                    stroke-width="3"
                    stroke="#F58025"
                  />
                  <line
                    v-if="dayTwo.point > 0"
                    :x1="colTwo"
                    :y1="dayTwo.point"
                    :x2="colThree"
                    :y2="dayThree.point"
                    stroke-width="3"
                    stroke="#F58025"
                  />
                  <line
                    v-if="dayThree.point > 0"
                    :x1="colThree"
                    :y1="dayThree.point"
                    :x2="colFour"
                    :y2="dayFour.point"
                    stroke-width="3"
                    stroke="#F58025"
                  />
                  <line
                    v-if="dayFour.point > 0"
                    :x1="colFour"
                    :y1="dayFour.point"
                    :x2="colFive"
                    :y2="dayFive.point"
                    stroke-width="3"
                    stroke="#F58025"
                  />
                  <line
                    v-if="dayFive.point > 0"
                    :x1="colFive"
                    :y1="dayFive.point"
                    :x2="colSix"
                    :y2="daySix.point"
                    stroke-width="3"
                    stroke="#F58025"
                  />

                  <line
                    v-if="daySix.point > 0"
                    :x1="colSix"
                    :y1="daySix.point"
                    :x2="colSix + 40"
                    :y2="daySix.point"
                    stroke-width="3"
                    stroke="#F58025"
                  />
                  <line
                    v-if="daySix.point > 0"
                    :x1="colSix + 40"
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
              viewed.electricityForecast == true ||
              viewed.powerShoutHours != true
            "
          >
            <router-link to="/forecast">
              <div
                id="electricityForecast"
                ref="electricityForecast"
                class="hidden bg-white flex flex-col w-full h-auto border shadow-lg overflow-x-hidden"
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
                    v-show="description.length > 0"
                    class="mr-2 text-xs text-gray-500"
                  >
                    {{ description }}
                  </p>
                  <img
                    v-if="icon.length > 42"
                    :src="icon"
                    class="h-14 pt-2 pl-2"
                  />
                </div>

                <div class="relative">
                  <div class="grid grid-cols-6 gap-2 h-1">
                    <div ref="colone" class="flex flex-col w-full">&nbsp;</div>
                    <div ref="coltwo" class="flex flex-col w-full">&nbsp;</div>
                    <div ref="colthree" class="flex flex-col w-full">
                      &nbsp;
                    </div>
                    <div ref="colfour" class="flex flex-col w-full">&nbsp;</div>
                    <div ref="colfive" class="flex flex-col w-full">&nbsp;</div>
                    <div ref="colsix" class="flex flex-col w-full">&nbsp;</div>
                  </div>
                  <div id="chart_id" class="max-w-full w-full">
                    <p
                      if="dayOne.generated > 0"
                      class="font-largecurrency text-lg font-semibold mb-4 absolute left-14 pl-1 -top-2"
                    >
                      {{ formatMoney(dayOne.generated) }}
                    </p>
                    <svg
                      id="svg"
                      class="mt-4 chart"
                      style="width: 100%"
                      preserveAspectRatio="xMinYMin meet"
                    >
                      <defs>
                        <linearGradient
                          id="lgrad"
                          x1="50%"
                          y1="0%"
                          x2="50%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            style="
                              stop-color: rgb(246, 127, 36);
                              stop-opacity: 0.8;
                            "
                          />
                          <stop
                            offset="100%"
                            style="
                              stop-color: rgb(246, 127, 36);
                              stop-opacity: 0.1;
                            "
                          />
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

                      <polygon
                        stroke="red"
                        stroke-opacity="0%"
                        fill-opacity="50%"
                        stroke-width="3"
                        :points="polyLine"
                        fill="url(#lgrad)"
                      />

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
                        v-if="dayOne.point > 0"
                        x1="0"
                        :y1="dayOne.point"
                        :x2="colOne - 40"
                        :y2="dayOne.point"
                        stroke-width="3"
                        stroke="#F58025"
                      />
                      <line
                        v-if="dayOne.point > 0"
                        :x1="colOne - 40"
                        :y1="dayOne.point"
                        :x2="colOne"
                        :y2="dayOne.point"
                        stroke-width="3"
                        stroke="#F58025"
                      />

                      <line
                        v-if="dayOne.point > 0"
                        :x1="colOne"
                        :y1="dayOne.point"
                        :x2="colTwo"
                        :y2="dayTwo.point"
                        stroke-width="3"
                        stroke="#F58025"
                      />
                      <line
                        v-if="dayTwo.point > 0"
                        :x1="colTwo"
                        :y1="dayTwo.point"
                        :x2="colThree"
                        :y2="dayThree.point"
                        stroke-width="3"
                        stroke="#F58025"
                      />
                      <line
                        v-if="dayThree.point > 0"
                        :x1="colThree"
                        :y1="dayThree.point"
                        :x2="colFour"
                        :y2="dayFour.point"
                        stroke-width="3"
                        stroke="#F58025"
                      />
                      <line
                        v-if="dayFour.point > 0"
                        :x1="colFour"
                        :y1="dayFour.point"
                        :x2="colFive"
                        :y2="dayFive.point"
                        stroke-width="3"
                        stroke="#F58025"
                      />
                      <line
                        v-if="dayFive.point > 0"
                        :x1="colFive"
                        :y1="dayFive.point"
                        :x2="colSix"
                        :y2="daySix.point"
                        stroke-width="3"
                        stroke="#F58025"
                      />

                      <line
                        v-if="daySix.point > 0"
                        :x1="colSix"
                        :y1="daySix.point"
                        :x2="colSix + 40"
                        :y2="daySix.point"
                        stroke-width="3"
                        stroke="#F58025"
                      />
                      <line
                        v-if="daySix.point > 0"
                        :x1="colSix + 40"
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

          <CarbonEmissions class="pb-2" />
          <UsageBreakdown class="pb-2" />
          <HomeComparison :houseImg="houseImg" class="pb-2" />

          <CtaCard :is-genesis="isGenesisCustomer" class="pb-2" />
          <div
            class="pb-16 flex w-full text-center pl-3 pr-2 text-gray-800"
            style="font-size: 8px"
          >
            This is a guided demonstration of the Genesis Energy IQ app only.
            All data and details in this demo are generic examples only and
            details do not reflect your home's usage or billing. Eligibility
            criteria and Ts and Cs apply to the Energy IQ app.
          </div>
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
import avatar from "/src/assets/avatar.svg";
import bg from "/src/assets/bg-small.svg";
import cloud from "/src/assets/cloud.svg";
import more from "/src/assets/more.svg";
import bottle from "/src/assets/low-bottle.png";
import forecast from "/src/assets/forecast.png";
import ub from "/src/assets/ub.png";
import tips from "/src/assets/tips.png";
import powershout from "/src/assets/powershout.png";
import blank from "/src/assets/blank.png";
import BarChart from "@/components/BarChart.vue";
import CtaCard from "@/components/ctaCardInline.vue";
import UsageBreakdown from "../components/UsageBreakdown.vue";
import CarbonEmissions from "@/components/CarbonEmissions.vue";
import HomeComparison from "@/components/HomeComparison.vue";
import Reset from "@/components/reset.vue";
// import LineChart from "@/components/LineChart.vue";
import { useHouseStore } from "@/stores/house";
import router from "../router";

import { defineAsyncComponent, onMounted } from "vue";
// URL
let origin = window.location.origin;
const domain = origin + "/img/forecast/";

export default {
  name: "HomeMain",
  components: {
    BarChart,
    calandarNotification,
    CtaCard,
    CarbonEmissions,
    UsageBreakdown,
    HomeComparison,
    Reset,
  },

  setup() {
    const houseState = useHouseStore();
    let houseImg;
    let houseData = localStorage.getItem("house");
    houseData = JSON.parse(houseData);
    if (houseData != undefined) {
      houseState.set(houseData);
      houseImg = defineAsyncComponent(() =>
        import(`../components/houses/${houseData.filename}.vue`)
      );
    } else router.push("setup");

    return { houseState, houseImg };
  },
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
      showForecastSpeechBubble: false,

      bottledGasVisible: false,
      menuShow: false,
      avatar: avatar,
      cloud: cloud,
      more: more,
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
          show: true,
          borderColor: "#90A4AE",
          strokeDashArray: 0,
          position: "back",
          xaxis: {
            lines: {
              show: false,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
          row: {
            colors: undefined,
            opacity: 0.5,
          },
          column: {
            colors: undefined,
            opacity: 0.5,
          },
          padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
          },
        },
        plotOptions: {
          bar: {
            columnWidth: "35%",
            borderRadius: 8,
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
          categories: this.lastMonths(12),
          labels: {
            formatter: function (value) {
              return value;
            },
            style: {
              colors: "#BDBBC0",
              fontSize: "14px",
              fontWeight: 500,
              cssClass: "apexcharts-xaxis-label",
            },
          },
        },
        dataLabels: {
          enabled: false,
        },

        yaxis: {
          labels: {
            show: true,
            formatter: function (value) {
              return "$" + value;
            },
          },
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },

      series: [
        {
          name: "Power Usage",
          data: [
            270.12, 215.53, 195.05, 185.92, 174.16, 160.74, 190.23, 215.84,
            240.25, 297.12, 345.91, 312.08,
          ],
        },
      ],
    };
  },

  computed: {
    polyLine: function () {
      let points = [];
      if (this.dayOne.point > 0) {
        points[0] = 0;
        points[1] = this.dayOne.point;
        points[2] = this.colOne;
        points[3] = this.dayOne.point;
        points[4] = this.colTwo;
        points[5] = this.dayTwo.point;
        points[6] = this.colThree;
        points[7] = this.dayThree.point;
        points[8] = this.colFour;
        points[9] = this.dayFour.point;
        points[10] = this.colFive;
        points[11] = this.dayFive.point;
        points[12] = this.colSix;
        points[13] = this.daySix.point;
        points[14] = this.colSix + 40;
        points[15] = this.daySix.point;
        points[16] = this.colSix + 40;
        points[17] = 150;
        points[18] = 0;
        points[19] = 150;
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
        return domain + this.weatherIcon + "@2x.png";
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
  created() {
    this.getGeoLoc();
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
      this.getGeoLoc();
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
                domain + response.data.current.weather[0].icon + "@2x.png"),
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
                  domain + dailydata.weather[0].icon + "@2x.png";
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

              let minWeek = Math.min(
                this.dayOne.min * 100,
                this.dayTwo.min * 100,
                this.dayThree.min * 100,
                this.dayFour.min * 100,
                this.dayFive.min * 100,
                this.daySix.min * 100
              );
              let maxWeek = Math.max(
                this.dayOne.max * 100,
                this.dayTwo.max * 100,
                this.dayThree.max * 100,
                this.dayFour.max * 100,
                this.dayFive.max * 100,
                this.daySix.max * 100
              );

              if (i == 0) {
                this.dayOne.point = this.getPixels(
                  minWeek,
                  maxWeek,
                  this.dayOne.generated
                );
              }
              if (i == 1) {
                this.dayTwo.point = this.getPixels(
                  minWeek,
                  maxWeek,
                  this.dayTwo.generated
                );
              }
              if (i == 2) {
                this.dayThree.point = this.getPixels(
                  minWeek,
                  maxWeek,
                  this.dayThree.generated
                );
              }
              if (i == 3) {
                this.dayFour.point = this.getPixels(
                  minWeek,
                  maxWeek,
                  this.dayFour.generated
                );
              }
              if (i == 4) {
                this.dayFive.point = this.getPixels(
                  minWeek,
                  maxWeek,
                  this.dayFive.generated
                );
              }
              if (i == 5) {
                this.daySix.point = this.getPixels(
                  minWeek,
                  maxWeek,
                  this.daySix.generated
                );
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
        this.getGeoLoc();
        this.customData = true;
      }
    );
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

      document.getElementById("bottledGas").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "start",
      });
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

      setTimeout(
        () =>
          document.getElementById("powerShoutAnchor").scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "start",
          }),
        200
      );
    }

    if (
      this.viewed.electricityUsage == true &&
      this.viewed.orderGas == true &&
      this.viewed.powerShoutHours == true &&
      this.viewed.electricityForecast != true
    ) {
      //setTimeout(() => (this.showElectricityForecastSpeechBubble = true), 2000);
      this.showForecastSpeechBubble = true;

      console.log(this.showForecastSpeechBubble);
    }
  },
  methods: {
    getGeoLoc() {
      console.log("Geo Loc");
      axios
        .get("/.netlify/functions/getForecast?lat=36.8509&long=174.7645")
        .then((response) => {
          this.weatherResponse = response.data;
          this.weatherIcon = response.data.current.weather[0].icon;
          this.weatherDescription =
            response.data.current.weather[0].description;

          if (response.data.current) {
            let date = new Date(response.data.current.dt * 1000);

            (this.currentDate.icon =
              domain + response.data.current.weather[0].icon + "@2x.png"),
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
              this.dayOne.icon = domain + dailydata.weather[0].icon + "@2x.png";
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

            let minWeek = Math.min(
              this.dayOne.min * 100,
              this.dayTwo.min * 100,
              this.dayThree.min * 100,
              this.dayFour.min * 100,
              this.dayFive.min * 100,
              this.daySix.min * 100
            );
            let maxWeek = Math.max(
              this.dayOne.max * 100,
              this.dayTwo.max * 100,
              this.dayThree.max * 100,
              this.dayFour.max * 100,
              this.dayFive.max * 100,
              this.daySix.max * 100
            );

            if (i == 0) {
              this.dayOne.point = this.getPixels(
                minWeek,
                maxWeek,
                this.dayOne.generated
              );
            }
            if (i == 1) {
              this.dayTwo.point = this.getPixels(
                minWeek,
                maxWeek,
                this.dayTwo.generated
              );
            }
            if (i == 2) {
              this.dayThree.point = this.getPixels(
                minWeek,
                maxWeek,
                this.dayThree.generated
              );
            }
            if (i == 3) {
              this.dayFour.point = this.getPixels(
                minWeek,
                maxWeek,
                this.dayFour.generated
              );
            }
            if (i == 4) {
              this.dayFive.point = this.getPixels(
                minWeek,
                maxWeek,
                this.dayFive.generated
              );
            }
            if (i == 5) {
              this.daySix.point = this.getPixels(
                minWeek,
                maxWeek,
                this.daySix.generated
              );
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
    myscale(num, in_min, in_max, out_min, out_max, factor) {
      // number map
      var scale = Math.max(0.0, num - in_min) / (in_max - in_min);

      // calculate easing curve
      var r = out_min + Math.pow(scale, factor) * (out_max - out_min);

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
      var mappedValue = Math.round(
        this.myscale(generated * 100, 504, 778, 80, 20, 0.2),
        1
      );
      return mappedValue;
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
          max = 5.8;
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

      document.getElementById("electricity-anchor").scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
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

    currentMonth() {
      const current = new Date();
      const month = current.toLocaleString("default", { month: "short" });
      return month;
    },

    lastMonths(numberMonths) {
      let months = [];

      for (let i = 0; i < numberMonths; i++) {
        const current = new Date();
        current.setMonth(current.getMonth() - i);
        const month = current.toLocaleString("default", { month: "short" });
        months.push(month);
      }
      months = months.reverse();
      return months;
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
