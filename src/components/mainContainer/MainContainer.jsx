import { TaskList } from '@components/UI/taskList/TaskList';
import { Dropdown } from '@components/dropdown/Dropdown';

import styles from './mainContainer.module.css';

/**
 * Основной контейнер страницы "Входящие".
 *
 * @returns {JSX.Element} JSX элемент, содержащий структурированное основное содержимое страницы.
 */
export const MainContainer = () => {
  return (
    <section className={styles.container}>
      <div className={styles.containerWrapper}>
        <h1 className={styles.title}>Входящие</h1>
        <Dropdown title="Сортировка по:" />
      </div>
      <TaskList />
    </section>
  );
};
