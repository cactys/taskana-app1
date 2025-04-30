import styles from './navLink.module.css';

/**
 * Компонент ссылки для навигации
 * @param {ReactNode} children - Содержимое ссылки (текст или другие компоненты)
 * @param {string} hrefLink - Адрес ссылки
 * @param {string} className - Дополнительные CSS классы
 * @param {Object} settings - Дополнительные атрибуты и настройки ссылки
 * @returns {JSX.Element} - JSX элемент ссылки с указанными свойствами
 */
const NavLink = ({ children, hrefLink, className, ...settings }) => {
  return (
    <a
      href={hrefLink}
      className={`${styles.navLink} ${className || ''}`}
      {...settings}
    >
      {children}
    </a>
  );
};

export default NavLink;
