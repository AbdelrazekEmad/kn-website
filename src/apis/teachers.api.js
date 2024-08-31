import APIClients from "@/shared/helpers/apis/APIClients.helper";

class TeachersApi extends APIClients {
  constructor() {
    super("cms/page?slug=our-teachers");
  }
}

export default new TeachersApi();
