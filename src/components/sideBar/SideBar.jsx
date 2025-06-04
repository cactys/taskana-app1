import { Statistic } from '@components/UI/statistic/Statistic';

import styles from './sideBar.module.css';

export const SideBar = () => {
  return (
    <div className={`${styles.sideBar}`}>
      <Statistic />
    </div>
  );
};
