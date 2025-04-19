import React from 'react';
import Logo from '../UI/Logo/Logo';
import Button from '../UI/Button/Button';
import styles from './Header.module.css';
import Icons from '../UI/Icons/Icons';

const Header = () => {
  return (
    <header className={styles.header} role="banner">
      <div className={styles.headerContent}>
        <Logo />
        <Button aria-label="Создать новую задачу" type="button">
          <Icons
            id="plus-icon-svg"
            className={styles.buttonIcon}
          />
          <span className={styles.buttonTitle}>Создать</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
