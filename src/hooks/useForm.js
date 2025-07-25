import { initialFormState } from '@utils/constants';
import { useCallback, useMemo, useRef, useState } from 'react';

/**
 * Хук useForm используется для управления состоянием формы.
 * @returns {Object} inputValue - Объект с данными формы.
 * @returns {Function} setInputValue - Функция для изменения состояния формы.
 * @returns {boolean} isInputBlur - Флаг, указывающий, было ли поле ввода в фокусе.
 * @returns {Function} handleChange - Функция для обработки изменения значений в форме.
 * @returns {Function} resetForm - Функция для сброса формы.
 */
const useForm = () => {
  const [inputValue, setInputValue] = useState(initialFormState);
  const [isInputBlur, setIsInputBlur] = useState(false);
  const initialDataRef = useRef(initialFormState);

  const handleChange = (event) => {
    const { value, name, type } = event.target;

    if (type === 'radio') {
      setInputValue({ ...inputValue, [name]: parseInt(value, 10) });
    } else {
      setInputValue({ ...inputValue, [name]: value });
    }

    if (name === 'title') {
      const trimmedValue = value.trim();
      if (trimmedValue.length > 0) {
        setIsInputBlur(true);
      } else {
        setIsInputBlur(false);
      }
    }
  };

  const resetForm = useCallback(() => {
    setIsInputBlur(false);
    setInputValue({ ...inputValue, ...initialFormState });
  }, [setInputValue, inputValue]);

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
    const { title: initialTitle, priority: initialPriority } =
      initialDataRef.current;
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
