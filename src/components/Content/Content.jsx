import IncomingTasks from '@/pages/IncomingTasks/IncomingTasks';
import NavBar from '../UI/NavBar/NavBar';
import Statistic from '../Statistic/Statistic';

import styles from './Content.module.css';

const Content = () => {
  return (
    <div className={styles.content}>
      <NavBar className={styles.navbar} />
      <IncomingTasks />
      <Statistic className={styles.statistic} />
    </div>
  );
};

export default Content;
