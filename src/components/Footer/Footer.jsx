import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p className={styles.attribution}>
          Проект выполнен в рамках стажировки{' '}
          <a
            href="https://preax.ru"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            PREAX
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
