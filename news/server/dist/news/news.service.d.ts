export interface News {
    title: string;
    link: string;
    date: string;
    source: string;
    thumbnail: string;
}
export declare class NewsService {
    private readonly baseUrl;
    scrapeNews(query: string): Promise<News[]>;
}
