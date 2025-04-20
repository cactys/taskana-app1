import useTaskContext from '@hooks/useTaskContext';
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
            <picture className={styles.taskPicture}>
              <source type="image/svg+xml" srcSet={task.images.svg} />
              <source type="image/webp" srcSet={task.images.webp} />
              <img
                src={task.images.jpeg}
                alt="Задачи организованны"
                width={463}
                height={319}
              />
            </picture>
          </article>
        ))
      )}
    </section>
  );
};

export default TaskList;
