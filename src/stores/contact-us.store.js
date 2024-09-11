// stores/counter.js
import { defineStore } from "pinia";
import ContactUsAPI from "@/apis/contact-us.api";

export const useContactUsStore = defineStore("contact-us", {
  state: () => {
    return {
      contactUsHeader: {},
      formTitle: "",
      isFetching: false,
    };
  },
  actions: {
    async getContactUs() {
      try {
        this.isFetching = true;
        const response = await ContactUsAPI.get();
        let data = response.data.data.results[0];
        this.contactUsHeader = {
          title: data.title,
          image: data.image,
        };
        this.formTitle = data.child[0].title;
      } catch (e) {
        console.log(e);
      } finally {
        this.isFetching = false;
      }
    },
  },
});
