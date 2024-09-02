import APIClients from "@/shared/helpers/apis/APIClients.helper";
class keyFeaturesAPI extends APIClients {
  constructor() {
    super("cms/page/?slug=key-features");
  }
}

export default new keyFeaturesAPI();
