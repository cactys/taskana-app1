import { useContext } from '@hooks';
import { ThemeContext } from '@context';
import { Icon } from '@components/icon/Icon';
import { Icon } from '@components/icon/Icon';

import styles from './themeSwitcher.module.css';

/**
 * Компонент переключателя темы приложения (светлая / темная).
 * Позволяет пользователю менять тему интерфейса по клику.
 *
 * @returns {JSX.Element} JSX элемент кнопки переключения темы
 */
export const ThemeSwitcher = () => {
export const ThemeSwitcher = () => {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className={styles.switchButton}
      onClick={toggleTheme}
      tabIndex={0}
      aria-pressed={isLightTheme}
      aria-label="Переключить тему"
    >
      <div className={styles.track}>
        <div
          className={`${styles.thumb} ${isLightTheme ? styles.light : styles.dark}`}
        />
        <div
          className={`${styles.iconContainer} ${isLightTheme ? styles.active : ''}`}
          aria-hidden="true"
        >
          <Icon id="sun" className={styles.icon} />
        </div>
        <div
          className={`${styles.iconContainer} ${!isLightTheme ? styles.active : ''}`}
          aria-hidden="true"
        >
          <Icon id="moon" className={styles.icon} />
        </div>
      </div>
    </button>
  );
};
