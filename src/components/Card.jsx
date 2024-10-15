export const Card = (props) => {
  const maxRangeValue = props.name === 'pressure' ? 1000 : 100;
  const additionalClass =
    props.title === 'Давление'
      ? 'weather__item-range weather__item-range_gradient'
      : 'weather__item-range';

  let progressValueText;
  if (props.title === 'Давление') {
    progressValueText = props.value > 50 ? 'Повышенное' : 'Нормальное';
  }
  if (props.title === 'Видимость') {
    progressValueText = props.value > 20 ? 'Нормальная' : ' Пониженная';
  }
  if (props.title === 'Рассвет' || props.title === 'Закат') {
    progressValueText = `Прошло: ${props.remainingTime}`;
  }
  if (props.title === 'Сила ветра') {
    progressValueText = props.direction;
  }

  const textBar = () => {
    if (props.title === 'Влажность') {
      return (
        <>
          <input
            type="range"
            id={`${props.name}-range`}
            className="weather__item-range"
            value={props.value}
            min="0"
            max={maxRangeValue}
          />
          <div className="range-borders">
            <span className="range-borders__item">0%</span>
            <span className="range-borders__item">100%</span>
          </div>
        </>
      );
    }
    if (props.title === 'Давление' || props.title === 'Видимость') {
      return (
        <>
          <input
            type="range"
            id={`${props.name}-range`}
            className={additionalClass}
            value={props.value}
            min="0"
            max={maxRangeValue}
          />
          <div className="range-borders weather__status--center">
            <span id={`${props.name}-comment`} className=" weather__status">
              {progressValueText}
            </span>
          </div>
        </>
      );
    }

    return (
      <div className="range-borders weather__status--center">
        <span id={`${props.name}-comment`} className=" weather__status">
          {progressValueText}
        </span>
      </div>
    );
  };

  return (
    <li className="weather__item">
      <article className="weather__item-content">
        <div className="weather__item-info">
          <h3 className="weather__item-title">{props.title}</h3>
          <img
            className="weather__item-img"
            src={props.img}
            alt={props.title}
          />
          <span className="weather__item-value">
            {props.value + ' ' + props.smv}
          </span>
        </div>
        <div className="weather__item-comment">{textBar()}</div>
      </article>
    </li>
  );
};
