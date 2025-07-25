import { lazy, Suspense, useContext, useEffect, useRef } from 'react';
import { FilterContext } from '@context';
import { Button } from '@components/UI/button/Button';
import { Icon } from '@components/icon/Icon';
import { ModalOverlayLayout } from '@layouts/modalOverlayLayout/ModalOverlayLayout';
import { keyDown } from '@utils/utils';
import styles from './Dropdown.module.css';

const LazyInput = lazy(() =>
  import('../UI/filterInput/FilterInput').then((module) => ({
    default: module.FilterInput,
  }))
);

/**
 * Компонент Dropdown — выпадающее меню для выбора и фильтрации задач.
 *
 * @param {Object} props
 * @param {string} props.title — Заголовок выпадающего списка
 * @returns {JSX.Element} JSX-разметка компонента Dropdown
 */
export const Dropdown = ({ title }) => {
  const {
    handleDropdownMenu,
    openDropdownMenu,
    selectOption,
    handleSelectOption,
    filters,
  } = useContext(FilterContext);

  const filterLabelRef = useRef([]);

  const handleFilterKeyDown = (e, index) => {
    keyDown(e, index, undefined, filters, handleSelectOption, (newIndex) => {
      filterLabelRef.current[newIndex].focus();
    });
  };

  useEffect(() => {
    if (openDropdownMenu && filterLabelRef.current) {
      const timer = setTimeout(() => {
        filterLabelRef.current[0].focus();
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [openDropdownMenu]);

  return (
    <>
      {openDropdownMenu && <ModalOverlayLayout onClose={handleDropdownMenu} />}

      <div className={styles.dropdown}>
        <Button
          type="button"
          className={`${styles.trigger} ${!openDropdownMenu && styles.unSelected}`}
          variant="secondary"
          aria-haspopup="listbox"
          aria-expanded={openDropdownMenu}
          aria-controls="dropdown-listbox"
          aria-label="Сортировка задач"
          tabIndex={0}
          onClick={handleDropdownMenu}
        >
          <Icon id={selectOption.iconName} className={styles.icon} />
          {`По ${selectOption.label.toLowerCase()}`}
          <Icon id="chevronBottom" className={styles.icon} />
        </Button>

        <ul
          id="dropdown-listbox"
          role="listbox"
          className={`${styles.list} ${openDropdownMenu ? styles.open : styles.closed}`}
          inert={!openDropdownMenu ? '' : undefined}
        >
          <header className={styles.listHeader}>
            <Icon id="filter" className={styles.icon} />
            <h3 className={styles.listTitle}>{title}</h3>
          </header>

          {filters.map((option, index) => (
            <li key={index} id={`option-${index}`} role="option">
              <Suspense fallback={null}>
                <LazyInput
                  option={option}
                  index={index}
                  isSelected={selectOption.value}
                  handleSelectOption={handleSelectOption}
                  handleFilterKeyDown={handleFilterKeyDown}
                  labelRef={filterLabelRef}
                />
              </Suspense>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
