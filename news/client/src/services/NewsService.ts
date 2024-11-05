import { News } from "../types/news";

export class NewsService {
  private static readonly API_URL = "http://localhost:4000/news";

  static async fetchNews(): Promise<News[]> {
    try {
      const response = await fetch(this.API_URL, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    } catch (error) {
      console.error("뉴스를 불러오는 중 오류 발생:", error);
      return [];
    }
  }
}
