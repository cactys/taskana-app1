import { useContext as UseContext } from 'react';

/**
 * Хук для использования контекста задач
 * @returns {Object} - Объект с данными и методами для управления задачами
 */
const useContext = (props) => {
  const context = UseContext(props);
  if (!context) {
    throw new Error('useContext должен использоваться внутри TaskProvider');
  }
  return context;
};

export default useContext;
