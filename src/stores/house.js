import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
export const useHouseStore = defineStore("house", {
  state: () => {
    return {
      name: "Villa / Bungalow",
      filename: "Villa",
      car: false,
      img: undefined,
      gas: false,
      solar: false,
    };
  },

  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    set(obj) {
      this.img = obj.img;
      this.name = obj.name;
      this.filename = obj.filename;
      this.car = obj.car;
      this.gas = obj.gas;
      this.solar = obj.solar;
      localStorage.setItem("house", JSON.stringify(this));
    },
  },
});
