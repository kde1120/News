export interface News {
    title: string;
    link: string;
    date: string;
    source: string;
<<<<<<< HEAD
    thumbnail: string;
}
export declare class NewsService {
    private readonly baseUrl;
    scrapeNews(query: string): Promise<News[]>;
=======
}
export declare class NewsService {
    private readonly baseUrl;
    scrapeNews(): Promise<News[]>;
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
}
