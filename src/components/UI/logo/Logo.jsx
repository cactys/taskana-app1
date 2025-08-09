import styles from './logo.module.css';

/**
 * Компонент логотипа, ведущий на главную страницу.
 *
 * @returns {JSX.Element} Элемент логотипа с переходом на главную
 */
export const Logo = () => {
  return (
    <a
      href="/"
      className={styles.logo}
      aria-label="Taskana - на главную"
      tabIndex={0}
    >
      <div className={styles.logoBox} />
      <p className={styles.logoText}>taskana</p>
    </a>
  );
};
