import { Card } from '../Card/Card';
import {
  getPressureBarPosition,
  getPressureDescription,
  getSunEventDescription,
  getVisibilityBarPosition,
  getVisibilityDescription,
  getWindDescription,
} from './utils';
import { getFormattedTime } from '../../utils';

export const CardFactory = (props) => {
  const { type, value } = props.data;
  switch (type) {
    case 'humidity': {
      return (
        <Card
          type={type}
          title={'Влажность'}
          value={value}
          unit={' %'}
          icon={type + '.png'}
          barPosition={value}
          description={
            <>
              <span>0%</span>
              <span>100%</span>
            </>
          }
        />
      );
    }

    case 'pressure': {
      return (
        <Card
          type={type}
          title={'Давление'}
          value={value}
          icon={type + '.png'}
          barPosition={getPressureBarPosition(value)}
          barType="radial-gradient"
          description={getPressureDescription(value)}
        />
      );
    }

    case 'visibility': {
      return (
        <Card
          type={type}
          title={'Видимость'}
          value={value}
          unit={'км'}
          icon={type + '.png'}
          barPosition={getVisibilityBarPosition(value)}
          barType="radial-gradient"
          description={getVisibilityDescription(value)}
        />
      );
    }

    case 'sunrise': {
      return (
        <Card
          type={type}
          title={'Восход'}
          value={getFormattedTime(value.eventTime)}
          icon={type + '.png'}
          description={getSunEventDescription(value)}
        />
      );
    }

    case 'sunset': {
      return (
        <Card
          type={type}
          title={'Закат'}
          value={getFormattedTime(value.eventTime)}
          icon={type + '.png'}
          description={getSunEventDescription(value)}
        />
      );
    }

    case 'wind': {
      const { description, rotationCoefficient } = getWindDescription(
        value.direction
      );
      return (
        <Card
          type={type}
          title={'Сила ветра'}
          value={value.speed}
          unit={'м/с'}
          icon={`wind.svg`}
          description={description}
          rotationCoef={rotationCoefficient}
        />
      );
    }

    default:
      return null;
  }
};
