import sprite from '../../../assets/images/sprite.svg';

const Icon = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icon;
