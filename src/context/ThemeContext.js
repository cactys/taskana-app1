import { createContext } from 'react';

/**
 * Контекст для управления темой приложения (светлая/темная).
 * Позволяет дочерним компонентам получать текущее состояние темы и функцию переключения.
 */
const ThemeContext = createContext(null);

export default ThemeContext;
