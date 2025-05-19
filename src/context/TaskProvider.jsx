import { useMemo, useState } from 'react';
import TaskContext from './TaskContext';
import { generateUniqueId, timeStamp } from '@utils/utils';

/**
 * Провайдер контекста задач
 * @param {ReactNode} children - Дочерние компоненты
 * @returns {JSX.Element} - JSX элемент провайдера контекста
 */
const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [isOpenTaskEditor, setIsOpenTaskEditor] = useState(false);

  const valueTask = useMemo(() => {
    const handleOpenTaskEditor = () => setIsOpenTaskEditor(!isOpenTaskEditor);

    const addTask = (newTask) => {
      setTasks([
        ...tasks,
        {
          ...newTask,
          id: generateUniqueId(),
          createdAt: timeStamp(),
          updatedAt: timeStamp(),
        },
      ]);
    };

    const deleteTask = (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    };

    return {
      tasks,
      addTask,
      deleteTask,
      isOpenTaskEditor,
      handleOpenTaskEditor,
    };
  }, [tasks, isOpenTaskEditor]);

  return (
    <TaskContext.Provider value={valueTask}>{children}</TaskContext.Provider>
  );
};

export default TaskProvider;
