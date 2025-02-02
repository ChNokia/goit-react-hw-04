import Modal from 'react-modal';
import styles from './ImageModal.module.css';

Modal.setAppElement('#root');
const ImageModal = ({ isOpen, url, onClose, description }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Image view"
      className={styles.imageModal}
      overlayClassName={styles.overlayModal}
    >
      <img src={url} alt={description} className={styles.image} />
    </Modal>
  );
};

export default ImageModal;
