import APIClients from "@/shared/helpers/apis/APIClients.helper";

class CategoriesAPI extends APIClients {
  constructor() {
    super("categories");
  }
}

export default new CategoriesAPI();
