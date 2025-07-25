import { getComponentById } from '@utils/utils';

/**
 * Компонент-обёртка для динамического отображения SVG-иконок с ленивой загрузкой.
 *
 * @param {Object} props - Свойства компонента.
 * @param {string} props.id - Уникальный идентификатор иконки для загрузки.
 * @param {string} [props.className] - CSS-класс для стилизации иконки.
 * @param {number|string} [props.width] - Ширина иконки.
 * @param {number|string} [props.height] - Высота иконки.
 * @param {string} [props.fill] - Цвет заливки иконки.
 * @returns {JSX.Element|null} Отрендеренная иконка или null, если иконка не найдена.
 */
export const Icon = ({ id, ...props }) => {
  const IconComponent = getComponentById(id, {
    prefix: 'icon/icons',
    suffix: 'Icon',
  });

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props} />;
};
