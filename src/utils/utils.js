/**
 * Генерация уникального идентификатора
 * @returns {string} уникальный идентификатор
 */
export const generateUniqueId = () => {
  return Math.random().toString(36).substring(2, 9);
};

/**
 * Форматирование времени в формате 2025-05-22T12:35:34.370Z
 * @returns {string} время в формате 2025-05-22T12:35:34.370Z
 */
export const timeStamp = () => {
  const now = new Date();
  return now.toISOString();
};

/**
 * Сортировка списка задач
 * @param {Object} data список задач
 * @returns {Object} развернутый список задач
 */
export const reverseList = (data) => data.slice().reverse();

/**
 * Навигация по приоритетам задач при нажатии клавиш
 * @param {Object} evn событие нажатия клавиши
 * @param {number} index индекс задачи
 * @param {Object} priorities приоритеты задачи
 * @param {Function} handleChange функция изменения значения поля формы
 * @param {Function} handleFocus функция изменения индекса задачи при нажатии клавиши
 */
export const priorityKeyDown = (
  evn,
  index,
  priorities,
  handleChange,
  handleFocus
) => {
  switch (evn.key) {
    case 'ArrowUp':
    case 'ArrowLeft':
      handleFocus(index > 0 ? index - 1 : priorities.length - 1);
      break;
    case 'ArrowDown':
    case 'ArrowRight':
      handleFocus(index < priorities.length - 1 ? index + 1 : 0);
      break;
    case 'Enter':
    case ' ':
      handleChange({
        target: { name: 'priority', value: priorities[index] },
      });
      break;
    default:
      break;
  }
};

/**
 * Событие нажатия клавиш в форме создания задачи
 * @param {Object} evn событие нажатия клавиши
 * @param {boolean} isInputBlur фокусировка на поле формы
 * @param {Function} resetForm сброс формы
 * @param {Function} handleOpenTaskEditor функция открытия формы редактирования задачи
 * @param {Function} handleCreate функция создания задачи
 */
export const formKeyDown = (
  evn,
  isInputBlur,
  resetForm,
  handleOpenTaskEditor,
  handleCreate
) => {
  if (evn.key === 'Escape') {
    handleOpenTaskEditor(false);
    resetForm();
  } else if (
    evn.key === 'Enter' &&
    isInputBlur &&
    evn.target.tagName !== 'BUTTON' &&
    evn.target.tagName !== 'LABEL'
  ) {
    handleCreate(evn);
  }
};

/**
 * Обработка нажатия кнопки
 * @param {boolean} isInputBlur фокусировка на поле формы - true по умолчанию
 * @param {Function} startLoading функция загрузки кнопки
 * @param {Function} stopLoading функция отключения загрузки кнопки
 * @param {Function} action функция выполнения действия
 */
export const buttonAction = (
  isInputBlur = true,
  startLoading,
  stopLoading,
  action
) => {
  if (isInputBlur) {
    startLoading();
    setTimeout(() => {
      action();
      stopLoading();
    }, 600);
  }
};
