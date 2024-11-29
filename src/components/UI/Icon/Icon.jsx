import sprite from '../../../assets/images/sprite.svg';

/**
 *
 * @param {string} id - id of the icon
 * @param {string} className - className of the icon
 * @returns {JSX.Element} JSX.Element for the icon
 */
const Icon = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;
