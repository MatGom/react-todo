import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchString, getSearchString } from '../../redux/store';

const SearchForm = () => {
  const searchStringValue = useSelector(getSearchString);
  const [searchString, setSearchString] = useState(searchStringValue);

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateSearchString(searchString));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder='Search...'
        value={searchString}
        onChange={event => {
          setSearchString(event.target.value);
        }}
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;
