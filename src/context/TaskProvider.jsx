import { useMemo, useState } from 'react';
import TaskContext from './TaskContext';

/**
 * Провайдер контекста задач
 * @param {ReactNode} children - Дочерние компоненты
 * @returns {JSX.Element} - JSX элемент провайдера контекста
 */
const TaskProvider = ({ children }) => {
  // Исходные данные из TaskList.jsx
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Все твои задачи организованы как надо',
      description: 'Отличная работа! Ты большой молодец!',
      image: 'emptyTaskImage',
    },
  ]);

  const valueTask = useMemo(() => {
    // Методы для работы с задачами
    const addTask = (newTask) => {
      setTasks([...tasks, { ...newTask, id: Date.now() }]);
    };

    const deleteTask = (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return { tasks, addTask, deleteTask };
  }, [tasks]);

  return (
    <TaskContext.Provider value={valueTask}>{children}</TaskContext.Provider>
  );
};

export default TaskProvider;
