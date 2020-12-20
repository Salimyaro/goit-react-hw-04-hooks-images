import s from './ImageGallery.module.css';
import ImageGalleryItem from '../ImageGalleryItem';
import PropTypes from 'prop-types';

export default function ImageGallery({ gallery }) {
  return (
    <ul className={s.imageGallery}>
      {gallery.map((item, index) => {
        return <ImageGalleryItem imageData={item} key={index} />;
      })}
    </ul>
  );
}

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
};
