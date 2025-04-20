import IncomingTasks from '@pages/IncomingTasks/IncomingTasks';
import NavBar from '@UI/NavBar/NavBar';
import Statistic from '../Statistic/Statistic';

import styles from './Content.module.css';

/**
 * Контейнер основного содержимого приложения
 * @returns {JSX.Element} - JSX элемент страницы
 */
const Content = () => {
  return (
    <div className={styles.content}>
      <NavBar />
      <IncomingTasks />
      <Statistic />
    </div>
  );
};

export default Content;
