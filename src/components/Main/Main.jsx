import styles from './Main.module.css';
import { CityCard } from '../CityCard/CityCard';
import { CardList } from '../CardList/CardList';
import { Slider } from '../Slider/Slider';
import * as data from '../../data.js';

export const Main = () => {
  return (
    <main>
      <section className={`${styles.todayWeather} container`}>
        <CityCard weather={data.weather} />
        <CardList weather={data.weather} />
      </section>
      <Slider />
    </main>
  );
};
