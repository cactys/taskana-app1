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
    const { value, name } = event.target;

    console.log(value.length);

    setInputValue({ ...inputValue, [name]: value });
    startTransition(() => {
      setIsInputBlur(true);
    });

    if (name === 'title') {
      if (value.length === 0) {
        setIsInputBlur(false);
      }
    }
  };

  const resetForm = useCallback(() => {
    setIsInputBlur(false);
    setInputValue('');
  }, [setInputValue]);

  return { inputValue, setInputValue, isInputBlur, handleChange, resetForm };
};

export default useForm;
