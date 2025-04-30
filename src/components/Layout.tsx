'use client';

import Link from 'next/link';
import styles from './Layout.module.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link href="/" className={styles.logo}>
            🥘 Recipes
          </Link>
          <nav className={styles.nav}>
            <Link href="/recipes" className={styles.navLink}>
              All Recipes
            </Link>
          </nav>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        © {new Date().getFullYear()} My Recipes. All rights reserved.
      </footer>
    </div>
  );
}
