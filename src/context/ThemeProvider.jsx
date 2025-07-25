import { useEffect, useMemo, useState } from 'react';
import ThemeContext from './ThemeContext';

/**
 * Провайдер контекста для управления темой приложения (светлая/темная).
 *
 * Отвечает за хранение состояния текущей темы, переключение темы и синхронизацию с атрибутом
 * data-theme в корневом элементе документа для стилизации.
 *
 * @param {ReactNode} children - Дочерние компоненты
 * @returns {JSX.Element} JSX элемент провайдера контекста
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
