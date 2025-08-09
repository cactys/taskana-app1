import { useLoading, useContext } from '@hooks';
import { TaskContext } from '@context';
import { Logo } from '@components/UI/logo/Logo';
import { Button } from '@components/UI/button/Button';
import { ThemeSwitcher } from '@components/UI/themeSwitcher/ThemeSwitcher';
import { Icon } from '@components/icon/Icon';
import { buttonAction } from '@utils/utils';
import styles from './header.module.css';

/**
 * Компонент шапки приложения.
 *
 * @returns {JSX.Element} JSX-разметка шапки
 */
export const Header = () => {
  const { handleOpenTaskEditor } = useContext(TaskContext);
  const { loading, startLoading, stopLoading } = useLoading();

  const handleOpenEditor = () => {
    buttonAction(undefined, startLoading, stopLoading, () => {
      handleOpenTaskEditor(true);
    });
  };

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.headerContent}>
        <Button
          type="button"
          className={styles.addButton}
          variant="danger"
          aria-label="Создать новую задачу"
          tabIndex={0}
          onClick={handleOpenEditor}
          onLoading={loading}
        >
          {loading && (
            <Icon
              id="loading"
              fill="none"
              stroke="var(--base-white)"
              className={`${styles.loadingIcon} ${loading && styles.isLoading}`}
            />
          )}
          <Icon
            id="plus"
            fill="var(--base-white)"
            className={`${styles.buttonIcon} ${loading && styles.onHidden}`}
          />
          <span
            className={`${styles.buttonText} ${loading && styles.onHidden}`}
          >
            Создать
          </span>
        </Button>
        <ThemeSwitcher />
      </div>
    </header>
  );
};
