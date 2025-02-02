import styles from './ImageGallery.module.css';
import ImageCard from '../ImageCard/ImageCard';

const ImageGallery = ({ images, onSelectedItem }) => {
  return (
    <ul className={styles.imageGallery}>
      {images.map(item => (
        <li key={item.id} className={styles.galleryItem}>
          <ImageCard imageCard={item} onSelect={onSelectedItem} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
