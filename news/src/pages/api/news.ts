import { NextApiRequest, NextApiResponse } from "next";
import { NaverNewsScraper } from "@/services/NewsScraperService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const scraper = new NaverNewsScraper();
    const news = await scraper.scrapeNews();
    res.status(200).json(news);
  } catch (error) {
    res
      .status(500)
      .json({ message: "뉴스를 가져오는 중 오류가 발생했습니다." });
  }
}
