import { useEffect, useState } from 'react';
import { News } from '../services/NewsScraperService';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/news');
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error('뉴스를 불러오는 중 오류 발생:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h1>대학입시 뉴스</h1>
      {loading ? (
        <p>로딩 중...</p>
      ) : (
        <div className={styles.newsGrid}>
          {news.map((item, index) => (
            <div key={index} className={styles.newsCard}>
              <h2>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.title}
                </a>
              </h2>
              <p>{item.source}</p>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 