import Clouds from '../assets/weather-icons/clouds.svg';
export const CityCard = () => {
  return (
    <div className="weather__left-column flex">
      <div className="weather__cityDetails flex">
        <span className="weather__city" id="city">
          Кременчуг-константиновское
        </span>
        <span className="weather__data family-base" id="weather">
          Суббота, 06 января
        </span>
        <time className="weather__time family-base">11:29</time>
      </div>

      <div className="weather__temperature flex">
        <span className="weather__value">
          -7<span className="weather__deg">°</span>
        </span>
      </div>

      <div className="weather__fells flex">
        <div className="weather__type flex">
          <img src={Clouds} alt="облака" />
          <span className="weather__description family-base">
            Облачно с прояснениями
          </span>
        </div>
        <p className="weather__fell-desc family-base">
          Ощущается как <span id="fell-weather">-11</span>°
        </p>
      </div>
    </div>
  );
};
