import Illustration from '@components/illustration/Illustration';

import styles from './statistic.module.css';

/**
 * Компонент статистики
 * @returns {JSX.Element} - JSX элемент статистики
 */
const Statistic = () => {
  return (
    <section className={`${styles.statistic}`}>
      <div className={styles.statisticContainer}>
        <Illustration id="notebookImage" className={styles.statisticImage} />
        <p className={styles.statisticText}>
          Здесь мы поможем тебе управлять твоими задачами, отслеживать
          статистику и&nbsp;самочувствие.
        </p>
      </div>
    </section>
  );
};

export default Statistic;
