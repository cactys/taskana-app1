import { createContext, useMemo } from 'react';
import { sliderDays, sliderHours } from '../mocks/mockSliderData';

export const SliderContext = createContext();

/**
 *
 * @param {JSX.Element} children of the context
 * @returns {JSX.Element} JSX.Element for the context
 */
export const SliderContextProvider = ({ children }) => {
  const valueSliderContext = useMemo(() => ({ sliderDays, sliderHours }), []);

  return (
    <SliderContext.Provider value={valueSliderContext}>
      {children}
    </SliderContext.Provider>
  );
};
