<template >
  <div class="bg-white h-full">
    <div>
      <!-- Top Bar -->
      <div class="flex-grow-0 text-left w-full top bottom gen-bg text-white">
        <TopNavigation
          title="Order LPG Gas"
          conversionActive="false"
          link="/"
        />
      </div>
      <div
        class="overflow-x-scroll relative flex-grow flex flex-col justify-center bg-white p-4"
      >
        <div class="flex-grow-1 flex items-center text-left w-full mt-4">
          <div class="flex justify-between items-center w-full">

            
            <button
              type="button"
              @click="counterDown()"
              class="w-16 flex border-1 border-black justify-center items-center mr-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M20 12H4"
                />
              </svg>
            </button>


            <div class="relative flex justify-center">
              <svg
                width="122"
                height="210"
                viewBox="0 0 122 210"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect width="122" height="210" fill="url(#pattern0)" />
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlink:href="#image0"
                      transform="translate(0 -0.0017316) scale(0.00413223 0.00240063)"
                    />
                  </pattern>
                  <image
                    id="image0"
                    width="242"
                    height="418"
                    xlink:href="data:image/png;base64,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ADMAUPYFiPIFiPMF1NFRcf4dknRHh2kv5SYAoqFc/iYXgJwL8DlELp+Klsu/1AFgtwDOjE7v5QAABFWAZnrk+IDZwNeCfPiv+BdYTQl6XWwJYgAAAAlwSFlzAAALEwAACxMBAJqcGAAACRFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChNYWNpbnRvc2gpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAyMS0wNy0wMlQwOTo0MjoxOCsxMjowMCIgeG1wOk1vZGlmeURhdGU9IjIwMjEtMDctMDJUMDk6NDM6NTMrMTI6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMDctMDJUMDk6NDM6NTMrMTI6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iRGlzcGxheSIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmJkNWY5ZDA2LTA3OWMtNWQ0Mi1iNzc5LTY4ZTY1YTBlYzIxNSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNGZmM2NjMS01ZDU2LTQ1YTgtYmU0My1jZDZhOGY5OWZiNmQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjODNjNzAyZS02ZTc0LTRhNmItYjUyMy04ODMxMzFkNzEwMTQiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJkZXJpdmVkIiBzdEV2dDpwYXJhbWV0ZXJzPSJjb252ZXJ0ZWQgZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL2pwZWciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmM4M2M3MDJlLTZlNzQtNGE2Yi1iNTIzLTg4MzEzMWQ3MTAxNCIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0wMlQwOTo0MzowNCsxMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjlhYjk1YTkwLWJkMDctNGEzYS05OGQ4LTIxNTBmMzI1OTY5ZiIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0wMlQwOTo0Mzo1MysxMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBpbWFnZS9qcGVnIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gaW1hZ2UvanBlZyB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjI0ZmYzY2MxLTVkNTYtNDVhOC1iZTQzLWNkNmE4Zjk5ZmI2ZCIgc3RFdnQ6d2hlbj0iMjAyMS0wNy0wMlQwOTo0Mzo1MysxMjowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlhYjk1YTkwLWJkMDctNGEzYS05OGQ4LTIxNTBmMzI1OTY5ZiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpjODNjNzAyZS02ZTc0LTRhNmItYjUyMy04ODMxMzFkNzEwMTQiIHN0UmVmOm9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjODNjNzAyZS02ZTc0LTRhNmItYjUyMy04ODMxMzFkNzEwMTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz55RE3DAAAVUUlEQVR4nO3debBcZZnH8ec95/Tp7rtm38lCblZkkUASECGKoIZFhMwoErWgFP4RZ1xKamrGcUbHYspxHAeXUZhxRRgoAScgO4RAUIggEAghkJAEErLcbDd36dvd55x3/oihkCXc9nLzvv3091PV///urffXz3nf06fbWGsFQH0LXAcAMHgUGVCAIgMKUGRAAYoMKECRAQUoMqAARQYUoMiAApHrAD7Iyv2LKxvXLi2vuv+9yZpV42T7S5H0drmOhUNpabMyYVpips7dnz/u5GeaTlh0uQnCp13HcsU08kc0y1s2fL/3l9/5jF3zaCzlknGdB4MTLDp/f+vSL1wRtQ+/ScR0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"
                  />
                </defs>
              </svg>

              <div
                class="absolute text-center top-12 z-2 text-6xl font-bold font-largecurrency text-white"
              >
                {{ counter }}
              </div>
              <div
                class="absolute text-center top-28 z-2 text-2xl font-bold text-white font-largecurrency"
              >
                45 kg
              </div>
            </div>
            <button
              type="button"
              @click="counterUp()"
              class="w-16 flex border-1 border-black justify-center items-center mr-2 rounded-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="black"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="flex flex-col flex-grow-0 shadow p-4 mt-6 rounded-lg">
          <div class="font-semibold pb-2">Delivery Information</div>
          <div class="text-xs grey font-light">
            Property (delivering) address:
          </div>
          <div class="text-sm pb-2 mb-4 border-b-2">123 Genesis Way</div>
          <div class="text-xs grey font-light">
            Select an Installation Point
          </div>
          <div class="text-sm pb-2 border-b-2">ICP: 0010634262GLB8Ey</div>
        </div>
        <!-- Speech Bubble -->
        <router-link
          to="/bottledgas/twodays"
          type="relative button"
          class="cursor:pointer text-center bg-background p-2 mt-6 shadow-lg text-white rounded-3xl ml-10 mr-10 space-b-4"
        >
          <div class="font-semibold">Continue</div>
        </router-link>

        <!-- Speech Bubble -->
        <div v-if="showSpeechBubble" class="absolute left-16 top-24 w-3/4 h-16">
          <div class="relative bg-gray-300 shadow rounded-sm p-2">
            <div class="absolute -bottom-2 right-4 triangle-up"></div>
            <p class="text-xs">
              Monthly view shows seasonal usage trends. Click on June's bar to
              view this day by day.
            </p>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import gasbottle from "/src/assets/gasbottle.png";
