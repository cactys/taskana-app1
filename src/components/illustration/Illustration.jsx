import { getComponentById } from '@utils/utils';

/**
 * Компонент-обёртка для ленивой загрузки и отображения SVG-иллюстраций по их идентификатору.
 *
 * @param {Object} props - Свойства компонента.
 * @param {string} props.id - Уникальный идентификатор иллюстрации, по которому определяется компонент изображения.
 * @param {Record<string, any>} [props] - Дополнительные пропсы, передаваемые внутрь компонента изображения (например, className, style и т.д.).
 *
 * @returns {JSX.Element|null} Рендерит компонент изображения, если он найден, или `null` в противном случае.
 */
export const Illustration = ({ id, ...props }) => {
  const Image = getComponentById(id, {
    prefix: 'illustration/illustrations',
    suffix: 'Image',
  });

  if (!Image) return null;

  return <Image {...props} />;
};
