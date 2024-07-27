// stores/counter.js
import { defineStore } from "pinia";

export const useCategoriesStore = defineStore("categories", {
  state: () => {
    return {
      categories: [],
    };
  },
  getters: {
    // getters here
    getCategories(state) {
      return state.categories;
    },
  },
  actions: {
    // all actions include async code
    getAllCategories() {
      // request here
    },
  },
});
