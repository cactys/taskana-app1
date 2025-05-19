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
      }, 2000);
    });
    handleOpenTaskEditor(true);
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
        >
          <Icon id="plusIcon" fill="var(--base-white)" />
          Создать
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Header;
