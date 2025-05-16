import { lazy } from 'react';

const InboxIcon = lazy(() => import(`./icons/InboxIcon.jsx`));
const PlusIcon = lazy(() => import(`./icons/PlusIcon.jsx`));
const SunIcon = lazy(() => import(`./icons/SunIcon.jsx`));
const MoonIcon = lazy(() => import(`./icons/MoonIcon.jsx`));
const LoadingIcon = lazy(() => import(`./icons/LoadingIcon.jsx`));
const CancelIcon = lazy(() => import(`./icons/CancelIcon.jsx`));
const CheckIcon = lazy(() => import(`./icons/CheckIcon.jsx`));
const ChevronBottomIcon = lazy(() => import(`./icons/ChevronBottomIcon.jsx`));
const ChevronTopIcon = lazy(() => import(`./icons/ChevronTopIcon.jsx`));
const MinusIcon = lazy(() => import(`./icons/MinusIcon.jsx`));
const PenIcon = lazy(() => import(`./icons/PenIcon.jsx`));
const TwoArrowIcon = lazy(() => import(`./icons/TwoArrowIcon.jsx`));

const icons = {
  inboxIcon: InboxIcon,
  plusIcon: PlusIcon,
  sunIcon: SunIcon,
  moonIcon: MoonIcon,
  loadingIcon: LoadingIcon,
  cancelIcon: CancelIcon,
  checkIcon: CheckIcon,
  chevronBottomIcon: ChevronBottomIcon,
  chevronTopIcon: ChevronTopIcon,
  minusIcon: MinusIcon,
  penIcon: PenIcon,
  twoArrowIcon: TwoArrowIcon,
};

/**
 * Компонент для рендеринга различных иконок
 * @param {string} id - Идентификатор иконки
 * ('inboxIcon', 'plusIcon', 'sunIcon', 'moonIcon', 'loadingIcon', 'cancelIcon', 'checkIcon', 'chevronBottomIcon', 'chevronTopIcon', 'minusIcon', 'penIcon', 'twoArrowIcon')
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
