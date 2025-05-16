import IncomingTasks from '@pages/incomingTasks/IncomingTasks';
import NavBar from '@components/UI/navBar/NavBar';
import SideBar from '@components/sideBar/SideBar';

import styles from './content.module.css';
import TaskEditor from '@components/taskEditor/TaskEditor';

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
      <TaskEditor />
    </div>
  );
};

export default Content;
