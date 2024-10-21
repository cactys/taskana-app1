import styles from './CityCard.module.css';
import { getFormattedDate, getFormattedTime } from '../../utils';

export const CityCard = (props) => {
  const { weather } = props;

  return (
    <div className={styles.cityCard}>
      <div className={styles.content}>
        <p className={`${styles.loc} ${styles.paragraph}`}>
          {weather.location}
        </p>
        <p className={`${styles.date} ${styles.paragraph}`}>
          {getFormattedDate(weather.datetime)}
        </p>
        <p className={styles.paragraph}>
          {' '}
          {getFormattedTime(weather.datetime)}
        </p>
      </div>
      <p className={`${styles.temp} ${styles.paragraph}`}>
        {weather.temperature.current}&deg;
      </p>
      <div className={styles.content}>
        <p className={styles.paragraph}>
          <img
            alt=""
            className={styles.weatherIcon}
            src={`${process.env.PUBLIC_URL}/icons/${weather.forecast.icon}.png`}
          />
          <span>Облачно</span>
        </p>
        <p className={styles.paragraph}>
          Ощущается как {weather.temperature.feelsLike}&deg;
        </p>
      </div>
    </div>
  );
};
