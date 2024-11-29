import { createContext, useMemo, useState } from 'react';

export const TabContext = createContext();

/**
 *
 * @param {JSX.Element} children of the context
 * @returns {JSX.Element} JSX.Element for the context
 */
export const TabContextProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(0);

  const tabLabels = useMemo(
    () => [
      {
        title: 'на 24 часа',
      },
      {
        title: 'на 5 дней',
      },
    ],
    []
  );

  const valueTabContext = useMemo(
    () => ({ tabLabels, isActive, setIsActive }),
    [tabLabels, isActive]
  );

  return (
    <TabContext.Provider value={valueTabContext}>
      {children}
    </TabContext.Provider>
  );
};
