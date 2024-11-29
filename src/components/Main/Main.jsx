import styles from './Main.module.css';
import { CityCard } from '../CityCard/CityCard';
import { CardList } from '../CardList/CardList';
import * as data from '../../data.js';
import ProgressBar from '../UI/ProgressBar/ProgressBar.jsx';

export const Main = () => {
  return (
    <main>
      <section className={`${styles.todayWeather} container`}>
        <CityCard weather={data.weather} />
        <CardList weather={data.weather} />
      </section>
      <ProgressBar />
    </main>
  );
};
