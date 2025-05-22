import { useContext } from 'react';
import { TaskContext } from '@context';

/**
 * Хук для использования контекста задач
 * @returns {Object} - Объект с данными и методами для управления задачами
 */
const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext должен использоваться внутри TaskProvider');
  }
  return context;
};

export default useTaskContext;
