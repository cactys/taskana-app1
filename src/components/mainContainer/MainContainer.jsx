import { TaskList } from '@components/UI/taskList/TaskList';

import styles from './mainContainer.module.css';

/**
 * Основной контейнер для содержимого страницы
 * @returns {JSX.Element} - JSX элемент основного контейнера
 */
export const MainContainer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerWrapper}>
        <h1 className={styles.title}>Входящие</h1>
      </div>
      <TaskList />
    </section>
  );
};
