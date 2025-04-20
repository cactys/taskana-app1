import Button from '../Button/Button';
import Icons from '../Icons/Icons';

import styles from './NavBar.module.css';

/**
 * Навигационная панель
 * @returns {JSX.Element} - JSX элемент навигационной панели
 */
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
