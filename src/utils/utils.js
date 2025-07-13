import { lazy } from 'react';

/**
 * Генерация уникального идентификатора
 * @returns {string} Уникальный идентификатор (например: "k3h4f9z")
 */
export const generateUniqueId = () => {
  return Math.random().toString(36).substring(2, 9);
};

/**
 * Возвращает текущую временную метку в формате ISO 8601
 * @returns {string} Строка в формате "YYYY-MM-DDTHH:mm:ss.sssZ"
 */
export const timeStamp = () => {
  const now = new Date();
  return now.toISOString();
};

/**
 * Возвращает копию массива в обратном порядке
 * @param {Array<any>} data - Массив, который нужно развернуть
 * @returns {Array<any>} Новый массив в обратном порядке
 */
export const reverseList = (data) => data.slice().reverse();

/**
 * Обработка клавиатурной навигации по приоритетам задачи
 * @param {KeyboardEvent} evn - Событие нажатия клавиши
 * @param {number} index - Индекс текущего приоритета
 * @param {Array<string>} priorities - Список приоритетов
 * @param {(event: { target: { name: string, value: string } }) => void} handleChange - Обработчик изменения значения
 * @param {(newIndex: number) => void} handleFocus - Обработчик смены фокуса по индексу
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
 * Обработка клавиш в форме создания задачи
 * @param {KeyboardEvent} evn - Событие нажатия клавиши
 * @param {boolean} isInputBlur - Флаг, указывающий на потерю фокуса с инпута
 * @param {() => void} resetForm - Функция сброса формы
 * @param {(isOpen: boolean) => void} handleOpenTaskEditor - Функция открытия/закрытия редактора задачи
 * @param {(event: KeyboardEvent) => void} handleCreate - Функция создания новой задачи
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
 * Выполнение действия по нажатию кнопки с анимацией загрузки
 * @param {boolean} [isInputBlur=true] - Флаг потери фокуса с поля формы
 * @param {() => void} startLoading - Функция включения состояния загрузки
 * @param {() => void} stopLoading - Функция отключения состояния загрузки
 * @param {() => void} action - Действие, которое необходимо выполнить
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

/**
 * Возвращает лениво загружаемый React-компонент по идентификатору.
 * @param {string} id - Идентификатор компонента (например, "emptyTaskImage", "check", "sun").
 * @param {Object} options - Опции загрузки.
 * @param {string} options.prefix - Путь к папке с компонентами (относительно этого файла).
 * @param {string} options.suffix - Суффикс имени компонента (например, "Icon", "Image").
 * @returns {React.LazyExoticComponent<React.ComponentType<any>>|undefined} Компонент или undefined, если не найден.
 */
export const getLazyComponentById = (id, { prefix = '', suffix = '' } = {}) => {
  try {
    const componentName = id.charAt(0).toUpperCase() + id.slice(1) + suffix;

    return lazy(() =>
      import(`${prefix}/${componentName}.jsx`).then((module) => ({
        default: module[componentName],
      }))
    );
  } catch (error) {
    console.warn(`Компонент "${id}" не найден в ${prefix}.`, error);
    return undefined;
  }
};
