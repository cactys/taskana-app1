import IncomingTasks from '@pages/incomingTasks/IncomingTasks';
import NavBar from '@components/UI/navBar/NavBar';
import SideBar from '@components/sideBar/SideBar';

import styles from './content.module.css';

/**
 * Контейнер основного содержимого приложения
 * @returns {JSX.Element} - JSX элемент страницы
 */
const Content = () => {
  return (
    <div className={styles.content}>
      <NavBar />
      <IncomingTasks />
      <SideBar />
    </div>
  );
};

export default Content;
