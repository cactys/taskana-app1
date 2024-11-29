import { useContext } from 'react';
import { TabContext } from '../../../contexts/TabContext';
import { SliderContext } from '../../../contexts/SliderContext';
import ArrowButton from '../ArrowButton/ArrowButton';
import Icon from '../Icon/Icon';

import styles from './Slider.module.css';

/**
 *
 * @returns {JSX.Element} JSX.Element for the slider
 */
const Slider = () => {
  const { isActive } = useContext(TabContext);
  const sliderContext = useContext(SliderContext);

  const { sliderDays, sliderHours } = sliderContext;

  return (
    <div className={styles.slider}>
      <ArrowButton
        classNameBtn={`${styles.arrowBtn} ${styles.disabled}`}
        classNameIcon={`${styles.arrowIcon} ${styles.arrowIconPrev}`}
        id="chevron-svg"
      />
      <ul className={styles.sliderList}>
        {isActive === 0 &&
          sliderHours.map((item, index) => (
            <li key={index}>
              <article className={styles.sliderCard}>
                <time className={styles.sliderTime} dateTime={item.time}>
                  {item.time}
                </time>
                <Icon id={item.imgId} className={styles.sliderIcon} />
                <span className={styles.sliderValue}>
                  {item.value + item.smv}
                </span>
              </article>
            </li>
          ))}
        {isActive === 1 &&
          sliderDays.map((item, index) => (
            <li key={index}>
              <article className={styles.sliderCard}>
                <time className={styles.sliderTime} dateTime={item.date}>
                  {item.date}
                </time>
                <Icon id={item.imgId} className={styles.sliderIcon} />
                <span className={styles.sliderValue}>{item.range}</span>
              </article>
            </li>
          ))}
      </ul>
      <ArrowButton
        classNameBtn={`${styles.arrowBtn}`}
        classNameIcon={`${styles.arrowIcon} ${styles.arrowIconNext}`}
        id="chevron-svg"
      />
    </div>
  );
};

export default Slider;
