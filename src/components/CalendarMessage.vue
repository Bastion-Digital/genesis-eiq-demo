<!-- This component is for the top navigation with the arrow, page name etc -->
<template>
  <div class="w-full notification-wrap">
    <transition name="slide-fade">
      <div>
        <img
          :src="notificationImage"
          alt="notification image"
          class="notification"
        >
      </div>
    </transition>
  </div>
</template>

<script>
import notificationCalendar from "/src/assets/calendar.png";

export default {
  name: "CalandarNotification",
  components: {
    
  },
  data: function() {
    return {
        notificationImage: notificationCalendar,
    };
  },
  computed: {

  },
  mounted() {

  },
  methods: {
  
  },
};
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>