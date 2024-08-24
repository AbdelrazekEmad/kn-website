import APIClients from "@/shared/helpers/apis/APIClients.helper";

class AboutUsApi extends APIClients {
  constructor() {
    super("about-us");
  }
}

export default new AboutUsApi();
