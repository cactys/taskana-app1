import { initialFormState } from '@utils/constants';
import { useCallback, useMemo, useRef, useState } from 'react';

/**
 * Хук для управления состоянием формы задачи.
 *
 * Управляет значениями полей, состоянием фокуса, изменениями формы и сбросом.
 *
 * @returns {Object} Состояние и методы формы:
 * @returns {Object} return.inputValue - Текущие значения полей формы.
 * @returns {Function} return.setInputValue - Функция для установки значений формы.
 * @returns {boolean} return.isInputBlur - Флаг, указывающий, было ли поле "title" валидно заполнено.
 * @returns {Function} return.handleChange - Обработчик изменения полей формы.
 * @returns {Function} return.resetForm - Сброс формы к начальному состоянию.
 * @returns {Function} return.setFormData - Установка значений формы из переданного объекта задачи.
 * @returns {boolean} return.isChanged - Флаг, указывающий, изменились ли данные по сравнению с исходными.
 */
const useForm = () => {
  const [inputValue, setInputValue] = useState(initialFormState);
  const [isInputBlur, setIsInputBlur] = useState(false);
  const initialDataRef = useRef(initialFormState);

  const handleChange = (event) => {
    const { value, name, type } = event.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: type === 'radio' ? parseInt(value, 10) : value,
    }));

    if (name === 'title') {
      const trimmedValue = value.trim();
      setIsInputBlur(trimmedValue.length > 0);
    }
  };

  const resetForm = useCallback(() => {
    setInputValue(initialFormState);
    setIsInputBlur(false);
  }, []);

  const setFormData = useCallback((task) => {
    if (!task) return;
    const newData = {
      title: task.title || '',
      priority: task.priority || 1,
    };
    setInputValue(newData);
    initialDataRef.current = newData;
    setIsInputBlur(!!task.title?.trim());
  }, []);

  const isChanged = useMemo(() => {
    const { title, priority } = inputValue;
    const { title: initialTitle, priority: initialPriority } = initialDataRef.current;
    return title !== initialTitle || priority !== initialPriority;
  }, [inputValue]);

  return {
    inputValue,
    setInputValue,
    isInputBlur,
    handleChange,
    resetForm,
    setFormData,
    isChanged,
  };
};

export default useForm;
