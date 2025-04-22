import { useState } from 'react';
import TaskContext from './TaskContext';
import illustrationEmptyTaskSvg from '@assets/images/Illustration-EmptyTask-light.svg';
import illustrationEmptyTaskWebp from '@assets/images/Illustration-EmptyTask-light.webp';
import illustrationEmptyTaskJpeg from '@assets/images/Illustration-EmptyTask-light.jpg';

/**
 * Провайдер контекста задач
 * @param {Object} props - Свойства компонента
 * @param {ReactNode} props.children - Дочерние компоненты
 * @returns {JSX.Element} - JSX элемент провайдера контекста
 */
const TaskProvider = ({ children }) => {
  // Исходные данные из TaskList.jsx
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Все твои задачи организованы как надо',
      description: 'Отличная работа! Ты большой молодец!',
      images: {
        svg: illustrationEmptyTaskSvg,
        webp: illustrationEmptyTaskWebp,
        jpeg: illustrationEmptyTaskJpeg,
      },
    },
  ]);

  // Методы для работы с задачами
  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
