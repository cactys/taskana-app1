import { useForm, useTaskContext } from '@hooks';
import Button from '@components/UI/button/Button';
import Icon from '@components/icon/Icon';
import styles from './taskEditor.module.css';
import { priorityInput } from '@utils/constants';
import { startTransition, useState, useRef, useEffect } from 'react';

const TaskEditor = () => {
  const { addTask, isOpenTaskEditor, handleOpenTaskEditor } = useTaskContext();
  const { inputValue, isInputBlur, handleChange, resetForm } = useForm();
  const [createLoading, setCreateLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);
  const priorityLabelRef = useRef([]);
  const inputRef = useRef(null);

  const handleCreate = (e) => {
    e.preventDefault();
    startTransition(() => {
      setCreateLoading(true);
      setTimeout(() => {
        setCreateLoading(false);
        addTask(inputValue);
        handleOpenTaskEditor(false);
        resetForm();
      }, 500);
    });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    startTransition(() => {
      setCancelLoading(true);
      setTimeout(() => {
        setCancelLoading(false);
        handleOpenTaskEditor(false);
        resetForm();
      }, 500);
    });
  };

  const handlePriorityKeyDown = (e, index) => {
    const priorities = priorityInput.map(({ priority }) => priority);
    let newIndex;

    switch (e.key) {
      case 'ArrowUp':
      case 'ArrowLeft':
        newIndex = index > 0 ? index - 1 : priorities.length - 1;
        break;
      case 'ArrowDown':
      case 'ArrowRight':
        newIndex = index < priorities.length - 1 ? index + 1 : 0;
        break;
      case 'Enter':
      case ' ':
        handleChange({
          target: { name: 'priority', value: priorities[index] },
        });
        return;
      default:
        return;
    }

    e.preventDefault();
    priorityLabelRef.current[newIndex].focus();
  };

  const handleFormKeyDown = (e) => {
    if (e.key === 'Escape') {
      resetForm();
    } else if (
      e.key === 'Enter' &&
      isInputBlur &&
      e.target.tagName !== 'BUTTON' &&
      e.target.tagName !== 'LABEL'
    ) {
      handleCreate(e);
    }
  };

  const handleTaskCancelKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      resetForm();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isInputBlur) {
      handleCreate(e);
    }
  };

  useEffect(() => {
    if (isOpenTaskEditor && inputRef.current) {
      const timer = setTimeout(() => {
        inputRef.current.focus();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isOpenTaskEditor]);

  return (
    <form
      className={`${styles.taskEditor} ${
        isOpenTaskEditor ? styles.isOpen : ''
      }`}
      onKeyDown={handleFormKeyDown}
      onSubmit={handleSubmit}
    >
      <div className={styles.taskContainer}>
        <header className={styles.taskHeader}>
          <h2 className={styles.taskTitle}>Создание задачи</h2>
          <fieldset className={styles.fieldsetWrapper}>
            <label
              className={styles.taskLabel}
              htmlFor="taskInput"
              tabIndex="-1"
            >
              Название <span>*</span>
            </label>
            <label
              className={styles.inputWrapper}
              htmlFor="taskInput"
              tabIndex="-1"
            >
              <input
                id="taskInput"
                onChange={handleChange}
                value={inputValue.title || ''}
                name="title"
                type="text"
                placeholder="Название задачи"
                className={styles.taskInput}
                tabIndex="5"
                ref={inputRef}
              />
              <button
                className={styles.taskCancel}
                aria-label="Сброс"
                type="button"
                disabled={!isInputBlur}
                onClick={resetForm}
                onKeyDown={handleTaskCancelKeyDown}
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
              {priorityInput.map(({ priority, iconName }, index) => (
                <label
                  key={priority}
                  htmlFor={iconName}
                  className={`${styles.priorityLabel} ${
                    styles[`has-${iconName}`]
                  }`}
                  onKeyDown={(e) => handlePriorityKeyDown(e, index)}
                  ref={(el) => (priorityLabelRef.current[index] = el)}
                  tabIndex="7"
                >
                  <input
                    type="radio"
                    id={iconName}
                    className={styles.priorityCheck}
                    name="priority"
                    value={priority}
                    onChange={handleChange}
                    checked={inputValue.priority === priority}
                    disabled={inputValue.priority === priority}
                    tabIndex="-1"
                  />
                  <Icon id={iconName} className={styles[`${iconName}`]} />
                </label>
              ))}
            </fieldset>
          </div>
        </div>
        <div className={styles.taskContent}>
          <div className={styles.priorityWrapper}>
            <span className={styles.taskPriority}>Приоритет</span>
            <fieldset className={styles.priorityField}>
              {priorityInput.map(({ priority, iconName }, index) => (
                <label
                  key={priority}
                  htmlFor={iconName}
                  className={`${styles.priorityLabel} ${
                    styles[`has-${iconName}`]
                  }`}
                  onKeyDown={(e) => handlePriorityKeyDown(e, index)}
                  ref={(el) => (priorityLabelRef.current[index] = el)}
                  tabIndex="7"
                >
                  <input
                    type="radio"
                    id={iconName}
                    className={styles.priorityCheck}
                    name="priority"
                    value={priority}
                    onChange={handleChange}
                    checked={inputValue.priority === priority}
                    disabled={inputValue.priority === priority}
                    tabIndex="-1"
                  />
                  <Icon id={iconName} className={styles[`${iconName}`]} />
                </label>
              ))}
            </fieldset>
          </div>
        </div>
        <div className={styles.taskContent}>
          <div className={styles.priorityWrapper}>
            <span className={styles.taskPriority}>Приоритет</span>
            <fieldset className={styles.priorityField}>
              {priorityInput.map(({ priority, iconName }, index) => (
                <label
                  key={priority}
                  htmlFor={iconName}
                  className={`${styles.priorityLabel} ${
                    styles[`has-${iconName}`]
                  }`}
                  onKeyDown={(e) => handlePriorityKeyDown(e, index)}
                  ref={(el) => (priorityLabelRef.current[index] = el)}
                  tabIndex="7"
                >
                  <input
                    type="radio"
                    id={iconName}
                    className={styles.priorityCheck}
                    name="priority"
                    value={priority}
                    onChange={handleChange}
                    checked={inputValue.priority === priority}
                    disabled={inputValue.priority === priority}
                    tabIndex="-1"
                  />
                  <Icon id={iconName} className={styles[`${iconName}`]} />
                </label>
              ))}
            </fieldset>
          </div>
        </div>
        <div className={styles.taskContent}>
          <div className={styles.priorityWrapper}>
            <span className={styles.taskPriority}>Приоритет</span>
            <fieldset className={styles.priorityField}>
              {priorityInput.map(({ priority, iconName }, index) => (
                <label
                  key={priority}
                  htmlFor={iconName}
                  className={`${styles.priorityLabel} ${
                    styles[`has-${iconName}`]
                  }`}
                  onKeyDown={(e) => handlePriorityKeyDown(e, index)}
                  ref={(el) => (priorityLabelRef.current[index] = el)}
                  tabIndex="7"
                >
                  <input
                    type="radio"
                    id={iconName}
                    className={styles.priorityCheck}
                    name="priority"
                    value={priority}
                    onChange={handleChange}
                    checked={inputValue.priority === priority}
                    disabled={inputValue.priority === priority}
                    tabIndex="-1"
                  />
                  <Icon id={iconName} className={styles[`${iconName}`]} />
                </label>
              ))}
            </fieldset>
          </div>
        </div>
        <div className={styles.taskContent}>
          <div className={styles.priorityWrapper}>
            <span className={styles.taskPriority}>Приоритет</span>
            <fieldset className={styles.priorityField}>
              {priorityInput.map(({ priority, iconName }, index) => (
                <label
                  key={priority}
                  htmlFor={iconName}
                  className={`${styles.priorityLabel} ${
                    styles[`has-${iconName}`]
                  }`}
                  onKeyDown={(e) => handlePriorityKeyDown(e, index)}
                  ref={(el) => (priorityLabelRef.current[index] = el)}
                  tabIndex="7"
                >
                  <input
                    type="radio"
                    id={iconName}
                    className={styles.priorityCheck}
                    name="priority"
                    value={priority}
                    onChange={handleChange}
                    checked={inputValue.priority === priority}
                    disabled={inputValue.priority === priority}
                    tabIndex="-1"
                  />
                  <Icon id={iconName} className={styles[`${iconName}`]} />
                </label>
              ))}
            </fieldset>
          </div>
        </div>
        <div className={styles.taskContent}>
          <div className={styles.priorityWrapper}>
            <span className={styles.taskPriority}>Приоритет</span>
            <fieldset className={styles.priorityField}>
              {priorityInput.map(({ priority, iconName }, index) => (
                <label
                  key={priority}
                  htmlFor={iconName}
                  className={`${styles.priorityLabel} ${
                    styles[`has-${iconName}`]
                  }`}
                  onKeyDown={(e) => handlePriorityKeyDown(e, index)}
                  ref={(el) => (priorityLabelRef.current[index] = el)}
                  tabIndex="7"
                >
                  <input
                    type="radio"
                    id={iconName}
                    className={styles.priorityCheck}
                    name="priority"
                    value={priority}
                    onChange={handleChange}
                    checked={inputValue.priority === priority}
                    disabled={inputValue.priority === priority}
                    tabIndex="-1"
                  />
                  <Icon id={iconName} className={styles[`${iconName}`]} />
                </label>
              ))}
            </fieldset>
          </div>
        </div>
        <div className={styles.taskContent}>
          <div className={styles.priorityWrapper}>
            <span className={styles.taskPriority}>Приоритет</span>
            <fieldset className={styles.priorityField}>
              {priorityInput.map(({ priority, iconName }, index) => (
                <label
                  key={priority}
                  htmlFor={iconName}
                  className={`${styles.priorityLabel} ${
                    styles[`has-${iconName}`]
                  }`}
                  onKeyDown={(e) => handlePriorityKeyDown(e, index)}
                  ref={(el) => (priorityLabelRef.current[index] = el)}
                  tabIndex="7"
                >
                  <input
                    type="radio"
                    id={iconName}
                    className={styles.priorityCheck}
                    name="priority"
                    value={priority}
                    onChange={handleChange}
                    checked={inputValue.priority === priority}
                    disabled={inputValue.priority === priority}
                    tabIndex="-1"
                  />
                  <Icon id={iconName} className={styles[`${iconName}`]} />
                </label>
              ))}
            </fieldset>
          </div>
        </div>
        <div className={styles.taskContent}>
          <div className={styles.priorityWrapper}>
            <span className={styles.taskPriority}>Приоритет</span>
            <fieldset className={styles.priorityField}>
              {priorityInput.map(({ priority, iconName }, index) => (
                <label
                  key={priority}
                  htmlFor={iconName}
                  className={`${styles.priorityLabel} ${
                    styles[`has-${iconName}`]
                  }`}
                  onKeyDown={(e) => handlePriorityKeyDown(e, index)}
                  ref={(el) => (priorityLabelRef.current[index] = el)}
                  tabIndex="7"
                >
                  <input
                    type="radio"
                    id={iconName}
                    className={styles.priorityCheck}
                    name="priority"
                    value={priority}
                    onChange={handleChange}
                    checked={inputValue.priority === priority}
                    disabled={inputValue.priority === priority}
                    tabIndex="-1"
                  />
                  <Icon id={iconName} className={styles[`${iconName}`]} />
                </label>
              ))}
            </fieldset>
          </div>
        </div>
      </div>
      <footer className={styles.taskFooter}>
        <Button
          type="button"
          aria-label="Создать"
          onClick={handleCreate}
          disabled={!createLoading && !isInputBlur}
          variant="primary"
          onLoading={createLoading}
          className={styles.footerButton}
          tabIndex="8"
        >
          {createLoading && (
            <Icon
              id="loadingIcon"
              className={styles.loadingIcon}
              stroke="var(--neutral-100)"
              fill="none"
            />
          )}
          <span
            className={`${styles.buttonText} ${
              createLoading && styles.onHidden
            }`}
          >
            Создать
          </span>
        </Button>
        <Button
          type="button"
          aria-label="Отмена"
          onClick={handleCancel}
          variant="secondary"
          onLoading={cancelLoading}
          className={styles.footerButton}
          tabIndex="9"
        >
          {cancelLoading && (
            <Icon
              id="loadingIcon"
              className={styles.loadingIcon}
              stroke="var(--neutral-800)"
              fill="none"
            />
          )}
          <span
            className={`${styles.buttonText} ${
              cancelLoading && styles.onHidden
            }`}
          >
            Отмена
          </span>
        </Button>
      </footer>
    </form>
  );
};

export default TaskEditor;
