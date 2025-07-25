import { useMemo, useState } from 'react';
import { filterOptions } from '@utils/constants';
import FilterContext from './FilterContext';

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
