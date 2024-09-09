// stores/counter.js
import { defineStore } from "pinia";
import keyFeaturesAPI from "@/apis/key-features.api";

export const useKeyFeaturesStore = defineStore("keyFeatures", {
  state: () => {
    return {
      keyFeaturesSection: {},
      keyFeaturesItems: [],
      isFetching: false,
    };
  },
  getters: {
    getKeyFeaturesSection(state) {
      return state.keyFeaturesSection;
    },
    getKeyFeaturesItems(state) {
      return state.keyFeaturesItems;
    },
    getFetchingStatus(state) {
      return state.isFetching;
    },
  },
  actions: {
    async keyFeaturesContent() {
      try {
        this.isFetching = true;
        const response = await keyFeaturesAPI.get();
        let data = response.data.data.results[0];
        this.keyFeaturesSection = {
          title: data.title,
          image: data.image,
        };
        this.keyFeaturesItems = data.child.map((item) => {
          return {
            content: item.content,
            image: item.image,
          };
        });
      } catch (e) {
        console.log(e);
      } finally {
        this.isFetching = false;
      }
    },
  },
});
