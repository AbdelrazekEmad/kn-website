// stores/counter.js
import { defineStore } from "pinia";
import blogsApi from "@/apis/blogs.api";

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
