import axios from "axios";
import Trans from "@/i18n/translation";
const VITE_BASE_URL_REQUEST = import.meta.env.VITE_BASE_URL_REQUEST;

class APIClients {
  constructor(targetRequestUrl) {
    this.targetRequestUrl = targetRequestUrl;
  }

  get url() {
    return `${VITE_BASE_URL_REQUEST}/${Trans.currentLocale}/${this.targetRequestUrl}`;
  }

  get(requestQuery = "", options = {}) {
    return axios.get(`${this.url}/${requestQuery}`, options);
  }

  show(requestQuery = "", id, options = {}) {
    return axios.get(`${this.url}/${requestQuery}/${id}`, options);
  }

  post(requestQuery = "", options = {}) {
    return axios.post(`${this.url}/${requestQuery}`, options);
  }

  delete(requestQuery = "", id, options = {}) {
    return axios.delete(`${this.url}/${requestQuery}/${id}`, options);
  }

  put(requestQuery = "", id, options = {}) {
    return axios.put(`${this.url}/${requestQuery}/${id}`, options);
  }

  patch(requestQuery = "", id, options = {}) {
    return axios.patch(`${this.url}/${requestQuery}/${id}`, options);
  }
}

export default APIClients;
