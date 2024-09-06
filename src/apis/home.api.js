import APIClients from "@/shared/helpers/apis/APIClients.helper";

class HomeApi extends APIClients {
  constructor() {
    super("cms/page?slug=home");
  }
}

export default new HomeApi();
