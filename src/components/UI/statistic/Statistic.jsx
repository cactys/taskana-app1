import { Illustration } from '@components/illustration/Illustration';

import styles from './statistic.module.css';

/**
 * Компонент статистики — визуальный блок с иллюстрацией и поясняющим текстом.
 *
 * @returns {JSX.Element} JSX элемент компонента статистики
 */
export const Statistic = () => {
  return (
    <div className={styles.statistic}>
      <Illustration id="notebook" className={styles.statisticImage} />
      <p className={styles.statisticText}>
        Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику
        и&nbsp;самочувствие.
      </p>
    </div>
  );
};
