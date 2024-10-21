import styles from './Logo.module.css';
import logo from '../../assets/images/logo.svg';
import logoSmall from '../../assets/images/logo-small.svg';

export const Logo = () => {
  return (
    <div>
      <a href="/">
        <picture>
          <source media="(min-width: 1024px)" srcSet={logo} />
          <img
            alt="logo"
            src={logoSmall}
            width="32"
            height="32"
            className={styles.image}
          />
        </picture>
      </a>
    </div>
  );
};
