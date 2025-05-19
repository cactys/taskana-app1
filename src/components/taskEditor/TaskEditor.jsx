import { useForm, useTaskContext } from '@hooks';
import Button from '@components/UI/button/Button';
import Icon from '@components/icon/Icon';
import styles from './taskEditor.module.css';
import { priorityIcons } from '@utils/constants';
import { startTransition, useState } from 'react';

const TaskEditor = () => {
  const { addTask, isOpenTaskEditor, handleOpenTaskEditor } = useTaskContext();
  const { inputValue, isInputBlur, handleChange, resetForm } = useForm();
  const [loading, setLoading] = useState(false);

  const handleCreate = (e) => {
    e.preventDefault();

    startTransition(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        addTask(inputValue);
        handleOpenTaskEditor(false);
      }, 2000);
    });
    resetForm();
  };

  const handleCancel = (e) => {
    e.preventDefault();
    resetForm();
    handleOpenTaskEditor(false);
  };

  return (
    <form
      className={`${styles.taskEditor} ${
        isOpenTaskEditor ? styles.isOpen : ''
      }`}
    >
      <header className={styles.taskHeader}>
        <h2 className={styles.taskTitle}>Создание задачи</h2>
        <fieldset className={styles.fieldsetWrapper}>
          <label className={styles.taskLabel} htmlFor="taskInput">
            Название <span>*</span>
          </label>
          <label className={styles.inputWrapper} htmlFor="taskInput">
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
              onClick={resetForm}
            >
              <Icon id="cancelIcon" className={styles.cancelIcon} />
            </button>
          </label>
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
                  disabled={inputValue.priority === priority}
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
          variant="primary"
          onLoading={loading}
        >
          Создать
        </Button>
        <Button
          type="button"
          aria-label="Отмена"
          onClick={handleCancel}
          variant="secondary"
          onLoading={loading}
        >
          Отмена
        </Button>
      </footer>
    </form>
  );
};

export default TaskEditor;
