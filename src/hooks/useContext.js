import { useContext as ReactUseContext } from 'react';

/**
 * Кастомный хук для использования React контекста задач.
 * Выбрасывает ошибку, если вызывается вне провайдера.
 *
 * @param {React.Context} context - Контекст для использования
 * @returns {any} Значение из переданного контекста
 * @throws {Error} Если хук вызван вне провайдера контекста
 */
const useContext = (context) => {
  const value = ReactUseContext(context);

  if (value === null || value === undefined) {
    throw new Error('useContext должен использоваться внутри провайдера соответствующего контекста');
  }

  return value;
};

export default useContext;
