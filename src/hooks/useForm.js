import { useCallback, useState } from 'react';

/**
 * Хук useForm используется для управления состоянием формы.
 * @returns {Object} inputValue - Объект с данными формы.
 * @returns {Function} setInputValue - Функция для изменения состояния формы.
 * @returns {boolean} isInputBlur - Флаг, указывающий, было ли поле ввода в фокусе.
 * @returns {Function} handleChange - Функция для обработки изменения значений в форме.
 * @returns {Function} resetForm - Функция для сброса формы.
 */
const useForm = () => {
  const [inputValue, setInputValue] = useState({
    id: '',
    priority: 1,
    title: '',
    createdAt: '',
    updatedAt: '',
  });
  const [isInputBlur, setIsInputBlur] = useState(false);

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
    setInputValue({
      ...inputValue,
      id: '',
      priority: 1,
      title: '',
      createdAt: '',
      updatedAt: '',
    });
  }, [setInputValue, inputValue]);

  return { inputValue, setInputValue, isInputBlur, handleChange, resetForm };
};

export default useForm;
