import APIClients from "@/shared/helpers/apis/APIClients.helper";

class BlogsApi extends APIClients {
  constructor() {
    super("blogs");
  }
}

export default new BlogsApi();
