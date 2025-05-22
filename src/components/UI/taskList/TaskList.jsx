import { useTaskContext } from '@hooks';
import { Illustration } from '@components/illustration/Illustration';
import { reverseList } from '@utils/utils';

import styles from './taskList.module.css';

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
              <label htmlFor={task.id} className={styles.itemLabel}>
                <span
                  className={`${styles.checkboxContainer} ${
                    styles[`priority-${task.priority}`]
                  }`}
                  tabIndex={index + 10}
                />
                <input
                  id={task.id}
                  type="checkbox"
                  className={`${styles.itemCheckbox} ${
                    styles[`has-${task.priority}`]
                  }`}
                />
                <span className={styles.itemText}>{task.title}</span>
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
