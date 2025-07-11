import styles from './taskItem.module.css';

const TaskItem = ({ index, id, priority, title }) => {
  return (
    <label htmlFor={`task-${id}`} className={styles.itemLabel}>
      <span
        className={`${styles.checkboxContainer} ${
          styles[`priority-${priority}`]
        }`}
        tabIndex={index + 10}
      />
      <input
        id={`task-${id}`}
        type="checkbox"
        className={styles.itemCheckbox}
      />
      <span className={styles.itemText}>{title}</span>
    </label>
  );
};

export default TaskItem;
