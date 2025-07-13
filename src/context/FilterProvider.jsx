import FilterContext from './FilterContext';

const FilterProvider = ({ children }) => {
  return (
    <FilterContext.Provider value="value">{children}</FilterContext.Provider>
  );
};

export default FilterProvider;
