import { memo } from 'react';
import { Icon } from '@components/icon/Icon';

import styles from './filterInput.module.css';

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
          className={`${styles.checkIcon} ${select && styles.checked} ${
            styles.icon
          }`}
        />
      </label>
    );
  }
);

FilterInput.displayName = 'Input';
