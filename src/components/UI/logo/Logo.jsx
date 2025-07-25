import styles from './logo.module.css';

/**
 * Компонент логотипа, ведущий на главную страницу.
 *
 * Отображает визуальный блок и текстовое название приложения.
 * Используется для навигации на главную через `<a href="/">`.
 *
 * @component
 * @example
 * return <Logo />;
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
