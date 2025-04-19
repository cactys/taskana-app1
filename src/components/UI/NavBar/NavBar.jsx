import React from 'react';
import styles from './NavBar.module.css';
import Button from '../Button/Button';
import Icons from '../Icons/Icons';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li>
          <Button
            variant="secondary"
            size="large"
            aria-label="Входящие задачи"
            type="button"
          >
            <Icons id="inbox-icon-svg" className={styles.buttonIcon} />
            <span className={styles.buttonTitle}>Входящие</span>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
