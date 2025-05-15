import { lazy } from 'react';

const EmptyTaskImage = lazy(() => import('./illustrations/EmptyTaskImage.jsx'));
const NotebookImage = lazy(() => import('./illustrations/NotebookImage.jsx'));

const illustrations = {
  emptyTaskImage: EmptyTaskImage,
  notebookImage: NotebookImage,
};

/**
 * Компонент для рендеринга различных картинок
 * @param {string} id - Идентификатор картинки ('emptyTaskImage', 'notebookImage')
 * @param {Object} props - Свойства, которые будут переданы в компонент картинки
 * @returns {JSX.Element} - Выбранная картинка или null, если картинка не найдена
 */
const Illustration = ({ id, ...props }) => {
  const ImageComponent = illustrations[id];

  try {
    return <ImageComponent {...props} />;
  } catch (error) {
    console.warn(`Картинка "${id}" не найдена.`, error);
    return null;
  }
};

export default Illustration;
