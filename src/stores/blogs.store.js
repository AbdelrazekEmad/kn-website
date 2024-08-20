// stores/counter.js
import { defineStore } from "pinia";
import blogsApi from "@/apis/blogs.api";
import SpecificPageAPI from "@/apis/accessSpecificPage.api";

export const useBlogsStore = defineStore("blogs", {
  state: () => {
    return {
      blogsHeader: {},
      blogs: [],
      singleBlog: {},
    };
  },
  getters: {
    getBlogsHeaders(state) {
      return state.blogsHeader;
    },
    getBlogs(state) {
      return state.blogs;
    },
    getSingleBlog(state) {
      return state.singleBlog;
    },
  },
  actions: {
    async getBlogsContent() {
      try {
        const response = await blogsApi.get();
        let data = response.data.data.results[0];
        this.blogsHeader = {
          title: data.title,
          image: data.image,
        };
        this.blogs = data.child;
      } catch (e) {
        console.log(e);
      }
    },
    async getSingleBlogContent(id) {
      try {
        const response = await SpecificPageAPI.get(id);
        let data = response.data.data;
        this.singleBlog = data;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
