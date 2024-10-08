// stores/counter.js
import { defineStore } from "pinia";
import AboutUsApi from "@/apis/about-us.api";

export const useAboutUsStore = defineStore("aboutUs", {
  state: () => {
    return {
      aboutUs: {},
      isFetching: false,
    };
  },
  getters: {
    // getters here
    getBanner(state) {
      if (
        Array.isArray(state.aboutUs?.results) &&
        state.aboutUs?.results.length > 0
      ) {
        return state.aboutUs?.results[0]?.child?.find(
          (item) => item.slug == "about-us-xo2x"
        );
      }
      return null;
    },
    getAboutUs(state) {
      if (
        Array.isArray(state.aboutUs?.results) &&
        state.aboutUs?.results.length > 0
      ) {
        return state.aboutUs?.results[0]?.child?.find(
          (item) => item.slug == "about-us-uvlx"
        );
      }
      return null;
    },
    getMission(state) {
      if (
        Array.isArray(state.aboutUs?.results) &&
        state.aboutUs?.results.length > 0
      ) {
        return state.aboutUs?.results[0]?.child?.find(
          (item) => item.slug == "mission-vision"
        );
      }
      return null;
    },
    getWhatOffer(state) {
      if (
        Array.isArray(state.aboutUs?.results) &&
        state.aboutUs?.results.length > 0
      ) {
        return state.aboutUs?.results[0]?.child?.find(
          (item) => item.slug == "what-we-offer"
        );
      }
      return null;
    },
    getFaqs(state) {
      if (
        Array.isArray(state.aboutUs?.results) &&
        state.aboutUs?.results.length > 0
      ) {
        return state.aboutUs?.results[0]?.child?.find(
          (item) => item.slug == "faq"
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
    async getAllAboutUs() {
      // request here
      try {
        this.isFetching = true;
        const response = await AboutUsApi.get();

        this.aboutUs = response?.data?.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isFetching = false;
      }
    },
  },
});
