// stores/counter.js
import { defineStore } from "pinia";
import HomeApi from "@/apis/home.api";

export const useHomeStore = defineStore("home", {
  state: () => {
    return {
      home: {},
      isFetching: false,
    };
  },
  getters: {
    // getters here
    getSlider(state) {
      if (
        Array.isArray(state.home?.results) &&
        state.home?.results.length > 0
      ) {
        return state.home?.results[0]?.child?.find(
          (item) => item.slug == "learn-the-holy-quran-arabic-language-online"
        );
      }
      return null;
    },
    getApart(state) {
      if (
        Array.isArray(state.home?.results) &&
        state.home?.results.length > 0
      ) {
        return state.home?.results[0]?.child?.find(
          (item) => item.slug == "what-sets-us-apart"
        );
      }
      return null;
    },
    getStories(state) {
      if (
        Array.isArray(state.home?.results) &&
        state.home?.results.length > 0
      ) {
        return state.home?.results[0]?.child?.find(
          (item) => item.slug == "success-stories"
        );
      }
      return null;
    },
    getFeaturedCourses(state) {
      if (
        Array.isArray(state.home?.results) &&
        state.home?.results.length > 0
      ) {
        return state.home?.results[0]?.child?.find(
          (item) => item.slug == "featured-courses"
        );
      }
      return null;
    },
    getFeedbacks(state) {
      if (
        Array.isArray(state.home?.results) &&
        state.home?.results.length > 0
      ) {
        return state.home?.results[0]?.child?.find(
          (item) => item.slug == "feedback"
        );
      }
      return null;
    },
    getFetchingStatus(state) {
      return state.isFetching;
    },
  },
  actions: {
    // all actions include async code
    async getAllHome() {
      // request here
      try {
        this.isFetching = true;
        const response = await HomeApi.get();

        this.home = response?.data?.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isFetching = false;
      }
    },
  },
});
