import MainContainer from '@components/MainContainer/MainContainer';
import Footer from '@components/Footer/Footer';

import styles from './IncomingTasks.module.css';

/**
 * Страница входящих задач
 * @returns {JSX.Element} - JSX элемент страницы входящих задач
 */
const IncomingTasks = () => {
  return (
    <main className={styles.incomingTasks}>
      <MainContainer />
      <Footer />
    </main>
  );
};

export default IncomingTasks;
