import APIClients from "@/shared/helpers/apis/APIClients.helper";
import axios from "axios";
class SpecificPageAPI extends APIClients {
  constructor() {
    super("cms/page");
  }
}

export default new SpecificPageAPI();
