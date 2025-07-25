import { useMemo, useState } from 'react';
import { filterOptions } from '@utils/constants';
import FilterContext from './FilterContext';

/**
 * Провайдер контекста фильтра
 * Обеспечивает состояние и методы для управления фильтрами и выпадающим меню.
 *
 * @param {Object} props - Свойства компонента
 * @param {React.ReactNode} props.children - Дочерние элементы, которым будет доступен контекст
 * @returns {JSX.Element} - Обернутые дочерние компоненты с провайдером фильтра
 */
const FilterProvider = ({ children }) => {
  const [openDropdownMenu, setOpenDropdownMenu] = useState(false);
  const [filters] = useState(filterOptions);
  const [selectOption, setSelectOption] = useState(filters[4]);

  const valueFilter = useMemo(() => {
    const handleDropdownMenu = () => {
      setOpenDropdownMenu((prev) => !prev);
    };

    const handleSelectOption = ({ label, value, iconName }) => {
      setSelectOption({ label, value, iconName });
      handleDropdownMenu();
    };

    return {
      handleDropdownMenu,
      openDropdownMenu,
      selectOption,
      handleSelectOption,
      filters,
    };
  }, [filters, openDropdownMenu, selectOption]);

  return (
    <FilterContext.Provider value={valueFilter}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
