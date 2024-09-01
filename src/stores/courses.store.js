// stores/counter.js
import { defineStore } from "pinia";
import coursesApi from "@/apis/courses.api";

export const useCoursesStore = defineStore("courses", {
  state: () => {
    return {
      categories: [],
      selectedCourses: [],
      category: {},
      course: {},
      isFetching: false
    };
  },
  getters: {
    // getters here
  },
  actions: {
    // all actions include async code
    async getAllCategories() {
      try {
        this.isFetching = true
        const { data: { data: { results } } } = await coursesApi.getCategories();
        this.categories = results || []
      } catch (error) {
        console.log(error);
      }
      finally{
        this.isFetching = false
      }
    },

    async getSelectedCategory(id) {
      try {
        this.isFetching = true
        const { data: { data } } = await coursesApi.getSelectedCategory(id);

        this.category = data || []
      } catch (error) {
        console.log(error);
      }
      finally{
        this.isFetching = false
      }
    },

    async getCategoryCourses(id) {
      try {
        this.isFetching = true
        await this.getSelectedCategory(id)
        const { data: { data } } = await coursesApi.getCategoryCourses(id);
        this.selectedCourses = data || []
      } catch (error) {
        console.log(error);
      }
      finally{
        this.isFetching = false
      }
    },

    async getSelectedCourse(id) {
      try {
        this.isFetching = true
        const { data: { data } } = await coursesApi.getSelectedCourse(id);
        this.course = data || []
      } catch (error) {
        console.log(error);
      }
      finally{
        this.isFetching = false
      }
    },
  },
});
