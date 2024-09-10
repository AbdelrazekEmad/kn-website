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
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.isLoadingDelay = true;
      this.timer = setTimeout(() => {
        this.isLoadingDelay = false;
        this.timer = null;
      }, 1500);
    },
  },
});
