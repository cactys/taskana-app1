import { memo } from 'react';
import { Icon } from '@components/icon/Icon';

import styles from './filterInput.module.css';

/**
 * Компонент опции фильтра с поддержкой клавиатурной навигации и выбором.
 *
 * @param {Object} props - Свойства компонента.
 * @param {Object} props.option - Объект опции фильтра { value, label, iconName, mode }.
 * @param {number} props.index - Индекс текущей опции в списке.
 * @param {(option: Object) => void} props.handleSelectOption - Коллбек выбора опции.
 * @param {string} props.isSelected - Значение выбранной опции для сравнения.
 * @param {(event: KeyboardEvent, index: number) => void} props.handleFilterKeyDown - Обработчик клавиш для навигации.
 * @param {React.MutableRefObject<Array>} props.labelRef - Реф для управления фокусом по опциям.
 *
 * @returns {JSX.Element} Отрендеренный элемент опции с чекбоксом/радио и иконками.
 */
export const FilterInput = memo(
  ({
    option,
    index,
    handleSelectOption,
    isSelected,
    handleFilterKeyDown,
    labelRef,
  }) => {
    const select = option.value === isSelected;

    const handleChange = () => {
      handleSelectOption({ ...option });
    };

    return (
      <label
        htmlFor={option.value}
        className={styles.customOption}
        tabIndex={0}
        role="option"
        aria-selected={select}
        onKeyDown={(e) => handleFilterKeyDown(e, index)}
        ref={(el) => (labelRef.current[index] = el)}
      >
        <input
          type={option.mode}
          id={option.value}
          name={option.value}
          value={option.label}
          checked={select}
          onChange={handleChange}
          tabIndex={-1}
          aria-hidden="true"
        />
        <Icon id={option.iconName} className={styles.icon} />
        {option.label}
        <Icon
          id="check"
          className={`${styles.checkIcon} ${select ? styles.checked : ''} ${styles.icon}`}
        />
      </label>
    );
  }
);

FilterInput.displayName = 'Input';
