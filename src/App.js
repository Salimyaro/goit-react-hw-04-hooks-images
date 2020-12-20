import { useEffect, useState } from 'react';
import s from './App.module.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Loader from './components/Loader';
import waitingImg from './components/waiting.jpg';
import errorImg from './components/error.gif';
import Api from './services/pixabay-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default function App() {
  const [gallery, setGallery] = useState([]);
  const [searchQueue, setSearchQueue] = useState(null);
  const [page, setPage] = useState(0);
  const [status, setStatus] = useState(Status.IDLE);
  const [error, setError] = useState(null);
  const [totalHits, setTotalHits] = useState(null);

  const formSubmitHandler = searchQueue => {
    setSearchQueue(searchQueue);
    setPage(1);
    setGallery([]);
  };

  const loadMoreHandler = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (!searchQueue) {
      return;
    }
    setStatus(Status.PENDING);
    Api.fetchImages(searchQueue, page)
      .then(data => {
        setTotalHits(data.totalHits);
        if (data.totalHits < 1) {
          return Promise.reject(
            new Error(`Не удалось найти картинки по запросу ${searchQueue}`),
          );
        }
        setGallery(prev => [...prev, ...data.hits]);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [page, searchQueue]);

  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth',
  });

  return (
    <div className={s.App}>
      <Searchbar onSubmit={formSubmitHandler} />
      {/* Вариант №1 */}
      {(status === Status.IDLE || status === Status.REJECTED) && (
        <div className={s.waiting}>
          <p>
            {(status === Status.IDLE && 'Waiting for queue') ||
              (status === Status.REJECTED && error.message)}
          </p>
          <img
            src={
              (status === Status.IDLE && waitingImg) ||
              (status === Status.REJECTED && errorImg)
            }
            alt=""
            className={s.image}
          />
        </div>
      )}
      {/* Вариант №2. Какой лучше? */}
      {/* {status === Status.IDLE && (
        <div className={s.waiting}>
          <p> Waiting for queue</p>
          <img src={waitingImg} alt="waiting" className={s.image} />
        </div>
      )}
      {status === Status.REJECTED && (
        <div className={s.waiting}>
          <p>{error.message}</p>
          <img src={errorImg} alt="error" className={s.image} />
        </div>
      )} */}
      {(status === Status.RESOLVED || status === Status.PENDING) && (
        <>
          <ImageGallery gallery={gallery} />
          {totalHits > gallery.length && <Button onClick={loadMoreHandler} />}
          {status === Status.PENDING && <Loader />}
        </>
      )}
    </div>
  );
}
