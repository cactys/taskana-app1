import { createContext, useMemo } from 'react';
import { sliderDays, sliderHours } from '../mocks/mockSliderData';

export const SliderContext = createContext();

export const SliderContextProvider = ({ children }) => {
  const valueSliderContext = useMemo(
    () => ({ sliderDays, sliderHours }),
    [sliderDays, sliderHours]
  );

  return (
    <SliderContext.Provider value={valueSliderContext}>
      {children}
    </SliderContext.Provider>
  );
};
