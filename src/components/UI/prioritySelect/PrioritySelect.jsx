import { Icon } from '@components/icon/Icon';

import styles from './prioritySelect.module.css';

/**
 * Компонент выбора приоритета задачи в виде радио-кнопки с иконкой.
 *
 * @param {Object} props - Свойства компонента.
 * @param {string} props.priority - Значение приоритета.
 * @param {string} props.iconName - Идентификатор иконки, соответствует приоритету.
 * @param {number} props.index - Индекс элемента в списке (для управления фокусом).
 * @param {(e: KeyboardEvent, index: number) => void} props.handlePriorityKeyDown - Обработчик событий клавиатуры для навигации по приоритетам.
 * @param {React.RefObject[]} props.labelRef - Массив рефов для лейблов, используется для установки фокуса.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.handleChange - Обработчик изменения выбора приоритета.
 * @param {Object} props.inputValue - Текущее состояние формы с выбранным приоритетом.
 *
 * @returns {JSX.Element} JSX элемент радио-кнопки приоритета с иконкой.
 */
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
      htmlFor={iconName}
      className={`${styles.priorityLabel} ${styles[`has-${iconName}`]}`}
      onKeyDown={(e) => handlePriorityKeyDown(e, index)}
      ref={(el) => (labelRef.current[index] = el)}
      tabIndex={0}
    >
      <input
        type="radio"
        id={iconName}
        className={styles.priorityCheck}
        name="priority"
        value={priority}
        onChange={handleChange}
        checked={inputValue.priority === priority}
        tabIndex={-1}
        aria-checked={inputValue.priority === priority}
        role="radio"
      />
      <Icon id={iconName} className={styles[iconName]} />
    </label>
  );
};
