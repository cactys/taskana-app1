import { Suspense, lazy } from 'react';

/**
 * Компонент для рендеринга различных картинок
 * @param {string} id - Идентификатор картинки ('emptyTaskImage', 'notebookImage')
 * @param {Object} props - Свойства, которые будут переданы в компонент картинки
 * @returns {JSX.Element} - Выбранная картинка или null, если картинка не найдена
 */
const Illustration = ({ id, ...props }) => {
  const imageName = id.charAt(0).toUpperCase() + id.slice(1);

  try {
    const ImageComponent = lazy(() => import(`./illustrations/${imageName}.jsx`));

    return (
      <Suspense fallback={<span>Загрузка...</span>}>
        <ImageComponent {...props} />
      </Suspense>
    );
  } catch (error) {
    console.warn(`Картинка "${id}" не найдена.`, error);
    return null;
  }
};

export default Illustration;
