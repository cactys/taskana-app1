import { Icon } from '@components/icon/Icon';

import styles from './taskInput.module.css';

export const TaskInput = ({
  inputRef,
  handleChange,
  inputValue,
  isInputBlur,
  resetForm,
}) => {
  return (
  <label className={styles.inputWrapper} htmlFor="taskInput" tabIndex={-1}>
      <input
        id="taskInput"
        onChange={handleChange}
        value={inputValue.title || ''}
        name="title"
        type="text"
        placeholder="Название задачи"
        className={styles.taskInput}
        ref={inputRef}
        tabIndex={0}
      />
      <button
        className={styles.taskCancel}
        aria-label="Сброс"
        type="button"
        disabled={!isInputBlur}
        onClick={resetForm}
        tabIndex={-1}
      >
        <Icon id="cancel" className={styles.cancelIcon} />
      </button>
    </label>
  );
};
