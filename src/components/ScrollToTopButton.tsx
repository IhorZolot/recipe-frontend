'use client';

import { useEffect, useState } from 'react';
import { FaCircleArrowUp } from 'react-icons/fa6';
import styles from './ScrollToTopButton.module.css';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, []);

  return (
    visible && (
      <button onClick={scrollToTop} className={styles.scrollButton}>
        <FaCircleArrowUp />
      </button>
    )
  );
};

export default ScrollToTopButton;
