import styles from './Button.module.css';

/**
 * Компонент кнопки
 * @param {ReactNode} children - Содержимое кнопки (текст или другие компоненты)
 * @param {string} variant - Тип кнопки ('primary' - по умолчанию, 'secondary')
 * @param {string} size - Размер кнопки ('medium' - по умолчанию, 'large')
 * @param {string} className - Дополнительные CSS классы
 * @param {Object} settings - Дополнительные атрибуты и настройки кнопки
 * @returns {JSX.Element} - JSX элемент кнопки с указанными свойствами
 */
const Button = ({ children, variant = 'primary', size = 'medium', className, ...settings }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${className || ''}`}
      {...settings}
    >
      {children}
    </button>
  );
};

export default Button;
