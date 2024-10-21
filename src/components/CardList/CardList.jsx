import styles from './CardList.module.css';
import { CardFactory } from '../CardFactory/CardFactory';
export const CardList = (props) => {
  const { weather } = props;
  const cardsData = [
    {
      type: 'humidity',
      value: weather.humidity,
    },
    { type: 'pressure', value: weather.pressure },
    { type: 'visibility', value: weather.visibility },
    {
      type: 'sunrise',
      value: { forecastTime: weather.datetime, eventTime: weather.sunrise },
    },
    {
      type: 'sunset',
      value: { forecastTime: weather.datetime, eventTime: weather.sunset },
    },
    { type: 'wind', value: weather.wind },
  ];

  return (
    <ul className={styles.cardList}>
      {cardsData.map((item) => (
        <li className={styles.item} key={item.type}>
          <CardFactory data={item} />
        </li>
      ))}
    </ul>
  );
};
