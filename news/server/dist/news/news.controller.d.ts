import { NewsService } from "./news.service";
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
<<<<<<< HEAD
    getNews(query?: string): Promise<import("./news.service").News[]>;
=======
    getNews(): Promise<import("./news.service").News[]>;
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
}
