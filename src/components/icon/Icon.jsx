import { lazy, Suspense } from 'react';

const InboxIcon = lazy(() =>
  import(`./icons/InboxIcon.jsx`).then((module) => ({
    default: module.InboxIcon,
  }))
);
const PlusIcon = lazy(() =>
  import(`./icons/PlusIcon.jsx`).then((module) => ({
    default: module.PlusIcon,
  }))
);
const SunIcon = lazy(() =>
  import(`./icons/SunIcon.jsx`).then((module) => ({ default: module.SunIcon }))
);
const MoonIcon = lazy(() =>
  import(`./icons/MoonIcon.jsx`).then((module) => ({
    default: module.MoonIcon,
  }))
);
const LoadingIcon = lazy(() =>
  import(`./icons/LoadingIcon.jsx`).then((module) => ({
    default: module.LoadingIcon,
  }))
);
const CancelIcon = lazy(() =>
  import(`./icons/CancelIcon.jsx`).then((module) => ({
    default: module.CancelIcon,
  }))
);
const CheckIcon = lazy(() =>
  import(`./icons/CheckIcon.jsx`).then((module) => ({
    default: module.CheckIcon,
  }))
);
const ChevronBottomIcon = lazy(() =>
  import(`./icons/ChevronBottomIcon.jsx`).then((module) => ({
    default: module.ChevronBottomIcon,
  }))
);
const ChevronTopIcon = lazy(() =>
  import(`./icons/ChevronTopIcon.jsx`).then((module) => ({
    default: module.ChevronTopIcon,
  }))
);
const MinusIcon = lazy(() =>
  import(`./icons/MinusIcon.jsx`).then((module) => ({
    default: module.MinusIcon,
  }))
);
const PenIcon = lazy(() =>
  import(`./icons/PenIcon.jsx`).then((module) => ({ default: module.PenIcon }))
);
const TwoArrowIcon = lazy(() =>
  import(`./icons/TwoArrowIcon.jsx`).then((module) => ({
    default: module.TwoArrowIcon,
  }))
);

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
export const Icon = ({ id, ...props }) => {
  const IconComponent = icons[id];

  try {
    return (
      <Suspense fallback={null}>
        {IconComponent && <IconComponent {...props} />}
      </Suspense>
    );
  } catch (error) {
    console.warn(`Иконка "${id}" не найдена.`, error);
    return null;
  }
};
