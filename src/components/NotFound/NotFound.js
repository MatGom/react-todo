import styles from './NotFound.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <PageTitle>404 NOT FOUND</PageTitle>
    </div>
  );
};

export default NotFound;
