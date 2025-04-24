import { useContext } from 'react';
import { ThemeContext } from '@context';
import Icon from '@components/icon/Icon';

import styles from './Switch.module.css';

/**
 * Переключатель тем (светлая/темная)
 * @returns {JSX.Element} - JSX элемент компонента Switch
 */
const Switch = () => {
  const { isLightTheme, toggleTheme } = useContext(ThemeContext);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      toggleTheme();
    }
  };

  return (
    <label
      className={styles.switchContainer}
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      <input
        type="checkbox"
        className={styles.input}
        checked={isLightTheme}
        onChange={toggleTheme}
        aria-label="Переключить тему"
        tabIndex="-1"
      />
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
          <Icon id="sunIcon" className={styles.icon} />
        </div>
        <div
          className={`${styles.iconContainer} ${
            !isLightTheme ? styles.active : ''
          }`}
        >
          <Icon id="moonIcon" className={styles.icon} />
        </div>
      </div>
    </label>
  );
};

export default Switch;
