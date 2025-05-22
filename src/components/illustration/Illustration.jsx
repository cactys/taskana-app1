import { lazy } from 'react';

const EmptyTaskImage = lazy(() =>
  import('./illustrations/EmptyTaskImage.jsx').then((module) => ({
    default: module.EmptyTaskImage,
  }))
);
const NotebookImage = lazy(() =>
  import('./illustrations/NotebookImage.jsx').then((module) => ({
    default: module.NotebookImage,
  }))
);

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
export const Illustration = ({ id, ...props }) => {
  const ImageComponent = illustrations[id];

  try {
    return <ImageComponent {...props} />;
  } catch (error) {
    console.warn(`Картинка "${id}" не найдена.`, error);
    return null;
  }
};
