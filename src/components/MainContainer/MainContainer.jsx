import React from 'react';
import TaskList from '../UI/TaskList/TaskList';
import styles from './MainContainer.module.css';

const MainContainer = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Входящие</h1>
      <TaskList />
    </section>
  );
};

export default MainContainer;
