import React from 'react';
import MainContainer from '../../components/MainContainer/MainContainer';
import Footer from '../../components/Footer/Footer';
import styles from './IncomingTasks.module.css';

const IncomingTasks = () => {
  return (
    <main className={styles.incomingTasks}>
      <MainContainer />
      <Footer />
    </main>
  );
};

export default IncomingTasks;
