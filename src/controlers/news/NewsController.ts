import { Get, JsonController } from "routing-controllers";
import { App } from "../../infrastructure/App";

@JsonController()
export default class News {
  public app = new App();

  @Get("/news")
  async getNews() {
    return "news";
  }
}