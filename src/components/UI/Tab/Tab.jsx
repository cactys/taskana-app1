import styles from './Tab.module.css';

const Tab = ({ title, onClick, active }) => {
  return (
    <span
      onClick={onClick}
      className={`${styles.tabLabel} ${active ? styles.isActive : ''}`}
    >
      {title}
    </span>
  );
};

export default Tab;
