import styles from './Main.module.css';
import { CityCard } from '../CityCard/CityCard';
import { CardList } from '../CardList/CardList';
import * as data from '../../data.js';
import TabBar from '../UI/TabBar/TabBar.jsx';
import Slider from '../UI/Slider/Slider.jsx';

export const Main = () => {
  return (
    <main>
      <section className={`${styles.todayWeather} container`}>
        <CityCard weather={data.weather} />
        <CardList weather={data.weather} />
      </section>
      <section className={`${styles.sliderContainer} container`}>
        <TabBar />
        <Slider />
      </section>
    </main>
  );
};
