import { lazy } from 'react';

const InboxIcon = lazy(() => import(`./icons/InboxIcon.jsx`));
const LoadingIcon = lazy(() => import(`./icons/LoadingIcon.jsx`));
const MoonIcon = lazy(() => import(`./icons/MoonIcon.jsx`));
const PlusIcon = lazy(() => import(`./icons/PlusIcon.jsx`));
const SunIcon = lazy(() => import(`./icons/SunIcon.jsx`));

const icons = {
  inboxIcon: InboxIcon,
  plusIcon: PlusIcon,
  sunIcon: SunIcon,
  moonIcon: MoonIcon,
  loadingIcon: LoadingIcon,
};

/**
 * Компонент для рендеринга различных иконок
 * @param {string} id - Идентификатор иконки ('inboxIcon', 'plusIcon', 'sunIcon', 'moonIcon', 'loadingIcon')
 * @param {Object} props - Свойства, которые будут переданы в компонент иконки
 * @returns {JSX.Element} - Выбранная иконка или null, если иконка не найдена
 */
const Icon = ({ id, ...props }) => {
  const IconComponent = icons[id];

  try {
    return <IconComponent {...props} />;
  } catch (error) {
    console.warn(`Иконка "${id}" не найдена.`, error);
    return null;
  }
};

export default Icon;
