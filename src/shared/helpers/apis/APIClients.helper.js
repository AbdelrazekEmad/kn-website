import axios from "axios";
const VITE_BASE_URL_request = import.meta.env.VITE_BASE_URL_request;
class APIClients {
  constructor(requestTarget, options = {}) {
    this.BaseLang = options.BaseLang || "ar";
    this.options = options;
    this.requestTarget = requestTarget;
  }

  get url() {
    return `${VITE_BASE_URL_request}/${this.BaseLang}/api/${this.requestTarget}`;
  }

  get(requestQuery = "", options = {}) {
    return axios.get(`${this.url}/${requestQuery}`, options);
  }

  show(id) {
    return axios.get(`${this.url}/${id}`);
  }
  delete(requestTarget = "", id) {
    return axios.delete(`${this.url}/${requestTarget}/${id}`);
  }

  post(requestTarget = "", options) {
    return axios.post(`${this.url}/${requestTarget}/`, options);
  }

  put(requestTarget = "", id, options) {
    return axios.put(`${this.url}/${requestTarget}/${id}`, options);
  }

  patch(requestTarget = "", id, options) {
    return axios.patch(`${this.url}/${requestTarget}/${id}`, options);
  }
}

export default new APIClients();
