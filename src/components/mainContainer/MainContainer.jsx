import TaskList from '@components/UI/taskList/TaskList';

import styles from './mainContainer.module.css';

/**
 * Основной контейнер для содержимого страницы
 * @returns {JSX.Element} - JSX элемент основного контейнера
 */
const MainContainer = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Входящие</h1>
      <TaskList />
    </section>
  );
};

export default MainContainer;
