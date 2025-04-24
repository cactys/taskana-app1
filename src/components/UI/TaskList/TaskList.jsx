import useTaskContext from '@hooks/useTaskContext';
import Illustration from '@components/illustration/Illustration';

import styles from './TaskList.module.css';

/**
 * Список задач
 * @returns {JSX.Element} - JSX элемент списка задач
 */
const TaskList = () => {
  const { tasks } = useTaskContext();

  return (
    <section className={styles.taskList}>
      {tasks.length === 0 ? (
        <p className={styles.emptyState}>У вас пока нет задач</p>
      ) : (
        tasks.map((task) => (
          <article key={task.id} className={styles.taskItem}>
            <header className={styles.taskHeader}>
              <h2 className={styles.taskTitle}>{task.title}</h2>
              <p className={styles.taskDescription}>{task.description}</p>
            </header>
            <Illustration id={task.image} className={styles.taskImage} />
          </article>
        ))
      )}
    </section>
  );
};

export default TaskList;
