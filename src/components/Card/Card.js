import styles from './Card.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';

const Card = props => {
  const dispatch = useDispatch();

  const handleToggleFavorite = e => {
    e.preventDefault();
    dispatch(toggleCardFavorite(props.cardId));
  };

  const handleRemoveCard = e => {
    e.preventDefault();
    dispatch(removeCard(props.cardId));
  };

  return (
    <li className={styles.card}>
      {props.title}
      <span>
        <span
          onClick={handleToggleFavorite}
          className={clsx('fa fa-star-o', props.isFavorite ? styles.isActive : undefined)}
        />
        <span onClick={handleRemoveCard} className={clsx('fa fa-trash', styles.trash)} />
      </span>
    </li>
  );
};

export default Card;
