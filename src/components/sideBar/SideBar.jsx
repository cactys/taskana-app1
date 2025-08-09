import { Statistic } from '@components/UI/statistic/Statistic';

import styles from './sideBar.module.css';

/**
 * Боковая панель для отображения статистики.
 *
 * @returns {JSX.Element} Основной JSX элемент боковой панели.
 */
export const SideBar = () => {
  return (
    <div className={styles.sideBar}>
      <Statistic />
    </div>
  );
};
