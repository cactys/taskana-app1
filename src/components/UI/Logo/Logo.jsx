import React from 'react';

import styles from './Logo.module.css';

const Logo = () => {
  return (
    <a to="/" className={styles.logo} aria-label="Taskana - на главную">
      <div className={styles.logoBox} />
      <span className={styles.logoText}>taskana</span>
    </a>
  );
};

export default Logo;
