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
      isFetching: false,
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
    getLatestBlogs(state) {
      //TODO: ask about the latest blog order
      return state.blogs.slice(0, 3);
    },
  },
  actions: {
    async getBlogsContent() {
      try {
        this.isFetching = true;
        const response = await blogsApi.get();
        let data = response.data.data.results[0];
        this.blogsHeader = {
          title: data.title,
          image: data.image,
        };
        this.blogs = data.child;
      } catch (e) {
        console.log(e);
      } finally {
        this.isFetching = false;
      }
    },
    async getSingleBlogContent(id) {
      try {
        this.isFetching = true;
        const response = await SpecificPageAPI.get(id);
        let data = response.data.data;
        this.singleBlog = data;
      } catch (e) {
        console.log(e);
      } finally {
        this.isFetching = false;
      }
    },
  },
});
