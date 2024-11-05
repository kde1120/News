import axios from "axios";
import cheerio from "cheerio";

interface INewsScraper {
  scrapeNews(): Promise<News[]>;
}

export interface News {
  title: string;
  link: string;
  date: string;
  source: string;
}

export class NaverNewsScraper implements INewsScraper {
  private readonly baseUrl: string = "https://search.naver.com/search.naver";

  async scrapeNews(): Promise<News[]> {
    try {
      const response = await axios.get(this.baseUrl, {
        params: {
          where: "news",
          query: "대학입시",
          sort: 1,
        },
      });

      const $ = cheerio.load(response.data);
      const newsItems: News[] = [];

      $(".news_wrap").each((_, element) => {
        const title = $(element).find(".news_tit").text().trim();
        const link = $(element).find(".news_tit").attr("href") || "";
        const date = $(element).find(".info").text().trim();
        const source = $(element).find(".info press").text().trim();

        newsItems.push({ title, link, date, source });
      });

      return newsItems;
    } catch (error) {
      console.error("뉴스 스크래핑 중 오류 발생:", error);
      return [];
    }
  }
}
