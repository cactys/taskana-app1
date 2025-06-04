import { Icon } from '@components/icon/Icon';

import styles from './prioritySelect.module.css';

export const PrioritySelect = ({
  priority,
  iconName,
  index,
  handlePriorityKeyDown,
  labelRef,
  handleChange,
  inputValue,
}) => {
  return (
    <label
      key={priority}
      htmlFor={iconName}
      className={`${styles.priorityLabel} ${styles[`has-${iconName}`]}`}
      onKeyDown={(e) => handlePriorityKeyDown(e, index)}
      ref={(el) => (labelRef.current[index] = el)}
      tabIndex="6"
    >
      <input
        type="radio"
        id={iconName}
        className={styles.priorityCheck}
        name="priority"
        value={priority}
        onChange={handleChange}
        checked={inputValue.priority === priority}
        tabIndex="-1"
      />
      <Icon id={iconName} className={styles[`${iconName}`]} />
    </label>
  );
};
