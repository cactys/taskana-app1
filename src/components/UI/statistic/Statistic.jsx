import Illustration from '@components/illustration/Illustration';

import styles from './statistic.module.css';

/**
 * Компонент статистики
 * @returns {JSX.Element} - JSX элемент статистики
 */
const Statistic = () => {
  return (
    <div className={styles.statistic}>
      <Illustration id="notebookImage" className={styles.statisticImage} />
      <p className={styles.statisticText}>
        Здесь мы поможем тебе управлять твоими задачами, отслеживать статистику
        и&nbsp;самочувствие.
      </p>
    </div>
  );
};

export default Statistic;
