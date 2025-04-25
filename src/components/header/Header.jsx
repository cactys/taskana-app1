import Logo from '@components/UI/logo/Logo';
import Button from '@components/UI/button/Button';
import Switch from '@components/UI/switch/Switch';
import Icon from '@components/icon/Icon';

import styles from './Header.module.css';
import { useState } from 'react';

/**
 * Компонент шапки приложения
 * @returns {JSX.Element} - JSX элемент компонента Header
 */
const Header = () => {
  const [loading, setLoading] = useState(false);

  const handleOnLoading = () => {
    setLoading(!loading);
  };

  console.log(loading);

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.headerContent}>
        <Button
          aria-label="Создать новую задачу"
          type="button"
          className={loading ? styles.onLoading : ''}
          onClick={handleOnLoading}
        >
          {loading ? (
            <Icon
              id="loadingIcon"
              stroke="var(--base-white)"
              fill="none"
              className={styles.loadingIcon}
            />
          ) : (
            <>
              <Icon id="plusIcon" fill="var(--base-white)" />
              <span className={styles.buttonTitle}>Создать</span>
            </>
          )}
        </Button>
        <Switch />
      </div>
    </header>
  );
};

export default Header;
