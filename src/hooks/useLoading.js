import { useState } from 'react';

/**
 * Хук для управления состоянием загрузки данных
 * @returns {boolean} loading - истина или ложь в зависимости от состояния загрузки данных
 * @returns {function} startLoading - запускает загрузку
 * @returns {function} stopLoading - останавливает загрузку
 */
const useLoading = () => {
  const [loading, setLoading] = useState(false);
  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);
  return { loading, startLoading, stopLoading };
};

export default useLoading;
