import { Suspense } from 'react';
import { getLazyComponentById } from '@utils/utils';

/**
 * Компонент-обёртка для отображения иконок с ленивой загрузкой.
 * @param {Object} props - Свойства компонента.
 * @param {string} props.id - Идентификатор иконки.
 * @returns {JSX.Element|null}
 */
export const Icon = ({ id, ...props }) => {
  const LazyIcon = getLazyComponentById(id, {
    prefix: '../components/icon/icons',
    suffix: 'Icon',
  });

  if (!LazyIcon) return null;

  return (
    <Suspense fallback={null}>
      <LazyIcon {...props} />
    </Suspense>
  );
};
