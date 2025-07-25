import styles from './navLink.module.css';

/**
 * Компонент ссылки для навигации.
 *
 * @param {Object} props - Свойства компонента.
 * @param {ReactNode} props.children - Содержимое ссылки (текст или дочерние компоненты).
 * @param {string} props.hrefLink - Адрес ссылки.
 * @param {string} [props.className] - Дополнительные CSS классы.
 * @param {Object} [props.settings] - Дополнительные атрибуты для `<a>`.
 *
 * @returns {JSX.Element} JSX элемент ссылки с указанными свойствами.
 */
export const NavLink = ({ children, hrefLink, className, ...settings }) => {
  const combinedClassName = [styles.navLink, className].filter(Boolean).join(' ');

  return (
    <a
      href={hrefLink}
      className={combinedClassName}
      {...settings}
    >
      {children}
    </a>
  );
};
