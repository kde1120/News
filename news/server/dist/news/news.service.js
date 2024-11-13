"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const cheerio = require("cheerio");
let NewsService = class NewsService {
    constructor() {
        this.baseUrl = "https://search.naver.com/search.naver";
    }
    async scrapeNews() {
        try {
            const response = await axios_1.default.get(this.baseUrl, {
                params: {
                    where: "news",
                    query: "대학입시",
                    sort: 1,
                },
            });
            const $ = cheerio.load(response.data);
            const newsItems = [];
            $(".news_wrap").each((_, element) => {
                const title = $(element).find(".news_tit").text().trim();
                const link = $(element).find(".news_tit").attr("href") || "";
                const date = $(element).find(".info").text().trim();
                const source = $(element).find(".info press").text().trim();
                newsItems.push({ title, link, date, source });
            });
            return newsItems;
        }
        catch (error) {
            console.error("뉴스 스크래핑 중 오류 발생:", error);
            throw error;
        }
    }
};
exports.NewsService = NewsService;
exports.NewsService = NewsService = __decorate([
    (0, common_1.Injectable)()
], NewsService);
//# sourceMappingURL=news.service.js.map