// stores/counter.js
import { defineStore } from "pinia";
import coursesApi from "@/apis/courses.api";

export const useCoursesStore = defineStore("courses", {
  state: () => {
    return {
      categories: [],
      selectedCourses: [],
      category: {},
      course: {}
    };
  },
  getters: {
    // getters here
  },
  actions: {
    // all actions include async code
    async getAllCategories() {
      try {
        const { data: { data: { results } } } = await coursesApi.getCategories();
        this.categories = results || []
      } catch (error) {
        console.log(error);
      }
    },

    async getSelectedCategory(id) {
      try {
        const { data: { data } } = await coursesApi.getSelectedCategory(id);
        console.log(data);

        this.category = data || []
      } catch (error) {
        console.log(error);
      }
    },

    async getCategoryCourses(id) {
      try {
        await this.getSelectedCategory(id)
        const { data: { data } } = await coursesApi.getCategoryCourses(id);
        this.selectedCourses = data || []
      } catch (error) {
        console.log(error);
      }
    },

    async getSelectedCourse(id) {
      try {
        const { data: { data } } = await coursesApi.getSelectedCourse(id);
        this.course = data || []
      } catch (error) {
        console.log(error);
      }
    },
  },
});
