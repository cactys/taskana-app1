import Icon from '@components/icon/Icon';
import styles from './button.module.css';

/**
 * Компонент кнопки
 * @param {ReactNode} children - Содержимое кнопки (текст или другие компоненты)
 * @param {string} variant - Вариант кнопки (например, 'primary', 'secondary', 'danger')
 * @param {string} className - Дополнительные CSS классы
 * @param {Object} props - Дополнительные атрибуты и настройки кнопки
 * @returns {JSX.Element} - JSX элемент кнопки с указанными свойствами
 */
const Button = ({
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

  const renderLoadingIcon = () => (
    <Icon
      id="loadingIcon"
      stroke="var(--base-white)"
      fill="none"
      className={styles.loadingIcon}
    />
  );

  const loadingStart = () => {
    if (onLoading) {
      return renderLoadingIcon();
    } else {
      return children;
    }
  };

  return (
    <button className={combinedClassNames} {...props}>
      {loadingStart()}
    </button>
  );
};

export default Button;
