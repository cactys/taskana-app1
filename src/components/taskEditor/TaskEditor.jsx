import { useRef, useEffect } from 'react';
import { TaskContext } from '@context';
import { useForm, useLoading, useContext } from '@hooks';
import { ModalOverlayLayout } from '@layouts/modalOverlayLayout/ModalOverlayLayout';
import { priorityInput } from '@utils/constants';
import { Icon } from '@components/icon/Icon';
import { Button } from '@components/UI/button/Button';
import { TaskInput } from '@components/UI/taskInput/TaskInput';
import { PrioritySelect } from '@components/UI/prioritySelect/PrioritySelect';
import { buttonAction, formKeyDown, priorityKeyDown } from '@utils/utils';

import styles from './taskEditor.module.css';

export const TaskEditor = () => {
  const { addTask, isOpenTaskEditor, handleOpenTaskEditor } =
    useContext(TaskContext);
  const { inputValue, isInputBlur, handleChange, resetForm } = useForm();
  const {
    loading: createLoading,
    startLoading: startCreateLoading,
    stopLoading: stopCreateLoading,
  } = useLoading();
  const {
    loading: cancelLoading,
    startLoading: startCancelLoading,
    stopLoading: stopCancelLoading,
  } = useLoading();
  const priorityLabelRef = useRef([]);
  const inputRef = useRef(null);

  const handleCreate = (e) => {
    e.preventDefault();
    buttonAction(isInputBlur, startCreateLoading, stopCreateLoading, () => {
      addTask(inputValue);
      handleOpenTaskEditor(false);
      resetForm();
    });
  };

  const handleCancel = (e) => {
    e.preventDefault();
    buttonAction(undefined, startCancelLoading, stopCancelLoading, () => {
      handleOpenTaskEditor(false);
      resetForm();
    });
  };

  const handlePriorityKeyDown = (e, index) => {
    const priorities = priorityInput.map(({ priority }) => priority);
    priorityKeyDown(e, index, priorities, handleChange, (newIndex) => {
      priorityLabelRef.current[newIndex].focus();
    });
  };

  const handleFormKeyDown = (e) => {
    formKeyDown(e, isInputBlur, resetForm, handleOpenTaskEditor, handleCreate);
  };

  const handleOnCloseModal = () => {
    handleOpenTaskEditor(false);
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
    <>
      {isOpenTaskEditor && <ModalOverlayLayout onClose={handleOnCloseModal} />}
      <form
        name="taskEditorForm"
        className={`${styles.taskEditor} ${
          isOpenTaskEditor ? styles.isOpen : ''
        }`}
        onKeyDown={handleFormKeyDown}
        onSubmit={handleCreate}
      >
        <div className={styles.taskContainer}>
          <header className={styles.taskHeader}>
            <h2 className={styles.taskTitle}>Создание задачи</h2>
            <fieldset className={styles.fieldsetWrapper}>
              <legend className={styles.fieldsetLegend}>Название задачи</legend>
              <label
                className={styles.taskLabel}
                htmlFor="taskInput"
                tabIndex="-1"
              >
                Название <span>*</span>
              </label>
              <TaskInput
                inputRef={inputRef}
                handleChange={handleChange}
                inputValue={inputValue}
                isInputBlur={isInputBlur}
                resetForm={resetForm}
              />
            </fieldset>
          </header>
          <div className={styles.taskContent}>
            <div className={styles.priorityWrapper}>
              <span className={styles.taskPriority}>Приоритет</span>
              <fieldset className={styles.priorityField}>
                <legend className={styles.fieldsetLegend}>
                  Выберите приоритет
                </legend>
                {priorityInput.map(({ priority, iconName }, index) => (
                  <PrioritySelect
                    key={priority}
                    priority={priority}
                    iconName={iconName}
                    index={index}
                    handlePriorityKeyDown={handlePriorityKeyDown}
                    labelRef={priorityLabelRef}
                    handleChange={handleChange}
                    inputValue={inputValue}
                  />
                ))}
              </fieldset>
            </div>
          </div>
        </div>
        <footer className={styles.taskFooter}>
          <Button
            type="button"
            aria-label="Создать задачу"
            onClick={handleCreate}
            disabled={!createLoading && !isInputBlur}
            variant="primary"
            onLoading={createLoading}
            className={styles.footerButton}
            tabIndex="7"
          >
            {createLoading && (
              <Icon
                id="loading"
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
            aria-label="Отменить создание задачи"
            onClick={handleCancel}
            variant="secondary"
            onLoading={cancelLoading}
            className={styles.footerButton}
            tabIndex="8"
          >
            {cancelLoading && (
              <Icon
                id="loading"
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
    </>
  );
};

export default TaskEditor;
