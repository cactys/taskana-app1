import styles from './Card.module.css';
import { Bar } from '../Bar/Bar';

export const Card = (props) => {
  return (
    <article
      className={styles.card}
      style={{ '--rotation-coefficient': `${props.rotationCoef ?? 0}` }}
    >
      <header>
        <h3 className={styles.title}>{props.title}</h3>
      </header>
      <div className={styles.main}>
        <img
          alt=""
          className={styles.icon}
          src={`${process.env.PUBLIC_URL}/icons/${props.icon}`}
        />
        <p className={styles.value}>
          {props.value}
          {props.unit && <span> {props.unit}</span>}
        </p>
      </div>
      <footer className={styles.footer}>
        {props.barPosition && (
          <Bar value={props.barPosition} type={props.barType} />
        )}
        <p className={`${styles.description}`}>{props.description}</p>
      </footer>
    </article>
  );
};
