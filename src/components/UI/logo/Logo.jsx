import styles from './logo.module.css';

/**
 * Логотип приложения
 * @returns {JSX.Element} - React-компонент логотипа приложения
 */
export const Logo = () => {
  return (
    <a
      href="/"
      className={styles.logo}
      aria-label="Taskana - на главную"
      tabIndex="1"
    >
      <div className={styles.logoBox} />
      <p className={styles.logoText}>taskana</p>
    </a>
  );
};
