import { News } from "@/types/news";

export const SCRAPPED_NEWS_KEY = "scrappedNews";

export const getScrappedNews = (): News[] => {
  if (typeof window === "undefined") return [];

  const saved = localStorage.getItem(SCRAPPED_NEWS_KEY);
  return saved ? JSON.parse(saved) : [];
};

export const toggleNewsScrap = (news: News): boolean => {
  const scrappedNews = getScrappedNews();
  const isAlreadyScrapped = scrappedNews.some(
    (item) => item.link === news.link
  );

  if (isAlreadyScrapped) {
    const filtered = scrappedNews.filter((item) => item.link !== news.link);
    localStorage.setItem(SCRAPPED_NEWS_KEY, JSON.stringify(filtered));
    return false;
  } else {
    scrappedNews.push(news);
    localStorage.setItem(SCRAPPED_NEWS_KEY, JSON.stringify(scrappedNews));
    return true;
  }
};
