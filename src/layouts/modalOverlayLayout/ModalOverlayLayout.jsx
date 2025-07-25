import modalOverlayStyle from './modalOverlayLayout.module.css';

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
