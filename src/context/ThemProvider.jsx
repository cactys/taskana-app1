import { useEffect, useMemo, useState } from 'react';
import ThemeContext from './ThemContext';

/**
 * Провайдер контекста смены темы
 * @param {ReactNode} children - Дочерние компоненты
 * @returns {JSX.Element} - JSX элемент провайдера контекста
 */
const ThemeProvider = ({ children }) => {
  const [isLightTheme, setIsLightTheme] = useState(true);

  const toggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isLightTheme ? 'light' : 'dark');
  }, [isLightTheme]);

  const valueThemeContext = useMemo(
    () => ({ isLightTheme, setIsLightTheme, toggleTheme }),
    [isLightTheme]
  );

  return (
    <ThemeContext.Provider value={valueThemeContext}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
