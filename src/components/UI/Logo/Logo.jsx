import styles from './Logo.module.css';

/**
 * Логотип приложения
 * @returns {JSX.Element} - React-компонент логотипа приложения
 */
const Logo = () => {
  return (
    <a href="/" className={styles.logo} aria-label="Taskana - на главную">
      <div className={styles.logoBox} />
      <span className={styles.logoText}>taskana</span>
    </a>
  );
};

export default Logo;
