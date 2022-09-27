


<template>
  <div class="preview-container">
    <div class="background-gradient">
      <!-- Main Background -->
      <div class="corrector flex justify-center items-center w-screen h-screen">
        <!-- Device Frame -->
        <div
          class="device shadow relative flex justify-center items-top md:rounded-3xl w-100 h-screen md:w-width-preview md:h-height-preview"
          
        >
          <!-- Primary Screen -->
          <div
          id="main"
            style="scrollbar-width: thin"
            class="flex flex-col justify-between overflow-x-none overflow-y-hidden w-full device md:rounded-3xl md:border-12 md:border-grey"
          >
            <!-- <img :src="iosbar" class="sticky"/> -->
            <!-- Primary Screen area -->
            <div class="no-scrollbars flex flex-col overflow-y-scroll h-100">

              <router-view />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import iosbar from "/src/assets/iosBar.png";
import appstore from "/src/assets/appstore.png";
import playstore from "/src/assets/playstore.png";
var joinStatus = false;

export default {
  name: "Layout",
  data() {
    return {
      iosbar: iosbar,
      joinStatus: joinStatus,
      appstore: appstore,
      playstore: playstore,
    };
  },
  mounted() {   
  
  },         
};
</script>

