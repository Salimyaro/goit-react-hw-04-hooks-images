import { useEffect, useState } from 'react';
import s from './Modal.module.css';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import PropTypes from 'prop-types';

export default function Modal({ onClose, src }) {
  const [loading, setLoading] = useState(false);

  const toggleLoadind = () => {
    setLoading(prev => !prev);
  };

  const backdropHandler = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.position = 'fixed';
    return () => {
      document.body.style.position = 'relative';
    };
  });

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    toggleLoadind();
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className={s.overlay} onClick={backdropHandler}>
      <img className={s.modal} src={src} alt="" onLoad={toggleLoadind} />
      {loading && <Loader type="BallTriangle" color="#3f51b5" height={350} />}
    </div>
  );
}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
