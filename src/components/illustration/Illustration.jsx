import { Suspense } from 'react';
import { getLazyComponentById } from '@utils/utils';

/**
 * Компонент-обёртка для отображения иллюстраций с ленивой загрузкой.
 *
 * @param {Object} props - Свойства компонента.
 * @param {string} props.id - Идентификатор изображения.
 * @returns {JSX.Element|null}
 */
export const Illustration = ({ id, ...props }) => {
  const LazyImage = getLazyComponentById(id, {
    prefix: '../components/illustration/illustrations',
    suffix: 'Image',
  });

  if (!LazyImage) return null;

  return (
    <Suspense fallback={null}>
      <LazyImage {...props} />
    </Suspense>
  );
};
