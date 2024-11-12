<<<<<<< HEAD
<<<<<<< HEAD
import { Controller, Get, Query } from "@nestjs/common";
=======
import { Controller, Get } from "@nestjs/common";
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
=======
import { Controller, Get } from "@nestjs/common";
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
import { NewsService } from "./news.service";

@Controller("news")
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
<<<<<<< HEAD
<<<<<<< HEAD
  async getNews(@Query("query") query: string = "대학입시") {
    try {
      return await this.newsService.scrapeNews(query);
=======
  async getNews() {
    try {
      return await this.newsService.scrapeNews();
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
=======
  async getNews() {
    try {
      return await this.newsService.scrapeNews();
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
    } catch (error) {
      console.error("Error fetching news:", error);
      throw error;
    }
  }
}
