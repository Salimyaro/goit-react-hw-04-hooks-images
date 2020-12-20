import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

export default function Api() {
  return (
    <div className={s.loader}>
      <Loader type="BallTriangle" color="#3f51b5" height={60} />
    </div>
  );
}
