import './slider.css';
import './forecast.css';
import { SvgIcon } from '../SvgIcon/SvgIcon';
import { useState } from 'react';

export const Slider = () => {
  const [formValue, setFormValue] = useState('hours');
  const handleChange = (evt) => {
    setFormValue(evt.target.value);
  };

  return (
    <section className="slider container">
      <header className="slider__header">
        <h3 className="slider__title">Прогноз:</h3>

        <form className="slider__tab-form">
          <div className="slider__tab">
            <input
              checked={formValue === 'hours'}
              className="visually-hidden slider__tab-radio"
              id="24hours-forecast"
              name="forecast"
              type="radio"
              value="hours"
              onChange={handleChange}
            />
            <label className="slider__tab-label" htmlFor="24hours-forecast">
              на 24 часа
            </label>
          </div>

          <div className="slider__tab">
            <input
              checked={formValue === 'days'}
              className="visually-hidden slider__tab-radio"
              id="5days-forecast"
              name="forecast"
              type="radio"
              value="days"
              onChange={handleChange}
            />
            <label className="slider__tab-label" htmlFor="5days-forecast">
              на 5 дней
            </label>
          </div>
        </form>
      </header>
      <div className="slider__switch">
        <button className="slider__chevron" disabled type="button">
          <SvgIcon id={'chevron'} className="slider__chevron-icon" />
        </button>
        <div className="slider__forecasts">
          <div
            className={`slider__forecast${formValue === 'hours' ? ' slider__forecast_hidden' : ''}`}
          >
            <ul className="forecast forecast_for_days">
              <li className="forecast__card">
                <time
                  className="forecast__card-datetime"
                  dateTime="Вс, 07 янв."
                >
                  Вс, 07 янв.
                </time>
                <img
                  alt=""
                  className="forecast__card-icon"
                  height="32"
                  src={`${process.env.PUBLIC_URL}/icons/04d.png`}
                  width="32"
                />
                <p className="forecast__card-temp">от -17&deg; до -11&deg;</p>
              </li>
              <li className="forecast__card">
                <time
                  className="forecast__card-datetime"
                  dateTime="Пн, 08 янв."
                >
                  Пн, 08 янв.
                </time>
                <img
                  alt=""
                  className="forecast__card-icon"
                  height="32"
                  src={`${process.env.PUBLIC_URL}/icons/04d.png`}
                  width="32"
                />
                <p className="forecast__card-temp">от -16&deg; до -8&deg;</p>
              </li>
              <li className="forecast__card">
                <time
                  className="forecast__card-datetime"
                  dateTime="Вт, 09 янв."
                >
                  Вт, 09 янв.
                </time>
                <img
                  alt=""
                  className="forecast__card-icon"
                  height="32"
                  src={`${process.env.PUBLIC_URL}/icons/04d.png`}
                  width="32"
                />
                <p className="forecast__card-temp">
                  от -8&deg; до -2&deg;&deg;
                </p>
              </li>
              <li className="forecast__card">
                <time
                  className="forecast__card-datetime"
                  dateTime="Ср, 10 янв."
                >
                  Ср, 10 янв.
                </time>
                <img
                  alt=""
                  className="forecast__card-icon"
                  height="32"
                  src={`${process.env.PUBLIC_URL}/icons/04d.png`}
                  width="32"
                />
                <p className="forecast__card-temp">от -17&deg; до -11&deg;</p>
              </li>
              <li className="forecast__card">
                <time
                  className="forecast__card-datetime"
                  dateTime="Чт, 11 янв."
                >
                  Чт, 11 янв.
                </time>
                <img
                  alt=""
                  className="forecast__card-icon"
                  height="32"
                  src={`${process.env.PUBLIC_URL}/icons/04d.png`}
                  width="32"
                />
                <p className="forecast__card-temp">от -17&deg; до -11&deg;</p>
              </li>
            </ul>
          </div>
          <div
            className={`slider__forecast${formValue === 'days' ? ' slider__forecast_hidden' : ''}`}
          >
            <ul className="forecast forecast_for_hours">
              <li className="forecast__card">
                <time className="forecast__card-datetime" dateTime="12:00">
                  12:00
                </time>
                <img
                  alt=""
                  className="forecast__card-icon"
                  height="32"
                  src={`${process.env.PUBLIC_URL}/icons/04d.png`}
                  width="32"
                />
                <p className="forecast__card-temp">-7&deg;</p>
              </li>
              <li className="forecast__card">
                <time className="forecast__card-datetime" dateTime="12:00">
                  15:00
                </time>
                <img
                  alt=""
                  className="forecast__card-icon"
                  height="32"
                  src={`${process.env.PUBLIC_URL}/icons/04d.png`}
                  width="32"
                />
                <p className="forecast__card-temp">-5&deg;</p>
              </li>
              <li className="forecast__card">
                <time className="forecast__card-datetime" dateTime="12:00">
                  18:00
                </time>
                <img
                  alt=""
                  className="forecast__card-icon"
                  height="32"
                  src={`${process.env.PUBLIC_URL}/icons/04d.png`}
                  width="32"
                />
                <p className="forecast__card-temp">-7&deg;</p>
              </li>
              <li className="forecast__card">
                <time className="forecast__card-datetime" dateTime="12:00">
                  21:00
                </time>
                <img
                  alt=""
                  className="forecast__card-icon"
                  height="32"
                  src={`${process.env.PUBLIC_URL}/icons/04d.png`}
                  width="32"
                />
                <p className="forecast__card-temp">-9&deg;</p>
              </li>
              <li className="forecast__card">
                <time className="forecast__card-datetime" dateTime="12:00">
                  00:00
                </time>
                <img
                  alt=""
                  className="forecast__card-icon"
                  height="32"
                  src={`${process.env.PUBLIC_URL}/icons/04d.png`}
                  width="32"
                />
                <p className="forecast__card-temp">-11&deg;</p>
              </li>
              <li className="forecast__card">
                <time className="forecast__card-datetime" dateTime="12:00">
                  03:00
                </time>
                <img
                  alt=""
                  className="forecast__card-icon"
                  height="32"
                  src={`${process.env.PUBLIC_URL}/icons/04d.png`}
                  width="32"
                />
                <p className="forecast__card-temp">-13&deg;</p>
              </li>
              <li className="forecast__card">
                <time className="forecast__card-datetime" dateTime="12:00">
                  06:00
                </time>
                <img
                  alt=""
                  className="forecast__card-icon"
                  height="32"
                  src={`${process.env.PUBLIC_URL}/icons/04d.png`}
                  width="32"
                />
                <p className="forecast__card-temp">-13&deg;</p>
              </li>
              <li className="forecast__card">
                <time className="forecast__card-datetime" dateTime="12:00">
                  09:00
                </time>
                <img
                  alt=""
                  className="forecast__card-icon"
                  height="32"
                  src={`${process.env.PUBLIC_URL}/icons/04d.png`}
                  width="32"
                />
                <p className="forecast__card-temp">-11&deg;</p>
              </li>
            </ul>
          </div>
        </div>
        <button
          className="slider__chevron slider__chevron_reversed"
          type="button"
        >
          <SvgIcon id={'chevron'} className="slider__chevron-icon" />
        </button>
      </div>
    </section>
  );
};
