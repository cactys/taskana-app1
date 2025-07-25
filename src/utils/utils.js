import { iconComponentMap } from '@components/icon/iconMap';
import { illustrationComponentMap } from '@components/illustration/illustrationMap';

/**
 * Генерация уникального идентификатора
 * @returns {string} Уникальный идентификатор (например: "k3h4f9z")
 */
export const generateUniqueId = () => Math.random().toString(36).substring(2, 9);

/**
 * Возвращает текущую временную метку в формате ISO 8601
 * @returns {string} Строка в формате "YYYY-MM-DDTHH:mm:ss.sssZ"
 */
export const timeStamp = () => new Date().toISOString();

/**
 * Возвращает копию массива в обратном порядке
 * @param {Array<any>} data - Массив, который нужно развернуть
 * @returns {Array<any>} Новый массив в обратном порядке
 */
export const reverseList = (data = []) => [...data].slice().reverse();

/**
 * Обработка клавиатурной навигации по приоритетам задачи или фильтрам
 * @param {KeyboardEvent} evn - Событие нажатия клавиши
 * @param {number} index - Индекс текущего элемента
 * @param {Array<string>} [priorities] - Список приоритетов (необязательно)
 * @param {Array} [filters] - Список фильтров (необязательно)
 * @param {function} handleChange - Обработчик изменения значения
 * @param {function} handleFocus - Обработчик смены фокуса по индексу
 */
export const keyDown = (
  evn,
  index,
  priorities,
  filters,
  handleChange,
  handleFocus
) => {
  switch (evn.key) {
    case 'ArrowUp':
    case 'ArrowLeft':
      if (priorities) handleFocus(index > 0 ? index - 1 : priorities.length - 1);
      if (filters) handleFocus(index > 0 ? index - 1 : filters.length - 1);
      break;
    case 'ArrowDown':
    case 'ArrowRight':
      if (priorities) handleFocus(index < priorities.length - 1 ? index + 1 : 0);
      if (filters) handleFocus(index < filters.length - 1 ? index + 1 : 0);
      break;
    case 'Enter':
    case ' ':
      if (priorities)
        handleChange({ target: { name: 'priority', value: priorities[index] } });
      if (filters) handleChange({ ...filters[index] });
      break;
    default:
      break;
  }
};

/**
 * Обработка клавиш в форме создания задачи
 * @param {KeyboardEvent} evn - Событие нажатия клавиши
 * @param {boolean} isInputBlur - Флаг, указывающий на потерю фокуса с инпута
 * @param {function} resetForm - Функция сброса формы
 * @param {function} handleOpenTaskEditor - Функция открытия/закрытия редактора задачи
 * @param {function} handleCreate - Функция создания новой задачи
 */
export const formKeyDown = (evn, isInputBlur, resetForm, handleOpenTaskEditor, handleCreate) => {
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
 * @param {function} startLoading - Функция включения состояния загрузки
 * @param {function} stopLoading - Функция отключения состояния загрузки
 * @param {function} action - Действие, которое необходимо выполнить
 * @param {function} [onFinish] - Функция, вызываемая после завершения действия
 */
export const buttonAction = (
  isInputBlur = true,
  startLoading,
  stopLoading,
  action,
  onFinish
) => {
  if (isInputBlur) {
    startLoading();
    setTimeout(() => {
      action();
      stopLoading();
      if (typeof onFinish === 'function') {
        onFinish();
      }
    }, 600);
  }
};

const componentMap = {
  'icon/icons': iconComponentMap,
  'illustration/illustrations': illustrationComponentMap,
};

/**
 * Возвращает лениво загружаемый React-компонент по идентификатору.
 * @param {string} id - Идентификатор компонента (например, "emptyTaskImage", "check", "sun").
 * @param {Object} options - Опции загрузки.
 * @param {string} options.prefix - Путь к папке с компонентами (например, "icon/icons").
 * @param {string} options.suffix - Суффикс имени компонента (например, "Icon", "Image").
 * @returns {React.ComponentType|undefined} Компонент или undefined, если не найден.
 */
export const getComponentById = (id, { prefix = '', suffix = '' } = {}) => {
  const componentName = id.charAt(0).toUpperCase() + id.slice(1) + suffix;
  const group = componentMap[prefix];
  if (!group) {
    console.warn(`Префикс "${prefix}" не найден`);
    return undefined;
  }
  const Component = group[componentName];
  if (!Component) {
    console.warn(`Компонент ${componentName} не найден`);
    return undefined;
  }
  return Component;
};
