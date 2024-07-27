// stores/counter.js
import { defineStore } from "pinia";

export const useBlogsStore = defineStore("blogs", {
  state: () => {
    return {
      blogs: [],
    };
  },
  getters: {
    // getters here
    getBlogs(state) {
      return state.blogs;
    },
  },
  actions: {
    // all actions include async code
    getAllBlogs() {
      // request here
    },
  },
});
