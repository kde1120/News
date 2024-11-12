import React, { useEffect, useState } from 'react';
import { News } from '../types/news';
import { NewsService } from '../services/NewsService';
import styles from '../styles/Home.module.css';
import Navigation from '@/components/Navigation';
import NewsCard from '@/components/NewsCard';

export default function Home() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("대학입시");

  const fetchNews = async (query: string) => {
    setLoading(true);
    try {
      const data = await NewsService.fetchNews(query);
      setNews(data);
    } catch (error) {
      console.error('뉴스를 불러오는 중 오류 발생:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(searchQuery);
  }, [searchQuery]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get('query') as string;
    setSearchQuery(query);
  };

  return (
    <div className={styles.container}>
      <Navigation />
      <header className={styles.header}>
        <h1>뉴스 검색</h1>
        <form onSubmit={handleSearch} className={styles.searchForm}>
          <input
            type="text"
            name="query"
            defaultValue={searchQuery}
            placeholder="검색어를 입력하세요"
            className={styles.searchInput}
          />
          <button type="submit" className={styles.searchButton}>
            검색
          </button>
        </form>
      </header>
      
      {loading ? (
        <div className={styles.loading}>
          <p>뉴스를 불러오는 중입니다...</p>
        </div>
      ) : (
        <div className={styles.newsGrid}>
          {news.map((item) => (
            <NewsCard 
              key={item.link} 
              news={item}
            />
          ))}
        </div>
      )}
    </div>
  );
} 