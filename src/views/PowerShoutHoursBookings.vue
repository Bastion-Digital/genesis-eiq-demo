<template>
<div  class="h-full bg-white">
        <div class="flex-grow-0 text-left w-full top bottom text-white " style="background: #EC5C32;">
          <calandarNotification @click="dismissNotificationCalander()" v-if="showNotification" class="absolute top-3 z-50 w-full"/>
          <TopNavigation title="Power Shout" conversionActive="false" link="/powershouthours" />  
          <div class="h-4" />
          
      </div>
      <img :src="curve" style="width: 100%" />

      <div class="relative flex-grow flex flex-col px-4 -mt-8 "> 
        
         <div
          ref="powerShout"
          id="powerShout"
          class="flex flex-col bg-white text-black w-full rounded-xl shadow-lg"
        >
          
          <div class="flex items-center w-full ">
  
            <div class="inline-flex py-2">
                <div  class="pr-2 flex text-4xl font-bold text-left font-largecurrency">
                  <img :src="powershout" style="height: 1.5em;"/>
                </div>
            </div>
            <div class="inline-flex">
                <div
                  class=" justify-center items-center px-0 py-4 text-sm text-left w-full"
                >
                  <div class="text-sm font-bold text-left">
                    Book a Power Shout for
                  </div>
                  <div class="text-xs text-left flex line-1 w-full">
                    <span><svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.19995 7.13609C3.19995 4.52531 5.32523 2.40002 7.93601 2.40002C10.5468 2.40002 12.6721 4.52531 12.677 7.13609C12.677 7.43333 12.6473 7.73305 12.5928 8.02534C12.5903 8.04268 12.5804 8.09469 12.5606 8.18387C12.4888 8.50588 12.3823 8.81798 12.2436 9.1177C11.7333 10.3191 10.6087 12.1644 8.14904 14.1411C8.08711 14.1906 8.0128 14.2154 7.93849 14.2154C7.86418 14.2154 7.78987 14.1906 7.72794 14.1411C5.26579 12.1644 4.1437 10.3191 3.63343 9.1177C3.49472 8.81798 3.3882 8.5034 3.31637 8.18387C3.29655 8.09469 3.28665 8.04268 3.28417 8.02534C3.2272 7.73305 3.19995 7.43333 3.19995 7.13609ZM7.93603 4.18103C6.2789 4.18103 4.92892 5.53101 4.92892 7.18813C4.92892 8.84526 6.2789 10.1952 7.93603 10.1952C9.59315 10.1952 10.9431 8.84526 10.9431 7.18813C10.9431 5.53101 9.59315 4.18103 7.93603 4.18103Z" fill="black"/>
                          <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="3" y="2" width="10" height="13">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.19995 7.13609C3.19995 4.52531 5.32523 2.40002 7.93601 2.40002C10.5468 2.40002 12.6721 4.52531 12.677 7.13609C12.677 7.43333 12.6473 7.73305 12.5928 8.02534C12.5903 8.04268 12.5804 8.09469 12.5606 8.18387C12.4888 8.50588 12.3823 8.81798 12.2436 9.1177C11.7333 10.3191 10.6087 12.1644 8.14904 14.1411C8.08711 14.1906 8.0128 14.2154 7.93849 14.2154C7.86418 14.2154 7.78987 14.1906 7.72794 14.1411C5.26579 12.1644 4.1437 10.3191 3.63343 9.1177C3.49472 8.81798 3.3882 8.5034 3.31637 8.18387C3.29655 8.09469 3.28665 8.04268 3.28417 8.02534C3.2272 7.73305 3.19995 7.43333 3.19995 7.13609ZM7.93603 4.18103C6.2789 4.18103 4.92892 5.53101 4.92892 7.18813C4.92892 8.84526 6.2789 10.1952 7.93603 10.1952C9.59315 10.1952 10.9431 8.84526 10.9431 7.18813C10.9431 5.53101 9.59315 4.18103 7.93603 4.18103Z" fill="white"/>
                          </mask>
                          <g mask="url(#mask0)">
                          <rect width="14" height="16" fill="#464958"/>
                          </g>
                      </svg>
                    </span>
                    <span class="pl-1">123 Genesis Way, Auckland</span>
                  </div>
                  <div class="text-xs text-left flex line-1 w-full pl-1">
                    <svg width="28" height="14" viewBox="0 0 28 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6001 11.5046C13.6001 8.02261 16.4655 5.19995 20.0001 5.19995C23.5347 5.19995 26.4001 8.02261 26.4001 11.5046C26.4001 12.4318 26.1976 13.3122 25.8323 14.1043C25.5836 13.9633 25.308 13.8319 25.0095 13.7103C25.3158 13.0366 25.4858 12.2904 25.4858 11.5046C25.4858 8.52022 23.0296 6.10061 20.0001 6.10061C16.9706 6.10061 14.5144 8.52022 14.5144 11.5046C14.5144 12.2904 14.6844 13.0366 14.9907 13.7103C14.6922 13.8319 14.4166 13.9638 14.1679 14.1043C13.8031 13.3122 13.6001 12.4318 13.6001 11.5046ZM17.9252 8.30969L20.2966 11.4532C20.8228 11.4465 21.3209 11.716 21.5646 12.1945C21.9143 12.8808 21.6078 13.7377 20.8799 14.1086C20.1519 14.4795 19.2785 14.2238 18.9288 13.5375C18.685 13.0591 18.7602 12.4975 19.0749 12.0757L17.9252 8.30969Z" fill="#464958"/>
                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="13" y="5" width="14" height="10">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6001 11.5046C13.6001 8.02261 16.4655 5.19995 20.0001 5.19995C23.5347 5.19995 26.4001 8.02261 26.4001 11.5046C26.4001 12.4318 26.1976 13.3122 25.8323 14.1043C25.5836 13.9633 25.308 13.8319 25.0095 13.7103C25.3158 13.0366 25.4858 12.2904 25.4858 11.5046C25.4858 8.52022 23.0296 6.10061 20.0001 6.10061C16.9706 6.10061 14.5144 8.52022 14.5144 11.5046C14.5144 12.2904 14.6844 13.0366 14.9907 13.7103C14.6922 13.8319 14.4166 13.9638 14.1679 14.1043C13.8031 13.3122 13.6001 12.4318 13.6001 11.5046ZM17.9252 8.30969L20.2966 11.4532C20.8228 11.4465 21.3209 11.716 21.5646 12.1945C21.9143 12.8808 21.6078 13.7377 20.8799 14.1086C20.1519 14.4795 19.2785 14.2238 18.9288 13.5375C18.685 13.0591 18.7602 12.4975 19.0749 12.0757L17.9252 8.30969Z" fill="white"/>
                        </mask>
                        <g mask="url(#mask0)">
                        <rect x="12" y="2" width="16" height="16" fill="#464958"/>
                        </g>
                        <path d="M1 0V11H7.5" stroke="#464958"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8.46289L9 11L6 13.7974V8.46289Z" fill="#464958"/>
                    </svg>
                    <span class="pl-1 line-1">Office&nbsp;<span class="text-gray-400">(ICP: 41732861)</span></span>
                </div>
                </div>
                
                

            </div>
            
          </div>
          
          </div>
          </div>

        <div class="bg-white p-2 block">
          <!-- Dashboard Heading -->
          

          <div class='mt-4 text-xl font-semibold overflow-x-scroll text-gray-300 flex justify-center items-center'>
            <div class="text-black" v-text='currentMonthName' ></div>
          </div>


          <div class='mt-6 overflow-hidden  grid grid-cols-7 px-4 py-2'>

            <div class='flex items-center justify-center text-xs p-2 h-auto uppercase'><div>Mon</div></div>
            <div class='flex items-center justify-center text-xs p-2 h-auto uppercase'><div>Tue</div></div>
            <div class='flex items-center justify-center text-xs p-2 h-auto uppercase'><div>Wed</div></div>
            <div class='flex items-center justify-center text-xs p-2 h-auto uppercase'><div>Thu</div></div>
            <div class='flex items-center justify-center text-xs p-2 h-auto uppercase'><div>Fri</div></div>
            <div class='flex items-center justify-center text-xs p-2 h-auto uppercase'><div>Sat</div></div>
            <div class='flex items-center justify-center text-xs p-2 h-auto uppercase'><div>Sun</div></div>

            
            <div v-for="{day,index} in emptyDays" :key="index" class='flex items-center justify-center text-xs p-2 cursor-pointer rounded-2xl'  v-html="day"></div>
            <div v-for="days in daysInMonth" :key="days" class='flex items-center justify-center text-xs p-2 cursor-pointer rounded-2xl' v-bind:class="[this.startDate == days ? 'bg-background text-white' : '', currentDateStd == days ? 'text-m font-bold text-bg' : '']" @click="selectDates(days)" v-html="days.slice(-2)"></div>
          </div>
          <div v-if="startDate.length > 0" class="mt-2 p-5 w-full flex justify-center items-center bg-white m-auto border">
            <div class="flex">
              <select v-model="startHours" name="hours" class="bg-transparent text-xl appearance-none outline-none">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
              </select>
              <span class="text-xl mr-3">:</span>
              <select v-model="startMinutes" @change="alert('test')" name="minutes" class="bg-transparent text-xl appearance-none outline-none mr-4">
                <option value='00'>00</option>
                <option value='01'>01</option>
                <option value='02'>02</option>
                <option value='03'>03</option>
                <option value='04'>04</option>
                <option value='05'>05</option>
                <option value='06'>06</option>
                <option value='07'>07</option>
                <option value='08'>08</option>
                <option value='09'>09</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
                <option value='16'>16</option>
                <option value='17'>17</option>
                <option value='18'>18</option>
                <option value='19'>19</option>
                <option value='20'>20</option>
                <option value='21'>21</option>
                <option value='22'>22</option>
                <option value='23'>23</option>
                <option value='24'>24</option>
                <option value='25'>25</option>
                <option value='26'>26</option>
                <option value='27'>27</option>
                <option value='28'>28</option>
                <option value='29'>29</option>
                <option value='30'>30</option>
                <option value='31'>31</option>
                <option value='32'>32</option>
                <option value='33'>33</option>
                <option value='34'>34</option>
                <option value='35'>35</option>
                <option value='36'>36</option>
                <option value='37'>37</option>
                <option value='38'>38</option>
                <option value='39'>39</option>
                <option value='40'>40</option>
                <option value='41'>41</option>
                <option value='42'>42</option>
                <option value='43'>43</option>
                <option value='44'>44</option>
                <option value='45'>45</option>
                <option value='46'>46</option>
                <option value='47'>47</option>
                <option value='48'>48</option>
                <option value='49'>49</option>
                <option value='50'>50</option>
                <option value='51'>51</option>
                <option value='52'>52</option>
                <option value='53'>53</option>
                <option value='54'>54</option>
                <option value='55'>55</option>
                <option value='56'>56</option>
                <option value='57'>57</option>
                <option value='58'>58</option>
                <option value='59'>59</option>
              </select>
            </div>
          </div>
        </div>
         <div class="bg-white pb-4 px-4">
          <button type='button' @click="addBooking()" class='cursor-pointer w-full text-center bg-background p-2 mt-2 rounded-3xl'>
            <div class='font-semibold text-white'>Book</div>
          </button>


        </div>
        <div class="bg-gray-100 px-4 pb-32 py-4">
          <div class=" ">
            <div class="text-xs flex w-full justify-items-stretch">
              <span class="flex-1 font-medium text-left" v-text="currentDate"></span>
              <span class="flex-1 text-right">Avail. balance 8hrs</span>
            </div>
            <div class="py-6 flex align-center justify-center">
              <img :src="noBookings" class="h-12" />
            </div>
          </div>

          <!-- <div class='text-xl text-center  mt-2'>{{bookingTime}}</div> -->

          <!-- <button type='button' @click="reset()" class='cursor-pointer w-full text-center border border-background p-1 mt-6'>
            <div class='font-semibold'>Reset</div>
          </button> -->
        </div>
      
        </div>
