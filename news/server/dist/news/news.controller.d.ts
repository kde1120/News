import { NewsService } from "./news.service";
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    getNews(): Promise<import("./news.service").News[]>;
}
