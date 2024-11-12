import React, { useEffect, useState } from 'react';
import { News } from '../types/news';
import { NewsService } from '../services/NewsService';
import styles from '../styles/Home.module.css';
<<<<<<< HEAD
import Navigation from '@/components/Navigation';
=======
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc

export default function Home() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
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
      <Navigation></Navigation>
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
=======

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await NewsService.fetchNews();
        setNews(data);
      } catch (error) {
        console.error('뉴스를 불러오는 중 오류 발생:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className={styles.container}>
      <h1>대학입시 뉴스</h1>
      {loading ? (
        <p>로딩 중...</p>
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
      ) : (
        <div className={styles.newsGrid}>
          {news.map((item, index) => (
            <div key={index} className={styles.newsCard}>
              <h2>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </h2>
<<<<<<< HEAD
              <div className={styles.newsInfo}>
                <span>{item.source}</span>
                <span>{item.date}</span>
              </div>
=======
              <p>{item.source}</p>
              <p>{item.date}</p>
>>>>>>> cfaeead9e127614e53e66f4709bb06b09175a1bc
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 