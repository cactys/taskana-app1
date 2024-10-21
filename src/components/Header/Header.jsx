import styles from './Header.module.css';
import { Logo } from '../Logo/Logo';
import { Search } from '../Search/Search';

export const Header = () => {
  return (
    <header className={`${styles.header} container`}>
      <Logo />
      <Search />
    </header>
  );
};
