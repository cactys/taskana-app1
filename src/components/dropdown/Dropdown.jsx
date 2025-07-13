import { Icon } from '@components/icon/Icon';
import { useEffect, useRef, useState } from 'react';

import styles from './Dropdown.module.css';

export const Dropdown = ({ title, options, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const listRef = useRef(null);
  const dropdownRef = useRef(null);

  const selectedLabel = options.find((opt) => opt.value === selected)?.label;

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        listRef.current &&
        !listRef.current.contains(e.target) &&
        !dropdownRef.current.contains(e.target)
      ) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && listRef.current) {
      const item =
        listRef.current.querySelectorAll('[role="option"]')[focusedIndex];
      item?.scrollIntoView({ block: 'nearest' });
    }
  }, [focusedIndex, isOpen]);

  const handleKeyDown = (e) => {
    if (
      !isOpen &&
      (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ')
    ) {
      e.preventDefault();
      setIsOpen(true);
      setFocusedIndex(options.findIndex((opt) => opt.value === selected));
      return;
    }

    if (isOpen) {
      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setFocusedIndex((prev) => (prev + 1) % options.length);
          break;
        case 'ArrowUp':
          e.preventDefault();
          setFocusedIndex(
            (prev) => (prev - 1 + options.length) % options.length
          );
          break;
        case 'Enter':
        case ' ':
          e.preventDefault();
          if (focusedIndex >= 0) {
            onChange(options[focusedIndex].value);
            setIsOpen(false);
          }
          break;
        case 'Escape':
          e.preventDefault();
          setIsOpen(false);
          break;
      }
    }
  };

  return (
    <div className={styles.dropdown}>
      <button
        ref={dropdownRef}
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="dropdown-listbox"
        aria-label="Сортировка задач"
      >
        <Icon id="filter" fill="var(--neutral-800)" width="24" height="24"/>
        {`По ${selectedLabel.toLowerCase()}`}
        <Icon id="chevronBottom" fill="var(--neutral-800)" width="24" height="24"/>
      </button>

      <ul
        id="dropdown-listbox"
        role="listbox"
        aria-activedescendant={
          isOpen && focusedIndex >= 0 ? `option-${focusedIndex}` : undefined
        }
        className={`${styles.list} ${isOpen ? styles.open : styles.closed}`}
        ref={listRef}
      >
        {options.map((option, index) => (
          <li
            key={index}
            id={`option-${index}`}
            role="option"
            aria-selected={option.value === selected}
            className={`${styles.item} ${
              focusedIndex === index ? styles.focused : ''
            }`}
            onClick={() => {
              onChange(option.value);
              setIsOpen(false);
            }}
            onMouseEnter={() => setFocusedIndex(index)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
