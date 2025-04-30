import Header from '@components/header/Header';
import Content from '@components/content/Content';

import styles from './appLayout.module.css';

/**
 * Основной макет приложения
 * @returns {JSX.Element} - JSX элемент макета приложения
 */
const AppLayout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Content />
    </div>
  );
};

export default AppLayout;
