// stores/counter.js
import { defineStore } from "pinia";

export const useLoadingStore = defineStore("loading", {
  state: () => {
    return {
      isLoadingDelay: false,
      timer: null,
    };
  },
  getters: {
    // getters here
  },
  actions: {
    async generateLoadingDelay() {
      console.log(this.isLoadingDelay);

      if (this.timer) {
        console.log(5151515151551151);
        
        clearTimeout(this.timer);
      }
      this.isLoadingDelay = true;
      this.timer = setTimeout(() => {
        this.isLoadingDelay = false;
        this.timer = null;

        console.log(this.isLoadingDelay);
      }, 1500);
    },
  },
});
