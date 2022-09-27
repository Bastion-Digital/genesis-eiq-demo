<template>
    <div v-if="showCta" class="above">
      <div  class="z-10 mx-4 pt-6 mob:fixed mob:bottom-6 desk:hidden">

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
                              <img class='absolute w-32 z-10 -bottom-30' :src="genesislogo" />
                          </div>
                      </div>
                  </div>
              </div>
            </button>



      </div>



      <!-- Desktop -->

        <div  class="z-10 pt-6 mob:hidden desk:fixed desk:bottom-6 desk:right-6">
            <!-- Join EIQ -->
          <div v-if="isGenesis" >
              <div ref="powerShout" id="powerShout" class="flex bg-white w-full h-auto border shadow-lg">

                  <div class="px-8 py-6 flex">
                      <!-- Left Column -->
                        <div class="flex-1">
                            <div class='text-md w-full pr-4'>
                              Like what you see?<br /><b>Register for Energy IQ</b> to use all of these features<br />for real with live
                              data.
                            </div>

                          

                        <!-- CTA -->
                            <div class='mt-6'>
                                <button @click="eiqRegister()" target="_BLANK" >
                                    <div class='font-medium z-2 inline-block z-10 cursor:pointer text-center bg-background p-2 px-8 shadow-lg text-white rounded-3xl'>Register for EIQ</div>
                                </button> 
                            </div> 




                        </div>
                        

                         <!-- X right hand corner -->

                        <a @click="ctaToggle()" class="md:absolute fixed z-10 right-4 top-10 cursor-pointer">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                x1="22.5343"
                                y1="1.06066"
                                x2="1.06061"
                                y2="22.5343"
                                stroke="black"
                                stroke-width="3"
                                />
                                <line
                                x1="1.06066"
                                y1="1.46571"
                                x2="22.5343"
                                y2="22.9394"
                                stroke="black"
                                stroke-width="3"
                                />
                            </svg>
                        </a>
                  </div>
              </div>
          </div>
        <!-- End register for EIQ -->


        <!-- Start not a Genesis Customer -->
         <div v-if="!isGenesis">
              <div ref="powerShout" id="powerShout" class="flex bg-white w-full h-auto border shadow-lg">

                  <div class="px-8 py-6 flex">
                      <!-- Left Column -->
                        <div class="flex-1">
                            <div class='text-md w-full pr-4'>
                              Like what you see?<br /><b>Join Genesis</b> to get access to Energy IQ,<br />The one-stop, clever app to help you take control.
                            </div>

                          

                        <!-- CTA -->
                            <div class='mt-6'>
                                <button @click="genesisJoin()" target="_BLANK" >
                                    <div class='font-medium z-2 inline-block z-10 cursor:pointer text-center bg-background p-2 px-8 shadow-lg text-white rounded-3xl'>Join Genesis</div>
                                </button> 
                            </div> 




                        </div>
                        

                         <!-- X right hand corner -->

                        <a @click="ctaToggle()" class="md:absolute fixed z-10 right-4 top-10 cursor-pointer">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <line
                                x1="22.5343"
                                y1="1.06066"
                                x2="1.06061"
                                y2="22.5343"
                                stroke="black"
                                stroke-width="3"
                                />
                                <line
                                x1="1.06066"
                                y1="1.46571"
                                x2="22.5343"
                                y2="22.9394"
                                stroke="black"
                                stroke-width="3"
                                />
                            </svg>
                        </a>
                  </div>
              </div>
        </div>
        <!-- End not a Genesis Customer -->



      </div>
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
        genesislogo: genesislogo,
        showCta: false,

    };
  },

  methods: {
      genesisJoin() {
                this.$gtag.event('click', {
                    'event_category': 'eiq-demo',
                    'event_label': 'Join Genesis'
                })
                window.open('https://www.genesisenergy.co.nz/join', '_blank');
      },
      eiqRegister() {
                this.$gtag.event('click', {
                    'event_category': 'eiq-demo',
                    'event_label': 'Register for EIQ'
                })
          window.open('https://myaccount.genesisenergy.co.nz/login', '_blank');
      },
      ctaToggle() {
      this.showCta = false;
    },
  },
  mounted() {
    setTimeout(() => (this.showCta = true), 2000);
  },

};
</script>