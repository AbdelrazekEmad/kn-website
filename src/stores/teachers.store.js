// stores/counter.js
import { defineStore } from "pinia";
import TeachersApi from "@/apis/teachers.api";

export const useTeachersStore = defineStore("teachers", {
  state: () => {
    return {
      teachers: {},
    };
  },
  getters: {
    // getters here
    getTeachersData(state) {
      if (
        Array.isArray(state.teachers?.results) &&
        state.teachers?.results.length > 0
      ) {
        return state.teachers?.results[0];
      }
      return null;
    },
  },
  actions: {
    // all actions include async code
    async getAllTeachers() {
      // request here
      try {
        const response = await TeachersApi.get();

        this.teachers = response?.data?.data;
      } catch (error) {
        console.log(error);
      }
    },
  },
});