</template>

<script>
import gasbottle from "/src/assets/gasbottle.png";
import noBookings from "/src/assets/noBookings.png";
import curve from "/src/assets/curve.png";
import TopNavigation from "/src/components/TopNavigationPowerShout";
import powershout from "/src/assets/powershout.svg";

import iosbar from "/src/assets/iosBar.png";
import appstore from "/src/assets/appstore.png";
import playstore from "/src/assets/playstore.png";

import calandarNotification from '/src/components/CalendarMessage';

export default {
  name: "Usage",
  data() {
    return {
      currentDate: '',
      currentDateStd: '',
      startDay: 0,
      startMonth: 0,
      emptyDays: [],
      monthArray: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct", "Nov", "Dec"],
      daysInMonth: null,
      calandarNotification: calandarNotification,
      showNotification: false,
      displayInstant: true,
      isGenesisCustomer: false,
      iosbar: iosbar,
      joinStatus: false,
      appstore: appstore,
      playstore: playstore,
      powershout: powershout,
      noBookings: noBookings,
      curve: curve,
      startDate: '',
      startHours: '12',
      startMinutes: '00',
      startAmPm: 'AM',
      gasbottle: gasbottle,
      counter: 1,

      booking: {
        startTime: '',
        endTime: ''
      },

      selectedDateArray: []
    };
  },
  components: { 
    TopNavigation,
    calandarNotification
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
  methods: {
    formatDate(date) {
      var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear() + 1900;


        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        return [year, month, day].join('-');
    },
    getDaysInCurrentMonth() {
      var d = new Date();
      var month = d.getMonth();
      let year = d.getYear();
      var date = new Date(year, month, 1);
      this.startDay = date.getDay();
      this.startMonth = date.getMonth();

      for (let i = 0; i < this.startDay+1; i++) {
        this.emptyDays.push('0')
      }


      var days = [];
      while (date.getMonth() === month) {
        days.push(this.formatDate(new Date(date)));
        date.setDate(date.getDate() + 1);
      }


      return days;
    },
    dateOrdinal(dom) {
        if (dom == 31 || dom == 21 || dom == 1) return dom + "st";
        else if (dom == 22 || dom == 2) return dom + "nd";
        else if (dom == 23 || dom == 3) return dom + "rd";
        else return dom + "th";
    },
    showNotificationCalander() {
       this.showNotification = true
                this.$gtag.event('showed', {
                    'event_category': 'eiq-demo',
                    'event_label': 'Showed Calander Event'
                })

       window.sessionStorage.setItem('calendarNotification', 'true')
    },
    dismissNotificationCalander() {
       this.showNotification = false

                this.$gtag.event('dismiss', {
                    'event_category': 'eiq-demo',
                    'event_label': 'Dismissed Calander Event'
                })


       window.sessionStorage.setItem('calendarNotification', 'false')
    },
    counterUp() {
      if(this.counter < 10){
        this.counter++;
      }
    },
    counterDown() {
      if(this.counter >= 2){
        this.counter--;
      } 
    },
    selectDates(day){
      this.startDate = day
    },
    reset() {
      this.startDate = '';
      this.startHours = '12';
      this.startMinutes = '00';
      this.startAmPm = 'AM';
    },
    addBooking() {
      let startTimeTS = Date.parse(this.startDate + ' ' + this.startHours + ':' + this.startMinutes);
      const startTime = new Date(startTimeTS);
      const endTime = new Date(startTimeTS);
      endTime.setHours( endTime.getHours() + 8 );
      
      this.$gtag.event('booking', {
          'event_category': 'eiq-demo',
          'event_label': 'Created new Power Shout Hours Booking'
      })

      this.booking.startTime = startTime,toString();
      this.booking.endTime = endTime,toString();

      window.sessionStorage.setItem("bookings", JSON.stringify(this.booking));
      window.sessionStorage.setItem('calendarNotification', 'false')
      setTimeout(function () {
        window.location = "#/powershouthours/tip";
      }, 0);
    },
    
  },
  mounted() {
    this.$gtag.pageview({ page_title: 'Power Shout Hours Booking', page_path: '/powershouthours/booking' })

    this.daysInMonth = this.getDaysInCurrentMonth();
    var d  = new Date();

        var weekdays = new Array(7);
        weekdays[0] = "Sun";
        weekdays[1] = "Mon";
        weekdays[2] = "Tues";
        weekdays[3] = "Wed";
        weekdays[4] = "Thurs";
        weekdays[5] = "Fri";
        weekdays[6] = "Sat";
        var day = weekdays[d.getDay()];

        var month=new Array(12);
        month[0]="January";
        month[1]="February";
        month[2]="March";
        month[3]="April";
        month[4]="May";
        month[5]="June";
        month[6]="July";
        month[7]="August";
        month[8]="September";
        month[9]="October";
        month[10]="November";
        month[11]="December";
        var monthName = month[d.getMonth()]; 

    this.currentDate = day  + ", " +this.dateOrdinal(d.getDate()) + " " + monthName;

         month = '' + (d.getMonth() + 1);
         day = '' + d.getDate();
         let year = d.getFullYear();


        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;

        this.currentDateStd = [year, month, day].join('-');


    let showMessage = sessionStorage.getItem("calendarNotification")
    if (showMessage === 'true') {
      this.displayInstant = true
      if (this.displayInstant === true) {
        this.showNotificationCalander()
      } else {
        setTimeout(() => this.showNotificationCalande(), 4000);
      }
    }

    if (showMessage === null) {
        setTimeout(() => this.showNotificationCalander(), 4000);
    }


    let GC = sessionStorage.getItem("GC")
    if (GC === 'true') {
      this.isGenesisCustomer = true;
    }
    if (GC === 'false') {
      this.isGenesisCustomer = false;
    }
    if (sessionStorage.getItem("bookings") != null ) {
      this.booking = JSON.parse(window.sessionStorage.getItem("bookings"));
    }
  },
  computed: {
    bookingTime() {
      if(this.startDate.length > 0 && this.startHours.length > 0){
        return this.startDate + ' ' + this.startHours + ':' + this.startMinutes + ' ' + this.startAmPm;
      } else {
        return '';
      }
    },
    currentMonthName(){
      
      var month=new Array(12);
      month[0]="January";
      month[1]="February";
      month[2]="March";
      month[3]="April";
      month[4]="May";
      month[5]="June";
      month[6]="July";
      month[7]="August";
      month[8]="September";
      month[9]="October";
      month[10]="November";
      month[11]="December";
      return month[this.startMonth];
    }
  }
};
</script>
