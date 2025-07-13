import { MainContainer } from '@components/mainContainer/MainContainer';
import { Footer } from '@components/footer/Footer';
import { useContext } from '@hooks';

import styles from './incomingTasks.module.css';
import { TaskContext } from '@context';

/**
 * Страница входящих задач
 * @returns {JSX.Element} - JSX элемент страницы входящих задач
 */
export const IncomingTasks = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <main className={styles.incomingTasks}>
      <MainContainer />
      <Footer taskCount={tasks.length} />
    </main>
  );
};
