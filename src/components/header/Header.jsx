import { startTransition, useState } from 'react';
import Logo from '@components/UI/logo/Logo';
import Button from '@components/UI/button/Button';
import ThemeSwitcher from '@components/UI/themeSwitcher/ThemeSwitcher';
import Icon from '@components/icon/Icon';

import styles from './header.module.css';
import { useTaskContext } from '@hooks';

/**
 * Компонент шапки приложения
 * @returns {JSX.Element} - JSX элемент компонента Header
 */
const Header = () => {
  const { handleOpenTaskEditor } = useTaskContext();
  const [loading, setLoading] = useState(false);

  const handleOnLoading = () => {
    startTransition(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        handleOpenTaskEditor(true);
      }, 500);
    });
  };

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.headerContent}>
        <Button
          aria-label="Создать новую задачу"
          type="button"
          variant="danger"
          onClick={handleOnLoading}
          onLoading={loading}
          className={styles.addButton}
          tabIndex="2"
        >
          {loading && (
            <Icon
              id="loadingIcon"
              stroke="var(--base-white)"
              fill="none"
              className={styles.loadingIcon}
            />
          )}
          <Icon
            id="plusIcon"
            fill="var(--base-white)"
            className={`${styles.buttonIcon} ${loading && styles.onHidden}`}
          />
          <span
            className={`${styles.buttonText} ${loading && styles.onHidden}`}
          >
            Создать
          </span>
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
