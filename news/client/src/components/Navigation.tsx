import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Navigation.module.css';

export default function Navigation() {
  const router = useRouter();
  
  return (
    <nav className={styles.nav}>
      <Link href="/" className={`${styles.link} ${router.pathname === '/' ? styles.active : ''}`}>
        뉴스 검색
      </Link>
      <Link href="/scraps" className={`${styles.link} ${router.pathname === '/scraps' ? styles.active : ''}`}>
        스크랩 목록
      </Link>
    </nav>
  );
} 