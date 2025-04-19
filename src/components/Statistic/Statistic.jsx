import styles from './Statistic.module.css';
import notebookLightSvg from '@assets/images/notebook-light.svg';
import notebookLightWebp from '@assets/images/notebook-light.webp';
import notebookLightJpeg from '@assets/images/notebook-light.jpg';

const Statistic = () => {
  return (
    <section className={`${styles.statistic}`}>
      <div className={styles.statisticContainer}>
        <picture className={styles.statisticPicture}>
          <source
            type="image/svg+xml"
            srcSet={notebookLightSvg}
          />
          <source type="image/webp" srcSet={notebookLightWebp} />
          <img
            src={notebookLightJpeg}
            alt="Блокнот"
            className={styles.statisticImage}
            width={234}
            height={168}
          />
        </picture>
        <p className={styles.statisticText}>
          Здесь мы поможем тебе управлять твоими задачами, отслеживать
          статистику и&nbsp;самочувствие.
        </p>
      </div>
    </section>
  );
};

export default Statistic;
