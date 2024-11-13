export interface News {
    title: string;
    link: string;
    date: string;
    source: string;
}
export declare class NewsService {
    private readonly baseUrl;
    scrapeNews(): Promise<News[]>;
}
