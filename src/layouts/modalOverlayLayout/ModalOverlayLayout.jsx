import modalOverlayStyle from './modalOverlayLayout.module.css';

/**
 * Компонент модального оверлея.
 *
 * Отвечает за затемнение фона при открытом модальном окне.
 * Закрывает модал при клике по затемнённой области (оверлею).
 *
 * @param {Object} props
 * @param {function} props.onClose - Функция закрытия модального окна
 * @returns {JSX.Element} JSX элемент оверлея
 */
export const ModalOverlayLayout = ({ onClose }) => {
  const toggleClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`${modalOverlayStyle.modalOverlay} ${modalOverlayStyle.active}`}
      onClick={toggleClose}
    />
  );
};
