import styles from './button.module.css';

/**
 * Компонент кнопки
 * @param {ReactNode} children - Содержимое кнопки (текст или другие компоненты)
 * @param {string} variant - Вариант кнопки (например, 'primary', 'secondary', 'danger')
 * @param {string} className - Дополнительные CSS классы
 * @param {Object} settings - Дополнительные атрибуты и настройки кнопки
 * @returns {JSX.Element} - JSX элемент кнопки с указанными свойствами
 */
const Button = ({ children, variant, className, ...settings }) => {
  return (
    <button className={`${styles.button} ${styles[`${variant}`]} ${className || ''}`} {...settings}>
      {children}
    </button>
  );
};

export default Button;
