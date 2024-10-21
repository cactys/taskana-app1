import styles from './Bar.module.css';

export const Bar = (props) => {
  return (
    <div
      className={`${styles.bar} ${props.type && styles.barRadialGradient}`}
      style={{ '--thumb-position': `${props.value}%` }}
    >
      <div className={styles.thumb}></div>
    </div>
  );
};
