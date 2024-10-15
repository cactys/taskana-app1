import { CityCard } from './CityCard.jsx';
import { CardList } from './CardList.jsx';

export const Main = () => {
  return (
    <main className="weather">
      <section className="weaher__content flex">
        <h2 className="visually-hidden">Погода</h2>
        <CityCard />
        <CardList />
        {/*#TODO Slider*/}
      </section>
    </main>
  );
};
