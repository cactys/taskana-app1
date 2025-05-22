import styles from './button.module.css';

/**
 * Компонент кнопки
 * @param {ReactNode} children - Содержимое кнопки (текст или другие компоненты)
 * @param {string} variant - Вариант кнопки (например, 'primary', 'secondary', 'danger')
 * @param {string} className - Дополнительные CSS классы
 * @param {boolean} onLoading - Флаг, указывающий, находится ли кнопка в состоянии загрузки
 * @param {Object} props - Дополнительные атрибуты и настройки кнопки
 * @returns {JSX.Element} - JSX элемент кнопки с указанными свойствами
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
    <button className={combinedClassNames} {...props}>
      {children}
    </button>
  );
};
