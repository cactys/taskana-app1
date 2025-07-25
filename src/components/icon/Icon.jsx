import { getComponentById } from '@utils/utils';

/**
 * Компонент-обёртка для отображения иконок с ленивой загрузкой.
 * @param {Object} props - Свойства компонента.
 * @param {string} props.id - Идентификатор иконки.
 * @returns {JSX.Element|null}
 */
export const Icon = ({ id, ...props }) => {
  const Icon = getComponentById(id, {
    prefix: 'icon/icons',
    suffix: 'Icon',
  });

  if (!Icon) return null;

  return <Icon {...props} />;
};
