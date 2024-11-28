import Icon from '../Icon/Icon';

const ArrowButton = ({ id, classNameBtn, classNameIcon }) => {
  return (
    <button className={classNameBtn} type="button">
      <Icon id={id} className={classNameIcon} />
    </button>
  );
};

export default ArrowButton;
