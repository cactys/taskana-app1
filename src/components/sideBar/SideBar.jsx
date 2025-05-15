import Statistic from '@components/UI/statistic/Statistic';

import styles from './SideBar.module.css';

const SideBar = () => {
  return (
    <div className={`${styles.sideBar}`}>
      <Statistic />
    </div>
  );
};

export default SideBar;
