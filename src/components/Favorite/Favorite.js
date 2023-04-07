import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/store';

const Favorite = props => {
  const favoriteCards = useSelector(state => getFavoriteCards(state));

  let content;
  if (favoriteCards.length === 0) {
    content = (
      <>
        <p className={styles.noCards}>No cards added!</p>
      </>
    );
  } else {
    content = favoriteCards.map(favoriteCard => (
      <Card
        key={favoriteCard.id}
        title={favoriteCard.title}
        isFavorite={favoriteCard.isFavorite}
        cardId={favoriteCard.id}
      />
    ));
  }

  return (
    <div className={styles.favorite}>
      <PageTitle>FAVORITE</PageTitle>
      <article className={styles.favoriteColumn}>
        <ul className={styles.favoriteCards}>{content}</ul>
      </article>
    </div>
  );
};

export default Favorite;
