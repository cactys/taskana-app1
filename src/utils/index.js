export const getFormattedTime = (timestamp) => {
  const options = {
    hour: 'numeric',
    minute: '2-digit',
  };
  return new Intl.DateTimeFormat('ru-Ru', options).format(timestamp);
};

export const getFormattedDate = (timestamp) => {
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  return new Intl.DateTimeFormat('ru-Ru', options).format(timestamp);
};
