import useTaskContext from '@hooks/useTaskContext';
import Illustration from '@components/illustration/Illustration';

import styles from './taskList.module.css';

/**
 * Список задач
 * @returns {JSX.Element} - JSX элемент списка задач
 */
const TaskList = () => {
  const { tasks } = useTaskContext();

  return (
    <section className={styles.taskList}>
      {!tasks.length ? (
        <article className={styles.taskItem}>
          <header className={styles.taskHeader}>
            <h2 className={styles.taskTitle}>
              Все твои задачи организованы как надо
            </h2>
            <p className={styles.taskDescription}>
              Отличная работа! Ты большой молодец!
            </p>
          </header>
          <Illustration id="emptyTaskImage" className={styles.taskImage} />
        </article>
      ) : (
        tasks.map((task) => (
          <p key={task.id} className={styles.emptyState}>
            {task.id} : {task.title} : {task.priority} : {task.createdAt} :{' '}
            {task.updatedAt}
          </p>
        ))
      )}
    </section>
  );
};

export default TaskList;
