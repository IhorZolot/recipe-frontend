'use client';

import { useRouter } from 'next/navigation';
import styles from './BackButton.module.css';

const BackButton = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className={styles.button}>
      ← Go Back
    </button>
  );
};

export default BackButton;
