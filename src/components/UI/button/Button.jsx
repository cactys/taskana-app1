import styles from './Button.module.css';

/**
 * Компонент кнопки
 * @param {ReactNode} children - Содержимое кнопки (текст или другие компоненты)
 * @param {string} className - Дополнительные CSS классы
 * @param {Object} settings - Дополнительные атрибуты и настройки кнопки
 * @returns {JSX.Element} - JSX элемент кнопки с указанными свойствами
 */
const Button = ({ children, className, ...settings }) => {
  console.log(className)
  return (
    <button className={`${styles.button} ${className || ''}`} {...settings}>
      {children}
    </button>
  );
};

export default Button;
