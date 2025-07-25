import styles from './button.module.css';

/**
 * Компонент кнопки с вариантами оформления и состоянием загрузки.
 *
 * @param {Object} props - Свойства компонента.
 * @param {React.ReactNode} props.children - Содержимое кнопки (текст или компоненты).
 * @param {string} [props.variant='primary'] - Вариант оформления кнопки ('primary', 'secondary', 'danger', 'editing' и др.).
 * @param {string} [props.className] - Дополнительные CSS-классы.
 * @param {boolean} [props.onLoading] - Флаг состояния загрузки (активирует стили и поведение кнопки).
 * @returns {JSX.Element} Кнопка с комбинированными стилями и переданными атрибутами.
 */
export const Button = ({
  children,
  variant = 'primary',
  className,
  onLoading,
  ...props
}) => {
  const cn = [styles.button];

  if (variant && styles[variant]) {
    cn.push(styles[variant]);
  }

  if (className) {
    cn.push(className);
  }

  if (onLoading) {
    cn.push(styles.onLoading);
  }

  const combinedClassNames = cn.join(' ');

  return (
    <button
      className={combinedClassNames}
      {...props}
    >
      {children}
    </button>
  );
};
