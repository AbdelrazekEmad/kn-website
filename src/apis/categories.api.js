import APIClients from "@/shared/helpers/apis/APIClients.helper";
class categoriesContentAPI extends APIClients {
  constructor() {
    super("cms/page/?slug=categories");
  }
}

export default new categoriesContentAPI();
