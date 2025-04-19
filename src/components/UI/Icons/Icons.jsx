import sprite from './sprite.svg';

const Icons = ({ id, className }) => {
  return (
    <svg className={className}>
      <use href={`${sprite}#${id}`} />
    </svg>
  );
};

export default Icons;
