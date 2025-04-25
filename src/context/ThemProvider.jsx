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
    document.body.setAttribute('data-theme', isLightTheme ? 'light' : 'dark');

    // Обновляем мета-тег для мобильных браузеров
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute(
        'content',
        isLightTheme ? 'var(--neutral-100)' : 'var(--neutral-900)'
      );
    }
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
