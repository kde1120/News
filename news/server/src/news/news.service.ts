import { Injectable } from "@nestjs/common";
import axios from "axios";
import * as cheerio from "cheerio";

export interface News {
  title: string;
  link: string;
  date: string;
  source: string;
  thumbnail: string;
}

@Injectable()
export class NewsService {
  private readonly baseUrl: string = "https://search.naver.com/search.naver";

  async scrapeNews(query: string): Promise<News[]> {
    try {
      const response = await axios.get(this.baseUrl, {
        params: {
          where: "news",
          query,
          sort: 1,
        },
      });

      const $ = cheerio.load(response.data);
      const newsItems: News[] = [];

      $(".news_wrap").each((_, element) => {
        const title = $(element).find(".news_tit").text().trim();
        const link = $(element).find(".news_tit").attr("href") || "";
        const date = $(element).find(".info").text().trim();
        const source = $(element).find(".press").text().trim();
        let thumbnail = $(element).find(".news_contents img").attr("data-lazysrc") ||
          $(element).find(".news_contents img").attr("src") ||
          "";

        if (thumbnail.startsWith("data:image/gif;base64,")) {
          thumbnail = "https://via.placeholder.com/400x200?text=No+Image";
        }

        if (thumbnail && thumbnail.startsWith("//")) {
          thumbnail = `https:${thumbnail}`;
        }

        newsItems.push({
          title,
          link,
          date,
          source,
          thumbnail: thumbnail || "https://via.placeholder.com/400x200?text=No+Image",
        });
      });

      return newsItems;
    } catch (error) {
      console.error("뉴스 스크래핑 중 오류 발생:", error);
      throw error;
    }
  }
}
