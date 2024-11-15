import { createContext, useMemo, useState } from 'react';

export const TabContext = createContext();

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
