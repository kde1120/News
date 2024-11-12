import { Injectable } from "@nestjs/common";
import axios from "axios";
import * as cheerio from "cheerio";

export interface News {
  title: string;
  link: string;
  date: string;
  source: string;
<<<<<<< HEAD
<<<<<<< HEAD
  thumbnail: string;
=======
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
=======
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
}

@Injectable()
export class NewsService {
  private readonly baseUrl: string = "https://search.naver.com/search.naver";

<<<<<<< HEAD
<<<<<<< HEAD
  async scrapeNews(query: string): Promise<News[]> {
=======
  async scrapeNews(): Promise<News[]> {
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
=======
  async scrapeNews(): Promise<News[]> {
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
    try {
      const response = await axios.get(this.baseUrl, {
        params: {
          where: "news",
<<<<<<< HEAD
<<<<<<< HEAD
          query,
=======
          query: "대학입시",
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
=======
          query: "대학입시",
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
          sort: 1,
        },
      });

      const $ = cheerio.load(response.data);
      const newsItems: News[] = [];

      $(".news_wrap").each((_, element) => {
        const title = $(element).find(".news_tit").text().trim();
        const link = $(element).find(".news_tit").attr("href") || "";
        const date = $(element).find(".info").text().trim();
<<<<<<< HEAD
<<<<<<< HEAD
        const source = $(element).find(".press").text().trim();
        let thumbnail =
          $(element).find(".news_contents img").attr("data-lazysrc") ||
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
          thumbnail:
            thumbnail || "https://via.placeholder.com/400x200?text=No+Image",
        });
=======
        const source = $(element).find(".info press").text().trim();

        newsItems.push({ title, link, date, source });
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
=======
        const source = $(element).find(".info press").text().trim();

        newsItems.push({ title, link, date, source });
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
      });

      return newsItems;
    } catch (error) {
      console.error("뉴스 스크래핑 중 오류 발생:", error);
      throw error;
    }
  }
}
