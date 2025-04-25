import { Suspense, lazy } from 'react';

/**
 * Компонент для рендеринга различных иконок
 * @param {string} id - Идентификатор иконки ('inboxIcon', 'plusIcon', 'sunIcon', 'moonIcon', 'loadingIcon')
 * @param {Object} props - Свойства, которые будут переданы в компонент иконки
 * @returns {JSX.Element} - Выбранная иконка или null, если иконка не найдена
 */
const Icon = ({ id, ...props }) => {
  const iconName = id.charAt(0).toUpperCase() + id.slice(1);

  try {
    const IconComponent = lazy(() => import(`./icons/${iconName}.jsx`));

    return (
      <Suspense fallback={<span>...</span>}>
        <IconComponent {...props} />
      </Suspense>
    );
  } catch (error) {
    console.warn(`Иконка "${id}" не найдена.`, error);
    return null;
  }
};

export default Icon;
