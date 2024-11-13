import { useEffect, useState } from 'react';
import { News } from '@/types/news';
import { getScrappedNews } from '@/utils/localStorage';
import NewsCard from '@/components/NewsCard';
import styles from '../styles/Home.module.css';
import Navigation from '../components/Navigation';

export default function ScrapsPage() {
  const [scrappedNews, setScrappedNews] = useState<News[]>([]);

  useEffect(() => {
    setScrappedNews(getScrappedNews());
  }, []);

  const handleScrapToggle = () => {
    setScrappedNews(getScrappedNews());
  };

  return (
    <div className={styles.container}>
        <Navigation />
      <header className={styles.header}>
        <h1>스크랩한 뉴스</h1>
      </header>
      
      <div className={styles.newsGrid}>
        {scrappedNews.length === 0 ? (
          <p className={styles.noResults}>스크랩한 뉴스가 없습니다.</p>
        ) : (
          scrappedNews.map((news) => (
            <NewsCard 
              key={news.link} 
              news={news} 
              onScrapToggle={handleScrapToggle}
            />
          ))
        )}
      </div>
    </div>
  );
} 