import TopNavigation from "/src/components/TopNavigation";

import iosbar from "/src/assets/iosBar.png";
import appstore from "/src/assets/appstore.png";
import playstore from "/src/assets/playstore.png";


export default {
  name: "Usage",
  data() {
    return {
      gasbottle: gasbottle,
      counter: 1,
      isGenesisCustomer: false,
      iosbar: iosbar,
      joinStatus: false,
      appstore: appstore,
      playstore: playstore,
    };
  },
  created() {
    let GC = sessionStorage.getItem("GC")
    if (GC === 'true') {
      this.isGenesisCustomer = true;
    }
    if (GC === 'false') {
      this.isGenesisCustomer = false;
    }
  },
  mounted() {

    this.$gtag.pageview({ page_title: 'Book Gas', page_path: '/bottledgas' })

    let GC = sessionStorage.getItem("GC")
    if (GC === 'true') {
      this.isGenesisCustomer = true;
    }
    if (GC === 'false') {
      this.isGenesisCustomer = false;
    }
    
    setTimeout(() => (this.showSecurity = true), 2000);
    setTimeout(() => (this.showMessage = true), 3000);
    setTimeout(() => (this.showMessage = false), 6000);
    setTimeout(() => (this.showSecurity = false), 8000);

    if (sessionStorage.getItem("pagesViewed") === null) {
      const pages = {
        electricityUsage: false,
        orderGas: true,
        powerShoutHours: false,
        electricityForecast: false,
        usageBreakdown: false,
        energySavingTips: false,
      };

      window.sessionStorage.setItem("pagesViewed", JSON.stringify(pages));
    } else {
      let ls = JSON.parse(window.sessionStorage.getItem("pagesViewed"));
      ls.orderGas = true;
      window.sessionStorage.setItem("pagesViewed", JSON.stringify(ls));
    }
  },
  components: {
    TopNavigation,
  },
  methods: {
    counterUp() {
      if (this.counter < 10) {
        this.counter++;
      }
    },
    counterDown() {
      if (this.counter >= 2) {
        this.counter--;
      }
    },
  },
};
</script>
