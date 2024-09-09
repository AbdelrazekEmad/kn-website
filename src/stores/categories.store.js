// stores/counter.js
import { defineStore } from "pinia";
import categoriesApi from "@/apis/categories.api";

export const useCategoriesStore = defineStore("categoriesContent", {
  state: () => {
    return {
      categoriesHeader: {},
      categoriesSection: {},
      singleCategoryContent:{},
      isFetching: false,
    };
  },
  getters: {
    getCategoriesHeader(state) {
      return state.categoriesHeader;
    },
    getCategoriesSection(state) {
      return state.categoriesSection;
    },
  },
  actions: {
    async categoriesContent() {
      try {
        this.isFetching = true;
        const response = await categoriesApi.get();
        let data = response.data.data.results[0];
        this.categoriesHeader = {
          title: data.title,
          image: data.image,
        };
        this.categoriesSection = data.child[0];
        this.singleCategoryContent = data.child[0].child[0]
        console.log(data.child[0].child[0]);
        
      } catch (e) {
        console.log(e);
      } finally {
        this.isFetching = false;
      }
    },
  },
});
