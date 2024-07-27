// stores/counter.js
import { defineStore } from "pinia";
import categoriesApi from "@/apis/categories.api";

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
    async getAllCategories() {
      // request here
    },
  },
});
