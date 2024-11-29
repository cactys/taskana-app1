import Icon from '../Icon/Icon';

/**
 *
 * @param {string} id id of the button
 * @param {string} classNameBtn className of the button
 * @param {string} classNameIcon className of the icon
 * @returns {JSX.Element} JSX.Element for the arrow button
 */
const ArrowButton = ({ id, classNameBtn, classNameIcon }) => {
  return (
    <button className={classNameBtn} type="button">
      <Icon id={id} className={classNameIcon} />
    </button>
  );
};

export default ArrowButton;
