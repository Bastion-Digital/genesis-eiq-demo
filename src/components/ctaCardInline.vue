<template>
      <div class="above relative"> 
          <button v-if="isGenesis" @click="eiqRegister()">
              <div ref="powerShout" id="powerShout" class="flex flex-col bg-white w-full h-auto border shadow-lg">
                  <div
                      class="flex justify-between items-center cursor:pointer w-full text-off-black border-b border-gray-300">
                      <div class="flex w-full text-left font-sm text-link pl-2 pt-3 p-2">
                          REGISTER FOR ENERGY IQ
                      </div>
                      <div class="px-1">
                          <svg class="h-5 w5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                      </div>
                  </div>

                  <div class="flex py-4">
                      <div class="w-3/5 p-2">
                          <div class='text-xs'>
                              Like what you see? Register for Energy IQ to use all of these features for real with live
                              data.
                          </div>
                      </div>
                      <div class="w-2/5 p-2">
                          <div class='w-full'>
                              <img class='w-32' :src="appstore" />
                              <img class='w-32 mt-2' :src="playstore" />
                          </div>
                      </div>
                  </div>
              </div>
          </button>

         <button v-if="!isGenesis" @click="genesisJoin()">
              <div ref="powerShout" id="powerShout" class="overflow-hidden flex flex-col bg-white w-full h-auto border shadow-lg">
                  <div
                      class="flex justify-between items-center cursor:pointer w-full text-off-black border-b border-gray-300">
                      <div class="flex w-full text-left font-sm text-link pl-2 pt-3 p-2">
                          JOIN GENESIS
                      </div>
                      <div class="px-1">
                          <svg class="h-5 w5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                      </div>
                  </div>

                  <div class="flex py-4">
                      <div class="w-3/5 p-2">
                          <div class='text-xs'>
                              Like what you see? Join Genesis to get access to Energy IQ, The one-stop, clever app to help you take control.
                          </div>
                      </div>
                      <div class="w-2/5 p-2">
                          <div class='relative w-full '>
                              <img class='absolute  max-h-28 z-10 -top-4' :src="genesislogo" />
                          </div>
                      </div>
                  </div>
              </div>
            </button>



      </div>
</template>

<script>
import appstore from "/src/assets/appstore.png";
import playstore from "/src/assets/playstore.png";
import genesislogo from "/src/assets/genesis-logo-small.png";

export default {
  name: "CtaCard",
  props: ['isGenesis'],
  data: function() {
    return {
        appstore: appstore,
        playstore: playstore,
        genesislogo: genesislogo

    };
    
  },
   methods: {
      genesisJoin() {
          this.$gtag.event('clicked_join_genesis', { method: 'Google' })
          window.open('https://www.genesisenergy.co.nz/join', '_blank');
      },
      eiqRegister() {
          this.$gtag.event('clicked_install_eiq', { method: 'Google' })
          window.open('https://myaccount.genesisenergy.co.nz/login', '_blank');
      },
  },
  
};
</script>