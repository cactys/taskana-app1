import styles from './Tab.module.css';

/**
 *
 * @param {string} title title of the tab
 * @param {function} onClick function to be called on click
 * @param {boolean} active is the tab active
 * @returns {JSX.Element} JSX.Element for the tab
 */
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
