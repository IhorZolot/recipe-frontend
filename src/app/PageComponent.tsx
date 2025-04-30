'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './PageComponent.module.css';
import menu from '../../public/menu.png';

const PageComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/recipes" className={styles.card}>
        <Image
          src={menu}
          alt="Delicious Recipe"
          className={styles.image}
          width={400}
          height={300}
        />
        <div className={styles.textOverlay}>
          <h2>Explore Recipes</h2>
        </div>
      </Link>
    </div>
  );
};

export default PageComponent;
