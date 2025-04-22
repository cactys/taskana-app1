import Header from '@components/Header/Header';
import Content from '@components/Content/Content';

import styles from './AppLayout.module.css';

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
