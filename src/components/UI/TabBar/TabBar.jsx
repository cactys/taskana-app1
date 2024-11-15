import { useContext } from 'react';
import Tab from '../Tab/Tab';
import styles from './TabBar.module.css';
import { TabContext } from '../../../contexts/TabContext';

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
