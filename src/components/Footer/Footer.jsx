import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className="container">
      <p className={styles.content}>
        Проект выполнен в рамках стажировки{' '}
        <a
          className={styles.link}
          href="https://preax.ru"
          target="_blank"
          rel="noreferrer"
        >
          Preax
        </a>
      </p>
    </footer>
  );
};
