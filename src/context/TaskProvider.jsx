import { useContext, useMemo, useState } from 'react';
import TaskContext from './TaskContext';
import FilterContext from './FilterContext';
import { generateUniqueId, timeStamp } from '@utils/utils';

/**
 * Провайдер контекста задач.
 * Управляет состоянием задач, сортировкой, открытием редактора задач и CRUD операциями.
 *
 * @param {ReactNode} children - Дочерние компоненты
 * @returns {JSX.Element} Провайдер TaskContext с логикой управления задачами
 */
const TaskProvider = ({ children }) => {
  const { selectOption } = useContext(FilterContext);
  const [tasks, setTasks] = useState([]);
  const [isOpenTaskEditor, setIsOpenTaskEditor] = useState(false);
  const [editableTask, setEditableTask] = useState(null);

  const sortedTasks = useMemo(() => {
    if (!selectOption?.value) return tasks;

    const [key, direction] = selectOption.value.split(':');

    return [...tasks].sort((a, b) => {
      const aValue = a[key];
      const bValue = b[key];

      if (key === 'createdAt' || key === 'updatedAt') {
        return direction === 'asc'
          ? new Date(bValue) - new Date(aValue)
          : new Date(aValue) - new Date(bValue);
      }

      if (typeof aValue === 'string') {
        return direction === 'asc'
          ? bValue.localeCompare(aValue)
          : aValue.localeCompare(bValue);
      }

      return direction === 'asc' ? bValue - aValue : aValue - bValue;
    });
  }, [selectOption, tasks]);

  const valueTask = useMemo(() => {
    const handleOpenTaskEditor = (open, task = null) => {
      setIsOpenTaskEditor(open);
      setEditableTask(task);
    };

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

    const updateTask = (taskId, updatedFields) => {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === taskId
            ? { ...task, ...updatedFields, updatedAt: timeStamp() }
            : task
        )
      );
    };

    const editTask = (taskId) => {
      const task = tasks.find((t) => t.id === taskId);
      if (task) {
        handleOpenTaskEditor(true, task);
      }
    };

    const deleteTask = (taskId) => {
      setTasks(tasks.filter((task) => task.id !== taskId));
    };

    const resetEditor = () => {
      setEditableTask(null);
      setIsOpenTaskEditor(false);
    };

    return {
      tasks: sortedTasks,
      editableTask,
      isOpenTaskEditor,
      handleOpenTaskEditor,
      addTask,
      updateTask,
      editTask,
      deleteTask,
      resetEditor,
    };
  }, [sortedTasks, editableTask, isOpenTaskEditor, tasks]);

  return (
    <TaskContext.Provider value={valueTask}>{children}</TaskContext.Provider>
  );
};

export default TaskProvider;
