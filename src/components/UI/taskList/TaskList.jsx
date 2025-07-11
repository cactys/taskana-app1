import { useTaskContext } from '@hooks';
import { Illustration } from '@components/illustration/Illustration';
import { reverseList } from '@utils/utils';

import styles from './taskList.module.css';
import TaskItem from '../taskItem/TaskItem';

/**
 * Список задач
 * @returns {JSX.Element} - JSX элемент списка задач
 */
export const TaskList = () => {
  const { tasks } = useTaskContext();

  const reverseTaskList = reverseList(tasks);

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
          <Illustration id="emptyTaskImage" className={styles.articleImage} />
        </article>
      ) : (
        <ul className={styles.taskList}>
          {reverseTaskList.map((task, index) => (
            <li key={task.id} className={styles.taskItem} tabIndex={index + 9}>
              <TaskItem
                index={index}
                id={task.id}
                priority={task.priority}
                title={task.title}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
