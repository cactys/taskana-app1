import { useForm, useTaskContext } from '@hooks';
import Button from '@components/UI/button/Button';
import Icon from '@components/icon/Icon';
import styles from './taskEditor.module.css';
import { priorityIcons } from '@utils/constants';

const TaskEditor = () => {
  const { addTask } = useTaskContext();
  const { inputValue, isInputBlur, handleChange, resetForm } = useForm();

  const handleCreate = (e) => {
    e.preventDefault();
    addTask(inputValue);
    resetForm();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    resetForm();
  };

  return (
    <form className={styles.taskEditor}>
      <header className={styles.taskHeader}>
        <h2 className={styles.taskTitle}>Создание задачи</h2>
        <fieldset className={styles.fieldsetWrapper}>
          <label className={styles.taskLabel} htmlFor="taskInput">
            Название <span>*</span>
          </label>
          <div className={styles.inputWrapper}>
            <input
              id="taskInput"
              onChange={handleChange}
              value={inputValue.title || ''}
              name="title"
              type="text"
              placeholder="Название задачи"
              className={styles.taskInput}
            />
            <button
              className={styles.taskCancel}
              aria-label="Сброс"
              type="button"
              disabled={!isInputBlur}
              onClick={handleCancel}
            >
              <Icon id="cancelIcon" className={styles.cancelIcon} />
            </button>
          </div>
        </fieldset>
      </header>
      <div className={styles.taskContent}>
        <div className={styles.priorityWrapper}>
          <span className={styles.taskPriority}>Приоритет</span>
          <fieldset className={styles.priorityField}>
            {priorityIcons.map(({ priority, iconName }) => (
              <label
                key={priority}
                className={`${styles.priorityLabel} ${styles[`${iconName}`]}`}
              >
                <input
                  type="radio"
                  className={styles.priorityCheck}
                  name="priority"
                  value={priority}
                  onChange={handleChange}
                  checked={inputValue.priority === priority}
                />
                <Icon id={iconName} className={styles[`${iconName}`]} />
              </label>
            ))}
          </fieldset>
        </div>
      </div>
      <footer className={styles.taskFooter}>
        <Button
          type="button"
          aria-label="Создать"
          onClick={handleCreate}
          disabled={!isInputBlur}
        >
          Создать
        </Button>
        <Button type="button" aria-label="Отмена" onClick={handleCancel}>
          Отмена
        </Button>
      </footer>
    </form>
  );
};

export default TaskEditor;
