import { Icon } from '@components/icon/Icon';
import { NavLink } from '@components/UI/navLink/NavLink';

import styles from './navBar.module.css';

/**
 * Компонент навигационной панели.
 *
 * @returns {JSX.Element} Основной JSX элемент навигационной панели.
 */
export const NavBar = () => {
  return (
    <nav className={styles.navbar} aria-label="Главная навигация">
      <ul className={styles.navList}>
        <li>
          <NavLink hrefLink={'/'} tabIndex={0}>
            <Icon
              id="inbox"
              fill="var(--neutral-0)"
              className={styles.linkIcon}
            />
            <span className={styles.buttonTitle}>Входящие</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
