import { useContext } from '@hooks';
import { Illustration } from '@components/illustration/Illustration';
import { reverseList } from '@utils/utils';
import { TaskContext } from '@context';

import styles from './taskList.module.css';
import TaskItem from '../taskItem/TaskItem';

/**
 * Список задач
 * @returns {JSX.Element} - JSX элемент списка задач
 */
export const TaskList = () => {
  const { tasks, editTask } = useContext(TaskContext);

  const reverseTaskList = reverseList(tasks);

  const handleEditTask = (id) => {
    editTask(id);
  };

  return (
    <div className={styles.taskContainer}>
      {!tasks.length ? (
        <article className={styles.taskArticle}>
          <header className={styles.articleHeader}>
            <h2 className={styles.articleTitle}>
              Все твои задачи организованы как надо
            </h2>
            <p className={styles.articleDescription}>
              Отличная работа! Ты большой молодец!
            </p>
          </header>
          <Illustration id="emptyTask" className={styles.articleImage} />
        </article>
      ) : (
        <ul className={styles.taskList}>
          {reverseTaskList.map((task, index) => (
            <TaskItem
              key={task.id}
              index={index}
              id={task.id}
              priority={task.priority}
              title={task.title}
              handleEditTask={handleEditTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
