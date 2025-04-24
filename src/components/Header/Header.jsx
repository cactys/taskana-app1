import Logo from '@components/UI/logo/Logo';
import Button from '@components/UI/button/Button';
import Switch from '@components/UI/switch/Switch';
import Icon from '@components/icon/Icon';

import styles from './Header.module.css';

/**
 * Компонент шапки приложения
 * @returns {JSX.Element} - JSX элемент компонента Header
 */
const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.headerContent}>
        <Button aria-label="Создать новую задачу" type="button">
          <Icon id="plusIcon" fill="var(--base-white)" />
          <span className={styles.buttonTitle}>Создать</span>
        </Button>
        <Switch />
      </div>
    </header>
  );
};

export default Header;
