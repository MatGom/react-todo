import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';

const Card = props => {
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.cardId));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <span onClick={handleClick} className={clsx('fa fa-star-o', props.isFavorite ? styles.isActive : undefined)} />
    </li>
  );
};

export default Card;
