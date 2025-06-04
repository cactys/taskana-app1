import { MainContainer } from '@components/mainContainer/MainContainer';
import { Footer } from '@components/footer/Footer';
import { useTaskContext } from '@hooks';

import styles from './incomingTasks.module.css';

/**
 * Страница входящих задач
 * @returns {JSX.Element} - JSX элемент страницы входящих задач
 */
export const IncomingTasks = () => {
  const { tasks } = useTaskContext();
  return (
    <main className={styles.incomingTasks}>
      <MainContainer />
      <Footer taskCount={tasks.length} />
    </main>
  );
};
