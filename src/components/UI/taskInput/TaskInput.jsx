import { Icon } from '@components/icon/Icon';

import styles from './taskInput.module.css';

/**
 * Компонент поля ввода задачи с кнопкой сброса.
 *
 * @param {Object} props - Свойства компонента
 * @param {React.RefObject} props.inputRef - Реф на input для управления фокусом
 * @param {Function} props.handleChange - Обработчик изменения значения input
 * @param {Object} props.inputValue - Текущее состояние формы с полем title
 * @param {boolean} props.isInputBlur - Флаг, указывающий, что input потерял фокус
 * @param {Function} props.resetForm - Функция сброса значения input
 * @returns {JSX.Element} JSX элемент поля ввода задачи
 */
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
        name="title"
        type="text"
        placeholder="Название задачи"
        className={styles.taskInput}
        ref={inputRef}
        value={inputValue.title || ''}
        onChange={handleChange}
        tabIndex={0}
      />
      <button
        className={styles.taskCancel}
        type="button"
        aria-label="Сброс"
        onClick={resetForm}
        disabled={!isInputBlur}
        tabIndex={-1}
      >
        <Icon id="cancel" className={styles.cancelIcon} />
      </button>
    </label>
  );
};
