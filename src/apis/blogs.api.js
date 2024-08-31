import APIClients from "@/shared/helpers/apis/APIClients.helper";
class BlogsAPI extends APIClients {
  constructor() {
    super("cms/page?slug=blogs");
  }
}

export default new BlogsAPI();
