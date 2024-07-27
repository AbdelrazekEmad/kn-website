import axios from "axios";
const VITE_BASE_URL_REQUEST = import.meta.env.VITE_BASE_URL_REQUEST;

class APIClients {
  constructor(targetRequestUrl) {
    this.targetRequestUrl = targetRequestUrl;
  }

  get(requestQuery = "", options = {}, baseLang = "ar") {
    return axios.get(
      `${VITE_BASE_URL_REQUEST}/${baseLang}/api/${this.targetRequestUrl}/${requestQuery}`,
      options
    );
  }

  show(requestQuery = "", id, options = {}, baseLang = "ar") {
    return axios.get(
      `${VITE_BASE_URL_REQUEST}/${baseLang}/api/${this.targetRequestUrl}/${requestQuery}/${id}`,
      options
    );
  }

  post(requestQuery = "", options = {}, baseLang = "ar") {
    return axios.post(
      `${VITE_BASE_URL_REQUEST}/${baseLang}/api/${this.targetRequestUrl}/${requestQuery}`,
      options
    );
  }

  delete(requestQuery = "", id, options = {}, baseLang = "ar") {
    return axios.delete(
      `${VITE_BASE_URL_REQUEST}/${baseLang}/api/${this.targetRequestUrl}/${requestQuery}/${id}`,
      options
    );
  }

  put(requestQuery = "", id, options = {}, baseLang = "ar") {
    return axios.put(
      `${VITE_BASE_URL_REQUEST}/${baseLang}/api/${this.targetRequestUrl}/${requestQuery}/${id}`,
      options
    );
  }

  patch(requestQuery = "", id, options = {}, baseLang = "ar") {
    return axios.patch(
      `${VITE_BASE_URL_REQUEST}/${baseLang}/api/${this.targetRequestUrl}/${requestQuery}/${id}`,
      options
    );
  }
}

export default APIClients;
