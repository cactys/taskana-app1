import { useContext } from 'react';
import { TabContext } from '../../../contexts/TabContext';
import Tab from '../Tab/Tab';

import styles from './TabBar.module.css';

/**
 *
 * @returns {JSX.Element} JSX.Element for the TabBar
 */
const TabBar = () => {
  const { tabLabels, isActive, setIsActive } = useContext(TabContext);

  const handleTabClick = (index) => {
    setIsActive(index);
  };

  return (
    <div className={styles.tabBar}>
      <h3 className={styles.tabBarTitle}>Прогноз:</h3>
      {tabLabels.map((tab, index) => (
        <Tab
          key={index}
          title={tab.title}
          onClick={() => handleTabClick(index)}
          active={index === isActive}
        />
      ))}
    </div>
  );
};

export default TabBar;
