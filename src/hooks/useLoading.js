import { useState } from 'react';

/**
 * Хук для управления состоянием загрузки.
 *
 * Предоставляет булево состояние загрузки и функции для его включения и отключения.
 *
 * @returns {Object} Объект с состоянием и методами управления загрузкой
 * @returns {boolean} return.loading - Текущее состояние загрузки (true — загружается, false — нет)
 * @returns {Function} return.startLoading - Функция для включения состояния загрузки
 * @returns {Function} return.stopLoading - Функция для выключения состояния загрузки
 */
const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  return { loading, startLoading, stopLoading };
};

export default useLoading;
