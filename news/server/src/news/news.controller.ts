import { Controller, Get } from "@nestjs/common";
import { NewsService } from "./news.service";

@Controller("news")
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  async getNews() {
    try {
      return await this.newsService.scrapeNews();
    } catch (error) {
      console.error("Error fetching news:", error);
      throw error;
    }
  }
}
