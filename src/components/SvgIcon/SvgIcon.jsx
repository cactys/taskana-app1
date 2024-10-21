import styles from './SvgIcon.module.css';
import Sprite from '../../assets/images/sprite.svg';

export const SvgIcon = (props) => {
  return (
    <svg className={`${props.className} ${styles.icon}`}>
      <use href={`${Sprite}#${props.id}`}></use>
    </svg>
  );
};
