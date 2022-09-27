<template><div class="flex justify-between flex-grow-0 items-center h-24 pr-4 border-t border-gray-400">
                <!-- Dashboard Tab -->
                <div class="w-1/3 flex flex-col justify-center items-center mt-2">
                  <router-link to="/" class="w-12 h-12 focus:outline-none flex justify-center items-center bg-genesis-orange text-white font-bold py-2 px-2 rounded">
                    <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </router-link>
                  <div class="text-xs mb-2 mt-1">Dashboard</div>
                </div>

                <!-- Usage Tab -->
                <div class="w-1/3 flex flex-col justify-center items-center mt-2">
                  <router-link
                    to="/usage/monthly/"
                    class="w-12 h-12 focus:outline-none flex justify-center items-center bg-genesis-orange text-white font-bold py-2 px-2 rounded"
                  >
                    <svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"
                      />
                    </svg>
                  </router-link>
                  <div class="text-xs mb-2 mt-1">Usage</div>
                </div>

                <!-- Tips Tab -->
                <div class="w-1/3 flex flex-col justify-center items-center mt-2">
                  <router-link
                    to="/tips"
                    class="w-12 h-12 focus:outline-none flex justify-center items-center bg-genesis-orange text-white font-bold py-2 px-2 rounded"
                  >
                    <svg
                      class="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </router-link>
                  <div class="text-xs mb-2 mt-1">Tips</div>
                </div>
              </div>
              </template>