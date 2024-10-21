export const getPressureBarPosition = (value) => {
  const minPressure = 550;
  const maxPressure = 800;

  return (100 * (value - minPressure)) / (maxPressure - minPressure);
};

export const getPressureDescription = (value) => {
  return value === 760
    ? 'Нормальное'
    : value < 760
      ? 'Пониженное'
      : 'Повышенное';
};

export const getVisibilityBarPosition = (value) => {
  return value > 100 ? 100 : value;
};

export const getVisibilityDescription = (value) => {
  return value < 10 ? 'Слабая' : 'Нормальная';
};

export const getSunEventDescription = ({ forecastTime, eventTime }) => {
  const delta = forecastTime - eventTime;
  const [hours, minutes] = (Math.abs(delta) / 36e5).toString().split('.');

  const startWord = delta > 0 ? 'Прошло' : 'Осталось';

  const totalMinutes = (parseFloat(`0.${minutes}`) * 60).toFixed(0);

  const formattedHours = (
    totalMinutes === '60' ? `${+hours + 1}` : hours
  ).padStart(2, '0');
  const formattedMinutes =
    totalMinutes === '60' ? '00' : totalMinutes.padStart(2, '0');

  return `${startWord}: ${formattedHours}:${formattedMinutes}`;
};

export const getWindDescription = (direction) => {
  const DIRECTIONS = {
    n: {
      description: 'Северный',
      rotationCoefficient: 7,
    },
    ne: {
      description: 'Северо-восточный',
      rotationCoefficient: 0,
    },
    nw: {
      description: 'Северо-западный',
      rotationCoefficient: 6,
    },
    s: {
      description: 'Южный',
      rotationCoefficient: 3,
    },
    sw: {
      description: 'Юго-западный',
      rotationCoefficient: 4,
    },
    se: {
      description: 'Юго-восточный',
      rotationCoefficient: 2,
    },
    e: {
      description: 'Восточный',
      rotationCoefficient: 1,
    },
    w: {
      description: 'Западный',
      rotationCoefficient: 5,
    },
  };

  return DIRECTIONS[direction];
};
