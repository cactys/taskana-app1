import React from 'react';
import Header from '@/components/Header/Header';
import Content from '@/components/Content/Content';

import styles from './AppLayout.module.css';

const AppLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Content />
    </div>
  );
};

export default AppLayout;
