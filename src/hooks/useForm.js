import { startTransition, useCallback, useState } from 'react';

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
      id: '',
      priority: 1,
      title: '',
      createdAt: '',
      updatedAt: '',
    });
  }, [setInputValue]);

  return { inputValue, setInputValue, isInputBlur, handleChange, resetForm };
};

export default useForm;
