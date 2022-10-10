<template>
  <div class="pill">
    <button 
      class="pill-inner-left" 
      :class="[active == 'dollar' ? 'active' : '']" 
      @click="active = 'dollar'"
    >
      <span class="pill-text">$</span>
    </button>


    <button 
      class="pill-inner-right"  
      :class="[active == 'kwh' ? 'active' : '']"
      @click="active = 'kwh'"
    >
      <span class="pill-text">kWh</span>
    </button>
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