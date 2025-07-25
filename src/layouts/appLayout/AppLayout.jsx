import { Header } from '@components/header/Header';
import { Content } from '@components/content/Content';

import styles from './appLayout.module.css';

/**
 * Основной макет приложения.
 *
 * Оборачивает содержимое страницы в структурированный контейнер,
 * включает в себя шапку и основной контент.
 *
 * @returns {JSX.Element} JSX элемент макета приложения
 */
export const AppLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Content />
    </div>
  );
};
