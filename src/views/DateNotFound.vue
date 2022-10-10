<template>
  <!-- Dashboard Heading -->
  <router-link
    to="/"
    class="flex justify-between items-center cursor:pointer w-full border-b  border-gray-500"
  >
    <div class="px-1">
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
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
    <div class="w-full text-center font-semibold pl-2 p-2">
      Invalid Date
    </div>
  </router-link>
  <div>
    <div class="text-center">
      Sorry this Date is Invalid
    </div>
  </div>
</template>

<script>
export default {
  name: "Custom404",
  components: {

  },
  data() {
    return {
      message: null
    };
  },
  computed: {

  },
  created() {
   
  },
  methods: {
  },
};
</script>
