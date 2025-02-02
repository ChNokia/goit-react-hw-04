import styles from './ImageCard.module.css';

const ImageCard = ({ imageCard, onSelect }) => {
  const { likes, description, alt_description, urls } = imageCard;
  return (
    <div
      className={styles.galleryLink}
      onClick={() => {
        onSelect({ description, alt_description, ...urls });
      }}
    >
      <img
        className={styles.imageCard}
        src={urls.small}
        alt={alt_description}
      />

      <div className={styles.galleryCardListInfo}>
        <p className={styles.galleryCardListInfoTitle}>
          {description || alt_description}
        </p>
        <p className={styles.galleryCardListInfoText}>Likes: {likes}</p>
      </div>
    </div>
  );
};

export default ImageCard;
