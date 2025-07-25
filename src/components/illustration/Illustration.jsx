import { getComponentById } from '@utils/utils';

/**
 * Компонент-обёртка для отображения иллюстраций с ленивой загрузкой.
 *
 * @param {Object} props - Свойства компонента.
 * @param {string} props.id - Идентификатор изображения.
 * @returns {JSX.Element|null}
 */
export const Illustration = ({ id, ...props }) => {
  const Image = getComponentById(id, {
    prefix: 'illustration/illustrations',
    suffix: 'Image',
  });

  if (!Image) return null;

  return <Image {...props} />;
};
