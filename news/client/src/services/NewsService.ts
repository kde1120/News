import { News } from "../types/news";

export class NewsService {
  private static readonly API_URL = "http://localhost:4000/news";

<<<<<<< HEAD
<<<<<<< HEAD
  static async fetchNews(query: string = "대학입시"): Promise<News[]> {
    try {
      const response = await fetch(
        `${this.API_URL}?query=${encodeURIComponent(query)}`,
        {
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
=======
=======
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
  static async fetchNews(): Promise<News[]> {
    try {
      const response = await fetch(this.API_URL, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
<<<<<<< HEAD
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
=======
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc

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
