// stores/counter.js
import { defineStore } from "pinia";
import keyFeaturesAPI from "@/apis/key-features.api";

export const useKeyFeaturesStore = defineStore("keyFeatures", {
  state: () => {
    return {
      keyFeaturesSection: {},
      keyFeaturesItems: [],
    };
  },
  getters: {
    getKeyFeaturesSection(state) {
      return state.keyFeaturesSection;
    },
    getKeyFeaturesItems(state) {
      return state.keyFeaturesItems;
    },
  },
  actions: {
    async keyFeaturesContent() {
      try {
        const response = await keyFeaturesAPI.get();
        let data = response.data.data.results[0];
        this.keyFeaturesSection = {
          title: data.title,
          image: data.image,
        };
        this.keyFeaturesItems = data.child.map((item) => {
          return {
            title: item.title,
            content: item.content,
            image: item.image,
          };
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
});
