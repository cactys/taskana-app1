import { useRef, useEffect } from 'react';
import { TaskContext } from '@context';
import { useForm, useLoading, useContext } from '@hooks';
import { ModalOverlayLayout } from '@layouts/modalOverlayLayout/ModalOverlayLayout';
import { priorityInput } from '@utils/constants';
import { Icon } from '@components/icon/Icon';
import { Button } from '@components/UI/button/Button';
import { TaskInput } from '@components/UI/taskInput/TaskInput';
import { PrioritySelect } from '@components/UI/prioritySelect/PrioritySelect';
import { buttonAction, formKeyDown, keyDown } from '@utils/utils';

import styles from './taskEditor.module.css';

/**
 * Редактор задачи с возможностью создания, редактирования и удаления.
 * Использует контекст задач и кастомные хуки для формы и загрузки.
 *
 * Основные возможности:
 * - Управление состоянием формы задачи (название, приоритет).
 * - Создание новой задачи и обновление существующей.
 * - Удаление задачи.
 * - Управление загрузкой и состояниями кнопок.
 *
 * @returns {JSX.Element} JSX элемент редактора задачи.
 */
export const TaskEditor = () => {
  const {
    addTask,
    isOpenTaskEditor,
    handleOpenTaskEditor,
    editableTask,
    updateTask,
    deleteTask,
  } = useContext(TaskContext);

  const {
    inputValue,
    isInputBlur,
    handleChange,
    resetForm,
    setFormData,
    isChanged,
  } = useForm();

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
  const {
    loading: deleteLoading,
    startLoading: startDeleteLoading,
    stopLoading: stopDeleteLoading,
  } = useLoading();

  const priorityLabelRef = useRef([]);
  const inputRef = useRef(null);
  const prevIsOpen = useRef(false);

  const handleCreate = (e) => {
    e.preventDefault();

    if (editableTask) {
      buttonAction(
        isInputBlur,
        startCreateLoading,
        stopCreateLoading,
        () => {
          updateTask(editableTask.id, {
            ...editableTask,
            title: inputValue.title,
            priority: inputValue.priority,
          });
        },
        () => {
          handleOpenTaskEditor(false);
          resetForm();
        }
      );
      return;
    }

    buttonAction(
      isInputBlur,
      startCreateLoading,
      stopCreateLoading,
      () => {
        addTask(inputValue);
      },
      () => {
        handleOpenTaskEditor(false);
        resetForm();
      }
    );
  };

  const handleCancel = (e) => {
    e.preventDefault();
    buttonAction(
      undefined,
      startCancelLoading,
      stopCancelLoading,
      () => {},
      () => {
        handleOpenTaskEditor(false);
        resetForm();
      }
    );
  };

  const handleDelete = () => {
    buttonAction(
      undefined,
      startDeleteLoading,
      stopDeleteLoading,
      () => {
        deleteTask(editableTask.id);
      },
      () => {
        handleOpenTaskEditor(false);
        resetForm();
      }
    );
  };

  const handlePriorityKeyDown = (e, index) => {
    const priorities = priorityInput.map(({ priority }) => priority);
    keyDown(e, index, priorities, undefined, handleChange, (newIndex) => {
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
      const timer = setTimeout(() => inputRef.current.focus(), 200);
      return () => clearTimeout(timer);
    }
  }, [isOpenTaskEditor]);

  useEffect(() => {
    const editorJustOpened = isOpenTaskEditor && !prevIsOpen.current;

    if (editorJustOpened) {
      if (editableTask) {
        setFormData(editableTask);
      } else {
        resetForm();
      }
    }

    prevIsOpen.current = isOpenTaskEditor;
  }, [isOpenTaskEditor, editableTask, resetForm, setFormData]);

  return (
    <div inert={!isOpenTaskEditor ? '' : undefined}>
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
              <label className={styles.taskLabel} htmlFor="taskInput">
                Название <span>*</span>
              </label>

              <TaskInput
                inputRef={inputRef}
                handleChange={handleChange}
                inputValue={inputValue || editableTask?.title}
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
                    priority={priority || editableTask?.priority}
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
            aria-label={editableTask ? 'Сохранить задачу' : 'Создать задачу'}
            onClick={handleCreate}
            disabled={!createLoading && !(isInputBlur && isChanged)}
            variant="primary"
            onLoading={createLoading}
            className={styles.footerButton}
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
              {editableTask ? 'Сохранить' : 'Создать'}
            </span>
          </Button>

          <Button
            type="button"
            aria-label="Отменить создание задачи"
            onClick={handleCancel}
            variant="secondary"
            onLoading={cancelLoading}
            className={styles.footerButton}
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

          {editableTask && (
            <Button
              type="button"
              aria-label="Удалить задачу"
              onClick={handleDelete}
              variant="secondary"
              onLoading={deleteLoading}
              className={`${styles.footerButton} ${styles.deleteButton}`}
            >
              {deleteLoading && (
                <Icon
                  id="loading"
                  className={styles.loadingIcon}
                  stroke="var(--neutral-800)"
                  fill="none"
                />
              )}
              <Icon
                id="trash"
                className={`${styles.trashIcon} ${
                  deleteLoading && styles.onHidden
                }`}
              />
            </Button>
          )}
        </footer>
      </form>
    </div>
  );
};

export default TaskEditor;
