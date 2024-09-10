import APIClients from "@/shared/helpers/apis/APIClients.helper";
class ContactUsAPI extends APIClients {
  constructor() {
    super("cms/page?slug=contact-us");
  }
}

export default new ContactUsAPI();
