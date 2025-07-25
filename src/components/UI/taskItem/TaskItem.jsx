import { Icon } from '@components/icon/Icon';
import { Button } from '../button/Button';
import styles from './taskItem.module.css';

const TaskItem = ({ id, priority, title, handleEditTask }) => {
  const handleTaskEditing = () => {
    handleEditTask(id);
  };

  return (
    <li className={styles.taskItem} tabIndex={0}>
      <label htmlFor={`task-${id}`} className={styles.itemLabel} tabIndex={-1}>
        <span
          className={`${styles.checkboxContainer} ${
            styles[`priority-${priority}`]
          }`}
          tabIndex={0}
        />
        <input
          id={`task-${id}`}
          type="checkbox"
          className={styles.itemCheckbox}
          tabIndex={-1}
        />
        <span className={styles.itemText}>{title}</span>
        <Button
          className={styles.buttonEdit}
          variant="editing"
          onClick={handleTaskEditing}
        >
          <Icon id="pen" className={styles.buttonIcon} />
        </Button>
      </label>
    </li>
  );
};

export default TaskItem;
