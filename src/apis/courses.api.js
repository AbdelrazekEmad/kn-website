import APIClients from "@/shared/helpers/apis/APIClients.helper";
import Trans from "@/i18n/translation";
import axios from "axios";
const VITE_BASE_URL_REQUEST = import.meta.env.VITE_BASE_URL_REQUEST;
const specificUrl = `${VITE_BASE_URL_REQUEST}/${Trans.currentLocale}/api/course`


class CategoriesApi extends APIClients {
  constructor() {
    super("course");
  }

  getCategories() {
    return axios.get(`${specificUrl}/category`);
  }

  getSelectedCategory(categoryId) {
    return axios.get(`${specificUrl}/category/${categoryId}`);
  }

  getCategoryCourses(categoryId) {
    return axios.get(`${specificUrl}?category=${categoryId}`);
  }

  getSelectedCourse(courseId) {
    return axios.get(`${specificUrl}/${courseId}`);
  }
}


export default new CategoriesApi();
