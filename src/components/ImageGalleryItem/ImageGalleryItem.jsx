import { useState } from 'react';
import s from './ImageGalleryItem.module.css';
import Modal from '../Modal';
import PropTypes from 'prop-types';

export default function ImageGalleryItem({
  imageData: { id, webformatURL, largeImageURL },
}) {
  const [openModal, setOpenModal] = useState(false);
  const [largeSrc, setLargeSrc] = useState(null);

  const imageClickHandler = e => {
    setLargeSrc(e.target.dataset.largeimg);
    toggleModal();
  };

  const toggleModal = () => {
    setOpenModal(prev => !prev);
  };

  return (
    <>
      <li className={s.imageGalleryItem}>
        <img
          src={webformatURL}
          alt={id}
          className={s.image}
          data-largeimg={largeImageURL}
          onClick={imageClickHandler}
        />
      </li>
      {openModal && <Modal onClose={toggleModal} src={largeSrc} />}
    </>
  );
}

ImageGalleryItem.propTypes = {
  imageData: PropTypes.shape({
    id: PropTypes.number,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
  }),
};
