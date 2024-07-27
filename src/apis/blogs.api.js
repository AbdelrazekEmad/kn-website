import APIClients from "@/shared/helpers/apis/APIClients.helper";

class BlogsAPI extends APIClients {
  constructor() {
    super("blogs");
  }
}

export default new BlogsAPI();
