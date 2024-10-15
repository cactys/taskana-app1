import { Card } from './Card';
import Humidity from '../assets/card-icons/humidity.svg';
import Pressure from '../assets/card-icons/barometr.svg';
import Visibility from '../assets/card-icons/visibility.svg';
import Sunrise from '../assets/card-icons/sunrise.svg';
import Sunset from '../assets/card-icons/sunset.svg';
import Wind from '../assets/card-icons/wind.svg';

export const CardList = () => {
  const weatherData = [
    {
      name: 'humidity',
      title: 'Влажность',
      value: '60',
      img: Humidity,
      smv: '%',
    },
    {
      name: 'pressure',
      title: 'Давление',
      value: '761',
      img: Pressure,
      smv: '',
    },
    {
      name: 'visibility',
      title: 'Видимость',
      value: '28',
      img: Visibility,
      smv: 'км',
    },
    {
      name: 'sunrise',
      title: 'Рассвет',
      value: '8:42',
      remainingTime: '2:47',
      img: Sunrise,
      smv: '',
    },
    {
      name: 'sunset',
      title: 'Закат',
      value: '16:37',
      remainingTime: '05:08',
      img: Sunset,
      smv: '',
    },
    {
      name: 'wind',
      title: 'Сила ветра',
      value: '2',
      img: Wind,
      direction: 'Северо-западный',
      smv: 'м/с',
    },
  ];
  return (
    <div className="weather__right-column">
      <ul className="weather__card">
        {weatherData.map((item) => (
          <Card key={item.name} {...item} />
        ))}
      </ul>
    </div>
  );
};
