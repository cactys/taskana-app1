import modalOverlayStyle from './modalOverlayLayout.module.css';

export const ModalOverlayLayout = ({ onClose }) => {
  const toggleClose = (e) => {
    const { classList } = e.target;
    if (classList.contains(modalOverlayStyle.modalOverlay)) {
      onClose();
    }
  };
  return (
    <div className={modalOverlayStyle.modalOverlay} onClick={toggleClose} />
  );
};
