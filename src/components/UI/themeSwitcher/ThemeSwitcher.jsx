import { useContext } from '@hooks';
import { ThemeContext } from '@context';
import { Icon } from '@components/icon/Icon';

import styles from './themeSwitcher.module.css';

/**
 * Переключатель тем (светлая/темная)
 * @returns {JSX.Element} - JSX элемент компонента Switch
 */
export const ThemeSwitcher = () => {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      tabIndex="3"
      type="button"
      className={styles.switchButton}
      onClick={toggleTheme}
    >
      <div className={styles.track}>
        <div
          className={`${styles.thumb} ${
            isLightTheme ? styles.light : styles.dark
          }`}
        ></div>
        <div
          className={`${styles.iconContainer} ${
            isLightTheme ? styles.active : ''
          }`}
        >
          <Icon id="sun" className={styles.icon} />
        </div>
        <div
          className={`${styles.iconContainer} ${
            !isLightTheme ? styles.active : ''
          }`}
        >
          <Icon id="moon" className={styles.icon} />
        </div>
      </div>
    </button>
  );
};
