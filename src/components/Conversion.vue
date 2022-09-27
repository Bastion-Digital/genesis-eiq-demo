<template>
      <div class="pill">
        <button 
        @click="active = 'dollar'" 
        class="pill-inner-left" 
        v-bind:class="[active == 'dollar' ? 'active' : '']"
        >
        <span class="pill-text">$</span>
        </button>


        <button 
        @click="active = 'kwh'"  
        class="pill-inner-right"
        v-bind:class="[active == 'kwh' ? 'active' : '']"
        >
        <span class="pill-text">kWh</span></button>
      </div>
</template>

<script>

export default {
  name: "Conversion",
  data: function() {
    return {
      active: "dollar"
    };
  },
  watch: {
    active(){
        this.$emit('update:Conversion', this.active)
      return '';
    }
  }
};
</script>