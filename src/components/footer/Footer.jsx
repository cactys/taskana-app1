import styles from './footer.module.css';

/**
 * Компонент футера приложения
 * @returns {JSX.Element} - JSX элемент футера
 */
export const Footer = ({ taskCount }) => {
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
            tabIndex={taskCount + 9}
          >
            PREAX
          </a>
        </p>
      </div>
    </footer>
  );
};
