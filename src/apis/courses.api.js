import APIClients from "@/shared/helpers/apis/APIClients.helper";
import axios from "axios";


class CategoriesApi extends APIClients {
  constructor() {
    super("course");
  }

  getCategories() {
    return axios.get(`${this.url}/category`);
  }

  getSelectedCategory(categoryId) {
    return axios.get(`${this.url}/category/${categoryId}`);
  }

  getCategoryCourses(categoryId) {
    return axios.get(`${this.url}?category=${categoryId}`);
  }

  getSelectedCourse(courseId) {
    return axios.get(`${this.url}/${courseId}`);
  }
}


export default new CategoriesApi();
