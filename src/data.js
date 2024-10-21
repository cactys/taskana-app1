const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const sunrise = new Date(year, month, date, 6, 16);
const sunset = new Date(year, month, date, 20, 27);

const weather = {
  location: 'Кременчуг-константиновское',
  datetime: now,
  temperature: {
    current: -7,
    feelsLike: -11,
  },
  forecast: {
    icon: '04d',
    description: 'Облачно',
  },
  humidity: 75,
  pressure: 761,
  visibility: 28,
  sunrise,
  sunset,
  wind: {
    speed: 4,
    direction: 'nw',
  },
};

const fiveDaysForecast = [
  {
    datetime: new Date().setDate(now.getDate() + 1),
    min: -35,
    max: 35,
  },
  {
    datetime: new Date().setDate(now.getDate() + 2),
    min: -35,
    max: 35,
  },
  {
    datetime: new Date().setDate(now.getDate() + 3),
    min: -35,
    max: 35,
  },
  {
    datetime: new Date().setDate(now.getDate() + 4),
    min: -35,
    max: 35,
  },
  {
    datetime: new Date().setDate(now.getDate() + 5),
    min: -35,
    max: 35,
  },
];

const hoursForecast = [
  {
    datetime: new Date().setHours(now.getHours() + 3),
    temp: -255,
  },
  {
    datetime: new Date().setHours(now.getHours() + 6),
    temp: -255,
  },
  {
    datetime: new Date().setHours(now.getHours() + 9),
    temp: -255,
  },
  {
    datetime: new Date().setHours(now.getHours() + 12),
    temp: -255,
  },
  {
    datetime: new Date().setHours(now.getHours() + 15),
    temp: -255,
  },
  {
    datetime: new Date().setHours(now.getHours() + 18),
    temp: -255,
  },
  {
    datetime: new Date().setHours(now.getHours() + 21),
    temp: -255,
  },
  {
    datetime: new Date().setHours(now.getHours() + 24),
    temp: -255,
  },
];
export { weather, fiveDaysForecast, hoursForecast };
