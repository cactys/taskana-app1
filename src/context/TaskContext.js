import { createContext } from 'react';

/**
 * Контекст для управления задачами.
 * Содержит состояние и методы для работы со списком задач,
 * такими как добавление, редактирование и удаление.
 */
const TaskContext = createContext(null);

export default TaskContext;
