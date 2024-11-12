import { News } from '@/types/news';
import { toggleNewsScrap } from '@/utils/localStorage';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

interface NewsCardProps {
  news: News;
  onScrapToggle?: () => void;
}

export default function NewsCard({ news, onScrapToggle }: NewsCardProps) {
  const [isScrapped, setIsScrapped] = useState(false);

  useEffect(() => {
    const scrappedNews = localStorage.getItem('scrappedNews');
    if (scrappedNews) {
      const parsed = JSON.parse(scrappedNews);
      setIsScrapped(parsed.some((item: News) => item.link === news.link));
    }
  }, [news.link]);

  const handleScrapClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const newScrapState = toggleNewsScrap(news);
    setIsScrapped(newScrapState);
    onScrapToggle?.();
  };

  return (
    <div className={styles.newsCard}>
      <img 
        src={news.thumbnail} 
        alt={news.title}
        className={styles.thumbnail}
        onError={(e) => {
          e.currentTarget.src = 'https://via.placeholder.com/400x200?text=No+Image';
        }}
      />
      <div className={styles.newsContent}>
        <h2>
          <a href={news.link} target="_blank" rel="noopener noreferrer">
            {news.title}
          </a>
        </h2>
        <div className={styles.newsInfo}>
          <span>{news.source}</span>
          <span>{news.date}</span>
        </div>
        <button
          onClick={handleScrapClick}
          className={`${styles.starButton} ${isScrapped ? styles.starred : ''}`}
          aria-label={isScrapped ? '스크랩 해제' : '스크랩하기'}
        >
          {isScrapped ? '★' : '☆'}
        </button>
      </div>
    </div>
  );
}