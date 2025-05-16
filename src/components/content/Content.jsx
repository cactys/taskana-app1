import { NavBar } from '@components/navBar/NavBar';
import { IncomingTasks } from '@pages/incomingTasks/IncomingTasks';
import { SideBar } from '@components/sideBar/SideBar';
import { TaskEditor } from '@components/taskEditor/TaskEditor';

import styles from './content.module.css';
import TaskEditor from '@components/taskEditor/TaskEditor';

/**
 * Контейнер основного содержимого приложения
 * @returns {JSX.Element} - JSX элемент страницы
 */
export const Content = () => {
  return (
    <div className={styles.content}>
      <NavBar />
      <IncomingTasks />
      <SideBar />
      <TaskEditor />
    </div>
  );
};
