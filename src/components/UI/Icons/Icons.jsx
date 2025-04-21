import sprite from '@assets/sprite.svg';

/**
 * Компонент для отображения иконок из спрайта
 * @param {string} id - Идентификатор иконки в SVG-спрайте
 * @param {string} className - CSS класс для иконки
 * @returns {JSX.Element} - SVG иконка
 */
const Icons = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icons;
