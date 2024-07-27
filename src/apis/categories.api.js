import APIClients from "@/shared/helpers/apis/APIClients.helper";

class CategoriesApi extends APIClients {
  constructor() {
    super("categories");
  }
}

export default new CategoriesApi();
