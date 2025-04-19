import React from 'react';
import styles from './TaskList.module.css';
import illustrationEmptyTaskSvg from '@assets/images/illustration-EmptyTask-light.svg';
import illustrationEmptyTaskWebp from '@assets/images/illustration-EmptyTask-light.webp';
import illustrationEmptyTaskJpeg from '@assets/images/illustration-EmptyTask-light.jpg';

const TaskList = () => {
  const tasks = [
    {
      id: 1,
      title: 'Все твои задачи организованы как надо',
      description: 'Отличная работа! Ты большой молодец!',
      images: {
        svg: illustrationEmptyTaskSvg,
        webp: illustrationEmptyTaskWebp,
        jpeg: illustrationEmptyTaskJpeg,
      },
    },
  ];

  return (
    <section className={styles.taskList}>
      {tasks.length === 0 ? (
        <p className={styles.emptyState}>У вас пока нет задач</p>
      ) : (
        tasks.map((task) => (
          <article key={task.id} className={styles.taskItem}>
            <header className={styles.taskHeader}>
              <h2 className={styles.taskTitle}>{task.title}</h2>
              <p className={styles.taskDescription}>{task.description}</p>
            </header>
            <picture className={styles.taskPicture}>
              <source type="image/svg+xml" srcSet={task.images.svg} />
              <source type="image/webp" srcSet={task.images.webp} />
              <img
                src={task.images.jpeg}
                alt="Задачи организованны"
                width={463}
                height={319}
              />
            </picture>
          </article>
        ))
      )}
    </section>
  );
};

export default TaskList;
